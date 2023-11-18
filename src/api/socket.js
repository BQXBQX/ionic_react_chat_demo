// socket.js
// 封装使用
import { useEffect, useState } from "react";
import { io } from "socket.io-client";

// 创建一个Socket.IO客户端实例
export const socket = io("http://localhost:3000");

export default socket;

// 创建一个函数组件来管理状态和Socket.IO事件
export function useSocket() {
  const [connected, setConnected] = useState(false); // WebSocket连接状态
  const [chatMessage, setChatMessage] = useState(''); // 存储"chatMessage"事件的数据

  // 使用useEffect来监听Socket.IO事件
  useEffect(() => {
    // 监听"connect"事件，当连接建立时触发
    socket.on("connect", () => {
      setConnected(true); // 更新连接状态为已连接
    });

    // 监听"disconnect"事件，当连接断开时触发
    socket.on("disconnect", () => {
      setConnected(false); // 更新连接状态为未连接
    });

    // 监听"chatMessage"事件，当接收到"chatMessage"事件时触发
    socket.on("chatMessage", (args) => {
      setChatMessage(args); // 将事件的数据添加到chatMessage数组中
    });

    // 在组件卸载时，移除所有的监听器
    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("foo");
      socket.off("bar");
      socket.off("chatMessage");
    };
  }, []);

  useEffect(() => {
    console.log(chatMessage);
  }, [chatMessage]);

  return { connected, chatMessage, socket };
}

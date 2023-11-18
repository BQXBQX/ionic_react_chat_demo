import "./chat.scss";
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonBackButton,
  IonToggle,
} from "@ionic/react";
import MessageBar from "../../components/messageBar/messageBar";
import ChatFooter from "../../components/chatFooter/chatFooter";
import { useState, useEffect, useRef } from "react";
import { socket, useSocket } from "../../api/socket";

socket.disconnect();


const Chat = () => {
  const [messageID, setMessageID] = useState(22);
  const [isLoading, setIsLoading] = useState(false);
  const [messageBarData, setMessageBarData] = useState([
    {
      userAvatar:
        "https://i.pinimg.com/originals/b4/e5/68/b4e568cfe5ed4f76cb6db22fe5e48c7d.jpg",
      id: 1,
      messageSender: "Lucy",
      messageContent: "Hello guys",
      messageTime: "2023.11.15 21:42",
    },
    {
      userAvatar:
        "https://i.pinimg.com/474x/2b/ca/af/2bcaaf8d791021602353a0c8f851cd4e.jpg",
      id: 2,
      messageSender: "John",
      messageContent: "Hi Lucy",
      messageTime: "2023.11.15 21:45",
    },
    {
      userAvatar:
        "https://i.pinimg.com/474x/02/a6/48/02a648a82cb39b0aec160f7a1e61fc6e.jpg",
      id: 3,
      messageSender: "Emily",
      messageContent: "Hey Lucy, have you seen Mike today?",
      messageTime: "2023.11.15 22:01",
    },
    {
      userAvatar:
        "https://i.pinimg.com/originals/b4/e5/68/b4e568cfe5ed4f76cb6db22fe5e48c7d.jpg",
      id: 4,
      messageSender: "Lucy",
      messageContent: "No, I haven't. Why?",
      messageTime: "2023.11.15 22:03",
    },
    {
      userAvatar:
        "https://i.pinimg.com/474x/02/a6/48/02a648a82cb39b0aec160f7a1e61fc6e.jpg",
      id: 5,
      messageSender: "Emily",
      messageContent: "I wanted to ask him about the project we're working on.",
      messageTime: "2023.11.15 22:05",
    },
    {
      userAvatar:
        "https://i.pinimg.com/736x/05/a3/d5/05a3d5d8ab89e1dea64f3859454a209c.jpg",
      id: 6,
      messageSender: "Mike",
      messageContent: "Hey guys, sorry I'm late. What's up?",
      messageTime: "2023.11.15 22:07",
    },
    {
      userAvatar:
        "https://i.pinimg.com/originals/b4/e5/68/b4e568cfe5ed4f76cb6db22fe5e48c7d.jpg",
      id: 7,
      messageSender: "Lucy",
      messageContent:
        "We were just talking about the project. Emily needs your help.",
      messageTime: "2023.11.15 22:10",
    },
    {
      userAvatar:
        "https://i.pinimg.com/736x/05/a3/d5/05a3d5d8ab89e1dea64f3859454a209c.jpg",
      id: 8,
      messageSender: "Mike",
      messageContent:
        "Sure, Emily. I'll be glad to assist. Let's meet tomorrow to discuss it.",
      messageTime: "2023.11.15 22:12",
    },
    {
      userAvatar:
        "https://i.pinimg.com/474x/02/a6/48/02a648a82cb39b0aec160f7a1e61fc6e.jpg",
      id: 9,
      messageSender: "Emily",
      messageContent: "That sounds good. Let's meet at the library at 2 PM.",
      messageTime: "2023.11.15 22:15",
    },
    {
      userAvatar:
        "https://i.pinimg.com/736x/05/a3/d5/05a3d5d8ab89e1dea64f3859454a209c.jpg",
      id: 10,
      messageSender: "Mike",
      messageContent: "Sounds like a plan. See you both tomorrow!",
      messageTime: "2023.11.15 22:18",
    },
    {
      userAvatar:
        "https://i.pinimg.com/474x/c9/5e/08/c95e0867da008cd3e74aad82dc17e1e1.jpg",
      id: 11,
      messageSender: "Sarah",
      messageContent: "Hey, did you watch the latest episode of that TV show?",
      messageTime: "2023.11.16 10:30",
    },
    {
      userAvatar:
        "https://i.pinimg.com/474x/2b/ca/af/2bcaaf8d791021602353a0c8f851cd4e.jpg",
      id: 12,
      messageSender: "John",
      messageContent: "Yes, it was amazing! I can't believe what happened.",
      messageTime: "2023.11.16 10:35",
    },
    {
      userAvatar:
        "https://i.pinimg.com/474x/c9/5e/08/c95e0867da008cd3e74aad82dc17e1e1.jpg",
      id: 13,
      messageSender: "Sarah",
      messageContent: "I know, right? It was so unexpected.",
      messageTime: "2023.11.16 10:40",
    },
    {
      userAvatar:
        "https://i.pinimg.com/474x/02/a6/48/02a648a82cb39b0aec160f7a1e61fc6e.jpg",
      id: 14,
      messageSender: "Emily",
      messageContent:
        "Hey guys, have you heard about the new restaurant that just opened?",
      messageTime: "2023.11.16 13:20",
    },
    {
      userAvatar:
        "https://i.pinimg.com/originals/b4/e5/68/b4e568cfe5ed4f76cb6db22fe5e48c7d.jpg",
      id: 15,
      messageSender: "Lucy",
      messageContent: "Yes, I heard about it. I heard the food is really good.",
      messageTime: "2023.11.16 13:25",
    },
    {
      userAvatar:
        "https://i.pinimg.com/736x/05/a3/d5/05a3d5d8ab89e1dea64f3859454a209c.jpg",
      id: 16,
      messageSender: "Mike",
      messageContent: "We should definitely check it out sometime.",
      messageTime: "2023.11.16 13:30",
    },
    {
      userAvatar:
        "https://i.pinimg.com/474x/2b/ca/af/2bcaaf8d791021602353a0c8f851cd4e.jpg",
      id: 17,
      messageSender: "John",
      messageContent: "I'm free this weekend. How about Sunday?",
      messageTime: "2023.11.16 13:35",
    },
    {
      userAvatar:
        "https://i.pinimg.com/474x/c9/5e/08/c95e0867da008cd3e74aad82dc17e1e1.jpg",
      id: 18,
      messageSender: "Sarah",
      messageContent: "Sunday works for me too. Let's make a reservation.",
      messageTime: "2023.11.16 13:40",
    },
    {
      userAvatar:
        "https://i.pinimg.com/originals/b4/e5/68/b4e568cfe5ed4f76cb6db22fe5e48c7d.jpg",
      id: 19,
      messageSender: "Lucy",
      messageContent: "Hey everyone, I have some exciting news to share!",
      messageTime: "2023.11.16 16:10",
    },
    {
      userAvatar:
        "https://i.pinimg.com/474x/02/a6/48/02a648a82cb39b0aec160f7a1e61fc6e.jpg",
      id: 20,
      messageSender: "Emily",
      messageContent: "What is it, Lucy? Don't keep us in suspense!",
      messageTime: "2023.11.16 16:15",
    },
    {
      userAvatar:
        "https://ts1.cn.mm.bing.net/th/id/R-C.6bd25412906055ad1b54c0ec57d31e90?rik=0wcsmjpPV%2bKHzQ&riu=http%3a%2f%2fp4.so.qhmsg.com%2ft01906055ad1b54c0ec.jpg&ehk=xVf4JL%2bVVBz50A2zV6nxHoZ0wOY7yBs7095Z1riZR8c%3d&risl=&pid=ImgRaw&r=0",
      id: 21,
      messageSender: "administrator",
      messageContent:
        "The above is a chat case and can be ignored, now, you can start chatting!",
      messageTime: "2023.11.18 11:22",
    },
  ]);
  const { connected, chatMessage } = useSocket();
  const [newMessageBar, setNewMessageBar] = useState("");
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollToBottom();
    }
  }, []);

  const handleChildData = (data) => {
    // 在这里处理从子组件传递过来的值
    setNewMessageBar(data);
  };

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("messageBarData"))) {
      console.log(
        JSON.parse(localStorage.getItem("messageBarData"))[
          JSON.parse(localStorage.getItem("messageBarData")).length - 1
        ].id
      );
      setMessageID(
        JSON.parse(localStorage.getItem("messageBarData"))[
          JSON.parse(localStorage.getItem("messageBarData")).length - 1
        ].id+1
      );
      setMessageBarData(JSON.parse(localStorage.getItem("messageBarData")));
    }
  }, []);

  useEffect(() => {
    // console.log(newMessageBar);
    if (newMessageBar !== "") {
      const currentDate = new Date();
      const formattedDateTime = currentDate.toLocaleString('en-US', {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      });
      console.log(formattedDateTime);
      const newMessageBarObject = {
        userAvatar:
          "https://i.pinimg.com/736x/05/a3/d5/05a3d5d8ab89e1dea64f3859454a209c.jpg",
        id: messageID,
        messageSender: "Mike",
        messageContent: newMessageBar,
        messageTime: formattedDateTime,
      };
      //这里进行socket发送信息到服务器
      // console.log(updatedMessageBarData);
      setIsLoading(true);
      socket.timeout(1000).emit("chatMessage", newMessageBarObject, () => {
        setIsLoading(false);
      });
      const updatedMessageID = messageID + 1;
      setMessageID(updatedMessageID);
      setNewMessageBar("");
    }
  }, [newMessageBar]);

  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem("messageBarData", JSON.stringify(messageBarData));
    }, 0);
  }, [messageBarData]);

  useEffect(() => {});

  useEffect(() => {
    //从服务器里面获得发送的信息
    if (chatMessage !== "") {
      console.log(chatMessage);
      const getMessageBarObject = chatMessage;
      const updatedMessageBarData = [...messageBarData, getMessageBarObject];
      setMessageBarData(updatedMessageBarData);
      contentRef.current.scrollToBottom();
    }
  }, [chatMessage]);

  const handleConnect = (event) => {
    console.log(event.detail.checked);
    if (event.detail.checked) {
      socket.connect();
    } else {
      socket.disconnect();
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" text=""></IonBackButton>
          </IonButtons>
          <IonTitle>Chat Connected: {connected.toString()}</IonTitle>
          <IonButtons slot="end">
            <IonToggle onIonChange={handleConnect}></IonToggle>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent ref={contentRef}>
        <div className="messageBarContainer">
          <MessageBar messageBarData={messageBarData}></MessageBar>
        </div>
      </IonContent>
      <ChatFooter
        sendDataToParent={handleChildData}
        isLoading={isLoading}
      ></ChatFooter>
    </IonPage>
  );
};

export default Chat;

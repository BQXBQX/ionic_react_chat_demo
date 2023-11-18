import {
  IonFooter,
  IonToolbar,
  IonTextarea,
  IonButton,
  useIonAlert,
} from "@ionic/react";
import "./chatFooter.scss";
import { useState } from "react";
import { useSocket } from "../../api/socket";

const ChatFooter = ({ sendDataToParent, isLoading }) => {
  const { connected } = useSocket();
  const [textareaValue, setTextareaValue] = useState("");
  const [presentAlert] = useIonAlert();

  console.log(isLoading);

  const handleButtonClick = () => {
    // 调用父组件传递过来的处理函数，并将文本内容作为参数传递
    if (!connected) {
      presentAlert({
        header: "Alert",
        subHeader: "Not connected to the server",
        message:
          "Please check if the switch is turned on, if it is turned on and the connection status is still false, please refresh the page, if the problem still occurs please contact the administrator!",
        buttons: ["OK"],
      });
    } else {
      sendDataToParent(textareaValue);
      setTextareaValue("");
    }
  };

  const handleTextareaChange = (event) => {
    // 更新状态变量的值
    setTextareaValue(event.target.value);
  };

  return (
    <IonFooter>
      <IonToolbar>
        <div className="footerContainer">
          <IonTextarea
            placeholder="Type something here"
            value={textareaValue}
            onIonInput={handleTextareaChange} // 添加 onChange 处理函数
          ></IonTextarea>
          <IonButton onClick={handleButtonClick} disabled={isLoading}>
            Send
          </IonButton>
        </div>
      </IonToolbar>
    </IonFooter>
  );
};

export default ChatFooter;

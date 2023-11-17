import { IonFooter, IonToolbar, IonTextarea, IonButton } from "@ionic/react";
import "./chatFooter.scss";
import { useState } from "react";

const ChatFooter = ({ sendDataToParent  }) => {

  
  const [textareaValue, setTextareaValue] = useState("");

  const handleButtonClick = () => {
    // 调用父组件传递过来的处理函数，并将文本内容作为参数传递
    sendDataToParent(textareaValue);
    setTextareaValue('')
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
          <IonButton onClick={handleButtonClick}>Send</IonButton>
        </div>
      </IonToolbar>
    </IonFooter>
  );
};

export default ChatFooter;

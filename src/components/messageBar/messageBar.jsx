import { IonAvatar } from "@ionic/react";
import "./messageBar.scss";

const messageBar = (props) => {
  const userInputName = localStorage.getItem("userInputName");
  return props.messageBarData.map((chatDateItem) => {
    if (chatDateItem.messageSender === userInputName) {
      return (
        <div className="messageMineBar" key={chatDateItem.id}>
          <IonAvatar>
            <img src={chatDateItem.userAvatar}></img>
          </IonAvatar>
          <div className="messageTextContainer">
            <span className="messageSenderSpan">
              {chatDateItem.messageSender}
            </span>
            <div className="messageContentContainer">
              <span className="messageContentSpan">
                {chatDateItem.messageContent}
              </span>
            </div>
            <span className="messageDateContainer">
              {chatDateItem.messageTime}
            </span>
          </div>
        </div>
      );
    } else {
      return (
        <div className="messageOthersBar" key={chatDateItem.id}>
          <IonAvatar>
            <img src={chatDateItem.userAvatar}></img>
          </IonAvatar>
          <div className="messageTextContainer">
            <span className="messageSenderSpan">
              {chatDateItem.messageSender}
            </span>
            <div className="messageContentContainer">
              <span className="messageContentSpan">
                {chatDateItem.messageContent}
              </span>
            </div>
            <span className="messageDateContainer">
              {chatDateItem.messageTime}
            </span>
          </div>
        </div>
      );
    }
  });
};

export default messageBar;

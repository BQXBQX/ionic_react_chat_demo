import './chat.scss'

function Chat() {
  const chatDate = [
    {
      id: 1,
      messageSender: "Lucy",
      messageContent: "hello Mike",
      messageTime: "2023.11.15 21:42",
    },
    {
      id: 2,
      messageSender: "Mike",
      messageContent: "hi Lucy",
      messageTime: "2023.11.15 21:45",
    },
  ];

  const mine = "Mike";

  const showMessage = (chatDate) => {
    return chatDate.map((chatDateItem) => {
      if (chatDateItem.messageSender === mine) {
        console.log("hello");
        return (
          <div className="messageMineBar" key={chatDateItem.id}>
            <span>{chatDateItem.messageSender}</span>
            <span>{chatDateItem.messageContent}</span>
            <span>{chatDateItem.messageTime}</span>
            <br />
          </div>
        );
      } else {
        return (
          <div className="messageOthersBar" key={chatDateItem.id}>
            <span>{chatDateItem.messageSender}</span>
            <span>{chatDateItem.messageContent}</span>
            <span>{chatDateItem.messageTime}</span>
            <br />
          </div>
        );
      }
    });
  };
  // chatDate.split()
  return (
    <>
      <ion-header>
        <ion-toolbar>
          <ion-title>Chat page</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>{showMessage(chatDate)}</ion-content>
    </>
  );
}

export default Chat;

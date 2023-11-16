import "./chat.scss";
import {
  IonContent,
  IonFooter,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import MessageBar from "../../components/messageBar/messageBar";

const Chat = () => {
  const messageBarData = [
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
  ];
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Chat page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="messageBarContainer">
          <MessageBar messageBarData={messageBarData}></MessageBar>
        </div>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonTitle>footer</IonTitle>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Chat;

import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonAvatar,
  IonList,
  IonItem,
} from "@ionic/react";
import "./mine.scss";

const Mine = () => {
  const userInputName = localStorage.getItem("userInputName");
  const userInputAge = localStorage.getItem("userInputAge");
  const userInputAvatar = localStorage.getItem("userInputAvatar");
  console.log(userInputName, userInputAge, userInputAvatar);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Mine page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="mineContainer">
          <IonAvatar className="mineAvatar">
            <img alt="Silhouette of a person's head" src={userInputAvatar} />
          </IonAvatar>
          <IonList lines="none">
            <IonItem>
              <span className="mineMessage">User name :</span>
            </IonItem>
            <IonItem>
              <span className="mineMessage userInput"> {userInputName}</span>
            </IonItem>
            <IonItem>
              <span className="mineMessage">User Age : </span>
            </IonItem>
            <IonItem>
              <span className="mineMessage userInput">{userInputAge}</span>
            </IonItem>
          </IonList>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Mine;

import "./home.scss";
import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonRouterLink,
  IonButton,
} from "@ionic/react";

const Home = () => {
  const buttonStyle = {
    innerHeight: 40 + "px",
  };
  return (
    <>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Home page</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <div className="homeContainer">
            <div className="homeTextContainer">
              <span className="homeText">Do you want to chat?</span>
              <br />
              <span className="homeText">welcome to the BQX chat!</span>
            </div>
            <br />
            <IonRouterLink href="/chat">
              <IonButton style={buttonStyle}>
                <span className="buttonText">Click! To chat page!</span>
              </IonButton>
            </IonRouterLink>
          </div>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Home;

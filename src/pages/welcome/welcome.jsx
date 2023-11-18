import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonAlert,
} from "@ionic/react";
import "./welcome.scss";
import { useHistory } from "react-router-dom";
import { useState, useRef } from "react";

const Welcome = () => {
  const history = useHistory();
  const alertRef = useRef(null);

  const [showAlert, setShowAlert] = useState(false);

  const userText = () => {
    // console.log("hello");
    const userName = localStorage.getItem("userInputName");
    console.log(userName);
    if (userName) {
      history.push("/home");
    } else {
      setShowAlert(true);
    }
  };

  const handleUserDate = () => {
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
    const userInputName = alertRef.current.processedInputs[0].value;
    const userInputAge = alertRef.current.processedInputs[1].value;
    const userInputAvatar = alertRef.current.processedInputs[2].value;
    localStorage.setItem('userInputName',userInputName)
    localStorage.setItem('userInputAge',userInputAge)
    localStorage.setItem('userInputAvatar',userInputAvatar)
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Welcome page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="welcomeIonContent">
        <div className="welcomeContainer">
          <span className="welcomeTitle">Welcome</span>
          <span className="welcomeContent">This is a chat from </span>
          <span className="welcomeAuthor">BQX</span>
          <span onClick={userText} className="welcomeButtonText">
            Enter Chat
          </span>
        </div>
        <IonAlert
          ref={alertRef}
          isOpen={showAlert}
          header="Please enter your info"
          buttons={[
            {
              text: "OK",
              handler: handleUserDate,
            },
          ]}
          inputs={[
            {
              placeholder: "Name (max 8 characters)",
              attributes: {
                maxlength: 8,
              },
            },
            {
              type: "number",
              placeholder: "Age",
              min: 1,
              max: 100,
            },
            {
              type: "textarea",
              placeholder: "Avatar address link",
            },
          ]}
        />
      </IonContent>
    </IonPage>
  );
};

export default Welcome;

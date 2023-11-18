import { useState } from "react";
import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
} from "@ionic/react";
import { useSocket, socket } from "../../api/socket.js";

// socket.disconnect();

const Mine = () => {
  const { connected,chatMessage } = useSocket();
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    // Your socket emit logic here
    console.log(value);
    socket.timeout(1000).emit("chatMessage", value, () => {
      setIsLoading(false);
    });
  };

  const handleConnect = () => {
    socket.connect();
  };

  const handleDisconnect = () => {
    socket.disconnect();
  };

  // useEffect(()=>{
  //   console.log(value);
  // },[value])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Setting page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div>
          <p>State: {connected}</p>
          <button onClick={handleConnect}>Connect</button>
          <button onClick={handleDisconnect}>Disconnect</button>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <button type="submit" disabled={isLoading}>
              Submit
            </button>
            {chatMessage}
          </form>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Mine;

import "./App.css";
import AppRouter from "./router/routerConfig";
import { setupIonicReact } from '@ionic/react';
import '@ionic/react/css/core.css';

setupIonicReact();

const App = () => {
  return (
    <ion-app>
      <AppRouter/>
    </ion-app>
  )
};

export default App;

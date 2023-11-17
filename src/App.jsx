import "./App.css";
// import AppRouter from "./router/routerConfig";
import { setupIonicReact } from '@ionic/react';
import '@ionic/react/css/core.css';
import Home from "./pages/home/home";
import { IonApp } from "@ionic/react";
import AppRouter from './router/routerConfig.jsx'

setupIonicReact();

const App = () => {
  return (
    <IonApp>
      <AppRouter/>
    </IonApp>
  )
};

export default App;

import "./App.css";
import { setupIonicReact } from "@ionic/react";
import "@ionic/react/css/core.css";
import { IonApp } from "@ionic/react";
import AppRouter from "./router/routerConfig.jsx";
import "./themes/dark.scss";
import "./themes/light.scss";
import { ThemeProvider } from "./contexts/themeContext.jsx";

setupIonicReact();

const App = () => {

  return (
    <ThemeProvider>
      <IonApp>
        <AppRouter />
      </IonApp>
    </ThemeProvider>
  );
};

export default App;

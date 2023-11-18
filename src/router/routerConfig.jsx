import {
  IonRouterOutlet,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonLabel,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import ".//routerConfig.scss";
import { Route, Redirect } from "react-router";
import Home from "../pages/home/home";
import Chat from "../pages/chat/chat";
import Setting from "../pages/setting/setting";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import Mine from "../pages/mine/mine";
import Welcome from "../pages/welcome/welcome";

const AppRouter = () => {
  const ionTabsRef = useRef(null);

  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    setActiveTab(ionTabsRef.current?.ionTabContextState.activeTab);
  }, [ionTabsRef]);

  // useEffect(() => {
  //   console.log(activeTab);
  // }, [activeTab]);

  const IsActiveHomeTab = () => {
    if (activeTab === "home") {
      return (
        <>
          <div className="labelContainer">
            <span className="labelSpan">Home</span>
            <IonLabel>
              <svg
                className="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="200"
                height="200"
              >
                <path
                  d="M549.61981 133.022476l319.683047 203.605334A70.851048 70.851048 0 0 1 902.095238 396.361143v434.883047A70.89981 70.89981 0 0 1 831.146667 902.095238h-282.819048l0.024381-218.112h-71.826286v218.087619L192.853333 902.095238A70.89981 70.89981 0 0 1 121.904762 831.24419V390.241524c0-24.527238 12.678095-47.299048 33.54819-60.220953l318.659048-197.485714a70.972952 70.972952 0 0 1 75.50781 0.487619zM828.952381 828.952381V397.214476L511.488 195.047619 195.047619 391.119238V828.952381h211.309714v-216.551619h212.187429v216.527238L828.952381 828.952381z"
                  fill="#3880ff"
                  className="bottomPath"
                ></path>
              </svg>
            </IonLabel>
          </div>
        </>
      );
    } else {
      return (
        <IonLabel>
          <svg
            className="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="200"
            height="200"
          >
            <path
              d="M549.61981 133.022476l319.683047 203.605334A70.851048 70.851048 0 0 1 902.095238 396.361143v434.883047A70.89981 70.89981 0 0 1 831.146667 902.095238h-282.819048l0.024381-218.112h-71.826286v218.087619L192.853333 902.095238A70.89981 70.89981 0 0 1 121.904762 831.24419V390.241524c0-24.527238 12.678095-47.299048 33.54819-60.220953l318.659048-197.485714a70.972952 70.972952 0 0 1 75.50781 0.487619zM828.952381 828.952381V397.214476L511.488 195.047619 195.047619 391.119238V828.952381h211.309714v-216.551619h212.187429v216.527238L828.952381 828.952381z"
              fill="#707070"
              className="bottomPath"
            ></path>
          </svg>
        </IonLabel>
      );
    }
  };

  const IsActiveSettingTab = () => {
    if (activeTab === "setting") {
      return (
        <>
          <div className="labelContainer">
            <span className="labelSpan">Setting</span>
            <IonLabel>
              <svg
                className="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="200"
                height="200"
              >
                <path
                  d="M448.487619 97.52381l130.096762 0.170666c40.399238 0.073143 73.142857 32.792381 73.191619 73.216l0.048762 21.211429a345.283048 345.283048 0 0 1 71.143619 39.960381l17.408-10.044953a73.313524 73.313524 0 0 1 99.961905 26.819048l65.219047 112.566857a73.313524 73.313524 0 0 1-22.893714 97.816381l-3.974095 2.438095-17.481143 10.093715a341.479619 341.479619 0 0 1-1.292191 83.968l12.361143 7.168a73.313524 73.313524 0 0 1 28.867048 96.329142l-2.023619 3.803429-61.098667 105.813333a73.313524 73.313524 0 0 1-96.329143 28.867048l-3.803428-2.048-16.896-9.752381a341.918476 341.918476 0 0 1-68.291048 38.083048l0.024381 29.062095a73.313524 73.313524 0 0 1-68.754286 73.264762l-4.632381 0.146285-130.121142-0.170666a73.313524 73.313524 0 0 1-73.191619-73.216l-0.048762-35.035429a346.599619 346.599619 0 0 1-57.368381-34.035809l-31.158857 17.944381a73.313524 73.313524 0 0 1-99.986286-26.819048l-65.219048-112.566857a73.313524 73.313524 0 0 1 22.918095-97.816381l3.949715-2.438095 31.719619-18.285715c-2.438095-23.161905-2.56-46.665143-0.219429-70.119619l-35.206095-20.333714a73.313524 73.313524 0 0 1-28.891429-96.329143l2.048-3.803428 61.098667-105.813334a73.313524 73.313524 0 0 1 96.329143-28.867047l3.803429 2.048 30.72 17.724952a341.284571 341.284571 0 0 1 64.609523-39.716571l-0.048762-27.89181a73.313524 73.313524 0 0 1 68.754286-73.264762L448.487619 97.52381z m-0.097524 73.313523l0.073143 74.48381-42.130286 19.846095c-18.041905 8.46019-35.05981 18.919619-50.761142 31.158857l-38.936381 30.403048-71.655619-41.398857-1.852953-1.024-61.074286 105.813333 76.239239 44.007619-4.729905 47.104a268.434286 268.434286 0 0 0 0.170666 55.100952l5.022477 47.445334-73.069715 42.081524 65.194667 112.566857 72.557714-41.740191 38.473143 28.184381a272.579048 272.579048 0 0 0 45.226667 26.819048l42.057143 19.772952 0.146285 81.529905 130.072381 0.170667-0.073143-78.019048 45.202286-18.822095a268.629333 268.629333 0 0 0 53.638095-29.915429l38.448762-27.648 57.904762 33.426286 61.049905-105.813333-55.100952-31.890286 6.826666-48.88381a268.190476 268.190476 0 0 0 1.024-65.950476l-5.12-47.494095 58.928762-34.011429-65.219047-112.566857L718.262857 319.390476l-38.497524-28.086857a272.62781 272.62781 0 0 0-56.051809-31.50019l-45.104762-18.724572-0.121905-70.070857-130.096762-0.170667z m145.895619 210.407619a146.773333 146.773333 0 0 1 53.686857 200.362667 146.407619 146.407619 0 0 1-200.167619 53.638095 146.773333 146.773333 0 0 1-53.662476-200.362666 146.407619 146.407619 0 0 1 200.167619-53.638096z m-136.655238 90.258286a73.48419 73.48419 0 0 0 26.86781 100.278857 73.118476 73.118476 0 0 0 99.961904-26.770285c19.529143-33.865143 9.020952-76.824381-23.186285-98.03581l-3.657143-2.267429-3.803429-2.048a73.118476 73.118476 0 0 0-96.182857 28.842667z"
                  fill="#707070"
                  className="bottomPath"
                ></path>
              </svg>
            </IonLabel>
          </div>
        </>
      );
    } else {
      return (
        <IonLabel>
          <svg
            className="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="200"
            height="200"
          >
            <path
              d="M448.487619 97.52381l130.096762 0.170666c40.399238 0.073143 73.142857 32.792381 73.191619 73.216l0.048762 21.211429a345.283048 345.283048 0 0 1 71.143619 39.960381l17.408-10.044953a73.313524 73.313524 0 0 1 99.961905 26.819048l65.219047 112.566857a73.313524 73.313524 0 0 1-22.893714 97.816381l-3.974095 2.438095-17.481143 10.093715a341.479619 341.479619 0 0 1-1.292191 83.968l12.361143 7.168a73.313524 73.313524 0 0 1 28.867048 96.329142l-2.023619 3.803429-61.098667 105.813333a73.313524 73.313524 0 0 1-96.329143 28.867048l-3.803428-2.048-16.896-9.752381a341.918476 341.918476 0 0 1-68.291048 38.083048l0.024381 29.062095a73.313524 73.313524 0 0 1-68.754286 73.264762l-4.632381 0.146285-130.121142-0.170666a73.313524 73.313524 0 0 1-73.191619-73.216l-0.048762-35.035429a346.599619 346.599619 0 0 1-57.368381-34.035809l-31.158857 17.944381a73.313524 73.313524 0 0 1-99.986286-26.819048l-65.219048-112.566857a73.313524 73.313524 0 0 1 22.918095-97.816381l3.949715-2.438095 31.719619-18.285715c-2.438095-23.161905-2.56-46.665143-0.219429-70.119619l-35.206095-20.333714a73.313524 73.313524 0 0 1-28.891429-96.329143l2.048-3.803428 61.098667-105.813334a73.313524 73.313524 0 0 1 96.329143-28.867047l3.803429 2.048 30.72 17.724952a341.284571 341.284571 0 0 1 64.609523-39.716571l-0.048762-27.89181a73.313524 73.313524 0 0 1 68.754286-73.264762L448.487619 97.52381z m-0.097524 73.313523l0.073143 74.48381-42.130286 19.846095c-18.041905 8.46019-35.05981 18.919619-50.761142 31.158857l-38.936381 30.403048-71.655619-41.398857-1.852953-1.024-61.074286 105.813333 76.239239 44.007619-4.729905 47.104a268.434286 268.434286 0 0 0 0.170666 55.100952l5.022477 47.445334-73.069715 42.081524 65.194667 112.566857 72.557714-41.740191 38.473143 28.184381a272.579048 272.579048 0 0 0 45.226667 26.819048l42.057143 19.772952 0.146285 81.529905 130.072381 0.170667-0.073143-78.019048 45.202286-18.822095a268.629333 268.629333 0 0 0 53.638095-29.915429l38.448762-27.648 57.904762 33.426286 61.049905-105.813333-55.100952-31.890286 6.826666-48.88381a268.190476 268.190476 0 0 0 1.024-65.950476l-5.12-47.494095 58.928762-34.011429-65.219047-112.566857L718.262857 319.390476l-38.497524-28.086857a272.62781 272.62781 0 0 0-56.051809-31.50019l-45.104762-18.724572-0.121905-70.070857-130.096762-0.170667z m145.895619 210.407619a146.773333 146.773333 0 0 1 53.686857 200.362667 146.407619 146.407619 0 0 1-200.167619 53.638095 146.773333 146.773333 0 0 1-53.662476-200.362666 146.407619 146.407619 0 0 1 200.167619-53.638096z m-136.655238 90.258286a73.48419 73.48419 0 0 0 26.86781 100.278857 73.118476 73.118476 0 0 0 99.961904-26.770285c19.529143-33.865143 9.020952-76.824381-23.186285-98.03581l-3.657143-2.267429-3.803429-2.048a73.118476 73.118476 0 0 0-96.182857 28.842667z"
              fill="#707070"
              className="bottomPath"
            ></path>
          </svg>
        </IonLabel>
      );
    }
  };

  const IsActiveMineTab = () => {
    if (activeTab === "mine") {
      return (
        <>
          <div className="labelContainer">
            <span className="labelSpan">Mine</span>
            <IonLabel>
              <svg
                className="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="200"
                height="200"
              >
                <path
                  d="M736 620.608c-17.664 0-32 13.888-32 31.04s14.336 31.04 32 31.04c123.52 0 224 97.44 224 217.216 0 17.088-14.368 31.04-32 31.04H96c-17.632 0-32-13.92-32-31.04 0-119.776 100.48-217.216 224-217.216 17.664 0 32-13.888 32-31.04s-14.336-31.04-32-31.04c-158.784 0-288 125.312-288 279.264 0 51.328 43.072 93.088 96 93.088h832c52.928 0 96-41.76 96-93.088 0-153.984-129.216-279.264-288-279.264zM512 62.048c123.488 0 224 125.28 224 279.264s-100.48 279.264-224 279.264c-123.488 0-224-125.312-224.032-279.264 0-154.016 100.512-279.264 224.032-279.264z m0 620.608c158.784 0 288-153.12 288-341.344S670.784-0.032 512-0.032c-78.304 0-151.488 36.384-206.048 102.528C253.088 166.592 224 251.424 224 341.312c0 188.192 129.216 341.344 288 341.344z"
                  fill="#707070"
                  className="bottomPath"
                ></path>
              </svg>
            </IonLabel>
          </div>
        </>
      );
    } else {
      return (
        <IonLabel>
          <svg
            className="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="200"
            height="200"
          >
            <path
              d="M736 620.608c-17.664 0-32 13.888-32 31.04s14.336 31.04 32 31.04c123.52 0 224 97.44 224 217.216 0 17.088-14.368 31.04-32 31.04H96c-17.632 0-32-13.92-32-31.04 0-119.776 100.48-217.216 224-217.216 17.664 0 32-13.888 32-31.04s-14.336-31.04-32-31.04c-158.784 0-288 125.312-288 279.264 0 51.328 43.072 93.088 96 93.088h832c52.928 0 96-41.76 96-93.088 0-153.984-129.216-279.264-288-279.264zM512 62.048c123.488 0 224 125.28 224 279.264s-100.48 279.264-224 279.264c-123.488 0-224-125.312-224.032-279.264 0-154.016 100.512-279.264 224.032-279.264z m0 620.608c158.784 0 288-153.12 288-341.344S670.784-0.032 512-0.032c-78.304 0-151.488 36.384-206.048 102.528C253.088 166.592 224 251.424 224 341.312c0 188.192 129.216 341.344 288 341.344z"
              fill="#707070"
              className="bottomPath"
            ></path>
          </svg>
        </IonLabel>
      );
    }
  };

  return (
    <IonReactRouter>
      <IonTabs ref={ionTabsRef}>
        <IonRouterOutlet>
          <Route path="/home" render={() => <Home />} exact={true} />
          <Route path="/setting" render={() => <Setting />} exact={true} />
          <Route path="/mine" render={() => <Mine />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton className="home" tab="home" href="/home">
            <IsActiveHomeTab></IsActiveHomeTab>
          </IonTabButton>
          <IonTabButton className="mine" tab="mine" href="/mine">
            <IsActiveMineTab></IsActiveMineTab>
          </IonTabButton>
          <IonTabButton className="setting" tab="setting" href="/setting">
            <IsActiveSettingTab></IsActiveSettingTab>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
      <Route path="/chat" render={() => <Chat />} exact={true} />
      <Route path="/" render={() => <Welcome />} exact={true} /> 
    </IonReactRouter>
  );
};

export default AppRouter;

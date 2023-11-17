import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonList,
  IonItem,
  IonToggle,
} from "@ionic/react";
// import "./setting.scss";
import { useTheme } from "../../contexts/themeContext";

const Mine = () => {
  let isDarkActive = localStorage.getItem("isDarkActive") !== "false";

  const { toggleTheme } = useTheme();

  const changeTheme = (event) => {
    let isDarkActive = event.detail.checked;
    console.log(isDarkActive);
    toggleTheme();
    localStorage.setItem("isDarkActive", isDarkActive);
  };

  return (
    <>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Setting page</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <div className="settingContainer">
            <div className="imgContainer">
              <svg
                t="1700182688652"
                className="bigIcon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="10961"
                width="200"
                height="200"
              >
                <path
                  d="M125.328 903.904a381.336 81.488 0 1 0 762.672 0 381.336 81.488 0 1 0-762.672 0Z"
                  fill="#B8CBCD"
                  p-id="10962"
                ></path>
                <path
                  d="M423.008 178.96c-55.928-55.928-136.048-72.856-206.672-50.88l136.2 136.2a40.896 40.896 0 0 1 0 57.856l-77.16 77.16a40.92 40.92 0 0 1-57.864 0L81.312 263.104c-21.976 70.624-5.048 150.744 50.88 206.68 67.752 67.76 171.032 78.344 249.888 31.776l438.208 438.208a55.08 55.08 0 1 0 77.896-77.896l-439.68-439.688c42.168-77.944 30.368-177.36-35.496-243.224z"
                  fill="#B2EDA6"
                  p-id="10963"
                ></path>
                <path
                  d="M859.24 979.896a78.568 78.568 0 0 1-55.92-23.16L377.696 531.112A229.792 229.792 0 0 1 277.6 554.016c-61.336 0-119.008-23.888-162.384-67.264-60.512-60.528-82.288-148.96-56.824-230.784a24 24 0 0 1 39.888-9.832L234.48 382.336c6.392 6.376 17.536 6.392 23.928 0l77.16-77.168c3.2-3.192 4.96-7.448 4.96-11.96 0-4.512-1.76-8.768-4.952-11.96L199.36 145.048a24 24 0 0 1 9.84-39.888 230.16 230.16 0 0 1 68.464-10.392c61.32 0 118.96 23.864 162.312 67.216 67 66.992 85.432 169.656 47.616 255.336l427.56 427.568a78.512 78.512 0 0 1 23.168 55.912 78.528 78.528 0 0 1-23.168 55.92 78.504 78.504 0 0 1-55.912 23.176zM382.072 477.552c6.208 0 12.352 2.408 16.976 7.032l438.208 438.208c11.736 11.736 32.216 11.736 43.96 0a30.88 30.88 0 0 0 9.104-21.984 30.848 30.848 0 0 0-9.104-21.968l-439.68-439.696a24.016 24.016 0 0 1-4.144-28.392c37.928-70.096 25.032-158.44-31.352-214.832a180.368 180.368 0 0 0-128.368-53.16c-4.112 0-8.208 0.136-12.288 0.408l104.128 104.136a64.48 64.48 0 0 1 19.008 45.896 64.48 64.48 0 0 1-19.016 45.904l-77.16 77.16a64.48 64.48 0 0 1-45.904 19.016 64.496 64.496 0 0 1-45.904-19.016l-104.168-104.16a181.144 181.144 0 0 0 52.8 140.712 180.456 180.456 0 0 0 128.44 53.2c32.536 0 64.448-8.688 92.272-25.128a23.92 23.92 0 0 1 12.192-3.336z"
                  fill="#3C663E"
                  p-id="10964"
                ></path>
                <path
                  d="M155.576 797.912c-18.64 18.64-13.84 53.672 36.352 103.856 50.192 50.184 85.224 54.992 103.864 36.36l259.664-238.888c18.648-18.64 3.456-64.056-46.736-114.256-50.192-50.184-95.608-65.376-114.248-46.728L155.576 797.912z"
                  fill="#F6E89A"
                  p-id="10965"
                ></path>
                <path
                  d="M270.912 972.152c-28.24 0-60.52-17.968-95.96-53.408-26.52-26.512-43.352-51.384-50.032-73.912-7.336-24.776-2.624-47.288 13.28-63.488L376.8 522.008l0.688-0.72c9.624-9.624 22.728-14.72 37.896-14.72 31.504 0 70.664 21.816 110.296 61.448 59.208 59.216 77.552 117.392 46.736 148.192-0.232 0.24-0.48 0.472-0.72 0.696l-259.344 238.592c-11.096 10.896-25.408 16.656-41.44 16.656z m140.6-416.984L173.24 814.16c-0.224 0.24-0.456 0.488-0.696 0.72-1.36 1.36-4.96 4.96-1.592 16.312 3.008 10.16 12.032 27.696 37.944 53.608 35.52 35.504 55.2 39.344 62.024 39.344 4.336 0 6.432-1.504 7.904-2.992l0.72-0.688 259.056-238.336c2.76-3.656-0.528-33.832-46.856-80.176-34.976-34.968-62.992-47.384-76.352-47.384-2.424 0-3.576 0.432-3.88 0.6z"
                  fill="#8D4520"
                  p-id="10966"
                ></path>
                <path
                  d="M534.68 723.088c-28.584 0-66.192-20.672-104.792-59.272-25.536-25.536-43.792-51.296-52.792-74.488-13.696-35.328-2.088-54.248 6.048-62.384a16 16 0 0 1 22.632 22.624c-4.344 4.344-3.896 15.144 1.16 28.184 7.296 18.808 23.48 41.328 45.576 63.432 48.888 48.888 83.8 54.552 91.624 46.744a16 16 0 0 1 22.624 22.624c-8.432 8.432-19.368 12.536-32.08 12.536z"
                  fill="#8D4520"
                  p-id="10967"
                ></path>
                <path
                  d="M505.416 632.864l306.784-304.632c0.584-0.584 1-1.264 1.536-1.88 24.56 6.648 51.888 0.4 71.168-18.888L968 224.376l-103.864-103.864L781.04 203.592c-19.28 19.288-25.536 46.608-18.888 71.176-0.616 0.528-1.296 0.944-1.88 1.52l-306.792 304.64"
                  fill="#F6E89A"
                  p-id="10968"
                ></path>
                <path
                  d="M505.416 656.864a24 24 0 0 1-16.912-41.032l305.936-303.792a24.024 24.024 0 0 1 25.56-8.864 49.648 49.648 0 0 0 47.928-12.696l66.12-66.12-69.92-69.928-66.128 66.12a49.64 49.64 0 0 0-12.696 47.944 24 24 0 0 1-8.952 25.624l-305.984 303.84a24 24 0 0 1-33.824-34.064l299.632-297.528a97.744 97.744 0 0 1 27.864-79.752l83.096-83.088a24 24 0 0 1 33.944 0l103.864 103.864a23.976 23.976 0 0 1-0.008 33.936l-83.088 83.088c-21.056 21.072-50.656 31.112-79.84 27.856l-299.68 297.624a23.928 23.928 0 0 1-16.912 6.968z"
                  fill="#8D4520"
                  p-id="10969"
                ></path>
                <path
                  d="M255.608 957.984a23.984 23.984 0 0 1-16.968-40.968l227.672-227.672a23.984 23.984 0 0 1 33.936 0 23.984 23.984 0 0 1 0 33.936l-227.672 227.672a23.928 23.928 0 0 1-16.968 7.032z"
                  fill="#8D4520"
                  p-id="10970"
                ></path>
              </svg>
            </div>
            <IonList>
              <span className="settingTitle">Setting</span>
              <IonItem>
                <span className="settingText">Brightness & Dark</span>
                <IonToggle
                  slot="end"
                  checked={isDarkActive}
                  onIonChange={changeTheme}
                ></IonToggle>
              </IonItem>
              <IonItem>
                <span className="settingText">Dark&Brightness</span>
                <IonToggle slot="end"></IonToggle>
              </IonItem>
              <IonItem>
                <span className="settingText">Dark&Brightness</span>
                <IonToggle slot="end"></IonToggle>
              </IonItem>
              <IonItem>
                <span className="settingText">Dark&Brightness</span>
                <IonToggle slot="end"></IonToggle>
              </IonItem>
            </IonList>
          </div>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Mine;

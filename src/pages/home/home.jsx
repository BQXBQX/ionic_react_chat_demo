import "./home.scss";
const Home = () => {
  const buttonStyle = {
    innerHeight : 40 + 'px' ,
  };
  return (
    <>
      <ion-header>
        <ion-toolbar>
          <ion-title>Home page</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <div className="homeContainer">
          <div className="homeTextContainer">
            <span className="homeText">Do you want to chat?</span>
            <br />
            <span className="homeText">welcome to the BQX chat!</span>
          </div>
          <br />
          <ion-router-link href="/chat">
            <ion-button style={buttonStyle}>
              <span className="buttonText">Click! To chat page!</span>
            </ion-button>
          </ion-router-link>
        </div>
      </ion-content>
    </>
  );
};

export default Home;

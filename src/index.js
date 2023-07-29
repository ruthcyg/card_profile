import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import profileData from "./profile";

import reportWebVitals from "./reportWebVitals";

function App() {
  
  return (
    <div className="card">
      <div className="data">
        <Avatar />
        <Intro />
        <SkillList />
       
      </div>
    </div>
  );
}

// function App() {
//   return (
//     <div className="container">
//       <Header />
//       <Profile />
//       <Footer />
//     </div>
//   );
// }

// function Header() {
//   return (
//     <header className="header">
//       <h1>Porfiolio</h1>
//     </header>
//   );
// }

function Avatar() {
  return (
  <img className ="avatar"src="profilepic/ruthcy.jpg" alt="Ruth Ewho"/>
  );
}

function Intro(props) {
  return (
    <div className="data">
      <h1>Ruth Ewho</h1>
      <p>
        I am highly motivated and enthusiastic full-stack developer with a
        strong foundation in web development. With a passion for technology and
        a dedication
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skills skill="Python" emoji = "🚀" color = "orange" />
      <Skills skill = "HTML" emoji = "⭐" color = "red" />
      <Skills skill = "Node Js" emoji = "🌈"  color = "green"/>
      <Skills skill = " React Native"  emoji = "👌" color = "purple"/>
    </div>
  );
}

function Skills(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

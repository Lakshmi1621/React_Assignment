

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import logo from "./logo.png";
import userIcon from "./menuicon.png";

const header = React.createElement(
 "div",
  {
     className: "Title",
      key: "title",
     },
     [
      React.createElement(
       "h1",
      {
           key: "h1",
    },
    "This is h1 Tag"
     ),
      React.createElement(
         "h2",
          {
             key: "h2",
          },
        "This is h2 Tag"
     ),
     React.createElement(
      "h3",
     {
        key: "h3",
         },
    "This is h3 Tag"
   )
      ]
     );
     const header1 = (
      <div className="Title" key="title">
         <h1 key="h1">This is h1 tag</h1>
         <h2 key="h2">This is h2 tag</h2>
         <h3 key="h3">This is h3 tag</h3>
         </div>
 );
 const Header = () => {
     return (
       <div className="Title" key="title">
        <h1 key="h1">This is h1 tag</h1>
   <h2 key="h2">This is h2 tag</h2>
     <h3 key="h3">This is h3 tag</h3>
        </div>
      );
    };
    const Header1 = () => {
      return (
           <div className="Title" key="title">
          <h1 style={{color:"blue"}} key="h1">This is h1 tag</h1>
           <h2 style={{color:"palevioletred"}} key="h2">This is h2 tag</h2>
        <h3 style={{color:"green"}} key="h3">This is h3 tag</h3>
          </div>
        );
         };
         const AnotherComponent = function(){
                return <h2> This is Another Component</h2>
            }
            const Header2 = () => {
        return (
             <div className="Title" key="title">
              <h1 style={{color:"blue"}} key="h1">This is h1 tag</h1>
                  <h2 style={{color:"palevioletred"}} key="h2">This is h2 tag</h2>
                  <AnotherComponent/>
                  <h3 style={{color:"green"}} key="h3">This is h3 tag</h3>
                  </div>
             );
             };
             const element = <h1>This is React Element</h1>;
             const TitleElement = () => {
              return <h2 style={{ color: "red" }}>This Title Element</h2>;
             }; 
             const Header4 = () => {
              return (
                 <div className="Title" key="title">
               {/* This is {TitleComponent} */}
               {element}
                   <h1 style={{ color: "blue" }} key="h1">
                This is h1 tag
                 </h1>
              {/* This is {<TitleComponent/>} */}
                <TitleElement/>
                <h2 style={{ color: "palevioletred" }} key="h2">
                  This is h2 tag
              </h2>
              {/* This is {<TitleComponent></TitleComponent>}*/}
                     <TitleElement></TitleElement>
                   <h3 style={{ color: "green" }} key="h3">
                      This is h3 tag
                </h3>
                 </div>
                );
                 };
                 const Header3 = () => {
                    return (
                      <>
                        <header className="header">
                          <div className="left">
                            <img src={logo} alt="Logo" />
                          </div>
                          <div className="center">
                            <input
                              className="input"
                              type="text"
                              placeholder="Search anything you want..."
                            />
                            <button type="submit">
                              <i class="fa fa-search"></i>
                            </button>
                          </div>
                          <div className="right">
                            <img src={userIcon} alt="User Icon" />
                          </div>
                        </header>
                      </>
                    );
                  };
                  
                  const root = ReactDOM.createRoot(document.getElementById("htmlroot"));
                  root.render(<header1/>);
                  root.render(<Header />);
                  
                  
            

//var y= React.createElement("div",null,React.createElement("h2",null,"hello world with react"),
//React.createElement("p",null,"This is nested element"));
//var htmlRoot = document.getElementById("root");
//var rootReact = ReactDOM.createRoot(htmlRoot);
//rootReact.render(y);

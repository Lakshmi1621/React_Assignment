var y= React.createElement("div",null,React.createElement("h2",null,"hello world with react"),
React.createElement("p",null,"This is nested element"));
var htmlRoot = document.getElementById("root");
var rootReact = ReactDOM.createRoot(htmlRoot);
rootReact.render(y);
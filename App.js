import React from "react";
import ReactDOM  from "react-dom/client";

const title = <h1>Namaste React  episode 3</h1>;

// const HeadingComponent =()=><h1>React is beast </h1>;

const HeadingComponent2 = ()=> (
    <div id="container">
    {title}
     <h1>React is beast </h1>
    </div>
)

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent2/>);
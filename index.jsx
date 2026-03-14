import react from "react";
import ReactDOM from "react-dom/client";
import Header from "./Component/header.jsx";
import Body from "./Component/Body.jsx";
import useBrain from "./Component/brain.jsx";

function App(){
const {Data,Data2}=useBrain();


    return(

        <>
        <Header/>
        <Body Data={Data} Data2={Data2}/>
        </>
    )
}

const root=document.getElementById("root");
const main=ReactDOM.createRoot(root);
main.render(<App/>);
import react from "react";
import ReactDOM from "react-dom/client";
import Header from "./Component/header.jsx";

function App(){
    return(

        <>
        <Header/>
        </>
    )
}

const root=document.getElementById("root");
const main=ReactDOM.createRoot(root);
main.render(<App/>);
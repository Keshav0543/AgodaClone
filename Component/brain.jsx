import { useState , useEffect} from "react";
import data from "./data1.json";
import data2 from "./data2.json";

function useBrain(){
const [Data,setData]=useState(data);
const [Data2,setData2]=useState(data2);
return {Data,Data2};
}

export default useBrain;
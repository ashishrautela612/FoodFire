import { useEffect, useState } from "react"
import { swiggyUrl } from "../utils/constants";

const getRestro=async ()=>{
    const respons=await fetch(swiggyUrl);
    const data=respons.json();
    return data;
}
const useRestaurant=()=>{
    const [restroList,setRestroList]=useState([]);
    useEffect(()=>{
        getRestro();
    },[]);
    

}
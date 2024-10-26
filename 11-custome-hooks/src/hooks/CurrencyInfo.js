import { useState, useEffect } from "react";

function CurrencyInfo(currency){
    let [data, setdata] = useState({})
    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/YOUR-API-KEY/latest/${currency}`)
        .then((res) => res.json())
        .then((res) => setdata(res[data]))
        console.log(data);
        
    },[currency])
    console.log(data)
    return data

}
CurrencyInfo()
export default CurrencyInfo 
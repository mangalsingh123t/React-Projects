
import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {

    const [data, setData] = useState({});   // yadi koi emty obj aaye to appliction crash na ho isliye

    // jab bhi ye chij mount ho to humko iska use krna he 
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json`)
            .then((res) => res.json())
            .then((res) => setData(res[currency]))
    }, [currency])
    console.log(data);
    return data;
}

// data ko set karne ke ye hi sabhi hooks me pure hi function ko export kr diya jata he 
export default useCurrencyInfo;


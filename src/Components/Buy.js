import React, { useContext, useEffect } from "react";
import axios from "axios";
import context from "./userContext.js";
import './Buy.css'
import Header from './Header'
import "bootstrap/dist/css/bootstrap.min.css";


function Buy() {
    const [data, setData] = useContext(context)

    useEffect(() => {
        axios.get("http://localhost:4000/items").then((resp) => {
            setData(resp.data);
        }
        )
    }, []);

    const handleIncrement = (id) => {
        setData(data =>
            data.map((item) =>
                id === item.id ? { ...item, count: item.count + (item.count >= 0 ? 1 : 0) } : item))
    }

    const handleDecrement = (id) => {
        setData(data =>
            data.map((item) =>
                id === item.id ? { ...item, count: item.count - (item.count === 0 ? 0 : 1) } : item))
    }


    return (
        <div>
            <Header/>
            <div className="wrapper">
            {data.length > 0 ? (
                data.map((elem) => {
                    return (
                        <div className="grid-wrapper"key={elem.id}>
                            <div className="img"><img src={elem.img} alt='sweti' height='150' width='130' /></div>&emsp;&nbsp;
                            <div className="details"><span>NAME: {elem.name}</span><br></br>
                            <span>PRICE: {elem.price} $</span></div>
                            <div className="incredecre"><button onClick={() => handleIncrement(elem.id)}>+</button>{elem.count}<button onClick={() => handleDecrement(elem.id)}>-</button></div>
                            <div><button className="btn btn-success" onClick={() => elem.status = true}>ADD TO CART</button><br></br></div>
                        </div>
                    )
                })
            ) : (
                <div>No data found</div>
            )}
            </div>
        </div>
        )
}

export default Buy;
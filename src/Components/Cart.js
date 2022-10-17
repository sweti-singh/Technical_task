import React, { useContext } from "react";
import context from "./userContext.js";
import "bootstrap/dist/css/bootstrap.min.css";
import './Cart.css'

function Cart() {
    const [data] = useContext(context);
    var totalNumber = 0;

    return (
        <div>
            <h1 className="title">THIS IS YOUR CART</h1>
            <table style={{ width: "60%" }} className="table table-bordered">
                <thead style={{ color: "white" }}>
                    <tr>
                        <th>items</th>
                        <th>Quantity</th>
                        <th>price</th>
                    </tr>
                </thead>
                <tbody style={{ color: "white" }}>
                    {
                        data.map((elem) => {
                            totalNumber = totalNumber + elem.price * elem.count;
                            return (
                                (elem.count !== 0) && (elem.status === true) ?
                                    <tr key={elem.id}>
                                        <td>{elem.name}</td>
                                        <td>{elem.count}</td>
                                        <td>{elem.price * elem.count}</td>
                                    </tr>
                                    : null
                            )
                        }
                        )
                    }
                </tbody>
            </table>

            {totalNumber !== 0 ? <div>
                <h3 style={{ color: "white" }}>TOTAL IS :{totalNumber} $</h3>
                <p style={{ color: "white" }}>Thank you for shopping with us.</p>
            </div> : 'there is nothing in cart'}

        </div>

    )
}
export default Cart;
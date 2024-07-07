import React from "react";
import { useState, useEffect } from "react";
import Transaction from "./Transaction";

const API = import.meta.env.VITE_API_URL;

const Transactions = () => {
    const [transactions, setTransactions] = useState([]);
    useEffect(() => {
        fetch(`${API}/transactions`)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            console.log(data)
            setTransactions(data);
        })
        .catch((error) => console.error(error));
    }, [])
    
    
    return(
        <div>
            <h1>Transactions</h1>
            {transactions.map((transaction) => {
                return <Transaction key={transaction.id} transaction={transaction} />
            })}
        </div>
    )
}

export default Transactions;
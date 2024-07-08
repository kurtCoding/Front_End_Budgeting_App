import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_API_URL

const TransactionNewForm = () => {

    const [transaction, setTransactionDetails] = useState({
        item_name: "",
        amount: 0,
        date: "",
        from: "",
        category: ""
    })

    let navigate = useNavigate();

    const handleTextChange = (event) => {
        setTransactionDetails({...transaction, [event.target.id]: [event.target.value]});
    } 

    const addTransaction = () => {
        fetch(`${API}/transactions`, {
            method: "POST",
            body: JSON.stringify(transaction),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(() => {
            navigate("/transactions");
        })
        .catch((error) => console.error(error));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        addTransaction();
        setTransactionDetails({
            item_name: "",
            amount: 0,
            date: "",
            from: "",
            category: ""
        })
    }

    return (
        <div>TransactionNewForm
            <form onSubmit={handleSubmit}>
                <label htmlFor="item_name">Name:</label>
                <input id="item_name" type="text" value={transaction.item_name} onChange={handleTextChange} required />
                <label htmlFor="amount">Amount:</label>
                <input id="amount" type="number" value={transaction.amount} onChange={handleTextChange} required />
                <label htmlFor="date">Date:</label>
                <input id="date" type="text" value={transaction.date} onChange={handleTextChange} required />
                <label htmlFor="from">From:</label>
                <input id="from" type="text" value={transaction.from} onChange={handleTextChange} required />
                <label htmlFor="category">Category:</label>
                <input id="category" type="text" value={transaction.category} onChange={handleTextChange} required />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default TransactionNewForm;
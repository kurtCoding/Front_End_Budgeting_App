import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

const API = import.meta.env.VITE_API_URL

const TransactionDetails = () => {
    const [transaction, setTransaction] = useState({
        item_name: "",
        amount: 0,
        date: "",
        from: "",
        category: ""
    });

    let navigate = useNavigate();
    let { id } = useParams();

    useEffect(() => {
        fetch(`${API}/transactions/${id}`)
        .then((res) => {
            return res.json()
        })
        .then((resJSON) => {
            console.log(resJSON)
            setTransaction(resJSON)
        })
        .catch(() => {
            navigate("/notfound");
        })
    }, [id, navigate]);

    const handleDelete = () => {
        fetch(`${API}/transactions/${id}`, {
            method: "DELETE"
        })
        .then(() => {
            navigate("/transactions")
        })
        .catch((error) => {
            console.error(error);
        })
    }

    return (
        <div>
            <h1>TransactionDetails</h1>
            <p>{transaction.item_name}</p>
            <p>{transaction.amount}</p>
            <Link to={`/transactions/${id}/edit`}>
                <button>Edit</button>
            </Link>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default TransactionDetails;
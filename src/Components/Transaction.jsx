import React from "react";
import { Link } from "react-router-dom";

const Transaction = ({transaction}) => {
    return (
        <div>
            <Link to={`/transactions/${transaction.id}`}>{transaction.item_name}</Link>
        </div>
    )
}

export default Transaction;
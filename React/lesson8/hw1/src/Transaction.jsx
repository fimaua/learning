import React from "react";
import moment from "moment";

const Transaction = ({ from, to, amount, rate, time }) => {
    const transactionTime = moment(time).format("LT")
    const transactionDate = moment(time).format("DD MMM")
    const formatAmount = new Intl.NumberFormat('en-GB').format(amount)

    return (
        <li className="transaction">
            <span className="transaction__date">{transactionDate}</span>
            <span className="transaction__time">{transactionTime}</span>
            <span className="transaction__assets">{from} → {to}</span>
            <span className="transaction__rate">{rate}</span>
            <span className="transaction__amount">{formatAmount}</span>
        </li>
    )
}

export default Transaction;
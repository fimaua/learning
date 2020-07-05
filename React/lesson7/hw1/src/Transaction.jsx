import React from "react";
import moment from "moment";

const Transaction = ({ from, to, amount, rate, time }) => {
    const formatAmount = new Intl.NumberFormat('en-GB').format(amount)
    const formatRate = new Intl.NumberFormat('en-GB').format(rate)

    return (
        <li className="transaction">
            <span className="transaction__date">{moment(time).format("DD MMM")}</span>
            <span className="transaction__time">{moment(time).locale('uk').format("LT")}</span>
            <span className="transaction__assets">{from} → {to}</span>
            <span className="transaction__rate">{formatRate}</span>
            <span className="transaction__amount">{formatAmount}</span>
        </li>
    )
}

export default Transaction;
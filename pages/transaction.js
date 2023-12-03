// Your JavaScript file

import React, { useState, useEffect } from "react";
import "./expense.css";

const TransactionCell = (props) => {
  const isExpense = props.payload?.type === "expense";
  const hasCategory = props.payload?.category;

  return (
    <div>
      <div className="Cell" isExpense={isExpense}></div>
      <span>{props.payload.desc}</span>
      <br></br>
      <span>Rs {props.payload.amount}</span>
      <br></br>
      <span>Payment mode: {props.payload.paymentmode}</span>
      <br></br>
      {hasCategory && <span>Category: {props.payload.category}</span>}
    </div>
  );
};

export const Transaction = (props) => {
  const [search, updateSearch] = useState("");
  const [filteredTransaction, updateTrans] = useState(props.transaction);
  const filterData = (search) => {
    if (!search || !search.trim().length) {
      updateTrans(props.transaction);
      return;
    }
    let trans = [...props.transaction];
    trans = trans.filter((payload) =>
      payload.desc.toLowerCase().includes(search.toLowerCase(0).trim())
    );
    updateTrans(trans);
  };
  useEffect(() => filterData(search), [props.transaction]);
  return (
    <div className="Container">
      transaction
      <input
        placeholder="search"
        value={search}
        onChange={(e) => {
          updateSearch(e.target.value);
          filterData(e.target.value);
        }}
      ></input>
      {filteredTransaction?.length
        ? filteredTransaction.map((payload) => (
            <TransactionCell payload={payload}></TransactionCell>
          ))
        : ""}
    </div>
  );
};

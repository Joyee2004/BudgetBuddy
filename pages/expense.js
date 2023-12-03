import  Overview  from "./overview";
import { Transaction } from "./transaction";
import React, { useState, useEffect } from "react";

import "./expense.css";

const Expense = (props) => {
  const [transaction, updateTranscation] = useState([]);
  const [expense, updateExpense] = useState([0]);
  const [income, updateIncome] = useState([0]);

  const add = (payload) => {
    const transarray = [...transaction];
    transarray.push(payload);
    updateTranscation(transarray);
  };

  const calcbalance = () => {
    let expense = 0;
    let income = 0;
    transaction.forEach((payload) => {
      payload.type === "expense"
        ? (expense = expense + payload.amount)
        : (income = income + payload.amount);
    });
    updateExpense(expense);
    updateIncome(income);
  };

  useEffect(() => calcbalance(), [transaction]);

  return (
    <div className="totale">
      <div className="exp-img">
        <img
          src="https://st2.depositphotos.com/12056054/44306/v/450/depositphotos_443067284-stock-illustration-success-business-career-opportunity-business.jpg"
          alt="login-img"
        />
      </div>
      <div className="backe">
        <div className="conte">
          <Overview add={add} expense={expense} income={income}></Overview>

          <Transaction transaction={transaction}></Transaction>
        </div>
      </div>
    </div>
  );
};

export default Expense;

import React, { useState } from "react";
import "./expense.css";

const AddTransview = (props) => {
  const [amount, setAmount] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [paymentmode, setPaymentmode] = useState("");
  const [type, setType] = useState("expense");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanSource, setLoanSource] = useState("");
  const [loanDesc, setLoanDesc] = useState("");

  const add = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/overview", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount, desc, category, paymentmode }),
      });
      if (response.ok) {
        const responseData = await response.json();
        console.log("Expense added successfully:", responseData.message);
      } else {
        const errorData = await response.json();
        console.error("Login failed:", errorData.message);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }

    if (type === "expense" && (!amount || !desc)) {
      alert("Please fill in all required fields for expense");
      return;
    }

    if (type === "loan" && (!loanAmount || !loanSource || !loanDesc)) {
      alert("Please fill in all required fields for loan");
      return;
    }

    props.add({
      amount: Number(amount),
      desc,
      category,
      paymentmode,
      type: type === "loan" ? "expense" : type,
      id: Date.now(),
      isLoan: type === "loan",
    });

    setAmount("");
    setDesc("");
    setCategory("");
    setPaymentmode("");
    setType("expense");
    setLoanAmount("");
    setLoanSource("");
    setLoanDesc("");

    props.toggleAddTnx();
  };

  return (
    <>
      <div className="AddTransContainer">
        <input
          className="inpu"
          placeholder="amount"
          type="number"
          value={type === "loan" ? loanAmount : amount}
          onChange={(e) =>
            type === "loan"
              ? setLoanAmount(e.target.value)
              : setAmount(e.target.value)
          }
          required
        ></input>
        <input
          className="inpu"
          placeholder={type === "loan" ? "Loan Source" : "Expense Description"}
          value={type === "loan" ? loanSource : desc}
          onChange={(e) =>
            type === "loan"
              ? setLoanSource(e.target.value)
              : setDesc(e.target.value)
          }
          required
        ></input>

        {type === "expense" && (
          <>
            <label className="lebe" htmlFor="category">
              category{" "}
            </label>
            <select
              name="category"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              disabled={type === "income"}
              required
            >
              <option value="c01">Others</option>
              <option value="c02">Household</option>
              <option value="c03">medical</option>
              <option value="c04">food</option>
              <option value="c05">travel</option>
              <option value="c06">leisure</option>
              <option value="c07">education</option>
            </select>
          </>
        )}

        <label className="lebe" htmlFor="paymentmode">
          Payment mode
        </label>
        <select
          name="paymentmode"
          id="paymentmode"
          value={paymentmode}
          onChange={(e) => setPaymentmode(e.target.value)}
          required
        >
          <option value="debit_card">debit card</option>
          <option value="credit_card">credit card</option>
          <option value="cash">cash</option>
          <option value="online">online</option>
          <option value="other">other</option>
        </select>
        <div className="sside">
          <div className="side">
            <input
              className="inpu"
              type="radio"
              id="expense"
              name="type"
              value="expense"
              checked={type === "expense"}
              onChange={() => setType("expense")}
            ></input>
            <label className="lebe" htmlFor="expense">
              expense
            </label>
          </div>
          <div className="side">
            <input
              className="inpu"
              type="radio"
              id="income"
              name="type"
              value="income"
              checked={type === "income"}
              onChange={() => setType("income")}
            ></input>
            <label className="lebe" htmlFor="income">
              income
            </label>
          </div>
        </div>
        {type === "expense" && (
          <button className="AddLoanButton" onClick={() => setType("loan")}>
            Add Loan
          </button>
        )}

        <button onClick={add}>Add Transaction</button>
      </div>
    </>
  );
};

const Overview = (props) => {
  const [isAddTnx, toggleAddTnx] = useState(true);

  return (
    <>
      <div className="nothing">
        <div className="di">
          <div className="balance">
            Balance: <br /> Rs {props.income - props.expense}
          </div>

          <button onClick={() => toggleAddTnx(!isAddTnx)}>
            {isAddTnx ? "Cancel" : "Add"}
          </button>

          {isAddTnx && (
            <AddTransview toggleAddTnx={toggleAddTnx} add={props.add} />
          )}

          <div className="ExpenseContainer">
            <div className="ExpenseBox" isIncome={false}>
              expense
              <br></br> {props.expense}
            </div>
          </div>

          <div className="ExpenseContainer">
            <div className="ExpenseBox" isIncome={true}>
              income
              <br></br> {props.income}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;

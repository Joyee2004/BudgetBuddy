import React, { useState } from "react";
import "./calendar.css";
import { useNavigate } from "react-router-dom";

const Calendar = (props) => {
  const navigate = useNavigate();
  const handleClick = async (index) => {
    console.log(`Clicked on day ${index}`);
    try {
      const response = await fetch("http://localhost:3000/calendar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ index }),
      });
      if (response.ok) {
        const responseData = await response.json(); // Parse response body as JSON
        console.log("Server Response:", responseData);
        alert(`Today's total expenses: ${responseData.amount}`);
      } else {
        // Handle login failure
        const errorData = await response.json(); // Parse error response body as JSON
        console.error("Login failed:", errorData.message);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
const handleAddExpenseClick = () => {
  // Redirect to the expense page
  navigate("/expense");
};
  return (
    <>
      <center className="headerr">
        <strong>Savings Tracker</strong>
      </center>

      <div className="month-layout">
        <div className="days">
          {Array.from({ length: 31 }, (_, index) => (
            <div className="day" key={index + 1}>
              <p>{index + 1}st</p>
              <button className="button" onClick={() => handleClick(index + 1)}>
                View Expenses
              </button>
              <br />
              <button className="button1" onClick={handleAddExpenseClick}>
                Add Expense
              </button>
            </div>
          ))}
          <div className="day">
            <p>Total</p>
            <button className="button" onClick={() => handleClick("total")}>
              View Expenses
            </button>
            <br />
            <button className="button1" onClick={handleAddExpenseClick}>
              Add Expense
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calendar;

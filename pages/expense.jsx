import styled from "styled-components";
import { Overview } from "./overview";
import { Transaction } from "./transaction";
import React,{ useState,useEffect } from "react";
import image from "./images/expenses.jpg";

const Container=styled.div`
display:flex;
flex-direction:column;
align-items:center;
margin:30px 0 10px;
font-family:Montserrat;
color:red;
`;


export const Expense = (props) => {
    const[transaction,updateTranscation]=useState([]);
    const[expense,updateExpense]=useState([0]);
    const[income,updateIncome]=useState([0]);
    const add=(payload)=>
    {
        const  transarray=[...transaction];
        transarray.push(payload);
        updateTranscation(transarray);
    };
    const calcbalance=()=>
    {let expense=0;
      let income=0;
      transaction.map((payload)=>{
      payload.type==="expense" ?
      ( expense=expense+payload.amount)
      :(income=income+payload.amount)
    });
updateExpense(expense);
updateIncome(income);
};
useEffect(()=>calcbalance(),[transaction]);
    
  return (
   < div  style ={{backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat", backgroundSize:"cover"}}className="App">
    <Container>
        <Overview add={add}
        expense={expense}
        income={income}>
          
        </Overview>
        <Transaction transaction={transaction}></Transaction>
    </Container>
    </div>
  )

  }
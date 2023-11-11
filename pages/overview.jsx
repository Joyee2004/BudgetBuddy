import styled from "styled-components";
import React, { useState } from "react";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  align-items: center;
  font-size: 20px;
  width: 100%;
  color:red;
`;

// Balance and Add Transaction Styles
const Balance = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 30px 0 10px;
  font-family: Montserrat;
  align-items: center;
`;

const Add = styled.div`
  font-size: 15px;
  background: #0d1d2c;
  display: flex;
  color: red;
  padding: 5px 10px;
  cursor: pointer;
  flex-direction: row;
  border-radius: 4px;
  font-weight: bold;
`;


const AddTransContainer = styled.div`
  font-size: 15px;
  color: rgb(0, 0, 0);
  flex-direction: column;
  border-radius: 4px;
  border: 1px solid #e6e8e9;
  width: 100%;
  align-items: center;
  padding: 15px 20px;
  margin: 10px 20px;
  gap: 10px;

  & input {
    width: 90%;
    outline: none;
    padding: 10px 12px;
    border-radius: 4px;
    border: 1px solid #e6e8e9;
    color:red;
  }
`;

const Radiobox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  margin: 10px 0;

  & input {
    color:red;
    width: unset;
    margin: 0 10px;
  font-size:20px;
  }

  & label {
    color:red;
    padding:5px;
    margin:10px;
    font-size:20px;
  }
`;

const ExpenseContainer = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 30px 0 10px;
  font-family: Montserrat;
  align-items: center;
  width: 100%;
`;

const ExpenseBox = styled.div`
  font-size: 18px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-weight: bold;

  & span {
    color: #0d1d2c;
    opacity: 80%;
    font-weight: bold;
    font-size: 20px;
  }
`;


const AddTransview=(props)=>{
  const[amount,setAmount]=useState();
  const[desc,setDesc]=useState();
  const[category,setCategory]=useState();
  const[type,setType]=useState("expense");
  const add=()=>
  {
    props.add({amount:Number(amount),desc,category,type,id:Date.now(),});
    props.toggleAddTnx()
  };
  return(
    <AddTransContainer>
      <input placeholder="amount" type="number" value={amount} onChange={(e)=>setAmount(e.target.value)}></input>
      <input placeholder="Description" value={desc} onChange={(e)=>setDesc(e.target.value)}></input>
      <label for="category">category</label>

<select name="category" id="category" value={category} onChange={(e)=>setCategory(e.target.value)}>
  <option value="x">x</option>
  <option value="y">y</option>
  <option value="z">z</option>
  <option value="others">others</option>
</select> 
<Radiobox>
  <input type="radio" id="expense" name="type" value="expense" checked={type==="expense"}></input>
  <label htmlFor="expense">expense</label>
  <input type="radio" id="income" name="type" value="income"  onChange={(e)=>setType(e.target.value)}></input>
  <label htmlFor="income">income</label>
</Radiobox>
<Add onClick={add}>Add transaction</Add>
    </AddTransContainer> 
  )
};
export const Overview = (props) => {
  const [isAddTnx,toggleAddTnx]=useState(true);
  return (
    <Container>
    
        <Balance> Balance:
          <br /> Rs {props.income-props.expense}
        <Add onClick={()=>toggleAddTnx(!isAddTnx)}>{isAddTnx?"Cancel":"Add"}</Add>
        </Balance>
        {isAddTnx &&<AddTransview toggleAddTnx={toggleAddTnx} add={props.add}></AddTransview>}
        <ExpenseContainer>
          <ExpenseBox isIncome={false}> expense  
          <br></br>  {props.expense}</ExpenseBox>
        </ExpenseContainer>
        <ExpenseContainer>
          <ExpenseBox isIncome={true}> income   <br></br> {props.income}</ExpenseBox>
        </ExpenseContainer>

    </Container>
  )
}


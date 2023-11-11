import styled from "styled-components";
import {useState,useEffect} from "react";
const Container=styled.div`

color: #0d1d2c;
display: flex;
flex-direction: column;
padding: 10px 22px;
font-size: 18px;
width: 100%;
gap: 10px;
font-weight: bold;
overflow-y: auto !important;
& input {
  padding: 10px 12px;
  border-radius: 12px;
  background: #e6e8e9;
 
  outline: none;
}
`;
const Cell=styled.div`
background-color: white;
color: #0d1d2c;
display: flex;
flex-direction: row;
padding: 10px 15px;
font-size: 14px;
border-radius: 2px;
border: 1px solid #e6e8e9;
align-items: center;
font-weight: normal;
justify-content: space-between;
border-right: 4px solid ${(props) => (props.isExpense ? "red" : "green")};
`;
const TransactionCell=(props)=>
{
  return (
    <Cell isExpense={props.payload?.type==="expense"}>
      <span>{props.payload.desc}</span>
      <span>    Rs  {props.payload.amount}</span>
    </Cell>
  )
}
export const Transaction = (props) => {
  const [search,updateSearch]=useState("");
  const [filteredTransaction,updateTrans]=useState(props.transaction);
  const filterData =(search) =>
  {
    if(!search||!search.trim().length)
    {
      updateTrans(props.transaction);
      return;
    }
    let trans=[...props.transaction];
    trans=trans.filter((payload)=>payload.desc.toLowerCase().includes(search.toLowerCase(0).trim()));
  updateTrans(trans);
  };
  useEffect(()=>filterData(search),[props.transaction]);
  return (
    <Container>transaction
      <input placeholder="search" value={search} onChange={(e)=>{updateSearch(e.target.value);
      filterData(e.target.value);}}></input>
      {filteredTransaction?.length
      ?filteredTransaction.map((payload)=>(<TransactionCell
       payload={payload}></TransactionCell>))
      :""}
   
    </Container>
  );
}


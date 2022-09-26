import styled from "@emotion/styled";
import { useState } from "react";
import { AiFillCar, AiFillBank, AiFillGift } from "react-icons/ai";
import { colors, typography } from "../../styles";
import CircleIcon from "../CircleIcon";
import { makeTxnsSplitted } from "./utils";

const CardTxn = styled.div`
  padding: 20px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid lightgray;
  gap: 12px;
  & h3 {
    ${typography.text.lg}
    font-weight: 500;
  }
  & h4,
  p {
    ${typography.text.sm}
  }
  & p {
    color: ${colors.gray[500]};
  }
`;

async function txnsByDay() {
  const allTxns = await makeTxnsSplitted();
  const groupBy = (array, key) => {
    return array.reduce((result, currentValue) => {
      // If an array already present for key, push it to the array. Else create an array and push the object
      (result[currentValue[key]] = result[currentValue[key]] || []).push(
        currentValue
      );
      // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
      return result;
    }, {}); // empty object is the initial value for result object
  };
  return groupBy(allTxns, "date");
}


function Transactions() {
    const [txns, setTxns] = useState("");
    
    async function getTxnsByDay(){
        const allTxns = await txnsByDay();
        setTxns(allTxns);
        console.log(txns);
    }    

  return (
    <CardTxn>
      <CircleIcon Icon={AiFillCar} size="md" color="blue" />
      <div style={{ width: "100%" }}>
        <h4>Rent</h4>
        <p>Description</p>
      </div>
      <h3>-$&nbsp;200</h3>
    </CardTxn>
  );
}

export default Transactions;

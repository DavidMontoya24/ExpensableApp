import styled from "@emotion/styled";
import { format, getMonth, getYear } from "date-fns";
import Categories from "../components/Categories/categories";
import MonthPicker from "../components/MonthPicker";
import { colors, typography } from "../styles";
import { useParams } from "react-router-dom";
import { useLocalSearchParams } from "../hooks";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { useState } from "react";
import { txnsByDay } from "../components/Transactions/utils";
import Transactions from "../components/Transactions/transactions";

const CategoriesContainer = styled.div`
  padding: 1.5rem 2rem;
  width: 100%;
`;

const Title = styled.h1`
  ${typography.head.sm}
  font-weight: 600;
  margin-bottom: 16px;
`;

const TypePicker = styled.div`
  height: 40px;
  display: flex;
  border-bottom: 1px solid lightgray;
  gap: 32px;
  margin-bottom: 16px;
`

const OptionType = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  &:hover{
    h4 { color: ${colors.pink[500]} }
    svg { fill: ${colors.pink[500]} }
    span { background-color: ${colors.pink[500]} }
  }
  &.activeType {
    h4 { color: ${colors.pink[500]} }
    svg { fill: ${colors.pink[500]} }
    span { background-color: ${colors.pink[500]} }
  }
`

const ActiveLine = styled.span`
  height: 3px;
`

const TransactionsContainer = styled.div`
  min-width: 360px;
  height: 100vh;
  border-left: 1px solid lightgray;
  padding: 1.5rem 2rem;
`

function CategoriesPage() {
  let params = useParams();
  // let iconAddShow = true;
  const [selectedType, setSelectedType] = useState("expense");
  const [iconAddShow, setIconAddShow] = useState(true);
  const [searchParams, setSearchParams] = useLocalSearchParams("initialDate", {
    year: getYear(new Date()),
    month: getMonth(new Date()),
  });

  const handleShownCategory = (e) => {
    const value = e.target.closest(".js-cat-opt").children[0].children[1].innerHTML;
    const activeType = document.querySelector(".activeType");
    if (activeType) { 
      activeType.classList.remove("activeType") 
    }
    e.target.closest(".js-cat-opt").classList.add("activeType");
    // setIconAddShow(false);
    if(value === "Expenses") {
      setSelectedType("expense")
    }
    if(value === "Income") {
      setSelectedType("income")
    }
  }

  const date = {
    year: Number(searchParams.get("year")),
    month: Number(searchParams.get("month")),
  };

  const handleRightClick = () => {
    const month = date.month + 1 > 11 ? 0 : date.month + 1;
    const year = month === 0 ? date.year + 1 : date.year;

    setSearchParams({ year, month });
  };

  const handleLeftClick = () => {
    const month = date.month - 1 < 0 ? 11 : date.month - 1;
    const year = month === 11 ? date.year - 1 : date.year;

    setSearchParams({ year, month });
  };

  return (
    <div style={{display: "flex"}}>
    <CategoriesContainer>
      <Title>Categories</Title>

      <TypePicker>
          <OptionType className="js-cat-opt activeType" onClick={handleShownCategory}>
            <div style={{display: "flex", alignItems: "center", gap: "8px"}}>
              {iconAddShow ? <AiOutlinePlusCircle/> : <AiOutlineMinusCircle/>}
              {/* <AiOutlinePlusCircle/> */}
              <h4 className="js-cat-name">Expenses</h4>
            </div>
            <ActiveLine ></ActiveLine>
          </OptionType>
          
          <OptionType className="js-cat-opt" onClick={handleShownCategory}>
            <div style={{display: "flex", alignItems: "center", gap: "8px"}}>
              {iconAddShow? <AiOutlinePlusCircle/> : <AiOutlineMinusCircle/>}
              {/* <AiOutlinePlusCircle/> */}
              <h4 className="js-cat-name">Income</h4>
            </div>
            <ActiveLine ></ActiveLine>
          </OptionType>
      </TypePicker>

      <MonthPicker
        label={format(new Date(date.year, date.month), "MMMM yyyy")}
        onRightClick={handleRightClick}
        onLeftClick={handleLeftClick}
      />
      <Categories {...{ date, type: selectedType }} />
    </CategoriesContainer>
    <TransactionsContainer>
      <Transactions></Transactions>
    </TransactionsContainer>
    </div>
  );
}

export default CategoriesPage;

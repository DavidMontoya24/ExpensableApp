import CategoryCard from "../CategoryCard";
import PropTypes from "prop-types";
import { Wrapper } from "./styles";
import styled from "@emotion/styled";
import { GrAdd } from "react-icons/gr";
import { useState } from "react";
import InputForm from "../InputForm/input_form";

const StyledNewCatContainer = styled.div`
  border-radius: 0.5rem;
  border: 2px dotted gray;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  max-width: 200px;
  cursor: pointer;
  & svg{
    width: 20px;
    height: 20px;
  }
`

const StyledBackground = styled.div`
  background-color: rgba(0, 0, 0, 0.75);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
function CategoriesList({ data, onAddTransaction, date }) {
  const [showInput, setShowInput] = useState(false)

  function handleClick() {
    setShowInput(!showInput);
  }

  window.onclick = function(e) {
    if(e.target.id === "modalblack"){
      setShowInput(false)
    }
  }

  return (
    <Wrapper>
      {data.map((category) => (
        <CategoryCard
          key={category.id}
          category={category}
          onAddTransaction={onAddTransaction}
          date={date}
        />
      ))}
      <StyledNewCatContainer onClick={handleClick}>
        <GrAdd />
      </StyledNewCatContainer>
      {showInput && (
        <StyledBackground id="modalblack" >
          <InputForm />
        </StyledBackground>
        )}
    </Wrapper>
  );
}

CategoriesList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

export default CategoriesList;

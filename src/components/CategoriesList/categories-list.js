import CategoryCard from "../CategoryCard";
import PropTypes from "prop-types";
import { Wrapper } from "./styles";
import styled from "@emotion/styled";
import { GrAdd } from "react-icons/gr";

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
    fill: blue;
    width: 20px;
    height: 20px;
  }
`
function CategoriesList({ data, onAddTransaction, date }) {
  console.log(data)
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
      <StyledNewCatContainer><GrAdd /></StyledNewCatContainer>
    </Wrapper>
  );
}

CategoriesList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

export default CategoriesList;

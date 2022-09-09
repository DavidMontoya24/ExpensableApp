import styled from "@emotion/styled";
import { BsXLg } from "react-icons/bs";
import { colors } from "../../styles";
import { useState } from "react";
import CustomOptions from "./custom_options";
import { typography } from "./"
// import "./input-form.css"

const StyledInputForm = styled.div`
  width: 280px;
  height: 500px;
  border-radius: 8px;
  background-color: ${colors.white};
  padding: 16px;
`

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`

const StyledFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  & h3 {
    text-transform: uppercase;
  }
`

const OptionsContainer = styled.div`
  justify-content: space-around;
  gap: 16px;
  display: flex;
  flex-wrap: wrap;
`

const dataColors = [
  {id: 1, value: "red", color:"#EF4444"},
  {id: 2, value: "orange", color: "#F97316"},
  {id: 3, value: "yellow", color: "#F59E0B"},
  {id: 4, value: "green", color: "#10B981"},
  {id: 5, value: "teal", color: "#14B8A6"},
  {id: 6, value: "cyan", color: "#06B6D4"},
  {id: 7, value: "light-blue", color: "#0EA5E9"},
  {id: 8, value: "blue", color: "#3B82F6"},
];

function InputForm() {
  const [selectedColor, setSelectedColor] = useState("");

  return (
    <StyledInputForm>
      <StyledHeader>
        <h2>New Category</h2>
        <BsXLg />
      </StyledHeader>
      <StyledFormContainer >
        <div>
          <label>
            <h3>Name</h3>
            <input type="text"/>
          </label>
        </div>

        <div>
          <label>
            <h3>Color</h3>
            <OptionsContainer >
              {dataColors.map(element => {
                return <CustomOptions data={element}/>
              })}
              {/* <input type="radio" name="color-btn" value="red"/>
              <input type="radio" name="color-btn" value="orange"/>
              <input type="radio" name="color-btn" value="yellow"/>
              <input type="radio" name="color-btn" value="green"/>
              <input type="radio" name="color-btn" value="teal"/>
              <input type="radio" name="color-btn" value="cyan"/>
              <input type="radio" name="color-btn" value="light-blue"/>
              <input type="radio" name="color-btn" value="blue"/> */}
            </OptionsContainer>
          </label>
        </div>

        <div>
        </div>

        <button>Create</button>
      </StyledFormContainer>
    </StyledInputForm>
  )
}

export default InputForm;
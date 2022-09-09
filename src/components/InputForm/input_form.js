import styled from "@emotion/styled";
import { BsXLg } from "react-icons/bs";
import { colors, fonts, typography } from "../../styles";
import { useState } from "react";
import { dataColors, dataIcons } from "../Categories/utils";
import { OptionColor, OptionIcon } from "./custom_options";
import Button from "../Button/button";

// import "./input-form.css"
const StyledInputForm = styled.div`
  width: 280px;
  height: 500px;
  border-radius: 8px;
  background-color: ${colors.white};
  padding: 16px;
  font-style: ${fonts.primary};
`

const StyledInput = styled.input`
  width: 100%;
  border-radius: 6px;
  border: 1px solid ${colors.gray[200]};
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
    ${typography.text.xs}
    line-height: 2rem;
    font-weight: 400;
    letter-spacing: 0.125em;
  }
`

const OptionsContainer = styled.div`
  justify-content: space-around;
  gap: 16px;
  display: flex;
  flex-wrap: wrap;
`

function InputForm() {
  const [selectedName, setSelectedName] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedIcon, setSelectedIcon] = useState("");

    const handleClickColor = (event) => {
      // event.preventDefault();
      const activeElement = document.querySelector(".activeColor");
      if (activeElement) {
        activeElement.classList.remove("activeColor");
      }
      const colorValue = event.target.getAttribute("value");
      event.target.classList.add("activeColor");
      setSelectedColor(colorValue);
    }
    
    const handleClickIcon = (event) => {
      // event.preventDefault();
      const activeElement = document.querySelector(".activeIcon");
      if (activeElement) {
        activeElement.classList.remove("activeIcon");
      }
      const iconValue = event.target.closest(".js-select-icon").getAttribute("value");
      event.target.closest(".js-select-icon").classList.add("activeIcon");
      setSelectedIcon(iconValue);
    }

    const handleInputName = (e) => {
      const capitalize = (str) => { return str.charAt(0).toUpperCase() + str.slice(1);}
      setSelectedName(capitalize(e.target.value))
      console.log(selectedName)
    }

    function submit(event) {
      event.preventDefault();
      console.log(selectedName, selectedColor, selectedIcon)
    }

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
            <StyledInput type="text" onChange={handleInputName}/>
          </label>
        </div>

        <div>
          <label>
            <h3>Color</h3>
            <OptionsContainer >
              {dataColors.map(element => {
                return <OptionColor key={element.id} data={element} onClick={handleClickColor}/>
              })}
            </OptionsContainer>
          </label>
        </div>

        <div>
          <label>
            <h3>Icon</h3>
            <OptionsContainer >
              {dataIcons.map(element => {
                return <OptionIcon key={element.id} data={element} onClick={handleClickIcon}/>
              })}
            </OptionsContainer>
          </label>
        </div>

        <Button onClick={submit} isFullWidth={true} style={{backgroundColor: "#3A824D", color: "white"}}>Create</Button>
      </StyledFormContainer>
    </StyledInputForm>
  )
}

export default InputForm;
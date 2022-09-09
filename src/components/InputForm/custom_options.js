import styled from "@emotion/styled";
import { colors } from "../../styles";

const StyledOptionColor = styled.div`
  width: 43px;
  height: 43px;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${({color}) => color};
  &:hover {
    outline: 3px solid ${({color}) => color};
    outline-offset: 2px;
  }
  &.activeColor{
    outline: 3px solid ${({color}) => color};
    outline-offset: 2px;
  }
`

const StyledOptionIcon = styled.div`
  width: 43px;
  height: 43px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: ${colors.gray[600]};
    & svg {
    color: ${colors.white};
    }
  }
  & svg {
    height: 25px;
    width: 25px;
    color: ${colors.gray[600]};
  }
  &.activeIcon{
    background-color: ${colors.gray[600]};
    & svg {
    color: ${colors.white};
    }
  }
`

export function OptionColor({data, onClick,...rest}){
  return (
    <StyledOptionColor color={data.color} onClick={onClick} value={data.value}/>
  )
}

export function OptionIcon({data, onClick,...rest}){
  return (
    <StyledOptionIcon  className="js-select-icon" onClick={onClick} value={data.value}>
      {<data.icon />}
    </StyledOptionIcon>
  )
}
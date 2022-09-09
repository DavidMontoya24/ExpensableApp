import styled from "@emotion/styled";

const StyledOption = styled.div`
  width: 43px;
  height: 43px;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${({color}) => color};
  &:hover {
    outline: 3px solid ${({color}) => color};
    outline-offset: 2px;
  }
`

function CustomOptions({data, ...rest}){
  return (
    <StyledOption key={data.id} color={data.color} />
  )
}

export default CustomOptions;
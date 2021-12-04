import styled from "styled-components";

type ContainerProps = {
  isActive: boolean
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  background: #20212c;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
  align-items: center;

  input{
    width: 25px;
    height: 25px;
    margin-right: 10px;
  }

  label{
    color: #ccc;
    text-decoration: ${props => props.isActive ? "line-through" : "initial"}
  }
`;

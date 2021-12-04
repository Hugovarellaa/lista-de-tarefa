import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid #555;
  border-radius: 15px;
  padding: 10px;
  margin: 20px 0;

  display: flex;
  align-items: center;

  .image {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }

  input {
    border: 0;
    background: transparent;
    outline: 0;
    color: #ffffff;
    font-size: 18px;
    flex: 1;
  }
`;

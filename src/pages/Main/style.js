import styled from "styled-components";

export const Container = styled.div`
  max-width: 700px;
  background: #fff;
  border-radius: 4px;
  padding: 30px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  margin: 80px auto;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
  }

  img {
    width: 80px;
  }

  h1 {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-itens: center;
    justify-content: center;
    text-align: center;

    font-family: SF Mono, Arial;
  }
`;

export const divButton = styled.div``;
export const SubmitButton = styled.button`
  background: #9400d3;
  border: 0;
  border-radius: 4px;
  color: #fff;
  margin-left: 10px;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  outline: none;
  transition-duration: 0.4s;
  --color: #8b008b;
  --color-light: #8b008b;
  --color-dark: #8b008b;

  a {
    margin-left: 20px;
  }

  :focus {
    outline: none;
    box-shadow: none;
    background: #9400d3;
  }
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 20px;

  li {
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    & + li {
      border-top: 1px solid #eee;
    }

    a {
      color: #0d2636;
      text-decoration: none;
    }
  }
`;

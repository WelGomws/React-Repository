import styled from "styled-components";
import { Link } from "react-router-dom";

export const Loading = styled.div`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Container = styled.div`
  max-width: 700px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  padding: 30px;
  margin: 80px auto;
`;

export const BackButton = styled(Link)`
  border: 0;
  outline: 0;
  background: #9400d3;
  margin-left: 10px;
  border-radius: 4px;
  color: #fff;
  padding: 0 15px;
  width: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  transition-duration: 0.4s;

  &:hover {
    background: #8b008b;
  }
`;

export const Owner = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 150px;
        border-radius: 20px;
        margin: 20px 0;
    }

    h1 {
        font-size: 30px;
        color: #0D2636;
    }

    p {
        margin-top 5px;
        font-size: 14px;
        color: #000;
        text-align: center;
        line-height: 1.4;
        max-width: 400px;
    }
`;

export const PullsList = styled.ul`
  margin-top: 30px;
  padding-top: 30px;
  border-top: 1px solid #eee;
  list-style: none;

  li {
    display: flex;
    padding: 15px 10px;

    & + li {
      margin-top: 12px;
    }

    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 2px solid #0d2636;
    }

    div {
      flex: 1;
      margin-left: 12px;
    }

    strong {
      font-size: 15px;

      a {
        text-decoration: none;
        color: #222;
        transform: 0.3s;

        &:hover {
          color: #0071db;
        }
      }
    }
  }
`;

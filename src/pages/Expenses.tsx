import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #23283d;
`;

export const Title = styled.h2`
  color: white;
`;

export default function Expenses() {
  return (

    <>
      <Title>Expenses</Title>
      <Link to='/'> Return </Link>
    </>

  );
}
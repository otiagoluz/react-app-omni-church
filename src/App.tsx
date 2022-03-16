import { useState } from 'react'
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
`;

function App() {
  const [count, setCount] = useState(0)

  return (
    <h1>Bookkeeper</h1>
  )
}

export default App

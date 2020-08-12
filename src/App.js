import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter'
import InputSample from './InputSample'

import './App.css';


function App() {
  return (
    <>
    <Wrapper>
    <Hello name="dani" color="red" isSpecial={true}/>
    <Hello color="blue"/>
    </Wrapper>
    <Counter />
    <InputSample/>
    </>
  );
}

export default App;

import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`

const App = () => {
  const [progress, setProgress] = useState(0);

  const increaseProgress = () => {
    setProgress((prev) => Math.min(prev + 10, 100));
    if (progress === 100) alert(`Your Progress is ${progress}%`);
  };

  const decreaseProgress = () => {
    setProgress((prev) => Math.min(prev - 10, 100));
    if (progress <= 0) alert("Progress cannot be Negative");
    setProgress(0);
  };

  const resetProgress = () => {
    setProgress(0);
  };

  return (
    <Container>
      <h1>Progress Bar</h1>
      <ProgressBar progress={progress} />
      <p>Progress: {progress}%</p>
      <ButtonContainer>
        <button onClick={increaseProgress}>Increase Progress</button>
        <button onClick={resetProgress}>Reset</button>
        <button onClick={decreaseProgress}>Decrease Progress</button>
      </ButtonContainer>
    </Container>
  );
};

export default App;

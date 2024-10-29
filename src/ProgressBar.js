import React from 'react';
import styled from 'styled-components';

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 30px;
  background-color: #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
`;

const Progress = styled.div`
  height: 100%;
  width: ${({ progress }) => progress}%;
  background-color: ${({ progress }) => (progress === 100 ? '#4caf50' : '#3f51b5')};
  transition: width 0.3s ease-in-out;
`;

const ProgressBar = ({ progress }) => {
  return (
    <ProgressBarContainer>
      <Progress progress={progress} />
    </ProgressBarContainer>
  );
};

export default ProgressBar;
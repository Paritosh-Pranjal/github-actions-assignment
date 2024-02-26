import { Stack, styled } from '@mui/material';
import Button from 'components/atoms/Button';
import Typography from 'components/atoms/Typography';
import React, { useState } from 'react';


const StyledButton = styled(Button)({
    backgroundColor: 'orange',
    ':hover' : {
        backgroundColor: 'darkorange',
    }
})

const CounterApp = () => {
  const [counter, setCounter] = useState<number>(0);

  const IncreaseButtonClick = (e: any) => {
    setCounter((prevValue) => prevValue - 1);
  };

  const DecreaseButtonClick = (e: any) => {
    setCounter((prevValue) => prevValue + 1);
  };

  return (
    <Stack direction={'row'} gap={'20px'}>
      <StyledButton onClick={IncreaseButtonClick}>-</StyledButton>
      <Typography>Counter Value :  {counter}</Typography>
      <StyledButton onClick={DecreaseButtonClick}>+</StyledButton>
    </Stack>
  );
};

export default CounterApp;

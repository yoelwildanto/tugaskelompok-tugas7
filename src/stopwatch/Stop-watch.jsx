import React, { useState, useEffect } from 'react';
import { Button } from '@chakra-ui/button';
import { Box, Text } from '@chakra-ui/layout';

function Stopwatch99() {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        // Limit the count to 99 minutes (5940 seconds)
        if (time < 5940) {
          setTime((prevTime) => prevTime + 1);
        } else {
          clearInterval(interval);
          setIsRunning(false);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning, time]);

  const start = () => {
    setIsRunning(true);
  };

  const stop = () => {
    setIsRunning(false);
  };

  const reset = () => {
    setIsRunning(false);
    setTime(0);
  };

  const displayMinutes = Math.floor(time / 60).toString().padStart(2, '0');
  const displaySeconds = (time % 60).toString().padStart(2, '0');

  return (
    <Box borderRadius={10} bg={'black'}>
      <Text textColor={'white'}>Stopwatch</Text>
      <Box px={50} letterSpacing={0} fontWeight={600} 
      fontSize={130} textColor={'white'} display={'flex'} justifyContent={'center'}>
        <Text>{displayMinutes}:</Text>
        <Text >{displaySeconds}</Text>
      </Box>
      <Box >
        <Button mb={'50px'} w={'50px'} h={'50px'} color={'white'} bg={'#09AF03'} border={'transparent'} 
        onClick={start} disabled={isRunning}>
          Start
        </Button>
        <Button mb={'50px'} mx={'60px'} w={'50px'} h={'50px'} color={'white'} bg={'#EF0101'}  border={'transparent'}
        onClick={stop} disabled={!isRunning}>
          Stop
        </Button>
        <Button mb={'50px'} w={'50px'} h={'50px'} color={'white'} bg={'#FFC607'} border={'transparent'}
        onClick={reset}>Reset</Button>
      </Box>
    </Box>
  );
}

export default Stopwatch99;

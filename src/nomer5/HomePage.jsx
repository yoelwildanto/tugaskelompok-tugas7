import React, { useState } from 'react';
import { Box, Input, Heading, Container, IconButton } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import {PiPaperPlaneRightFill} from 'react-icons/pi'
import SearchList from '../nomer3';
// import Stopwatch from '../nomer2/stopwatch';
import Stopwatch99 from '../stopwatch/Stop-watch';
import UserTable from '../nomer 4';

function HomePage() {
  const [expression, setExpression] = useState('');
  const navigate = useNavigate();

  const handleExpressionChange = (e) => {
    setExpression(e.target.value);
  };

  const handleGoToList = () => {
    navigate('/list', {state: {expression} });
  };

  return (
    <Container >
    <Box 
    bg={'black'}
    border={'3px solid blue'}
    color={'white'}
    borderRadius={10}
    p={4}>
      <Heading color={'white'} as="h1" mb={4} fontWeight={550}>
        ChitChat - Express Your Feeling
      </Heading>
      <Box display={'flex'} >
      <Input
      variant={'filled'}
        as="textarea"
        placeholder="What's on your mind?"
        value={expression}
        onChange={handleExpressionChange}
        mb={4}
        resize="vertical"
        htmlSize={12}
        h={'100px'}
      />
      <IconButton 
      icon={<PiPaperPlaneRightFill/>}
      colorScheme="twitter" 
      borderRadius={900}
      ml={2}
      mt={14}
      onClick={handleGoToList}>
      </IconButton>
      </Box>
    </Box>

    <SearchList/>
    {/* <Stopwatch/> */}
    <Stopwatch99/>
    <UserTable/>
    </Container>   
    
  );
}

export default HomePage;
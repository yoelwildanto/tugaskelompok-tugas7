import React, { useState } from 'react';
import { Box, Input, Heading, Container, IconButton } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import {PiPaperPlaneRightFill} from 'react-icons/pi'
import SearchList from '../nomer3';

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
    <Container border={'blue'}>
    <Box 
    bg={'black'}
    border={'1px white'}
    p={4}>
      <Heading color={'white'} as="h1" mb={4} fontWeight={550}>
        ChitChat - Express Your Feeling
      </Heading>
      <Box display={'flex'} >
      <Input
      variant={'filled'}
        type="text"
        placeholder="What's on your mind?"
        value={expression}
        onChange={handleExpressionChange}
        mb={4}
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
    </Container>   
    
  );
}

export default HomePage;
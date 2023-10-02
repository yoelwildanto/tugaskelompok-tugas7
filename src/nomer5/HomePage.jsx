import React, { useState } from 'react';
import { Box, Button, Input, Heading } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
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
    <Box p={4}>
      <Heading as="h1" mb={4}>
        ChitChat - Express Your Feeling
      </Heading>
      <Input
        type="text"
        placeholder="What's on your mind?"
        value={expression}
        onChange={handleExpressionChange}
        mb={4}
      />
      <Button colorScheme="teal" onClick={handleGoToList}>
        Go to List
      </Button>
      <SearchList/>
    </Box>
    
    
  );
}

export default HomePage;
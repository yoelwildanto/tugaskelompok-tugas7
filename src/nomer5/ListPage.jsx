import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

function ListPage() {
  const location = useLocation();
  const expression = location.state?.expression || '';

  const navigate = useNavigate();

   const handleGoToHome = () => {
    navigate('/');
  };

  return (
    <Box p={4}>
      <Heading as="h1" mb={4}>
        ChitChat - Express Your Feeling
      </Heading>
      <Box borderWidth="1px" borderRadius="lg" p={4} mb={4}>
        <Text>{expression}</Text>
      </Box>
      <Button colorScheme='teal' onClick={handleGoToHome}>Home</Button>
    </Box>
  );
}

export default ListPage;

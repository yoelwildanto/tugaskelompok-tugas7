import React from 'react';
import { Box, Heading, IconButton, Text } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import { BsPersonCircle }  from 'react-icons/bs'

function ListPage() {
  const location = useLocation();
  const expression = location.state?.expression || '';

  const navigate = useNavigate();

   const handleGoToHome = () => {
    navigate('/');
  };

  return (
    <Box bg={'black'} p={4} 
    flexDir={'column'} display={'flex'} 
    justifyContent={'center'}
    border={'3px solid blue'}>
      <Heading color={'white'} as="h1" mb={4}>
        ChitChat - Express Your Feeling
      </Heading>
      <Box display={'flex'} justifyContent={'center'}>
      <IconButton mt={2.5} mr={4} color={'blue'} bg={'transparent'} 
       fontSize={50} 
      borderRadius={90} icon={<BsPersonCircle/>} />
      <Box 
      color={'white'}
      bg={'blue'}
      border={'transparent'}
      display={'flex'}
      justifyContent={'center'}
      borderTopRadius={25}
      borderBottomRightRadius={25}
      borderWidth="1px" p={0} mb={4}
      fontSize={30}
      fontWeight={600}
      >
        <Text m={2}>{expression}</Text>
      </Box>
      </Box>
      <Button colorScheme='teal' onClick={handleGoToHome}>Home</Button>
    </Box>
  );
}

export default ListPage;

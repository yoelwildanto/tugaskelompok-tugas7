import React, { useState } from 'react';
import { Box, Input,Text, Grid, GridItem, Container, Flex } from '@chakra-ui/react';
// import a from '../asset/linear.png'

const initialList = [
  'Banana',
  'Apple',
  'Orange',
  'Mango',
  'Pineapple',
  'Watermelon',
  'Strawberry',
  'Persimmon',
];

function SearchList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState(initialList);

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    if (searchTerm === '') {
      setFilteredItems(initialList);
    } else {
      const filteredItems = initialList.filter((item) =>
        item.toLowerCase().includes(searchTerm)
      );
      setFilteredItems(filteredItems);
    }
  };

  return (
    <Container 
    bgImage="url('/asset/linear.png')"
    bg="pink"
    bgPosition={'center'}>
    <Box textAlign="center">
    <Flex justifyContent={'center'} flexDirection={'row'}>
        <p>Search: </p>
      <Input
        h={'20px'}
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        mt={15}
        mx={10}
        border={'transparent'}
      />
    </Flex>
      <Grid templateColumns='1fr' gap={4} mt={4}>
        {filteredItems.map((item, index) => (
          <GridItem borderRadius={'20px'} padding={'1'} w={'150px'} bg='white' key={index}>
            <Text>{item}</Text>
          </GridItem>
        ))}
      </Grid>
    </Box>
    </Container>
  );
}

export default SearchList;

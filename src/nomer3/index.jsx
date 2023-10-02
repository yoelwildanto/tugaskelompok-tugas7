import React, { useState } from 'react';
import { Box, Input,Text, Grid, GridItem, Container } from '@chakra-ui/react';

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
    borderRadius={5}
    bgImage="url('/asset/linear.png')"
    bgGradient="linear(to-br, yellow.200, red ,purple.500)"
    bgPosition={'center'}>
    <Box textAlign="center">
    <Box pt={3} mt={15} mb={0} display={'flex'} 
    justifyContent={'center'} 
    flexDirection={'row'}>
        <Text fontWeight={400}>Search: </Text>
      <Input
        variant={'filled'}
        h={'20px'}
        w={'170px'}
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        mx={1}
        borderRadius={3}
      />
    </Box>
      <Grid justifyItems={'center'} gap={1}>
        {filteredItems.map((item, index) => (
          <GridItem my={1.5} 
          borderRadius={'7px'} 
          padding={'0'} w={'120px'} bg='white' key={index}>
            <Text>{item}</Text>
          </GridItem>
        ))}
      </Grid>
    </Box>
    </Container>
  );
}

export default SearchList;

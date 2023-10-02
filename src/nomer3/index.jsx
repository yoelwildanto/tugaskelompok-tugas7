import React, { useState } from 'react';
import { Box, Input,Text, Grid, GridItem, Container } from '@chakra-ui/react';

const initialList = [
  'banana',
  'apple',
  'orange',
  'mango',
  'pineapple',
  'watermelon',
  'strawberry',
  'persimmon',
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
    <Container bg={'pink'}>
    <Box textAlign="center">
    <div>
        <h3>Search</h3>
      <Input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearch}
        mt={4}
      />
    </div>
      <Grid templateColumns='1fr' gap={4} mt={4}>
        {filteredItems.map((item, index) => (
          <GridItem bg='orange.300' key={index}>
            <Text>{item}</Text>
          </GridItem>
        ))}
      </Grid>
    </Box>
    </Container>
  );
}

export default SearchList;

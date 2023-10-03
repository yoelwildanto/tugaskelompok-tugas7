import { ChakraProvider} from '@chakra-ui/react';
import './App.css'
import AppRouter from './Router';
import { Route,Routes } from 'react-router-dom';
import HomePage from './nomer5/HomePage';
import ListPage from './nomer5/ListPage';
import Stopwatch from './nomer2/stopwatch';




function App() {
  return (
    <ChakraProvider>
      <div className="App">
      <Routes>
        <Route path='/' element={
        <HomePage/>}/>
        <Route path="/list" element={<ListPage/>}/>
      </Routes>

        
      </div>
    </ChakraProvider>
  );
}

export default App;

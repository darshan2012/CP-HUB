import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import { ChakraProvider } from '@chakra-ui/react'

const App = () => {
  return (
    
    <ChakraProvider>
      <Header />
      <ToastContainer />
      <Container className='my-2'>
        <Outlet />
      </Container>
      </ChakraProvider>
    
  );
};

export default App;
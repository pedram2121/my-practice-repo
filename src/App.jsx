import './index.css';
import Navbar from './Component/Navbar';
import Home from './Page/Home';
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import News from './Page/News';
import Container from './Component/Container';


function App() {


  return (
   <>
  <BrowserRouter>
  <Container>
    <Navbar/>
    <Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='/News' element={<News/>}/>
   </Routes>
  </Container>
  </BrowserRouter>
   </>
  )
}

export default App

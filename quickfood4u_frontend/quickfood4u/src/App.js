
import './App.css';
import Category from './components/Category';
import Search from './components/Search';
// import Home from './pages/Home';
import Pages from './pages/Pages';
import { BrowserRouter } from 'react-router-dom';
//import styled from "styled-components";
//import { Link } from 'react-router-dom';

import Navbar from './layout/NavbarAndFooter/Navbar';
import Footer from './layout/NavbarAndFooter/Footer';

function App() {
  return (
    <div className='d-flex flex-column min-vh-100' >
     
      <BrowserRouter>
      <Navbar />
        <div className='flex-grow-1'>

      
          <div className='py-4'>
            <Search />
            <Category />
            <Pages />
          </div>


        </div>
        <Footer />
        </BrowserRouter>
       
      
    </div>
  );
}

// const Logo = styled(Link)`
//  text-decoration: none;
//  font-size: 1.5rem;
//  font-weight: 400;
//  font-family: 'Lobster Two', cusrive;
// `;

// const Nav = styled.div`
// padding: 4rem 0rem;
// display: flex;
// justify-content: flex-start;
// align-items: center;
// svg{
//   font-size: 2rem;
// }
//`;

export default App;

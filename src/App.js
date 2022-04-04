import logo from './logo.svg';
import './App.css';
import Nav from './Componenets/Navbar';
import Head from './Componenets/header';
import Plate from './Componenets/Plate';
import CompFour from './Componenets/CompFour';
import CompFivee from './Componenets/CompFive';
import CompSix from './Componenets/CompSix';
import CompSev from './Componenets/Compsev';
import Footer from './Componenets/footer';

function App() {
  return (
   <>
   <div className='bg-[#111827]' >
<Nav/>
<Head/>
<Plate/>
<CompFour/>
<CompFivee/>
<div className=' bg-[#0D121C] '>
  <CompSix/>
</div>
<CompSev/>
<Footer/>
</div>
   </>
  );
}

export default App;

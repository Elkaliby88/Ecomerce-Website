import './App.css';
import Header from './components/header/Header';
import Footer from './Footer/Footer';
import Hero from './Hero/Hero';
import Products from './Products/Products';
import Slider from './Slider/Slider';
import Testimonals from './Testimonals/Testimonals';
import Virtual from './Virtual/Virtual';
function App() {
  return (
    <div className='App'>
      <Header/>
      <Hero/>
      <Slider/>
      <Virtual/>
      <Products/>
      <Testimonals/>
      <Footer/>
    </div>
  );
}

export default App;

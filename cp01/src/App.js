//import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header'
import Corpo from './components/corpo/Corpo'
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
    <div className="container">
      <Header/>
      <Corpo/>
      <Footer/>
    </div>
    </>
  );
}

export default App;

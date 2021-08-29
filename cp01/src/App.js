import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import lazy from './assets/img/lazy.png';

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <div className="corpo">
          <a href="#">Medicina</a>
          <h1>O que fazer em caso de suspeita de <br /> coronavírus?</h1>
          <p>Os sintomas mais comuns são similares aos de uma gripe. O que define um caso suspeito e <br /> quando ir para o hospital ou fazer exame?</p>
          <span>Por nome do aluno atualizado em 18 de ago 2020, 10h47 - Publicado em 30 mar 2020, 17h14</span>
        </div>
        <img src={lazy}/>
        <div>
          <figcaption>Se houver suspeita de coronavírus, a orientação é se isolar. O hospital deve ser procurado se os sintomas se agravarem. ilustração Daniel Almeida/SAÚDE é Vital</figcaption>
        </div>
      </div>
    </div>
  );
}

export default App;

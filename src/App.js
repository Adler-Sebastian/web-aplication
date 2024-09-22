import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='container'>
      <header>
        <p>Paragrafação inicial</p>
      </header>
      <main>
        <section className='box-titulo'>
          <h1>Saúde Mental</h1>
          <p>Landing page de Aplicações sobre Saúde Mental</p>
          <a href='reactjs.org' target='_blank'>Inicio</a>
        </section>
        <section className='box-req'>
          <h2>Ferramentas</h2>
          <p>Veja ferramentas abaixo que serão úteis nessa sua jornada </p>
          <div className='box-cards'>
            <div className='card'>
              <h3>Dicas</h3>
              <p>Encontre aqui dicas para deixar seu dia leve</p>
            </div>
            <div className='card'>
              <h3>Livros</h3>
              <p>Encontre aqui livros de auxílio</p>
            </div>
            <div className='card'>
              <h3>Feedback</h3>
              <p>Deixe aqui seu feedback do que podemos melhorar</p>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <p className='autor'>API Saúde Mental - Sebastian</p>
      </footer>
    </div>
  );
}

export default App;

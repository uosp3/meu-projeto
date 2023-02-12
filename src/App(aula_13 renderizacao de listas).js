import './App.css';
import OutraLista from './components/OutraLista';

function App() {

  const meusItens = ['React', 'Vue', 'Angular']  
  
  return (
    <div className='App'> 
      <h1>Renderização de Listas</h1>
      <OutraLista itens={meusItens}></OutraLista>
      <OutraLista itens={[]}></OutraLista>        
    </div>    
  );
}

export default App;

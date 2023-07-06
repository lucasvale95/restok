import './App.css';
import Title from './components/Title';

function App() {
  return (
    <div className="App">
      <Title />
      <button onClick={()=> new window.Notification("Cliquei no botão", {body: "body"})}>Teste</button>
    </div>
  );
}

export default App;

import './App.css';
import Greetings from './components/Greetings';


function App() {

  const name="Abhishek";
  const isLogin = true;
  
  return (
    <div className="App">
          <Greetings isLogin={isLogin} name={name} />
          

    </div>
  );
}

export default App;
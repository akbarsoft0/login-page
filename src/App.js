import { useState } from 'react';
import './App.css';
import Login from './components/Login';

function App() {
  const [print, setprint] = useState(true)
  return (
    <div className="App">


      <button type="button" onClick={() => setprint(!print)}>Login</button>
      {print ? <Login /> : null}
    </div>
  );
}

export default App;

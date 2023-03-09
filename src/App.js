import { useRef } from 'react';
import './App.css';
import Head from './Components/Head';
import Body from './Components/Body';

function App() {

  const toggler = useRef()

  function toggle() {
    toggler.current.classList.toggle('divu')
  }
  return (
    <div className="Calculator">
     <Head/>
    <Body/>
    </div>
  );
}

export default App;

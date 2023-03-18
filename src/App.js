import { useState } from 'react';
import './App.css';
import Modal from './components/Modal/Modal';
import Button from './components/Button/Button';
function App() {
  const [ show, setShow ] = useState(false)
  const handleShow  = () => setShow(!show)
  return (
    <div className="App">
      {show && <Modal 
      handleShow={handleShow}  />}
      <Button handleClick={handleShow}>
        Открыть модалку
      </Button>
    </div>
  );
}

export default App;

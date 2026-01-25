import { useState } from 'react';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  const [view, setView] = useState('login');

  return (
    <>
      {view === 'login' && <Login onChangeView={setView} />}
      {view === 'register' && <Register onChangeView={setView} />}
    </>
  );
}

export default App;

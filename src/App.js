import React from 'react';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Receipts from './components/Receipts';
import NavButtons from './components/NavButtons';
function App() {
  return (
    <div className="App p-4 relative">
       
      <Navbar/>
      <Search/>
      <Receipts/>
      <NavButtons/>
    </div>
  );
}

export default App;

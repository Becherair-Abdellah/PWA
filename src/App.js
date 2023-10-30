import React from 'react';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Receipts from './components/Receipts';
function App() {
  return (
    <div className="App p-4">
      <Navbar/>
      <Search/>
      <Receipts/>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Receipts from './components/Receipts';
import NavButtons from './components/NavButtons';
import Congrate from './components/Congrate';
function App() {
  const [notif,setNotif] = useState(true);
  return (
    <div className="App p-4 relative">
       {notif && <Congrate func={setNotif}/>}
      <Navbar/>
      <Search/>
      <Receipts/>
      <NavButtons/>
    </div>
  );
}

export default App;

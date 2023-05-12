import Header from "./components/Header";
import Contacts from "./components/Contacts";
import { useState } from "react"
import AddContact from "./components/AddContact";
import { Routes, Route } from "react-router-dom";
import Success from "./components/Success"


function App() {
  const [contacts,setContacts]=useState([
    {
        id:1,
        name:'',
        age:0,
        email:'',
        mobile:''
    }
  ])

  //add contact
  const addContact=(contact)=> {

    const newContact= { ...contact}
    setContacts([newContact])
  }
  return (
    <div className="container">
      <Header />
      <nav>
        <button className="btn"><Link to="/*"> Home</Link></button>
        <button className="btn"><Link to="/confirm"> Confirm</Link></button>
        <button className="btn"><Link to="/success"> Success</Link></button>

      </nav>
      
      <Routes>
        <Route path="/*" element={<AddContact onAdd={addContact}/>}/>
        <Route path="/confirm" element={<Contacts contacts={contacts}/>}/>
        <Route path="/success" element={<Success/>}/>
      </Routes>  
    </div>
  );
}

export default App;

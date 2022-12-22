import Contact from "./Contact"
import { Link } from "react-router-dom"
const Contacts = ({contacts}) => {
    
  return (
    <>
    <h2 className="heading"> Confirm your details:</h2>
    {contacts.map((contact)=>(
    <Contact /*key={contact.id}*/ contact={contact}/>
    
    ))}


    <button className="btn"><Link to="/success">Confirm</Link></button>

    </>
  )
}

export default Contacts
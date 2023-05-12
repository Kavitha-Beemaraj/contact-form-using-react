
const Contact = ({contact}) => {
  return (
    <div >
        <h3> Name: {contact.name}</h3>
        <h3> Age:{contact.age}</h3>
        <h3> Email id:{contact.email}</h3>
        <h3> Mobile no:{contact.mobile}</h3>
    </div>
  )
}

export default Contact
import './table.css'
import { Fragment, useState } from 'react';
import data from "../../mock-data.json"
import { nanoid } from 'nanoid' 
import ReadOnlyRow from '../../components/ReadOnlyRow';
import EditableRow from '../../components/EditableRow';
import {Box} from '@mui/material'

const Table = () => {
  const [contacts, setContacts] = useState(data);
  const [addFormData,setAddFormData] = useState({
    fullName:'',
    email: '',
    phoneNumber:'',
    address:'', 
  })
  const [editFormData, setEditFormData] = useState({
    fullName:'',
    email: '',
    phoneNumber:'',
    address:'',
  })

  const [editContactId, setEditContactId] = useState(null)

  const handleAddFormChange = (event) =>{
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData ={...addFormData};
    newFormData[fieldName] =  fieldValue;

    setAddFormData(newFormData)
  };
  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value

    const newFormData ={...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData)
  }
  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact ={
      id:nanoid(),
      fullName:addFormData.fullName,
      address:addFormData.address,
      phoneNumber:addFormData.phoneNumber,
      email:addFormData.email,
    }

    const newContacts = [...contacts, newContact];
    setContacts(newContacts)
  }
  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact ={
      id:editContactId,
      fullName:editFormData.fullName,
      address:editFormData.address,
      phoneNumber:editFormData.phoneNumber,
      email:editFormData.email,  
    }
    const newContacts =[...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId)

    newContacts[index] = editedContact;

    setContacts(newContacts); 
    setEditContactId(null)
  }
  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id)

    const formValues ={
      fullName:contact.fullName,
      address:contact.address,
      phoneNumber:contact.phoneNumber,
      email:contact.email
    }
    setEditFormData(formValues)
  }
  return (
    <div className='tablecontainer'>
        <div className="users">
          <div className='usercontainer'>
            <h3>User</h3>
            <a href='/' className='addbtn'>Add User</a>
          </div>
          <form onSubmit={handleAddFormSubmit} className='addForm'>
            <div className="formInputs">
            <input type="text"
            className='userInput'
             name="fullName" 
             required="required"
             placeholder='Enter a name....'
             onChange={handleAddFormChange}
             />
             <input type="text"
             className='userInput'
             name="email" 
             required="required"
             placeholder='Enter an email'
             onChange={handleAddFormChange}
             />
             <input type="text"
             className='userInput'
             name="phoneNumber" 
             required="required"
             placeholder='Enter a phone number....'
             onChange={handleAddFormChange}
             />
             <input type="text"
             className='userInput'
             name="address" 
             required="required"
             placeholder='Enter Address....'
             onChange={handleAddFormChange}
             />
             </div>
             <button type='submit' className='addbtnw'>Add user</button>    
          </form>
        </div>
        <Box style={{height:'100%'}} className='mainbox'>
        <form onSubmit={handleEditFormSubmit}>
        <div className="boxform">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact)=>(
              <Fragment> 
                {editContactId === contact.id ?
                  (<EditableRow editFormData={editFormData} handleEditFormChange={handleEditFormChange}/>) 
                : (<ReadOnlyRow contact={contact} 
                  handleEditClick={handleEditClick}
                  />)}
              </Fragment>
            ))}
          </tbody>
        </table>
        </div>
        </form>
        </Box>
    </div>
  )
}

export default Table 
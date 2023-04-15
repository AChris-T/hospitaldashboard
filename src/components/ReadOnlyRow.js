import React from 'react'
import {CiMenuKebab} from "react-icons/ci" 

const ReadOnlyRow = ({ contact,handleEditClick}) => {
  return (
    <tr>
    <td>{contact.fullName}</td>
    <td>{contact.email}</td>
    <td>{contact.phoneNumber}</td>
    <td>{contact.address}</td>
    <td>
       <button type='button' onClick={(event)=> handleEditClick(event, contact)}>
         <CiMenuKebab/>
        </button>
    </td>
  </tr>
  )
}

export default ReadOnlyRow
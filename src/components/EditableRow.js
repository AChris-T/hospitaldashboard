import React from 'react'

const EditableRow = ({editFormData, handleEditFormChange}) => {
  return (
   <tr>
    <td>
        <input type="text"
            className='editinput'
            required="required"
            placeholder='Enter your Name'
            name='fullName'
            value={editFormData.fullName}
            onChange={handleEditFormChange}
        />
    </td>
    <td>
        <input type="text"
            className='editinput'
            required="required"
            placeholder='Enter your email'
            name='email'
            value={editFormData.email}
            onChange={handleEditFormChange}
        />
    </td>
    <td>
        <input type="text"
            className='editinput'
            required="required"
            placeholder='Enter your phone number'
            name='phoneNumber'
            value={editFormData.phoneNumber}
            onChange={handleEditFormChange}
        />
    </td>
    <td>
        <input type="text"
            className='editinput'
            required="required"
            placeholder='Enter your address'
            name='address'
            value={editFormData.address}
            onChange={handleEditFormChange}
        /> 
    </td>
    <td>
        <button type='submit'>Save</button>
    </td>
   </tr>
  )
}

export default EditableRow
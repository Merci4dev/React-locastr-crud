// row component. this is respomsable to reander each row
import React from 'react'
import './rowStyles.css'

function RowCrud({el, setUserToEdit, deleteUser}) {
    // Destructuring the data coming from the table component
    let {name, lastname, age, email, id} = el;

  return (
        <tr className='row__table'>
            <td>{name}</td>
            <td> {lastname} </td>
            <td> {age} </td>
            <td> {email} </td>
            <td>
                {/* thi button make posibel to load the data to edit on the same form to add a user */}
                <button className='btn_style' onClick={() => setUserToEdit(el)}>
                    Edit
                </button>

                <button className='btn_style dl_btn' onClick={() => deleteUser(id)}>
                    Delete
                </button>
            </td>
        </tr> 


  )
}

export default RowCrud
// table component. this use the row component ro render each row
import React from 'react'
import './tableStyles.css'
import RowCrud from '../row/RowCrud.js'

function TableCrud({formData, setUserToEdit, deleteUser}) {
  return (
    <div className='table__container'>
      <h2>Crud Users Table</h2>

      {
        formData.length === 0 ?(
          <h3>No Userd Added</h3>
        ):(
          <table>
             <thead>
              <tr>
                <td>Name</td>
                <td>Last Name</td>
                <td>Age</td>
                <td>Email</td>
                <td>Actions</td>
              </tr>
            </thead>

            <tbody>

              {/* set the data into the table row */}
              {
                   formData.map(el => 
                    <RowCrud 
                    key={el.id} 
                    el={el}
                    setUserToEdit={setUserToEdit}
                    deleteUser={deleteUser}
                    />)
              }
            </tbody>
          </table>
        )
      }

    </div>
  )
}

export default TableCrud
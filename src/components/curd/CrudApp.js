import React,{useState, useEffect} from 'react'
import FormCrud from './form/FormCrud'
import TableCrud from './table/TableCrud'

function CrudApp({title}) {
  
  // the state variable to use
  const [db, setDB]  = useState([])
  const [userToEdit, setUserToEdit]  = useState(null)


  // if there is data at the localstorage this will be raad at first
  useEffect(() => {
    let user = localStorage.getItem('users')
    if(user){
      setDB(JSON.parse(user))
    }
  }, [])

  // saving the data at the local storage
  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(db))
  })

  // function to create the user
  const createUser = (formData) => {
    // create an id for each user
    formData.id = Date.now()

    setDB([...db, formData])
  }

  // function to update the user
  const updateUser = (formData) => {
    let newUser = db.map(el => el.id === formData.id? formData: el)
    setDB(newUser)
  }
  

  // function to delete the user
  const deleteUser = (id, formData) => {
    let isDelete = window.confirm(`Do you want to delete ${id}`)

    if(isDelete){
      let newUser = db.filter(el => el.id !==id)
      setDB(newUser)
    }
  }


  return (
    <section className='main__section'>
      <h2 className='form__title'>{title}</h2>
      <div className='grid_1_2'>
        <div>
          <FormCrud
            createUser={createUser}
            updateUser={updateUser}
            userToEdit={userToEdit}
            setUserToEdit={setUserToEdit}
          />
        </div>

        <div>
          <TableCrud
            formData={db}
            userToEdit={userToEdit}
            setUserToEdit={setUserToEdit}
            deleteUser={deleteUser}
          />
        </div>
      </div>
    </section>
  
    )
}

// Default props to render the title
CrudApp.defaultProps ={
  title: 'Basic Crud App'
}

export default CrudApp
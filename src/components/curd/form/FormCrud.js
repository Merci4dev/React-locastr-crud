// from component. this is responsable to render the form 
import React,{useState, useEffect} from 'react'
import './formStyles.css'

// form initial values
const initForm = {
    id:null,
    name: "",
    lastname:"",
    age: "",
    email:""
}

function FormCrud({createUser, userToEdit, setUserToEdit, updateUser}) {
    const [form , setForm]  = useState(initForm)

    // useEfect which updates the state variable. allows that when clicking on edit the data of that row pass to the form
    useEffect(() => {
        if(userToEdit){
            setForm(userToEdit)
        }else{
            setForm(initForm)
        }
    },[userToEdit])


    // Handle the onChange event of the inputs
    const handleChange = (e) =>{
        setForm({
            ...form, [e.target.name]: e.target.value
        })
    };

    // manage the  form submit event
    const handelSubmit = (e) => {
        // destructuring the data from the form
        const {name, lastname, age, email,id} = form
        e.preventDefault()

        // small validation
        if(!name || !lastname || !age || !email){
            alert('Please insert all the data')
            return;
        }

        if(id === null){
            // if on handleSubmit the id is empty the we will create an user
            createUser(form)

        }else{
            // if on handleSubmit the id is not empty the we will update the user
            updateUser(form)
        }
        handleReset();
    };

    // reset the for to null
    const handleReset = () => {
        setForm(initForm)
        setUserToEdit(null)
    };

  return (
    <div className='form__container'>
        <form onSubmit={handelSubmit}>
            <input 
                type='text'
                name='name'
                placeholder='User Name'
                
                autoFocus
                onChange={handleChange}
                value={form.name}
            />

            <input 
                type='text'
                name='lastname'
                placeholder='Lats Name'
                required
                onChange={handleChange}
                value={form.lastname}
            />

            <input 
                type='number'
                name='age'
                placeholder='User Age'
                required
                onChange={handleChange}
                value={form.age}
            />

            <input 
                type='email'
                name='email'
                placeholder='User Email'
                required
                onChange={handleChange}
                value={form.email}
            />

            <input 
                className='btn-style' 
                type='submit'
                value='Send'
                
                />
            <input 
                className='btn-style' 
                type='reset' 
                value='Reset Form'
                onClick={handleReset}
                />
        </form>
    </div>
  )
}

export default FormCrud
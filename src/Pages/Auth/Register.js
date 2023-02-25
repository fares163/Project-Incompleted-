import React, {useState} from 'react'
import './Register.css'
import {auth} from '../../firebase'
import {toast} from 'react-toastify'




const Register = () => {
  
  const [email,setEmail] = useState('');
  
  const handleSubmit = async (e) => {
    
    e.preventDefault();
    console.log(handleSubmit)
    const config = {
       url: 'http://localhost:3000/register/complete',
       handleCodeInApp: true,
    };
   
      
    await auth.sendSignInLinkToEmail(email, config);
    toast.success(
      
      `Un email est envoyé à ${email}.
       Merci de vérifier votre email pur terminez l'inscription`
      
      );

    //save Email into local storage:
    window.localStorage.setItem('emailForRegistration', email)
    // clear state when email sent:
    setEmail("");

  }

  const RegisterForm = () => <form onSubmit={handleSubmit}>

    <input 
    type="email" 
    className='form-control'  
    value={email} 
    placeholder="Addresse Email"
    onChange={e => setEmail(e.target.value)}
    autoFocus
    />

    <button type="submit" className="amazing-button">
     Enregistrer
    </button>
    
  </form> 


  return (
    <div className='Container p-5'>
      <div className='row'>
        
       <div className='Containerr'>
       
         <p className='text'> Entrez votre email pour vous inscrire</p> 
         
         {RegisterForm()}
         

       </div>

      </div>

    </div>
  )
}

export default Register

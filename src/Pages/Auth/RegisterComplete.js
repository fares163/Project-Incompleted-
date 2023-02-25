import React, {useState, useEffect} from 'react'
import './Register.css'
import {auth} from '../../firebase'
import {toast} from 'react-toastify'




const RegisterComplete = ({history}) => {
  
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('')


  //get the registered email after refreshing.
  useEffect(() => {
    setEmail(window.localStorage.getItem("emailForRegistration"))
  }, [] );

  const handleSubmit = async (e) => {
    
    e.preventDefault();

    //validation (email and password)

    if(!email || !password) {
    toast.error(` Addresse Email and Mot de pass sont obligatoire.`)
    return;
    }

  
    // password < 6 char

    if (password.length < 6) {
      toast.error(`le mot de pass doit etre plus de 6 chiffre / charactere`)
      return;
    }
   
    try {
        //send link to email to complete registration
        const result = await auth.signInWithEmailLink (
            
            email,
            window.location.href
            );
         
        // Checking that email is verified
        if(result.user.emailVerified) {
        
        // remove the email from localstorage to reset.
        window.localStorage.removeItem("emailForRegistration"); 
        // get the current user now (with Firebase and not localStorage)
        let user = auth.currentUser
        // Update the user password to give him a pass.
         await user.updatePassword(password);
         //get user Token
         const idTokenResult = await user.getIdTokenResult();

         //redux (later)
         console.log('user', user, "idTokenResult", idTokenResult)
         //redirect user to home page.

        history.push('/');
        }

        // catch errors in case link expired or wrong
    }catch (error) {
        console.log(error)
        toast.error(error.message)
    };

  };

  // complete regis form (editing email disabled / added password to verify the log in)

  const completeRegistrationForm = () => 
  <form 
  onSubmit={handleSubmit}>

    
    <input 
    type="email" 
    className='form-control'  
    value={email} 
    disabled
    />
      <input 
    type="password" 
    className='form-control'  
    value={password} 
    placeholder='Mot de Passe'
    onChange={(e) => setPassword(e.target.value)}
    autoFocus
    />

    <button type="submit" className="amazing-button">
     Enregistrer
    </button>
    
  </form> 


   // returning the function above (registration form)

  return (
    <div className='Container p-5'>
      <div className='row'>
        
       <div className='Containerr'>
       
         <p className='text'> Entrez votre email pour vous inscrire</p> 
         
         {completeRegistrationForm()}
         

       </div>

      </div>

    </div>
  )
}

export default RegisterComplete;

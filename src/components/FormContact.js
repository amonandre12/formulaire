// The creation form contact 
import {useState} from 'react'
import Header from './Header'
import '../styles/FormContact.css'

function FormContact() {
  const [userName , setUserName] =  useState('')
  const [userEmail , setUserMail] = useState('')
  const [userPassword , setUserPassword] = useState('')
  const [message , setMessage] = useState('')
  const [color , setColor] = useState ('')


  function onSubmitForm (e) {
    e.preventDefault() ;
   
    if (userName.trim() === '' || userEmail.trim() === '' || userPassword.trim() === '') {
      setMessage('Veuillez remplir tous les champs !') 
      setColor('red')
    } else if (!userEmail.includes('@' || !userEmail.includes('.')) ){
      setMessage('Email invalide ! ') 
    } else {
        setMessage('Inscription  reussie avec succès !')  
        setColor('green')
        console.log('Votre nome est : ' +  userName)
        console.log('Votre adresse, mail est :' + userEmail)
        setUserName('') ;
        setUserMail('') ;
        setUserPassword('') ;
    }

  setTimeout(() => 
    setMessage('') , 2000)
  }
  

   return (
    <div className="form_section">
      <form className="contact_form">

      <Header text = 'Welcome to our app '/>

        <div className="form_group">
          
        <label htmlFor="name">Name</label>
      <input 
      value={userName}
      type='text'
      required
      onChange={(e) => setUserName(e.target.value)}
      placeholder='Your Name'
      />
       </div>

      <div className="form_group">

       <label htmlFor="email">Email</label>
      <input 
      value={userEmail}
      type='email'
      required
      onChange={(e) => setUserMail(e.target.value)}
      placeholder='Your Email'
      />
       </div>

       <div className="form_group">

      
       <label htmlFor="password">Password</label>
      <input 
      value={userPassword}
      type= 'password' 
      required
      onChange={(e) => setUserPassword(e.target.value)}
      placeholder='Your password'
      />
       </div>

       <button className='btn_send' onClick={onSubmitForm}>S'inscrire</button>

       
      {color && <p style={{color : color} }>{message}</p>}
      </form> 
    </div>
   )
  
}
export default FormContact
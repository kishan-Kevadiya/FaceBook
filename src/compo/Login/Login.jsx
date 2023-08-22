import React from 'react'
import './login.css'
import { Button } from '@material-ui/core'
import { auth,provider } from '../../firebase';
import { useStateValue } from '../../provider/stateProvider';
import { actionType } from '../../provider/Reducer';
import welcome from '../../sound/welcome.mp3'

const Login = () => {

    // const welcome = './sound/welcome.mp3'


    
    

    
    const [state,dispatch] = useStateValue()
    
    const signIn = () => {
    new Audio(welcome).play();
    auth.signInWithPopup(provider).then((result)=>{

        dispatch({
            type: actionType.SET_USER,
            user: result.user,
        })

        console.log(result);
    }).catch((error) => alert(error.message))
}

  return (
    <div className='login'>
        <div className="logo">
            <img src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo-500x313.png" alt="Facebook_logo" />
            <img src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-2019-500x286.jpg" alt="Facebook_text_logo" />
        </div>
<Button type='submit' onClick={signIn}> <img src="https://tse1.mm.bing.net/th?id=OIP.IaoQZRzMTYotymEDBMXk1wHaHa&pid=Api&rs=1&c=1&qlt=95&w=87&h=87" alt="google_Auth" className='GoogleAuth' /> Sign In With Google</Button>
    </div>
  )
}

export default Login
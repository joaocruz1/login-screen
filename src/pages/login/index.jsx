import { useContext, useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {Container, Form} from './styles'
import { validateEmail, validatePassword } from '../../Utils/validators';
import { AuthContext } from '../../Contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import Span from '../../components/Span';
import LinkTo from '../../components/Link';







const Login = () => {

    
    const {users,setAuth, auth} = useContext(AuthContext)
    const [userlogin, setUserLogin] = useState({email:"",password:""})
    const [span,setSpan] = useState("")
   
    
    const navigate = useNavigate()

 
    const handleSubmit = async (e) => {
        e.preventDefault()
        
        try {
            
            {users.map(user=>{ if(user.email === userlogin.email && user.password=== userlogin.password){
                    setAuth(true)
                    navigate("/home")
            }
            else{

                setSpan("Email ou senha não econtrados ou incorretos")

            }

            })}
            

    
            
        }
        catch(err) {
            alert('Algo deu errado com o Login' + err)
        }
       
    }
    

    const handleChange = (e)=>{
        
        setUserLogin({...userlogin,[e.target.name]:e.target.value})
        setSpan("")
        
    }
   

    const validateInput= () =>{

        return validateEmail(userlogin.email) && validatePassword(userlogin.password)
    }
      
  


    return ( 
        <Container>
            
            <Form>
                <h1>Welcome 👋</h1>
               
                <Input
                    name='email'
                    placeholder='Digite o seu e-mail'
                    onChange={handleChange}
                    type='email'
                    value={userlogin.email}
                />
                <Input
                    name='password'
                    placeholder='Digite a sua senha'
                    onChange={handleChange}
                    type='password'
                    value={userlogin.password}
                />
                <Span text={span} />
                <Button type='submit'
                        text='Entrar'
                        onClick={handleSubmit}
                        disabled={!validateInput()}
                />
                <div>
                    <p>Não possui conta?</p>
                    <LinkTo to='/signin' text='Cadastrar' /> 
                </div>
            </Form>
        </Container>
     );
}
 
export default Login;

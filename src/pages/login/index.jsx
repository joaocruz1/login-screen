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

    
    const {setAuth, user, setUser} = useContext(AuthContext)
    const [text,setText] = useState("")
    
    const navigate = useNavigate()

    localStorage.setItem(1,"vaiiii")

    console.log(localStorage.getItem(1))

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        try {
            
            
            if(user.email === "joaovcruz50@gmail.com" && user.password === "1234567"){
                setText("Login Efetuado com Sucesso!")
                setAuth(true)
                navigate('/home')    
                
                

            }else{
                setText("Email ou Senha Incorretos!")
                
                
            }
            
            
            setUser({email:'', password:''})
            
            
                       

            
        }
        catch(err) {
            alert('Algo deu errado com o Login' + err)
        }
       
    }
    

    const handleChange = (e)=>{
        
        setUser({...user,[e.target.name]:e.target.value})
        setText("")
        
    }
   

    const validateInput= () =>{

        return validateEmail(user.email) && validatePassword(user.password)
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
                    value={user.email}
                />
                <Input
                    name='password'
                    placeholder='Digite a sua senha'
                    onChange={handleChange}
                    type='password'
                    value={user.password}
                />
                <Span text={text} />
                <Button type='submit'
                        text='Entrar'
                        onClick={handleSubmit}
                        disabled={!validateInput()}
                />
                <div>
                    <p>Não possui conta?</p>
                    <LinkTo to='singn' text='Cadastrar' /> 
                </div>
            </Form>
        </Container>
     );
}
 
export default Login;

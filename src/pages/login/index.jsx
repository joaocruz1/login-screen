import { useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {Container, Form} from './styles'
import { validateEmail, validatePassword } from '../../Utils/validators';



const Login = () => {

    const [loading,setLoading] = useState(false)
    const [data,setData] = useState({})

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            setLoading(true)
            alert('Login')
            setLoading(false)
        }
        catch(err) {
            console.log('Algo deu errado com o Login' + err)
        }
       
    }

    const handleChange = (e)=>{
        
        setData({...data,[e.target.name]:e.target.value})
        
    }
   

    const validateInput= () =>{
        return validateEmail(data.email) && validatePassword(data.password)
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
                />
                <Input
                    name='password'
                    placeholder='Digite a sua senha'
                    onChange={handleChange}
                    type='password'
                />
                <Button type='submit'
                        text='Entrar'
                        onClick={handleSubmit}
                        disabled={loading === true || !validateInput()}
                />
                <div>
                    <p>Não possui conta?</p>
                    <a>Cadastrar</a>
                </div>
            </Form>
        </Container>
     );
}
 
export default Login;

import { useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {Container, Form} from './styles'



const Login = () => {

    const [loading,setLoading] = useState(false)


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            setLoading(true)
            alert.log('Login')
            setLoading(false)
        }
        catch(err) {
            console.log('Algo deu errado com o Login' + err)
        }
        alert('Login')
    }

    const handleChange = (e)=>{
        console.log('Digitando...', e.target.name , e.target.value)
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

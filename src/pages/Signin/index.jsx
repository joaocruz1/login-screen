import Input from "../../components/Input";
import Button from "../../components/Button";
import Span from "../../components/Span";
import LinkTo from "../../components/Link";
import { validateEmail, validatePassword } from '../../Utils/validators';
import { useState, useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import {Container, Form} from './styles'
import { useNavigate } from "react-router-dom";







const Signin = () => {


    const [newuser, setNewUser] = useState({email:"", password:""})
    const {users,setUsers} = useContext(AuthContext)
    const[span,setSpan] = useState("")
    const navigate = useNavigate()
    

    const handleChange = (e)=>{

        setNewUser({...newuser,[e.target.name]: e.target.value})
    }

   

    const handleSubmit = async(e) =>{
            e.preventDefault()
            
            try{
  
             setUsers([...users,{ email:newuser.email,password:newuser.password}])
             alert("Usuario Registrado com Sucesso!!")
             navigate('/login')   



            }

            catch(err){
                alert('algo deu errado'+err)
            }
            
        
    }

    const validateInput = () =>{
        return validateEmail(newuser.email) && validatePassword(newuser.password)
    }






    return ( 
        <Container>
            
        <Form>
            <h1>Criar Conta</h1>
           
            <Input
                name='email'
                placeholder='Insira um email'
                onChange={handleChange}
                type='email'
                value={newuser.email}
            />
            <Input
                name='password'
                placeholder='Coloque sua nova senha '
                onChange={handleChange}
                type='password'
                value={newuser.password}
            />
           <Span 
           text={span}
           />


            <Button type='submit'
                    text='Cadastrar'
                    onClick={handleSubmit}
                    disabled={!validateInput()}
            />
            <div>
                <p>Já possui uma  Conta?</p>
                <LinkTo to='/login' text='Entrar ' /> 
            </div>
        </Form>
    </Container>
     );
}
 
export default Signin;
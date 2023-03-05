import { CustomButton } from "./styles";
 
 const Button = ({type,text, onClick, disabled}) => {
    return ( 
     <CustomButton
     type={type}
     onClick={onClick} 
     disabled= {disabled}
     > {text} </CustomButton>
     );
 }
  
 export default Button;
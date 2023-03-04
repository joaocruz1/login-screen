import { CustomButton } from "./styles";
 
 const Button = ({type,text, onClick}) => {
    return ( 
     <CustomButton 
     type={type}
     onClick={onClick} > {text} </CustomButton>
     );
 }
  
 export default Button;
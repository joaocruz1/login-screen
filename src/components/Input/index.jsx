
import { InputCustom } from './styles'

const Input = ({
  name,
  placeholder,
  onChange,
  type, 
  value
}) => {
  return ( 
    <InputCustom
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      type={type}
      value={value}
    />
   );
}
 
export default Input;
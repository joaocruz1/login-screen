
export const validateEmail = (email) =>{
   return email?.toString().includes('@') && email?.toString().includes('.')

}

export const validatePassword = (password) =>{
   return password?.toString().length > 5

}


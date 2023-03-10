import styled from 'styled-components'



export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  min-width: 100vw;
  background-color: #fff6
`

export const Form = styled.form`
  display: flex;
  padding: 3rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 5px;
  width: 100%;
  max-width: 450px;
  gap: 30px 0px;
 
    h1 {
        color: black;
        font-size:20 px;
        font-weight: light;
    }

    p{
        color: black;
        font-size: 16px;
        font-weight: bold;
       

    }

    a{
        color:purple;
        font-size: 14px;
        cursor:pointer;
        
    }
    
`
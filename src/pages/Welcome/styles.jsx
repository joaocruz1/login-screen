import styled from "styled-components";


export const Container = styled.div`
    
    
    height: 100vh;
    min-width: 100vw;
    background-color: #fff;
    box-sizing:border-box;
    
    
    
    
    
    
`
export const Header = styled.div`
    background-color: #fff6;
    display:flex;
    width:100%;
    height:70px;
    border-bottom: 6px solid #c800fa;
    margin:0;
   

    pre{
        width:143px;
        height:50px;
    }

   a{
    color:#000000;
    font-family:sans-serif;
    text-decoration:none;
    
    font-size:20px;
    padding:10px;
   
    border-right: 1px solid #c800fa;
    margin-top:25px;
    transition:0.5s;
    
   }

   a:hover{
    color:#c800fa;
    scale:1.2;
    border:none;
    
    

   }
    
   img{
    margin-left:400px;
    margin-top:14px;
    width:150px;
    height:40px;
    
    transition:0.5s;
    
   }
   
   img:hover {
    scale:1.1;
   }
`
export const Body = styled.div`
   
   margin: 0 auto;
   box-sizing:border-box;
   text-align:center;
   margin-top:30px;

    img {
        width:1200px;
        height:90%;
        
        
    }

`

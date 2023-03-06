import { Container, Header, Body } from "./styles";
import LinkTo from "../../components/Link";
import banner from "../../assets/banner.png"






const Welcome = () => {
    return ( 
        <Container>
            <Header >
              <pre />
               <LinkTo to='/login' 
               text='Login'/>
               
               <LinkTo to='/sobre'
               text='Sobre Nós' />
                 <img src="https://www.celcoin.com.br/wp-content/themes/celcoin/assets/img/logo.png"  />
            </Header>
            <Body>

                 <img src={banner} />
            
            </Body>
        </Container>
     );
}
 
export default Welcome;
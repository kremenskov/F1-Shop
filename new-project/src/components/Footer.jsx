import { MailOutline, Phone, Room } from '@material-ui/icons'
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
    display: flex;
    background-color:#e0e0e0;
    ${mobile({ flexDirection: "column"})}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1``;
const Desc = styled.p`
    margin: 20px 0px;

`




const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display:"none"})}
`




const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    cursor: pointer;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`



const Footer = () => {
    return <Container>
        <Left>
            <Logo>SBINALLA</Logo>
        </Left>
        <Center>
            
            <List>
                <ListItem>Главная</ListItem>
                <ListItem>Профиль</ListItem>
                <ListItem>Мужская одежда</ListItem>
                <ListItem>Женская одежда</ListItem>
                <ListItem>Аксессуары</ListItem>
                <ListItem>Корзина</ListItem>
                <ListItem>Избранное</ListItem>
                <ListItem>Реквизиты</ListItem>
                
            </List>

        </Center>
        <Right>
            
            <ContactItem>
            <Room style={{marginRight: "10px"}}/>Адрес компании
            </ContactItem>
            <ContactItem>
            <Phone style={{marginRight: "10px"}}/> +7 495 XXX-XX-XX
            </ContactItem>
            <ContactItem>
            <MailOutline style={{marginRight: "10px"}}/>your@mail.ru
            </ContactItem>
        </Right>
        </Container>;
        
    
};

export default Footer

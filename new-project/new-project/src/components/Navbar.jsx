
import styled from 'styled-components'
import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons"
import { mobile } from "../responsive"


const Container = styled.div`
    height: 60px;
    background-color: #eeebeb;
    ${mobile({ height: "50px"})}
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({ padding: "10px 0px"})}
    
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: "none"})}
`

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    ${mobile({ marginLeft: "10px", flex: 0})}
    `

const Input = styled.input`
    border:none;
    ${mobile({ width: "40px"})}
`

const Logo = styled.h1`
    font-weight: bold;
    font-size: 35px;
    color: #e00303;
    ${mobile({ fontSize: "18px" })}
    
`

const Center = styled.div`
    flex:1;
    text-align: center;
    cursor: pointer;
    `
const Right = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ justifyContent: "center" })}
    `

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "10px", marginLeft: "10px", paddingRight: '10px' })}
`



const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>
                        RU
                    </Language>
                    <SearchContainer>
                        <Input placeholder="Поиск по товарам"/>
                        <Search style={{color:"gray", fontSize:16}}/>
                    </SearchContainer>
                </Left>
                <Center><Logo>SBINALLA</Logo></Center>
                <Right>
                <MenuItem>РЕГИСТРАЦИЯ</MenuItem>
                <MenuItem>ВХОД</MenuItem>
                <MenuItem>
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlined />
                    </Badge>
                </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar

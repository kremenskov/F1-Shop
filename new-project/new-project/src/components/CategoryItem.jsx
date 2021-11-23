import { mobile } from "../responsive"
import styled from "styled-components"

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`
const Image = styled.img`
    width:100%;
    height: 100%;
    object-fit: cover;
    ${mobile({ height: "30vh"})}
`
const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
    
`
const Button = styled.button`
    border: none;
    padding: 15px;
    margin-top: 450px;
    background-color: white;
    color: #000000;
    cursor: pointer;
    font-weight: 600;
    font-size: 20px;
    opacity: 0.9;
    ${mobile({  marginTop: '150px', padding: '10px',  })}
`

const CategoryItem = ({item}) => {
    return (
        <Container>
            <Image src={item.img}/>
            <Info>
                <Title>{item.title}</Title>
                <Button>Выбрать команду</Button>
            </Info>
        </Container>
    )
}

export default CategoryItem

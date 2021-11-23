import styled from "styled-components"
import { mobile } from "../responsive"
const Container = styled.div`
    height: 30px;
    background-color:#b50e02;
    color:white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
    opacity: 0.8;
    ${mobile({ fontSize: '10px', height: '20px'})}
`

const Announcement = () => {
    return (
        <Container>
            Демонстрационный проект интернет-магазина | Не для продажи
        </Container>    
    )
}

export default Announcement

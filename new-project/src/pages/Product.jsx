
import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import { Add, Remove } from "@material-ui/icons"
import { mobile } from "../responsive"

const Container = styled.div`

`
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({ padding: "10px", flexDirection: 'column'})}
`
const ImgContainer = styled.div`
    flex: 1;
`
const Image = styled.img`
    max-width: 90%;
    height: auto;
    -ms-interpolation-mode: bicubic;
    display: inline-block;
    vertical-align: middle;
    padding-left: 65px;
    ${mobile({ height: "40vh"})}
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({ padding: "10px"})}
`
const Title = styled.h1`
    font-weight: 400;
   
`
const Desc = styled.p`
    margin: 20px 0px;
    
`
const Price = styled.span`
    font-weight: 300;
    font-size: 40px;

`

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    ${mobile({ width: "100%"})}
`
const Filter = styled.div`
    display: flex;
    align-items: center;
`
const FilterTitle = styled.span`
    font-size:20px;
    font-weight: 400;
`


const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`
const FilterSizeOption = styled.option``
const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ width: "100%"})}
`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid #b50e02;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`
const Button = styled.button`
    padding: 15px;
    border: 2px solid #b50e02;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        background-color:#fcf6f6;
    }
`

const Product = () => {
    return (
        <Container>
            <Announcement/>
            <Navbar/>
            <Wrapper>
                <ImgContainer>
                <Image src="/img/AM-T-SHIRT.png"/>
                </ImgContainer>  
                <InfoContainer>
                    <Title>Футболка Aston Martin</Title>
                    <Desc>
<li>Эластичная ткань</li>
<li>Отсутсвие швов</li>
<li>Скрытый нагрудный карман с застежкой</li>
<li>Контрастные манжеты</li>
<li>Тканый ярлык с логотипом</li>
</Desc>
                    <Price>1999 ₽</Price>
                    <FilterContainer>
                        <Filter>

                            <FilterTitle>Размер</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>

                        <AmountContainer>
                            <Remove/>
                            <Amount>1</Amount>
                            <Add/>
                        </AmountContainer>
                        <Button>ДОБАВИТЬ В КОРЗИНУ</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default Product

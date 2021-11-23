import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import styled from "styled-components"
import { useState } from "react";
import {sliderItems} from "../data";
import { mobile } from "../responsive";

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #e2e0e0;
    border-radius: 50%;
    display: flex; align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    z-index: 2;
`

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    padding-top: 25px;
    position: relative;
    opacity: 1;
    overflow: hidden; 
    ${mobile({ display: "none"})}
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props=>props.slideIndex * -100}vw)
`

const Slide = styled.div`
    display: flex; 
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #${props=>props.bg}
`
const ImgContainer = styled.div`
    height: 100%;
    
`

const Image = styled.img`
    height:80%;
    padding-left: 50px;

`

const InfoContainer = styled.div`
    flex: 1;
    padding-right: 110px;
`

const Title = styled.h1`font-size: 55px; text-align: center;`
const Desc = styled.h1`margin: 25px 0px;
font-size: 35px; text-align: center; 
`


const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {;

        if (direction==="left"){
         setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2 );
        } else {
         setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0);
        }
    };
    return (
        <Container>
            <Arrow direction="left" onClick={()=>handleClick("left")}>
                <ArrowLeftOutlined/>
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                 {sliderItems.map(item=>(
                <Slide bg={item.bg} key={item.id}>
                    <ImgContainer>
                        <Image src={item.img} alt="Wallpaper"/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Desc>{item.desc}</Desc>
                        

                    </InfoContainer>
                </Slide>
             ))}
            </Wrapper>
            <Arrow direction="right" onClick={()=>handleClick("right")}>
                <ArrowRightOutlined/>
            </Arrow>
        </Container>
    )
}

export default Slider

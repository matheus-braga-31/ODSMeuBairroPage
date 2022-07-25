import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom"

import Kids from "../assets/kidsLunch.jpg"
import HandsTogether from "../assets/handsTogether.jpg"
import Plant from "../assets/Sustainable.jpg"

const LogoRotate = keyframes`
0%{
  transform: rotate(0deg)
}
100%{
  transform: rotate(360deg);
}
`


//HEADER
export const MenuHeader = styled.header`
height: 12vh;
width: 100%;
background-color: #EB5E28;
display: flex;
align-items: center;
justify-content: space-between;
position: fixed;
z-index: 100;
`

export const LogoBox = styled.div`
width: 10vw;
height: 100%;
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
`

export const Logo = styled.img`
width: 6vw;
border-radius: 50%;
animation: ${LogoRotate} 4s linear infinite;
`

export const NavHeader = styled.nav`
width: 80vw;
`

export const HeaderList = styled.ul`
display: flex;
justify-content: space-around;
`
export const HeaderLink = styled(Link)`
color: black;
text-decoration: none;
`
export const ExternalLink = styled.a`
color: white;
text-decoration: none;
`

export const NavItem = styled.li`
list-style: none;
width: 10vw;
height: 6vh;
color: #252422;
border: solid #252422 3px;
border-radius: 10px;
font-size: 1.2vw;
font-weight: bolder;
display: flex;
align-items: center;
justify-content: space-around;
&:hover {
  background-color: #FFFCF2;
  transform: scale(1.1);
  cursor: pointer;
  transition: 0.4s all;
}
`

//HOME

export const SlideBox1 = styled.div`
width: 100vw;
height: 60vh;
margin-top: 12vh;
background-image: url(${Kids});
background-repeat: no-repeat;
background-position: center;
background-size: cover;
padding-left: 2%;
display: flex;
align-items: center;
`

export const SlideBox2 = styled(SlideBox1)`
background-image: url(${HandsTogether});
`
export const SlideBox3 = styled(SlideBox1)`
background-image: url(${Plant});
`

export const CarouselTitle = styled.h1`
width: 40vw;
background-color: #FFFCF2;
opacity: 0.8;
font-family: 'Saira', sans-serif;
`

export const ContainerHome = styled.section`
padding: 1% 5% 5% 5%;
height: 150vh;
background-color: #FFFCF2;
display: flex;
align-items: center;
justify-content: space-around;
flex-direction: column;
`

export const BoxTitle = styled.div`
width: 50vw;
height: 35vh;
padding: 5%;
background-color: #EB5E28;
box-shadow: 3px 3px black;
position: relative;
right: 20%;
display: flex;
align-items: center;
justify-content: center;
&:hover {
  transform: scale(1.1);
  transition: 0.4s all;
}
`

export const Title = styled.h1`
color: white;
font-size: 2.5vw;
font-family: 'Saira', sans-serif;
text-shadow: 2px 2px 0px black, 2px 2px 0 white;
`

export const DescriptionBox = styled.div`
width: 50vw;
height: 35vh;
padding: 5%;
color: white;
background-color: #EB5E28;
box-shadow: 3px 3px black;
position: relative;
left: 20%;
display: flex;
align-items: center;
justify-content: space-between;
&:hover {
  transform: scale(1.1);
  transition: 0.4s all;
}
`

export const Description = styled.p`
font-size: 1vw;
font-family: 'Saira', sans-serif;
`

export const More = styled.p`
color: white;
text-decoration: underline;
`

export const OdssBox = styled.div`
width: 50vw;
height: 35vh;
background-color: #EB5E28;
box-shadow: 3px 3px black;
position: relative;
right: 20%;
display: flex;
align-items: center;
justify-content: center;
&:hover {
  transform: scale(1.1);
  transition: 0.4s all;
}
`
export const OdssImg = styled.img`
width: 30vw;
`
//ODS Meu Bairro

export const ContainerMeuBairro = styled.section`
padding: 1% 5% 5% 5%;
height: 150vh;
background-color: #FFFCF2;
position: relative;
padding-top: 25vh;
font-family: 'Saira', sans-serif;
display: flex;
align-items: center;
justify-content: space-around;
flex-direction: column;
`
export const AboutBoxMeuBairro = styled.div`
width: 80%;
height: 70vh;
color: #FFFCF2;
box-shadow: 3px 3px black;
background-color: #EB5E28;
padding: 3%;
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: column;
`

export const TitleMeuBairro = styled.h1`
font-size: 2vw;
text-shadow: 2px 2px 0px black, 2px 2px 0;
`

export const LogoDescriptionBox = styled.div`
width: 60%;
display: flex;
align-items: center;
justify-content: space-between;
`

export const DescriptionMeuBairro = styled.p`
width: 50%;
font-size: 1vw;
border-right-style: solid;
padding-right: 5%;
`
export const AboutLogo = styled(Logo)`
width: 20vw;
`

export const ConheçaMeuBairro = styled.h2`
color: #FFFCF2;
background-color: black;
`

export const OdsBox = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: space-around;
`

export const OdsCard = styled.img`
width: 10vw;
border: solid black 2px;
border-radius: 20px;
box-shadow: 5px 5px black;
&:hover {
  border: solid #EB5E28 2px;
  transform: scale(1.2);
  box-shadow: 20px 20px #EB5E28;
  transition: 0.4s all;
}
`

//pages

export const ContainerOds = styled.section`
height: 65vh;
background-color: #C9412E;
color: white;
padding-top: 20vh;
display: flex;
align-items: center;
justify-content: space-around;
`


export const TextBox = styled.div`
width: 40vw;
display: flex;
justify-content: space-between;
flex-direction: column;
`
export const OdsPageTitle = styled.h1`
font-size: 3vw;
`

export const BigCard = styled.img`
width: 20vw;
`

export const ContainerOds8 = styled(ContainerOds)`
background-color: #A53944;
`
export const ContainerOds15 = styled(ContainerOds)`
background-color: #6DBB49;
`

export const GoalsContainer = styled.section`
height: 100vh;
background-color: #FFFCF2;
padding: 2%;
display: flex;
justify-content: center;
flex-direction: column;
`

export const OdsText = styled.h2`
color: black;
font-size: 3vw;
margin-bottom: 4%;
text-decoration: underline;
`

export const GoalsDescription = styled.p`
font-family: 'Saira', sans-serif;
background-color: black;
color: #FFFCF2;
font-size: 2vw;
`

//Footer

export const FooterContainer = styled.footer`
height: 15vh;
background-color: #EB5E28;
display: flex;
align-items: center;
justify-content: space-around;
`
export const Copyright = styled.section`
width: 50%;
height: 15vh;
padding-right: 5vw;
color: #FFFCF2;
border-right-style: solid;
display: flex;
align-items: center;
justify-content: center;
`
export const SocialMedia = styled.section`
width: 20%;
display: flex;
align-items: center;
justify-content: space-around;
`
export const SocialIcon = styled.img`
width: 3vw;
&:hover {
  transform: scale(1.1);
  transition: 0.4s all;
}
`
export const FaceLink = styled.a``

export const InstaLink = styled.a``

export const LinkedInLink = styled.a``


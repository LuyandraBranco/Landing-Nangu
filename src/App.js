import { useState } from 'react';
// import MailchimpSubscribe from 'react-mailchimp-subscribe';

import {
  Container,
  Header,
  Figures,
  Logo,
  TextArea,
  Description,
  Title,
  Button,
  Video,
  Click,
  Footer,
  TitleNews,
  DescriptionNews,
  Input,
  Submit,
  Sign,
  Media,
  Area,
  Link,
  TextFooter,
  LinkVideo
}
from './styles';
import {FaFacebook, FaYoutube, FaInstagram, FaTwitter, FaTiktok} from "react-icons/fa";
import {AiOutlinePlayCircle} from "react-icons/ai";

function App() {
  return (
    <Container>

      <Header>
        <Figures>
          <Logo src="./images/logo.png" alt="logo Nangu"/>
        </Figures>

      </Header>

      <Area>
        <TextArea>

          <Title>Conheça os lugares antes de sair de casa</Title>
          <Description>O Nangu é uma plataforma que conecta você
            com os restaurantes,
            hoteis e locais para visitar em Angola
          </Description>
          <Button><Click>Quero fazer parte</Click></Button>

        </TextArea>
      </Area>
      
      <Video>
        <LinkVideo href='https://youtu.be/lxix1uPeY2s'><AiOutlinePlayCircle/></LinkVideo>
      </Video>

      <Footer>

          <TextFooter>

          <TitleNews>Seja o primeiro a saber das novidades</TitleNews>
          <DescriptionNews>Inscrevendo-se abaixo será avisado sempre
                          sobre às novidades no desenvolvimento da
                          nossa plataforma e a receber conteúdos
                          produzidos por nós
          </DescriptionNews>

          <Sign>
            <Input type="text"/>
            <Submit type="submit" value="Send" placehoder="Escreva uma mensagem para nós" />
          </Sign>

          <Media>
              <Link href="#"><FaFacebook/></Link>
              <Link href="https://twitter.com/nangu_turismo?s=21&t=67JLXfk0YRLPFejOk-2BwA"><FaTwitter/></Link>
              <Link href="https://instagram.com/nangu.turismo?igshid=YmMyMTA2M2Y="><FaInstagram/></Link>
              <Link href="#"><FaYoutube/></Link>
              <Link href="https://www.tiktok.com/@nanguturismo?_t=8WpwW5qaX4A&_r=1"><FaTiktok/></Link>
    
          </Media>
        </TextFooter>

      </Footer>

    </Container>
  );
}
export default App;

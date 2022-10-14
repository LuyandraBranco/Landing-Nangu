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
  Link
}
from './styles';
import {FaFacebook, FaYoutube, FaInstagram, FaTwitter, FaTiktok} from "react-icons/fa";

function App() {
  return (
    <Container>

      <Header>
        <Figures>
          <Logo scr="" alt="logo Nangu"/>
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

      </Video>

      <Footer>

        <TitleNews>Seja o primeiro a saber das novidades</TitleNews>
        <DescriptionNews>Inscrevendo-se abaixo será avisado sempre
                         sobre às novidades no desenvolvimento da
                        nossa plataforma e a receber conteúdos
                         produzidos por nós
        </DescriptionNews>

        <Sign>
          <Input type="text"/>
          <Submit type="submit" value="Send"/>
        </Sign>

        <Media>
            <Link href="#"><FaFacebook/></Link>
            <Link href="#"><FaTwitter/></Link>
            <Link href="#"><FaInstagram/></Link>
            <Link href="#"><FaYoutube/></Link>
            <Link href="#"><FaTiktok/></Link>
  
        </Media>

      </Footer>

    </Container>
  );
}

export default App;

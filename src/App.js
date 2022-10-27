import { useState } from 'react';
// import MailchimpSubscribe from 'react-mailchimp-subscribe';
import MailchimpSubscribe from 'react-mailchimp-subscribe';


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

const CustomForm = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const submit = () =>
    email &&
    name &&
    email.indexOf('@') > -1 &&
    onValidated({
      MERGE0: email,
      MERGE1: name,
    });

  return (
    <Sign>
      {status === 'sending' && <div style={{ color: 'blue' }}>sending...</div>}
      {status === 'error' && (
        <div
          style={{ color: 'red' }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === 'success' && (
        <div
          style={{ color: 'green' }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      <div>
      <Input type="text" placeholder="Seu nome" onChange={event => setName(event.target.value)}/> 
      
      <Input type="email" placeholder="Seu melhor email" onChange={event => setEmail(event.target.value)}/> 
      
      </div>
      <Submit type="submit" value="Subscrever" onClick={submit}/>
       
    </Sign>
  );
};

function App() {
  const url =
  'https://gmail.us9.list-manage.com/subscribe/post?u=17f9b6aca25ceb49fa8bae0aa&id=0a1782f3be';

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
        <LinkVideo href='https://vm.tiktok.com/ZMFBs5Ggc/'><AiOutlinePlayCircle/></LinkVideo>
      </Video>

      <Footer>

          <TextFooter>

          <TitleNews>Seja o primeiro a saber das novidades</TitleNews>
          <DescriptionNews>Inscrevendo-se abaixo será avisado sempre
                          sobre às novidades no desenvolvimento da
                          nossa plataforma e a receber conteúdos
                          produzidos por nós
          </DescriptionNews>

          
          <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
          <CustomForm 
            status={status}
            message={message}
            onValidated={formData => subscribe(formData)}
          />
        )}
      />
          

          <Media>
              <Link href="https://www.facebook.com/profile.php?id=100086874926716"><FaFacebook/></Link>
              <Link href="https://twitter.com/nangu_turismo?s=21&t=67JLXfk0YRLPFejOk-2BwA"><FaTwitter/></Link>
              <Link href="https://instagram.com/nangu.turismo?igshid=YmMyMTA2M2Y="><FaInstagram/></Link>
              <Link href="https://www.youtube.com/channel/UCMUfEucOpzSFH3f9NoCu6tw"><FaYoutube/></Link>
              <Link href="https://www.tiktok.com/@nanguturismo?_t=8WpwW5qaX4A&_r=1"><FaTiktok/></Link>
          </Media>
        </TextFooter>

      </Footer>

    </Container>
  );
}
export default App;

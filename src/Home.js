import { Card, Container,Row,Col, Button } from "react-bootstrap";

import Jumbotron from "./Components/Jumbotron";
import { Sliders } from "./Components/Sliders";
import voda from "./voda.jpg";
export const Home=()=>(
  <>
  <Sliders/>
  <Container style={{paddingTop:'2rem',paddingBottom:'2rem'}}>
    <Row>
      <Col>
      <Card style={{width:'18rem'}}>
        <Card.Img variant='top' src={voda}/>
        <Card.Body>
          <Card.Title>
            Webdebblog
          </Card.Title>
          <Card.Text>
          Природа - это прежде всего универсум, который охватывает все сущее, в том числе наши познания и практическую деятельность, всю Вселенную, и в этом смысле она близка к понятию материи, можно сказать, что природа - это материя, взятая во всем многообразии ее форм. В этом плане мы лишь частичка этого универсума, хотя и уникальная по своим возможностям.
          </Card.Text>
          <Button variant="primary">
            Learn more
          </Button>
        </Card.Body>


      </Card>
      </Col>
      <Col>
      <Card style={{width:'18rem'}}>
        <Card.Img variant='top' src={voda}/>
        <Card.Body>
          <Card.Title>
            Webdebblog
          </Card.Title>
          <Card.Text>
          Совершенно другое понимание природы сложилось в средневековой христианской культуре. Здесь, окружающая человека природа рассматривалась как нечто сотворенное богом и более низкое, чем сам человек, поскольку только он в процессе творения был наделен Божьим началом - душой. Более того, природа нередко понималась как источник зла, который нужно преодолеть или подчинить, а жизнь человека при этом выступала как творение Божественного начала - души с греховным природным началом - телом. 
          </Card.Text>
          <Button variant="primary">
            Learn more
          </Button>
        </Card.Body>


      </Card>
      </Col>
      <Col>
      <Card style={{width:'18rem'}}>
        <Card.Img variant='top' src={voda}/>
        <Card.Body>
          <Card.Title>
            Webdebblog
          </Card.Title>
          <Card.Text>
          В эпоху Возрождения отношение к природе меняется. Человек открывает для себя красоту и великолепие окружающей природы, начинает видеть в ней источник радости, наслаждения, в противовес мрачному аскетизму средневековья. Природа начинает пониматься как убежище, противостоящее развращенной и порочной человеческой цивилизации. Жан-Жак Руссо прямо утверждал, что переход человека от природного, естественного начала к социальному является источником всех наших несчастий. 
          </Card.Text>
          <Button variant="primary">
            Learn more
          </Button>
        </Card.Body>


      </Card>
      </Col>
    </Row>
  </Container>
  <Jumbotron/>
  
  </>
  )
  
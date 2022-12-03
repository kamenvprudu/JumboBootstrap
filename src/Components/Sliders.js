import { Carousel } from "react-bootstrap";
import voda from "../voda.jpg";
export function Sliders() {
  return (
    <Carousel>
      <Carousel.Item style={{ height: "600px" }}>
        <img className="d-block w-100" src={voda} alt="f" />
        <Carousel.Caption>
          <h4>simphony on click</h4>
          <p>where is my mind</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: "600px" }}>
        <img className="d-block w-100" src={voda} alt="f" />
        <Carousel.Caption>
          <h4>simphony on click</h4>
          <p>where is my mind</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: "600px" }}>
        <img className="d-block w-100" src={voda} alt="f" />
        <Carousel.Caption>
          <h4>simphony on click</h4>
          <p>where is my mind</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

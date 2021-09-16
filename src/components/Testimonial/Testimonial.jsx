import React from "react";
import { Image, Card, Col } from "react-bootstrap";
import "./Testimonial.css";

export default function Testimonial() {
  return (
    <>
      <Card
        bg="light"
        text="dark"
        style={{ width: "18rem" }}
        className="mb-2 text-center TestimonialCard"
      >
        <Col xs={6} md={4}>
          <Image
            src="https://thefanboyseo.com/wp-content/uploads/2021/09/20210906_1731113069733424769805562.jpg"
            roundedCircle
            className="TestimonialImage"
          />
        </Col>

        <Card.Body>
          <Card.Title>Name </Card.Title>
          <hr />
          <Card.Text>Review</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

{
  /* <Card
bg='light'
text='dark'
style={{ width: '18rem' }}
className="mb-2 text-center TestimonialCard"
>
<Card.Header><Image
          src="https://thefanboyseo.com/wp-content/uploads/2021/09/20210906_1731113069733424769805562.jpg"
          roundedCircle
          className="TestimonialImage"
        /></Card.Header>
<Card.Body>
  <Card.Title>Name </Card.Title>
  <Card.Text>
    Review
  </Card.Text>
</Card.Body>
</Card> */
}

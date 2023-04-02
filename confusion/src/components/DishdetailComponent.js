import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Container,
  Col,
  Row,
} from "reactstrap";

const Dishdetailed = (props) => {
  if (props != null) {
    return (
      <Card>
        <Container className="container">
          <Row>
            <Col md={6}>
              <CardImg src={props.dish.image} alt={props.dish.name} />
              <CardBody>
                <CardTitle tag="h3">{props.dish.name}</CardTitle>
                <CardText>{props.dish.description}</CardText>
              </CardBody>
            </Col>
            <Col md={6}>
              <h2>Comments</h2>
              {LoadComments(props.dish)}
            </Col>
          </Row>
        </Container>
      </Card>
    );
  } else {
    return <div></div>;
  }
};
const LoadComments = (props) => {
  if (props != null) {
    return props.comments.map((comment) => {
      return (
        <div>
          <div key={comment.id}>
            <p>{comment.comment}</p>
            <p>
              --{comment.author} ,
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "short",
                day: "2-digit",
              }).format(new Date(Date.parse(comment.date)))}
            </p>
          </div>
        </div>
      );
    });
  } else {
    return <div></div>;
  }
};
export default Dishdetailed;

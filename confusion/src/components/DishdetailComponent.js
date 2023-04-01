import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

const Dishdetailed = (props) => {
  return (
    <div>
      <Card style={{ margin: "20px 0px" }}>
        <CardImg src={props.dish.image} alt={props.dish.name} width="10%"/>
        <CardBody>
          <CardTitle tag="h5">{props.dish.name}</CardTitle>
          <CardText>{props.dish.description}</CardText>
          {PrintComments(props.dish)}
        </CardBody>
      </Card>
      <Card style={{ margin: "20px 0px" }}>
        <CardBody style={{ textAlign: "left" }}>
          <CardImg width="10%" alt={props.dish.name} src={props.dish.image} />
          <CardTitle tag="h4" style={{ marginTop: "20px" }}>
            {props.dish.name}
          </CardTitle>
          <CardText>{props.dish.description}</CardText>
          <CardText>{props.dish.price}/-</CardText>
          <hr />
          <CardText>{props.dish.comment}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};
function PrintComments(props)
{
  if(props.dish!=null)
  {
    return(
      <div>
          <p tag="h3">Comments</p>
          <CardText>{props.dish.comment}</CardText>
      </div>
    );
  }
  else
  {
    return(
      <div></div>
    );
  }
}
export default Dishdetailed;

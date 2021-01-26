import React from "react";
import { Item, Image, Segment } from "semantic-ui-react";
import Img from "../images/image-placeholder.png";

function Assement() {
  return (
    <Segment placeholder>
      <Segment.Inline>
        <Image size="small" src={Img} />
        <Item.Header>Ekunola John Oluwatobi</Item.Header>
      </Segment.Inline>
    </Segment>
  );
}

export default Assement;

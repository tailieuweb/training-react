import React, { useEffect, useState } from "react";
import "./CardInfo.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import { getCats } from "../../helpers";
import Link from "../../common/CustomLink";

function CardInfo({ match }) {
  const [cats, setCats] = useState([]);
  var name, age, bio, avt;
  

  useEffect(() => {
    (async () => {
      const catsData = await getCats();
      setCats(catsData);
    })();
  }, []);
    var idCat = match.params;
    console.log(idCat.id);
  cats.map((el) => { 
      
    if (el.id === idCat.id +'') {      
      name = el.name;
      age = el.age;
      bio = el.bio;
      avt = el.avatar;
    }
  });
  return (
    <div className="Card-Info">
      <Link to="/">
       <i className="fa fa-user-circle-o toListItem" aria-hidden="true"></i>
      </Link>
      <div className="CardInfo">
        <div className="CardName">{name}</div>
        <div className="CardAge">{age}</div>
      </div>
      <div className="Located">
        <span>
          <i className="fa fa-map-marker Icon-Locate" aria-hidden="true"></i>
        </span>{" "}
        39 kilometers away
      </div>
      <div className="Bio">{bio}</div>
      <div>
        <Container>
          <Row>
            <Col className="Img-Gallery" sm={12} md={12}>
              <h4>1</h4>
              <img alt="cat" src={avt} width="70%" height="100px" />
            </Col>
            <Col className="Img-Gallery" sm={12} md={12}>
              <h4>2</h4>
              <img alt="cat" src={avt} width="70%" height="100px" />
            </Col>
            <Col className="Img-Gallery" sm={12} md={12}>
              <h4>3</h4>
              <img alt="cat" src={avt} width="70%" height="100px" />
            </Col>
            <Col className="Img-Gallery" sm={12} md={12}>
              <h4>4</h4>
              <img alt="cat" src={avt} width="70%" height="100px" />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
export default CardInfo;

import React, { Component } from "react";
import { Players } from "../shared/ListOfPlayers";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Icon,
  CardTitle,
  Row,
  Col,
  Card,
  Container,
  Section,
} from "react-materialize";
export default function Player() {
  // const [player, setPlayer] = useState([]);
  return (
    // <div className="container">
    //   {Players.map((player) => (
    //     <div className="column" key={player.id}>
    //       <div className="card">
    //         <img src={player.img} alt="" />
    //         <h3>{player.name}</h3>
    //         <p className="title">{player.club}</p>
    //         <Link to={"detail/${player.id}"}>
    //           <p className="button">
    //             <Link to={`detail/${player.id}`}>
    //               <p>
    //                 <button>Detail</button>
    //               </p>
    //             </Link>
    //           </p>
    //         </Link>
    //       </div>
    //     </div>
    //   ))}
    //   <div id="popup1" className="overlay">
    //     <div className="popup">
    //       <img src={player.img} />
    //       <h2>{player.name}</h2>
    //       <a className="close" href="#">
    //         &times;
    //       </a>
    //       <div className="content">{player.info}</div>
    //     </div>
    //   </div>
    // </div>
    <Section>
      <Container>
        <Row>
          {Players.map((player) => (
            <Col key={player.id} m={4} s={12}>
              <Card
                closeIcon={<Icon>close</Icon>}
                header={<CardTitle image={player.img} reveal waves="light" />}
                reveal={<p>{player.info}</p>}
                revealIcon={<Icon>more_vert</Icon>}
                title={player.name}
              >
                <Link to={`detail/${player.id}`}>Detail</Link>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Section>
  );
}

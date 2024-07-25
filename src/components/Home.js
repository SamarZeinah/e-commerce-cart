import React, { useState } from "react";
import "./style.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Cardsdata from "./CardData";
import { Container, Row, Col } from "react-bootstrap";
import { addToCart } from "../redux/features/cartSlices";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
const Home = () => {
  const [cardData, setCardData] = useState(Cardsdata);
  const dispatch = useDispatch();

  // Add to cart
  const send = (e) => {
    dispatch(addToCart(e)); // تأكد من تمرير العنصر بالشكل الصحيح
    toast.success("Item added In Your Cart")

  };

  return (
    <>
      <section className="item_section mt-4 ">
        <Container>
          <h2 className="px-4" style={{ fontWeight: 400 }}>
            Restaurants in Ahmedbad Open now
          </h2>
          <div className="row row-cols-3">
            {cardData.map((element, index) => {
              return (
                <>
                  <Col
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-around",
                    }}
                    key={index}
                    sm={12}
                    md={6}
                    lg={4}
                    className="mb-4"
                  >
                    <Card style={{ width: "22rem" }}>
                      <Card.Img
                        style={{ height: "256px" }}
                        variant="top"
                        src={element.imgdata}
                      />

                      <div className="CardBody Upper px-2">
                        <Card.Title className="mt-2">{element.dish}</Card.Title>
                        <span>{`${element.rating} ★`}</span>
                      </div>

                      <div className="CardBody Lower px-2">
                        <Card.Text className="mt-2">
                          {element.address}
                        </Card.Text>
                        <span>{element.price}</span>
                      </div>

                      <div className="CardBody Last px-2">
                        <img
                          style={{ width: "20px" }}
                          src={element.arrimg}
                          alt="Example1"
                        />
                        <button onClick={() => send(element)}>
                          Add To Cart
                        </button>
                        <img
                          style={{ width: "35px" }}
                          src={element.delimg}
                          alt="Example2"
                        />
                      </div>
                    </Card>
                  </Col>
                </>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Home;

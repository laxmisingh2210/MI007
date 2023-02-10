import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import Pagination from "react-bootstrap/Pagination";
import Banner from "../comman/Banner";
import { Container, Row, Col } from 'react-bootstrap'
export default function Tags() {
  const [tags, setTags] = useState([]);
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
let titleb = "Rahul Blogger";
let scriptban ="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look"
  useEffect(() => {
    axios
      .get(
        `https://api.stackexchange.com/2.3/tags?page=${page}&order=desc&sort=popular&site=stackoverflow`
      )
      .then(function (response) {
        setTags(response.data.items);
      })
      .catch(function (error) { console.log(error) });
  }, [page]);
  return (
    <>
      <section className="banner">
        <Banner title={titleb} scip={scriptban}/>
      </section>

      <section className="mainsection">
        <Container>

          <Row>
            <Col>
              <h1 className="heading">Our Categories</h1>
            </Col>
          </Row>
          <Row className="robin">
            {tags.map((tag) => {
              return (
                <Col className=" p-2" lg={2} md={4}>
                  <div className="categories" onClick={() => navigate(`/questions/:${tag?.name}`)}>
                    <p> {tag.name}</p>
                  </div>
                </Col>
              );
            })}

            <Col>

            <div className="pages">
              <Pagination >
                <Pagination.Prev
                  onClick={() => page > 1 && setPage(page - 1)}
                />
                <Pagination.Ellipsis />
                <Pagination.Item active>{page}</Pagination.Item>
                <Pagination.Ellipsis />
                <Pagination.Next onClick={() => setPage(page + 1)} />
              </Pagination>
              </div>
            </Col>
          </Row>
        </Container>
      </section>




    </>
  );
}

import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Card,
  Badge,
  Image,
  Pagination,
  ListGroup,
  Carousel,
} from "react-bootstrap";
import "./Explore.css";
import nicolascage from "../img/Homepage/NicolasCage.webp";
import heatmap from "../img/Homepage/Heatmap.png";
import tyla from "../img/Homepage/Tyla.webp";
import apple from "../img/Homepage/Apple.webp";
import ads1 from "../img/Homepage/Ads 1.webp";
import ipong15 from "../img/Homepage/ipong15.jpg";

const Explore = () => {
  const posts = [
    {
      id: 1,
      image: nicolascage,
      title:
        'Nicolas Cage to portray a live-action version of Spider-man in new series "Noir"',
      time: "Kompas Posted 3 minutes ago",
      tags: ["Film", "Actor"],
      replies: 2,
      views: 61,
    },
    {
      id: 2,
      image: tyla,
      title: "Met Gala 2024: Celebrities, Red Carpet, Theme & More",
      time: "CNN Posted 4 hours ago",
      tags: ["Met Gala", "Fashion", "Celebrity"],
      replies: 56,
      views: 5112,
    },
    {
      id: 3,
      image: apple,
      title:
        "Apple unveils new iPad Pro with ‘outrageously powerful’ AI-powered chip",
      time: "BBC Posted 12 hours ago",
      tags: ["Technology"],
      replies: 73,
      views: 71863,
    },
  ];

  const recentDiscussions = [
    {
      id: 1,
      title: "Can you visit this place with pets?",
      author: "Udin",
      time: "3 hours ago",
      replies: 1000,
    },
    {
      id: 2,
      title: "Can you visit this place with pets?",
      author: "Udin",
      time: "3 hours ago",
      replies: 1000,
    },
    {
      id: 3,
      title: "Can you visit this place with pets?",
      author: "Udin",
      time: "3 hours ago",
      replies: 1000,
    },
    {
      id: 4,
      title: "Can you visit this place with pets?",
      author: "Udin",
      time: "3 hours ago",
      replies: 1000,
    },
  ];

  const additionalNews = [
    {
      id: 1,
      image: nicolascage,
      title:
        'Nicolas Cage to portray a live-action version of Spider-man in new series "Noir"',
    },
    {
      id: 2,
      image: nicolascage,
      title:
        'Nicolas Cage to portray a live-action version of Spider-man in new series "Noir"',
    },
    {
      id: 3,
      image: nicolascage,
      title: "w",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;
  const totalPages = Math.ceil(posts.length / postsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedPosts = posts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  return (
    <Container fluid className="mt-4">
      <Row className="align-items-center mb-3">
        <Col md={2}>
          <Button variant="warning" className="w-100">
            Start a Discussion
          </Button>
        </Col>
        <Col md={1} className="text-end">
          Sort By
        </Col>
        <Col md={2}>
          <Form.Select>
            <option>Activity</option>
          </Form.Select>
        </Col>
        <Col md={2}>
          <Form.Select>
            <option>Status</option>
          </Form.Select>
        </Col>
        <Col md={4} className="text-center">
          <Pagination>
            <Pagination.Prev
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            />
            {[...Array(totalPages)].map((_, idx) => (
              <Pagination.Item
                key={idx + 1}
                active={idx + 1 === currentPage}
                onClick={() => handlePageChange(idx + 1)}
              >
                {idx + 1}
              </Pagination.Item>
            ))}
            <Pagination.Next
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            />
          </Pagination>
        </Col>
        <Col md={1} className="text-end">
          Page {currentPage} out of {totalPages}
        </Col>
        <Col md={2}>
          <Form.Control type="search" placeholder="Search in community" />
        </Col>
      </Row>
      <Row>
        <Col md={2} className="sidebar">
          <img src={heatmap} alt="Heatmap" className="img-fluid heatmap" />
          <div className="heatmap-legend">
            <p>
              <span
                className="legend-dot"
                style={{ backgroundColor: "red" }}
              ></span>{" "}
              > 15 Reports
            </p>
            <p>
              <span
                className="legend-dot"
                style={{ backgroundColor: "blue" }}
              ></span>{" "}
              > 12 Reports
            </p>
            <p>
              <span
                className="legend-dot"
                style={{ backgroundColor: "green" }}
              ></span>{" "}
              > 9 Reports
            </p>
            <p>
              <span
                className="legend-dot"
                style={{ backgroundColor: "lightgreen" }}
              ></span>{" "}
              > 6 Reports
            </p>
            <p>
              <span
                className="legend-dot"
                style={{ backgroundColor: "purple" }}
              ></span>{" "}
              > 3 Reports
            </p>
          </div>
        </Col>
        <Col md={7}>
          {paginatedPosts.map((post) => (
            <Card className="mb-3" key={post.id}>
              <Card.Body className="d-flex">
                <Image src={post.image} thumbnail className="post-image me-3" />
                <div>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text>{post.time}</Card.Text>
                  <div>
                    {post.tags.map((tag, index) => (
                      <Badge bg="info" key={index} className="me-1">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="ms-auto text-end">
                  <Card.Text>{post.replies} replies</Card.Text>
                  <Card.Text>{post.views} views</Card.Text>
                </div>
              </Card.Body>
            </Card>
          ))}
          <Carousel indicators={false}>
            {additionalNews.map((news) => (
              <Carousel.Item key={news.id}>
                <Row className="text-center">
                  <Col>
                    <h5>KOMPAS</h5>
                    <Image src={news.image} fluid className="mb-2" />
                    <p>{news.title}</p>
                  </Col>
                </Row>
              </Carousel.Item>
            ))}
          </Carousel>

          <h5 className="fw-bold">Advertisements</h5>
          <img src={ipong15} className="img-fluid" alt="" />

          <h5 className="fw-bold mt-5">Recommended News</h5>
          <div className="d-flex">
            <div className="rec1 me-2">
              <p>
                Nicolas Cage to portray a live-action version of Spider-man in
                new series ‘Noir’
              </p>
              <p>
                Nicolas Cage to portray a live-action version of Spider-man in
                new series ‘Noir’
              </p>
              <p>
                Nicolas Cage to portray a live-action version of Spider-man in
                new series ‘Noir’
              </p>
              <a
                href="#"
                className="d-flex justify-content-center text-black text-decoration-none"
              >
                Lihat Semua >
              </a>
            </div>

            <div className="rec2 me-2">
              <p>
                Nicolas Cage to portray a live-action version of Spider-man in
                new series ‘Noir’
              </p>
              <p>
                Nicolas Cage to portray a live-action version of Spider-man in
                new series ‘Noir’
              </p>
              <p>
                Nicolas Cage to portray a live-action version of Spider-man in
                new series ‘Noir’
              </p>
              <a
                href="#"
                className="d-flex justify-content-center text-black text-decoration-none"
              >
                Lihat Semua >
              </a>
            </div>

            <div className="rec3 me-2">
              <p>
                Nicolas Cage to portray a live-action version of Spider-man in
                new series ‘Noir’
              </p>
              <p>
                Nicolas Cage to portray a live-action version of Spider-man in
                new series ‘Noir’
              </p>
              <p>
                Nicolas Cage to portray a live-action version of Spider-man in
                new series ‘Noir’
              </p>
              <a
                href="#"
                className="d-flex justify-content-center text-black text-decoration-none"
              >
                Lihat Semua >
              </a>

            </div>
          </div>
          <hr className="border-black border-2 mt-4"/>
        </Col>
        <Col md={3} className="right-sidebar">
          <h5>Popular Tags</h5>
          <div className="mb-3">
            <Badge text="dark" className="righttags me-1 mb-1 bg-success">
              monuments
            </Badge>
            <Badge text="dark" className="righttags me-1 mb-1 bg-success">
              beach
            </Badge>
            <Badge text="dark" className="righttags me-1 mb-1 bg-success">
              open hours
            </Badge>
            <Badge text="dark" className="righttags me-1 mb-1 bg-success">
              recommendation
            </Badge>
            <Badge text="dark" className="righttags me-1 mb-1 bg-success">
              tours
            </Badge>
          </div>
          <h5>Popular News</h5>
          <ListGroup className="mb-3">
            {[...Array(4)].map((_, index) => (
              <ListGroup.Item key={index}>
                Can you visit this place with pets? <br />
                <small className="text-muted">By Udin, 3 hours ago</small>
              </ListGroup.Item>
            ))}
          </ListGroup>
          <h5>Advertisements</h5>
          <Image src={ads1} fluid className="mb-4" />
          <h5>Recent Discussions</h5>
          {recentDiscussions.map((discussion) => (
            <div key={discussion.id} className="recent-discussion mb-3">
              <div className="d-flex justify-content-between">
                <div>
                  <p className="mb-0">{discussion.title}</p>
                  <small className="text-muted">
                    By {discussion.author}, {discussion.time}
                  </small>
                </div>
                <Badge bg="light" text="dark" className="ms-3">
                  {discussion.replies}
                </Badge>
              </div>
              <hr />
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Explore;

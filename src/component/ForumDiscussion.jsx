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
} from "react-bootstrap";
import "./ForumDiscussion.css";
import nicolaspage from "../img/Homepage/NicolasCage.webp";

const ForumDiscussion = () => {
  const posts = [
    {
      id: 1,
      image: nicolaspage,
      title:
        'Nicolas Cage to portray a live-action version of Spider-man in new series "Noir"',
      time: "Posted 3 minutes ago",
      tags: ["Film", "Actor"],
      replies: 0,
      views: 5,
    },
    {
      id: 2,
      image: "path-to-image-2",
      title: "Met Gala 2024: Celebrities, Red Carpet, Theme & More",
      time: "Posted 12 hours ago",
      tags: ["Celebrity", "Hollywood"],
      replies: 0,
      views: 5,
    },
    {
      id: 3,
      image: "path-to-image-2",
      title: "Met Gala 2024: Celebrities, Red Carpet, Theme & More",
      time: "Posted 12 hours ago",
      tags: ["Celebrity", "Hollywood"],
      replies: 0,
      views: 5,
    },
    {
      id: 4,
      image: "path-to-image-2",
      title: "Met Gala 2024: Celebrities, Red Carpet, Theme & More",
      time: "Posted 12 hours ago",
      tags: ["Celebrity", "Hollywood"],
      replies: 0,
      views: 5,
    },
    {
      id: 5,
      image: "path-to-image-2",
      title: "Met Gala 2024: Celebrities, Red Carpet, Theme & More",
      time: "Posted 12 hours ago",
      tags: ["Celebrity", "Hollywood"],
      replies: 0,
      views: 5,
    },
    {
      id: 6,
      image: "path-to-image-2",
      title: "Met Gala 2024: Celebrities, Red Carpet, Theme & More",
      time: "Posted 12 hours ago",
      tags: ["Celebrity", "Hollywood"],
      replies: 0,
      views: 5,
    },
    {
      id: 7,
      image: "path-to-image-2",
      title: "Met Gala 2024: Celebrities, Red Carpet, Theme & More",
      time: "Posted 12 hours ago",
      tags: ["Celebrity", "Hollywood"],
      replies: 0,
      views: 5,
    },
    {
      id: 8,
      image: "path-to-image-2",
      title: "Met Gala 2024: Celebrities, Red Carpet, Theme & More",
      time: "Posted 12 hours ago",
      tags: ["Celebrity", "Hollywood"],
      replies: 0,
      views: 5,
    },
    {
      id: 9,
      image: "path-to-image-2",
      title: "Met Gala 2024: Celebrities, Red Carpet, Theme & More",
      time: "Posted 12 hours ago",
      tags: ["Celebrity", "Hollywood"],
      replies: 0,
      views: 5,
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
          <Form.Check type="checkbox" label="All Discussion" className="mb-2" />
          <Form.Check type="checkbox" label="Tags" className="mb-2" />
          <Form.Check type="checkbox" label="Inbox" className="mb-2" />
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
        </Col>
        <Col md={3} className="right-sidebar">
          <h5>Popular Tags</h5>
          <div className="mb-3">
            <Badge text="dark" className="righttags me-1 mb-1">
              monuments
            </Badge>
            <Badge text="dark" className="righttags me-1 mb-1">
              beach
            </Badge>
            <Badge text="dark" className="righttags me-1 mb-1">
              open hours
            </Badge>
            <Badge text="dark" className="righttags me-1 mb-1">
              recommendation
            </Badge>
            <Badge text="dark" className="righttags me-1 mb-1">
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
          <Image src="path-to-nicolas-cage-image" fluid />
        </Col>
      </Row>
    </Container>
  );
};

export default ForumDiscussion;

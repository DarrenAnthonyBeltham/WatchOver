import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
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
} from "react-bootstrap";
import "./Community.css";
import nicolascage from "../img/Homepage/NicolasCage.webp";
import tyla from "../img/Homepage/Tyla.webp";
import apple from "../img/Homepage/Apple.webp";
import communityImage from "../img/Community/Politics.jpg";
import games from "../img/Community/games.jpg";
import business from "../img/Community/Crypto.png";
import entertaiment from "../img/Community/entertaiment.jpg";
import rap from "../img/Community/rap.webp";
import { useNavigate } from "react-router-dom";

const Community = () => {
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

  const communities = [
    {
      id: 1,
      name: "Politics",
      members: "1.1M members",
      online: "45K online",
      description:
        "Politics is for news and discussion about politics around the world.",
      imgSrc: communityImage,
    },
    {
      id: 2,
      name: "Games",
      members: "555K members",
      online: "23K online",
      description:
        "The goal of Games is to provide a place for informative and interesting gaming content and discussions. ",
      imgSrc: games,
    },
    {
      id: 3,
      name: "Business",
      members: "1.1M members",
      online: "45K online",
      description:
        "Business brings you the best of your business section. From tips for running a business, to pitfalls to avoid, business teaches you the smart moves and helps you dodge the foolish",
      imgSrc: business,
    },
    {
      id: 4,
      name: "Entertaiment",
      members: "875K members",
      online: "42K online",
      description:
        "Entertainment is a form of activity that holds the attention and interest of an audience or gives pleasure and delight.",
      imgSrc: entertaiment,
    },
    {
      id: 5,
      name: "Rap",
      members: "921K members",
      online: "49K online",
      description: "Home of the fan of rap!",
      imgSrc: rap,
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;
  const totalPages = Math.ceil(posts.length / postsPerPage);
  const navigate = useNavigate();

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedPosts = posts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  return (
    <div>
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
            <div className="d-flex flex-column">
              <div>
                <p onClick={() => navigate("/community")}>For You</p>
              </div>
              <div>
                <p onClick={() => navigate("/explore")}>Explore</p>
              </div>
              <div>
                <p onClick={() => navigate("")}>Inbox</p>
              </div>
            </div>
          </Col>
          <Col md={7}>
            {paginatedPosts.map((post) => (
              <Card className="mb-3" key={post.id}>
                <Card.Body className="d-flex">
                  <Image
                    src={post.image}
                    thumbnail
                    className="post-image me-3"
                  />
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
          <Col md={3}>
            <div className="right-sidebar">
              <h5 className="mb-3 fw-bold">Recommended Communities</h5>
              {communities.map((community) => (
                <div
                  key={community.id}
                  className="community-item d-flex align-items-center"
                >
                  <div className="d-flex flex-column align-items-center me-3">
                    <Image
                      src={community.imgSrc}
                      className="rounded mb-2"
                      width="75"
                      height="75"
                    />
                    <Button
                      className="follow-button"
                      type="submit"
                      value="submit"
                    >
                      Follow
                    </Button>
                  </div>
                  <div className="flex-grow-1">
                    <h6 className="mb-0 fw-bold">{community.name}</h6>
                    <small className="text-muted">
                      {community.members} • {community.online}
                    </small>
                    <p className="mb-0">{community.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Community;

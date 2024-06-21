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
import { BsChatDots, BsQuestionCircle, BsEnvelope, BsBell, BsPeople } from 'react-icons/bs';

const ProfileUser = () => {

  const NavigationMenu = () => {
    return (
      <div className="d-flex flex-column align-items-start">
        <div className="mb-2">
          <BsChatDots /> All Discussion
        </div>
        <div className="mb-2">
          <BsQuestionCircle /> Questions
        </div>
        <div className="mb-2">
          <BsEnvelope /> Messages
        </div>
        <div className="mb-2">
          <BsBell /> Inbox
        </div>
        <div className="mb-2">
          <BsPeople /> Community
        </div>
      </div>
    );
  };

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
    <div>
    <Row className="align-items-center mb-3">
      <Col md={3} className="ms-4 mt-4">
        <Button variant="warning" className="w-100 mb-3">
          + Create new
        </Button>
        <NavigationMenu />
      </Col>
      <Col md={1} className="text-end mt-4">
        Sort By
      </Col>
      <Col md={1} className="mt-4">
        <Form.Select>
          <option>Activity</option>
        </Form.Select>
      </Col>
      <Col md={1} className="mt-4">
        <Form.Select>
          <option>Status</option>
        </Form.Select>
      </Col>
      <Col md={2} className="text-center mt-4">
        <Pagination className="mt-1">
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
      <Col md={1} className="text-end mt-4">
        Page {currentPage} out of {totalPages}
      </Col>
      <Col md={2} className="mt-4">
        <Form.Control type="search" placeholder="Search in community" />
      </Col>
    </Row>
     
    </div>
  );
};

export default ProfileUser;

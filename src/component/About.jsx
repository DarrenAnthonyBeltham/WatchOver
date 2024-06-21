import React, { useState } from 'react';
import './About.css';
import ads1 from '../img/Homepage/Ads 1.webp';
import ads2 from '../img/Homepage/ipong15.jpg';
import communityImage from "../img/Community/Politics.jpg";
import games from "../img/Community/games.jpg";
import business from "../img/Community/Crypto.png";
import entertaiment from "../img/Community/entertaiment.jpg";
import rap from "../img/Community/rap.webp";
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

const About = () => {
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "Samrat Bachhav",
      text: "I was experiencing a hollywood movie while reading...have seen similar kind of movie somewhere",
      timestamp: "6y",
    },
    {
      id: 2,
      author: "Varun Gupta",
      text: "It must be triangle that you are talking about.",
      timestamp: "6y",
    },
    {
      id: 3,
      author: "Samrat Bachhav",
      text: "Exactly...i could recollect the story now. Super movie.",
      timestamp: "6y",
    },
  ]);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    const newCommentObj = {
      id: comments.length + 1,
      author: "Anonymous", 
      text: newComment,
      timestamp: "Just now",
    };
    setComments([...comments, newCommentObj]);
    setNewComment("");
  };

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

  return (
    <div>
      <div className='d-flex flex-row mb-3'>
        
        <div className='advertisements'>
          <h1 className='fw-bold fs-3'>Advertisements</h1>
          <img src={ads1} className='img-fluid' alt="" />
          <h1 className='fw-bold fs-3 mt-4'>Advertisements</h1>
          <img src={ads2} className='img-fluid' alt="" />
        </div>

        <div className='aboutus'>
          <div>
            <h1 className='fw-bold fs-2'>About Watchover</h1>
            <h4 className='fs-5'>Our Mission</h4>
          </div>
          
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultrices lacinia commodo. Donec commodo arcu et nisi dictum faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut euismod blandit lorem nec semper. Morbi tincidunt congue ipsum eu consequat. Maecenas suscipit justo ac sapien feugiat molestie. Curabitur nisl est, sagittis sit amet vestibulum id, tristique eu dolor. Pellentesque feugiat libero et dictum luctus. Nulla at cursus nibh, sit amet facilisis dolor. In enim felis, consequat non mi sit amet, aliquam gravida elit. Aliquam erat volutpat. Maecenas id dapibus orci. Proin at velit risus. Maecenas hendrerit fermentum tellus non sollicitudin.</p>
            <p className='mt-4'>Sed non fringilla sem. Nulla ipsum lacus, ullamcorper id tempus non, ornare et augue. Aenean posuere est vel magna fermentum venenatis. Mauris quis nunc ultrices, ultricies arcu sit amet, varius mi. Fusce sed tristique neque, ac efficitur neque. Aliquam nec leo scelerisque, posuere diam vitae, mollis libero. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam nunc libero, scelerisque eu tempor a, sodales dictum ipsum. Duis scelerisque felis eget dolor placerat semper. Phasellus pellentesque consequat quam, in suscipit velit porta at. Pellentesque pharetra neque a sapien pharetra porta.</p>
            <p className='mt-4'>Pellentesque dictum, orci eget vehicula interdum, libero elit pulvinar ipsum, ut cursus magna quam sit amet eros. Nulla scelerisque fermentum nibh, at cursus diam consequat et. Phasellus in lectus elementum magna placerat mattis id ac purus. Cras ultricies aliquam ligula non sagittis. Sed eget risus vel purus sodales laoreet at sit amet arcu. Phasellus ultrices lorem ut purus tempor volutpat ut nec neque. Aliquam scelerisque turpis odio.</p>
            <p className='mt-4'>Vivamus finibus eros vitae mauris vehicula consequat. Aliquam ipsum libero, imperdiet a congue ut, interdum vitae justo. Phasellus turpis ligula, lobortis id ullamcorper vel, dictum id sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed pharetra, sem id convallis dignissim, sem leo auctor erat, eget varius dui ligula dictum sapien. Quisque dictum, mauris non mollis posuere, tellus justo vehicula diam, a luctus quam purus eget enim. Aliquam placerat, nisi et dignissim dapibus, massa metus fermentum augue, ut lobortis justo odio non metus. Sed fermentum orci sed leo tempus lacinia. Phasellus metus nulla, lobortis eget pretium vehicula, efficitur sed dui. Nulla congue enim in augue venenatis, laoreet mollis urna molestie. Pellentesque non fringilla enim, sed pharetra urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae</p>
            <p className='mt-4'>Morbi nisl felis, pulvinar vitae dolor eu, suscipit accumsan ipsum. Aenean porttitor odio nec blandit fringilla. Praesent sed pellentesque lectus, ut tristique nulla. Vestibulum ac urna mauris. Cras porttitor nunc ex, ut tristique odio accumsan vel. Donec sodales, ligula sed aliquet scelerisque, erat massa sollicitudin ipsum, ac sagittis metus nulla nec massa. Donec scelerisque imperdiet ligula id laoreet. Sed et tellus posuere, volutpat felis eget, ullamcorper purus.</p>

            <div className="comments-section mt-4">
              <h5>Comments</h5>
              {comments.map(comment => (
                <div key={comment.id} className="mb-2">
                  <strong>{comment.author}</strong> · {comment.timestamp}
                  <p>{comment.text}</p>
                  <Button variant="outline-success" size="sm" className="me-2">Like</Button>
                  <Button variant="outline-danger" size="sm">Dislike</Button>
                </div>
              ))}
              <Form className="mt-3">
                <Form.Group controlId="commentInput">
                  <Form.Control 
                    type="text" 
                    placeholder="Add a comment..." 
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                  />
                </Form.Group>
                <Button 
                  variant="success" 
                  className="mt-2" 
                  onClick={handleAddComment}
                >
                  Add comment
                </Button>
              </Form>
            </div>
          </div>
        </div>

        <hr className=''/>

        <div className='rightsidebar'>
          <Form.Control className='mb-4' type="search" placeholder="Search in community" />
          <h5 className='mb-2 fw-bold'>Popular News</h5>
          <ListGroup className="mb-3">
            {[...Array(4)].map((_, index) => (
              <ListGroup.Item key={index}>
                Can you visit this place with pets? <br />
                <small className="text-muted">By Udin, 3 hours ago</small>
              </ListGroup.Item>
            ))}
          </ListGroup>

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

      </div>
    </div>
  );
}

export default About;

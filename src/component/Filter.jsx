import React from 'react'

const Filter = () => {
  return (
    <div>
             <Row className="mb-3">
          <Col md={2}>
            <h6>Sort by</h6>
            <Form.Check type="checkbox" label="Newest" />
            <Form.Check type="checkbox" label="Oldest" />
            <Form.Check type="checkbox" label="Most popular" />
            <Form.Check type="checkbox" label="Recent activity" />
          </Col>
          <Col md={2}>
            <h6>Community</h6>
            <Form.Check type="checkbox" label="Followed" />
            <Form.Check type="checkbox" label="Not followed" />
            <h6 className="mt-3">Filter by</h6>
            <Form.Check type="checkbox" label="Answered" />
            <Form.Check type="checkbox" label="Unanswered" />
            <h6 className="mt-3">News type</h6>
            <Form.Check type="checkbox" label="Verified" />
            <Form.Check type="checkbox" label="Not verified" />
          </Col>
          <Col md={4}>
            <h6>Category</h6>
            <InputGroup>
              <Form.Control placeholder="e.g Business or Entertainment" />
            </InputGroup>
            <Form.Check type="checkbox" label="Business" />
            <Form.Check type="checkbox" label="Entertainment" />
            <Form.Check type="checkbox" label="Agriculture" />
            <Form.Check type="checkbox" label="Technology" />
            <Form.Check type="checkbox" label="Politics" />
          </Col>
          <Col md={4}>
            <h6>Location</h6>
            <Form.Check type="checkbox" label="Use current location" />
            <Form.Label>Max distance</Form.Label>
            <Form.Range />
            <Form.Check type="checkbox" label="Search location" />
            <div className="d-flex flex-wrap">
              <Button variant="outline-success" className="m-1">Jakarta</Button>
              <Button variant="outline-success" className="m-1">Jawa Barat</Button>
              <Button variant="outline-success" className="m-1">Pontianak</Button>
              <Button variant="outline-success" className="m-1">Kalimantan Barat</Button>
            </div>
          </Col>
        </Row>
    </div>
  )
}

export default Filter

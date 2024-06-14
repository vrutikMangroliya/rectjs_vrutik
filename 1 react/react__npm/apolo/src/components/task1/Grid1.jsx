import React from 'react'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'

const Grid1 = () => {
  return (
    <div>
        <div className='container' >
          <Row>
            <Col className='box'>col-md-1</Col>
            <Col className='box'>col-md-1</Col>
            <Col className='box'>col-md-1</Col>
            <Col className='box'>col-md-1</Col>
            <Col className='box'>col-md-1</Col>
            <Col className='box'>col-md-1</Col>
            <Col className='box'>col-md-1</Col>
            <Col className='box'>col-md-1</Col>
            <Col className='box'>col-md-1</Col>
            <Col className='box'>col-md-1</Col>
            <Col className='box'>col-md-1</Col>
            <Col className='box'>col-md-1</Col>
          </Row><Row>
            <Col className='box' md={{ span: 8 }}>col-md-8</Col>
            <Col className='box' md={{ span: 4 }}>col-md-4</Col>
          </Row><Row>
            <Col className='box' md={{ span: 4 }}>col-md-4</Col>
            <Col className='box' md={{ span: 4 }}>col-md-4</Col>
            <Col className='box' md={{ span: 4 }}>col-md-4</Col>
          </Row><Row>
            <Col className='box' md={{ span: 6 }}>col-md-6</Col>
            <Col className='box' md={{ span: 6 }}>col-md-6</Col>
          </Row>
        </div>
      </div>
  )
}

export default Grid1

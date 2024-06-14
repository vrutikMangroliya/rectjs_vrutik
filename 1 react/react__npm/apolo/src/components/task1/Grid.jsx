import React from 'react'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'

const Grid = () => {
  return (
    <div className='p-3'>
        <div className='container'>
            <Row className='top'>
                <Col className='box1'>Col-<br></br>md-1</Col>
                <Col className='box1'>Col-<br></br>md-1</Col>
                <Col className='box1'>Col-<br></br>md-1</Col>
                <Col className='box1'>Col-<br></br>md-1</Col>
                <Col className='box1'>Col-<br></br>md-1</Col>
                <Col className='box1'>Col-<br></br>md-1</Col>
                <Col className='box1'>Col-<br></br>md-1</Col>
                <Col className='box1'>Col-<br></br>md-1</Col>
                <Col className='box1'>Col-<br></br>md-1</Col>
                <Col className='box1'>Col-<br></br>md-1</Col>
                <Col className='box1'>Col-<br></br>md-1</Col>
                <Col className='box1'>Col-<br></br>md-1</Col>
            </Row>
            <Row className='top mt-12'>
              <Col className='box2' md={{span:8}}>.col-md-8</Col>
              <Col className='box2' md={{span:4}}>.col-md-4</Col>
            </Row>
            <Row className='top mt-12'>
              <Col className='box2' md={{span:4}}>.col-md-4</Col>
              <Col className='box2' md={{span:4}}>.col-md-4</Col>
              <Col className='box2' md={{span:4}}>.col-md-4</Col>
            </Row>
            <Row className='top mt-12'>
              <Col className='box2 ' md={{span:6}}>.col-md-6</Col>
              <Col className='box2 ' md={{span:6}}>.col-md-6</Col>
            </Row>
            
        </div>

    </div>
  )
}

export default Grid

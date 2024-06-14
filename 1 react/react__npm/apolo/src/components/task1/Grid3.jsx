import React from 'react'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'

const Grid3 = () => {
  return (
    <div>
      <div className='p-3'>
            <div className='container'>
                <Row className='top'>
                    <Col className='box3-1 mr-1'>Col 1</Col>
                    <Col className='box3-1 mr-1'>Col 1</Col>
                    <Col className='box3-1 mr-1'>Col 1</Col>
                    <Col className='box3-1 mr-1'>Col 1</Col>
                    <Col className='box3-1 mr-1'>Col 1</Col>
                    <Col className='box3-1 mr-1'>Col 1</Col>
                    <Col className='box3-1 mr-1'>Col 1</Col>
                    <Col className='box3-1 mr-1'>Col 1</Col>
                    <Col className='box3-1 mr-1'>Col 1</Col>
                    <Col className='box3-1 mr-1'>Col 1</Col>
                    <Col className='box3-1 mr-1'>Col 1</Col>
                    <Col className='box3-1 mr-1'>Col 1</Col>
                </Row>
                <Row className='top'>
                    <Col className='box3-2 mr-1 mt-2' ms={{span:3}}>Col 3</Col>
                    <Col className='box3-2 mr-1 mt-2' ms={{span:3}}>Col 3</Col>
                    <Col className='box3-2 mr-1 mt-2' ms={{span:3}}>Col 3</Col>
                    <Col className='box3-2 mr-1 mt-2' ms={{span:3}}>Col 3</Col>
                </Row>
                <Row className='top'>
                    <Col className='box3-3 mr-1 mt-2' ms={{span:4}}>Col 4</Col>
                    <Col className='box3-3 mr-1 mt-2' md={{span:4}}>Col 4</Col>
                    <Col className='box3-3 mr-1 mt-2' ms={{span:4}}>Col 4</Col>
                </Row>
                <Row className='top'>
                    <Col className='box3-4 mr-1 mt-2' md={{span:8}}>Col 8</Col>
                    <Col className='box3-4 mr-1 mt-2' ms={{span:4}}>Col 4</Col>
                </Row>
                <Row className='top'>
                    <Col className='box3-5 mr-1 mt-2' ms={{span:2}}>Col 2</Col>
                    <Col className='box3-5 mr-1 mt-2' ms={{span:2}}>Col 2</Col>
                    <Col className='box3-5 mr-1 mt-2' md={{span:4}}>Col 4</Col>
                    <Col className='box3-5 mr-1 mt-2' ms={{span:2}}>Col 2</Col>
                    <Col className='box3-5 mr-1 mt-2' ms={{span:2}}>Col 2</Col>
                </Row>
                <Row className='top'>
                    <Col className='box3-6 mr-1 mt-2' ms={{span:6}}>Col 6</Col>
                    <Col className='box3-6 mr-1 mt-2' ms={{span:6}}>Col 6</Col>
                </Row>
                <Row className='top'>
                    <Col className='box3-7 mr-1 mt-2' ms={{span:12}}>Col 12</Col>
                </Row>
            </div>
        </div>
    </div>
  )
}

export default Grid3

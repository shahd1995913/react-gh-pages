import React from 'react';
import horns from '../components/caribou.webp'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import btn from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
class HornedBeast extends React.Component {


    constructor(props) {
        super(props);
        this.state = { NumberOfClick: 0 }

    }


    incrementOfClicks = () => {

        this.setState({ NumberOfClick: this.state.NumberOfClick + 1 })

    }

    render() {


        return (
            <>

<Row xs={1} md={4} className="g-4">

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={this.props.imgUrl} />
  <Card.Body>
    <Card.Title>Title : {this.props.title}</Card.Title>
    <Card.Text>
    NumberOfClick :  {this.state.NumberOfClick}
    </Card.Text>

    <Card.Text>
      {this.props.description}
    </Card.Text>
    
    <Button variant="primary" onClick={this.incrementOfClicks}>Add to favierate</Button>
  </Card.Body>
</Card>

  </Row>


                {/* <Card border="primary" style={{ width: '18rem' }}>
                    <Card.Header> <h2>{this.props.title}</h2></Card.Header>
                    <Card.Body>
                        <Card.Title></Card.Title>
                        <Card.Text>
                       

                        <Col xs={6} md={4}>
      <Image src={this.props.imgUrl} alt="horns" title="This is horns animals" roundedCircle />
    </Col>


                <p>
                    {this.props.description}</p>

                        </Card.Text>
                        <Button variant="light" onClick='incrementOfClicks' >Light</Button>
                      
                    </Card.Body>
                </Card>
                <br /> */}

               
                
               
            </>


        )

    }

}

export default HornedBeast;
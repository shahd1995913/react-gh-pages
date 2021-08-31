import React from 'react';
import horns from '../components/caribou.webp'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import btn from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import model from 'react-bootstrap/Modal'

s
class SelectedBeast extends React.Component {


    render() {


        return (
            <>

        

<Modal.Dialog>
  <Modal.Header closeButton>
    <Modal.Title>Title : {this.props.title}</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    
    <img variant="top" src={this.props.imgUrl}></img>
    <p> {this.props.description}</p>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary">Close</Button>
    {/* <Button variant="primary">Save changes</Button> */}
  </Modal.Footer>
</Modal.Dialog>

               
                          
            </>


        )

    }

}

export default SelectedBeast ;





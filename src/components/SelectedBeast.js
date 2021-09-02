import React from 'react';
import horns from '../components/caribou.webp'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import btn from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Modal from 'react-bootstrap/Modal'




class SelectedBeast extends React.Component {
    


    render() {
        console.log(this.props)         
            
            return (

            <div>

                <Modal show={this.props.show} onHide={this.props.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.selctedImg.title}</Modal.Title>
                    </Modal.Header>
                    <div>

                        <img src={this.props.selctedImg.image_url} className='imgInModel' />
                        <Modal.Body>
                           {this.props.selctedImg.description}
                        </Modal.Body>
                    </div>
                    <Modal.Footer>
                       {}
                    </Modal.Footer>
                </Modal>
            </div>
        )

    }
}

export default SelectedBeast;
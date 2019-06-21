import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import MapContainer from './mapcontainer'

export default class UserModal extends Component {

render(){
  console.log("modal rendered");
  let {username, avatar, userStatus}= this.props.profile
  return(
      <div id='usermodal'>
      <Modal
      size = 'xl'
      isOpen = {this.props.isOpen}
      toggle = {this.props.toggle}
      className = {this.props.className}
      centered>
      <ModalHeader>
          <div align = 'center'>
                {username}
          </div>
      </ModalHeader>
          <ModalBody>
            <div>
                <div id='modalavatar'>
                    <img src={avatar}/>
                </div>
            <div className = {userStatus}>
                <b>{userStatus}</b>
            </div>
          </div>
          </ModalBody>
      </Modal>
        </div>
        )
      }
    }

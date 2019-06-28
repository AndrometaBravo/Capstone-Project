
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import{ Avatar } from './avatar'
import PropTypes from "prop-types"
import ActiveStorageProvider from 'react-activestorage-provider'


class ChangeAvatar extends React.Component {
  constructor(props) {
    super(props);
    const{ current_user } = props
    this.state = {
      modal: false,
      current_user
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  handleSubmit = (current_user)=>{
    this.setState({ current_user })
  }
  render() {
    const{ current_user } = this.state
    return (
      <div>
        <span onClick={this.toggle}><img className="feed-avatar-small" src={current_user.picture_url} /></span>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Change Avatar</ModalHeader>
          <ModalBody>





          <p>REMOVE CREDENTIALS FROM STORAGE.YML</p>
           <h5>User: {current_user.firstname} </h5>
           { current_user && current_user.picture_url &&
             <div id="change-avatar-div">
               <img id="avatart-pic-preview" src={current_user.picture_url} />
               <p id="user-avatar-edit"> Current Avatar </p>
             </div>
           }
           <ActiveStorageProvider
             endpoint={{
               path: `/updateavatar/${current_user.id}`,
               model: 'User',
               attribute: 'avatar',
               method: 'PUT',
             }}
             onSubmit={this.handleSubmit}
             render={({ handleUpload, uploads, ready }) => (
               <div>
                 <input
                   type="file"
                   disabled={!ready}
                   onChange={e => handleUpload(e.currentTarget.files)}
                 />

                 {uploads.map(upload => {
                   switch (upload.state) {
                     case 'waiting':
                       return <p key={upload.id}>Waiting to upload {upload.file.name}</p>
                     case 'uploading':
                       return (
                         <p key={upload.id}>
                           Uploading {upload.file.name}: {upload.progress}%
                         </p>
                       )
                     case 'error':
                       return (
                         <p key={upload.id}>
                           Error uploading {upload.file.name}: {upload.error}
                         </p>
                       )
                     case 'finished':
                       return (
                         <p key={upload.id}>Finished uploading {upload.file.name}</p>
                       )
                   }
                 })}
               </div>
             )}
           />









          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ChangeAvatar;

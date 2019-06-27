import React from "react"
import PropTypes from "prop-types"
import ActiveStorageProvider from 'react-activestorage-provider'

class Avatar extends React.Component {
  constructor(props){
      super(props)
      const{ current_user } = props
      this.state = {
        current_user
      }
    }

    handleSubmit = (current_user)=>{
      this.setState({ current_user })
    }

  render () {
    const{ current_user } = this.state
    return (
      <React.Fragment>
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
     </React.Fragment>
    );
  }
}

export default Avatar

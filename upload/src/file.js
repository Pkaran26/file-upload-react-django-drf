import React, { Component } from 'react';
import axios from 'axios';

class File extends Component{
  constructor(props){
    super(props);
    this.state = {
      selectedFile: '',
    }
  }
  onChangeHandler=event=>{
    if(this.checkMimeType(event)){
      this.setState({
        selectedFile: event.target.files,
        loaded: 0,
      })
    }
  }
  checkMimeType=(event)=>{
    //getting file object
    let files = event.target.files
    //define message container
    let err = ''
    // list allow mime type
   const types = ['image/png', 'image/jpeg', 'image/gif']
    // loop access array
    for(var x = 0; x<files.length; x++) {
     // compare file type find doesn't matach
         if (types.every(type => files[x].type !== type)) {
         // create error message and assign to container
         err += files[x].type+' is not a supported format\n';
       }
     };

   if (err !== '') { // if message not same old that mean has error
        event.target.value = null // discard selected file
        console.log(err)
         return false;
    }
   return true;
  }
  onClickHandler = () => {
    const data = new FormData()
    for(var x = 0; x<this.state.selectedFile.length; x++) {
      data.append('file', this.state.selectedFile[x])
    }
    axios.post("http://localhost:8000/", data, {
       // receive two    parameter endpoint url ,form data
     }).then(res => { // then print response status
       console.log(res.statusText)
     })
  }
  render(){
    return(
       <div>
         <input type="file" name="file" multiple onChange={this.onChangeHandler}/>
         <button type="button" onClick={this.onClickHandler}>Upload</button>
       </div>
    )
  }
}

export default File;

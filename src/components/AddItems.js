import React, { Component } from 'react';
import axios from "axios";
//import Dropzone from 'react-dropzone';

export default class AddItems extends Component {
  constructor(props) {
    super(props);

    //Defining the "this" in the functions using .bind method
    this.onChangeItemName = this.onChangeItemName.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeimg = this.onChangeimg.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      itemName: "",
      category : "Women",
      description: "",
      image : ""
    }
  }

  //List of category
  //Event Handlers:
  onChangeItemName(e) {
    this.setState({
      itemName: e.target.value
    });
  }

  onChangeCategory(e) {
    const { value } = e.target
    this.setState({
      category : value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }
  onChangeimg(e) {
    this.setState({
      image : e.target.value
    });
  }


  onSubmit(e) {
    e.preventDefault();
    const item = {
      itemName: this.state.itemName,
      category: this.state.category,
      description: this.state.description,
      image : this.state.image
    }

    console.log(item);

    axios.post("http://localhost:3000/addItems/add", item)
      .then(res => console.log(res.data));

    window.location = '/ItemsList'
  }

 

  render() {
    return (
      <div>
        <h3> "Only by giving are you able to receive more than you already have." -Jim Rohn </h3>
        <br />
        <form onSubmit = {this.onSubmit}>
         
          <div className = "addItemName">
            <label>Item Name  </label>
            <input 
              type = "text" 
              className = "itemName" 
              value = {this.state.itemName} 
              onChange = {this.onChangeItemName}/>
          </div>

          <br />

          <div className = "addCategory">
            <label>Select Category  </label>
            <select
              ref = "userInput"
              required
              className = "category"
              value = {this.state.category}
              onChange = {this.onChangeCategory}
              >
              <option value = "Women">Women</option>
              <option value = "Men">Men</option>
              <option value = "Kids">Kids</option>
            </select>
          </div> 

          <br />

          <div className = "addDescription">
            <label>Description  </label>
            <input 
              type = "text" 
              className = "description" 
              value = {this.state.description} 
              onChange = {this.onChangeDescription}/>
          </div>

          <br />
         <div >
         <div className = "addimg">
            <label>Add imgage</label>
            <input 
              type = "text" 
              className = "Addimg" 
              value = {this.state.image} 
              onChange = {this.onChangeimg}/>
          </div>
        
</div>   
          <div className = "submitButton">
            <input type = "submit" value = "Submit" className = "button" />
          </div>

        </form>
      </div>
    )
  }
}

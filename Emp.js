import React, { Component } from 'react';

import Pagination from './Pagination.js'

import {withRouter} from 'react-router-dom'

 

class Emp extends Component {

 

constructor(props){

super(props);

this.state ={

isLoaded : false,

exampleItems : JSON.parse(localStorage.getItem('list')) || [],

totalList : 0,

pageOfItems: [],

totalItems : JSON.parse(localStorage.getItem('list')) || []

} 

}

 

componentDidMount() {

fetch("http://demo9197058.mockable.io/users")

.then(res => res.json())

.then(

(result) => {

console.log(result);

 

localStorage.setItem('list', JSON.stringify(result))
this.setState({

isLoaded: true,

exampleItems: result,

pageOfItems : result.slice(0,10),

totalList : result.length

});

},

// Note: it's important to handle errors here

// instead of a catch() block so that we don't swallow

// exceptions from actual bugs in components.

(error) => {

console.log("error")

this.setState({

isLoaded: true,

error

});

}

)

}

 

getRowId(event){

// console.log("Vishnu ", event.target.parentNode.id, this)

var userid = '/user/'+ event.target.parentNode.id

this.props.history.push(userid) ///push('/home')

}

 

onChangePage(pageOfItems){

this.setState({

pageOfItems : pageOfItems

})

}
renderTotalItems(){

  return (this.state.pageOfItems[0].id + ' - ' + this.state.pageOfItems[this.state.pageOfItems.length-1].id + ' of ' + this.state.totalList)
  
  }
  
   
  
  searchByFirstName(e){
  
  var searchString = e.target.value
  
  var personsList = []
  
  if(searchString.length > 0){
  
  personsList = this.state.exampleItems.filter(function(person){
  
  return person.first_name.toLowerCase().match( searchString );
  
  });
  
  }
  
  
  
  
  
  if(personsList.length > 0 || searchString.length > 0){
  
  this.setState({
  
  pageOfItems : personsList,
  
  exampleItems : personsList
  
  })
  
  }else{
  
  this.setState({
  
  pageOfItems : this.state.totalItems.slice(0,10),
  
  exampleItems : JSON.parse(localStorage.getItem('list'))
  
  })
  
  }
  
   
  
  }
  sortList(event){

    console.log("Vishnu sortList", event.target.parentNode.innerText)
    
    var sortingColumn = event.target.parentNode.innerText;
    
     
    
    var sortByKey ;
    
    // switch(sortingColumn) {
    
    // case 'FIRST NAME':
    
    // break;
    
    // case 'LAST NAME':
    
     
    
    // break;
    
    // case 'COMPANY NAME':
    
     
    
    // break;
    
     
    
    // case 'CITY':
    
     
    
    // break;
    
    // case 'STATE':
    
     
    
    // break;
    
    // case 'ZIP':
    
     
    
    // break;
    
    // case 'EMAIL':
    
     
    
    // break;
    
    // case 'WEB':
    
     
    
    // break;
    
     
    
    // case 'AGE':
    
     
    
    // break;
    
     
    
    // default:
    
     
    
    // break;
    
    // }
    
    }
    render() {

      let rows = this.state.pageOfItems.map(person => {
      
      return (<tr key = {person.id} id = {person.id} onClick= {this.getRowId.bind(this)}>
      
      <td>
      
      { person.first_name }
      
      </td>
      
      <td>
      
      { person.last_name }
      
      </td>
      
      <td>
      
      { person.company_name }
      
      </td>
      
      <td>
      
      { person.city }
      
      </td>
      
      <td>
      
      { person.state }
      
      </td>
      
      <td>
      
      { person.zip }
      
      </td>
      
      <td>
      
      { person.email }
      
      </td>
      
      <td>
      
      { person.web }
      
      </td>
      
      <td>
      
      { person.age }
      
      </td>
      
      </tr>)
      
      })
      return (

<div>

<input type = "text" placeholder={"search by first name"} onChange={this.searchByFirstName.bind(this)}></input>

{ this.state.pageOfItems.length > 0 ? this.renderTotalItems() : '' }

{this.state.exampleItems.length > 0 ? 

<div> 

 

<table > < tbody>

<tr>

<td >

FIRST NAME <i onClick = {this.sortList.bind(this)} className="fa fa-caret-down" style={{"font-size":'24px', "padding-top": "10px"}}></i>

</td> 

<td>

LAST NAME <i onClick = {this.sortList.bind(this)} className="fa fa-caret-down" style={{"font-size":'24px', "padding-top": "10px"}}></i>

</td>

<td>

COMPANY NAME <i onClick = {this.sortList.bind(this)} className="fa fa-caret-down" style={{"font-size":'24px', "padding-top": "10px"}}></i>

</td>
<td>
CITY <i onClick = {this.sortList.bind(this)} className="fa fa-caret-down" style={{"font-size":'24px', "padding-top": "10px"}}></i>

</td>

<td>

STATE <i onClick = {this.sortList.bind(this)} className="fa fa-caret-down" style={{"font-size":'24px', "padding-top": "10px"}}></i>

</td>

<td>

ZIP <i onClick = {this.sortList.bind(this)} className="fa fa-caret-down" style={{"font-size":'24px', "padding-top": "10px"}}></i>

</td>

<td>

EMAIL <i onClick = {this.sortList.bind(this)} className="fa fa-caret-down" style={{"font-size":'24px', "padding-top": "10px"}}></i>

</td>

<td>

WEB <i onClick = {this.sortList.bind(this)} className="fa fa-caret-down" style={{"font-size":'24px', "padding-top": "10px"}}></i>

</td>

<td>
AGE <i onClick = {this.sortList.bind(this)} className="fa fa-caret-down" style={{"font-size":'24px', "padding-top": "10px"}}></i>

</td>

</tr>

{rows} </tbody> </table>

<Pagination items={this.state.exampleItems} onChangePage={this.onChangePage.bind(this)} />

</div> : "No data in table"

}

</div>

);

}

}

export default withRouter(Emp);

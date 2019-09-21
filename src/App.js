import React from 'react';
import AlertCard from './Components/AlertCard';
import './App.css';


class App extends React.Component{

  constructor(){
    super();
    this.state = {list:[]};
  }

  handleClick(){
    let input = document.getElementsByClassName("input-text-box")[0].value;
    if(input.trimEnd() == "") {
      alert("Please enter valid input!!!");
      return;
    }
    let alertType = document.getElementsByTagName("select")[0].value;
    let length = this.state.list.length+""+Date.now();
    this.setState({list: [...this.state.list, {heading:alertType, inputText:input, id: length}] });
  }

  onDeleteCard(index){
    var arr = this.state.list.filter(function(data){
      return data.id != index
    });
    this.setState({list: arr});
  }

  render(){
    var self =this;
    return(
      <div className="app-container">
        <input className="input-text-box" type="text" placeholder="Enter Text Here"/>
        <select>
          <option value="1">Success</option>
          <option value="2">Warning</option>
          <option value="3">Error</option>
        </select>
        <button onClick={self.handleClick.bind(self)}>Submit</button>
        <div className="msg-container">
        {
          self.state.list.map(function(data,index){
            return <AlertCard key={index} onDeleteCard={self.onDeleteCard.bind(self, data.id)} heading={data.heading} inputText={data.inputText}/>
          })

        }
        </div>
      </div>
    )
  }
} 

export default App;

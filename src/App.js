import logo from './logo.svg';
import './App.css';
import react,{component} from 'react'
import imgc from "./277081215_1629829970699664_8164463741762050939_n.jpg"

class App extends react.Component {
  
  state={
    person:{
      FullName:"Siwar Ben Rhouma",
      bio:"It is better to fail in originality than to succeed in imitation.",
      imgSrc:imgc,
      profession:"computer science engineer",
    },
    boll:false

  }
  changeColor = () => {
    this.setState({boll:!this.state.boll})
  }
  
  render(){
  return (
    <div className="App">
      
        <button onClick={this.changeColor}>click here</button>
      {this.state.boll?
        <div>
      <img src={this.state.person.imgSrc}/>
      <h1> my name is {this.state.person.FullName}<br/>
      i work as {this.state.person.profession}<br/>
      my favourite quote is {this.state.person.bio} </h1>
      </div>:""
  }
    </div>
  )
}

}
export default App;

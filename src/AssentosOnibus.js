import React from 'react';
import './App.css';

class Assento extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
    disable: false
  }
 }
 handleClick(){
  this.setState({//alterando a informação do meu estado.
    disable: true
  });
 }

  render() {
    return (
      <button className="assento"
       type="button"
        disabled={this.state.disable}
        onClick={this.handleClick.bind(this)}// que é o mesmo onClick={()=> this.handleClick()}
        >
       {this.state.disable ? 'X' : this.props.pos}
      
      </button>
    )
  }
}


const Fileira = (props) => {
  return (
    <div className="fileira">
      {[0, 1, 2, 3].map((pos, index) => (
        <Assento key={index} pos={props.de + pos} />
      ))}
    </div>
  )
}

export const AssentosOnibus = () => {
  return (
    <div className="container">
      {[1, 5, 9, 13, 17].map((pos, index) => (
        <Fileira key={index} de={pos} />
      ))}
    </div>
  )
}
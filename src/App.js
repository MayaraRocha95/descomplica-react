
import './App.css';
import Voos from './Voos';
import { AssentosOnibus } from './AssentosOnibus';
import React from 'react';
import { ViaCep } from './ViaCep';


const Title = () =>{
  return(
    <h1>
    <span>Olá </span>
    <strong>Mundo</strong>
    !!!
  </h1>
  )
}


class MyButton extends React.Component {
//  const handleClick = (e) => {
 //   e.preventDefault();
  //  console.log('clicou', e)
 // };
 handleClick(e) {
e.preventDefault();
console.log('clicou', e);
 }
 render() {
    return (
    <a  onClick={this.handleClick} href="www.descomplica.com.br">{this.props.label} - {this.props.idade}</a>
  )
}
 }


function MyButtoon(props){
 const handleClick = () => {
   console.log('clicou')
  }
    return (
    <button onClick={handleClick} type="button">{props.label}</button>
  )
}

function PessoaIdade(props){
  return(
    <strong>{props.label}</strong>
  )
}
function Pessoa(props) {
  return(
    <section>
      você é {props.idade >= 18 ? <PessoaIdade label='De Maior' /> : <PessoaIdade label='De menor' />}</section> //Operador ternário
  )
}
const ListaItem = ({label}) => {
  return(
    <li><strong>{label}</strong></li>
  )
}

const Lista = () => {
  const passos = [
    'Lista em React' ,
    'Configurar projetos',
    'Criar componentes',
    'Escrever testes',
    'Fazer deploy'
  ];
  return(
    <ul>
      {passos.map((valor, index) =>(
       <ListaItem key={`item-${index}`}label={valor} />  
      ))}
     </ul>
  )
}
function App() {
const labelBotao = 'Entre aqui'

  return (
    <div className="App">
   <Title />
   <ViaCep />
   <br></br>
   <br></br>
   <div className="bus">
    <AssentosOnibus />
   </div>
   <br></br>
   <br></br>
   <div className="button2">
    <MyButton label={`${labelBotao}  !!`}/>
   </div>
   <Voos />
   <Lista />
   <Pessoa idade={19} />
   <Pessoa idade={14} />
   <Pessoa idade={30} />
   <Pessoa idade={11} />
   <div className="button1">
      <MyButtoon label="Aperte Aqui"/>
   </div>
 
   
    </div>
  );
}

export default App;

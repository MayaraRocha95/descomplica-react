import './App.css';
const Title = () =>{
  return(
    <h1>
    <span>olá </span>
    <strong>mundo</strong>
    !!!
  </h1>
  )
}

function MyButton(props){
    return(
    <button type="button">{props.label}</button>
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
function App() {
const labelBotao = 'Entre aqui'

  return (
    <div className="App">
   <Title />
   <Pessoa idade={19} />
   <Pessoa idade={14} />
   <Pessoa idade={30} />
   <Pessoa idade={11} />
   <div className="button1">
      <MyButton label="Aperte Aqui"/>
   </div>
 
   <div className="button2">
    <MyButton label={`${labelBotao}  !!`}/>
   </div>
   
    </div>
  );
}

export default App;

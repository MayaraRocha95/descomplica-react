import { ThemeContext } from './App'

function Voos(){
  const voosDisponiveis = [
    {
      id: '123',
      title: 'Voltar ter, 19 de julho',
      details: [
        {
          id: '321',
          title: 'Espaço para as pernas dentro da média (76cm)'
        },
        {
          id: '312',
          title: 'Saída USB no assento'
        },
        {
          id: '132',
          title: 'Video sob Demanda'
        },  {
          id: '231',
          title: 'Estimativas das emissões de carbono: 85 kg'
        },
      ]      
    },
    {
      id: '456',
      title: '13:00 - 15:00',
      details: [
        {
          id: '654',
          title: 'Espaço para as pernas dentro da média (76cm)'
        },
        {
          id: '645',
          title: 'Saída USB no assento'
        },
        {
          id: '546',
          title: 'Video sob Demanda'
        },  {
          id: '465',
          title: 'Estimativas das emissões de carbono: 85 kg'
        },
      ]      
    }
  ]
  function ItemVooDetails({ details }) {
   return(
    <ThemeContext.Consumer>
      {(value) => (                       //passando para o consumer uma arrow function
   <ul>
        {details.map(detail => (
         <li key={detail.id}
         style={{ color: value.color}} 
         >
          {detail.title}</li>
        ))}
   </ul>
      )}
    
  </ThemeContext.Consumer>
   )
  }

  function ItemVoo({title, children}) {
    return(
      <div className="voo">
        <header>
          <h3>{title}</h3>
        </header>
        <div className="voo-details">
       {children}
        </div>
      </div>
    )
  }
 return(
  <div className="voos">
    {voosDisponiveis.map(voo => (
      <ItemVoo key={voo.id} title={voo.title} >
        <ItemVooDetails details={voo.details} />
      </ItemVoo>
    ))}
  </div>
 )
}

export default Voos
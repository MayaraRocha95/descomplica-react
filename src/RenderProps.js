const Consumer = ({ children }) => {
  const style = { color: 'orange'};
 return(
  <div className="consumer">
    {children(style)}
  </div>
 )
}
const TextoColorido = (style) => {
  return(
    <span style={{ color: style.color}}>Para colorir o texto em render é preciso criar uma função </span>
  )
}
export const RenderProps = () => {
  return <Consumer>
    {TextoColorido}
  </Consumer>
}
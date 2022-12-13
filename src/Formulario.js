import { useState } from 'react';

export const Formulario = () => {
  const [fieldValue, setFieldValue] = useState({
    nome:'',
    cidade: ''
  });
  const handleChange = (e) => {
    console.log(e.target.name, e.target.value)
    setFieldValue({
      ...fieldValue,
      [e.target.name] : e.target.value
    })
  }
  return (
    <div className="">
      <form>
        <input type="text"
          name="nome"
          value={fieldValue.nome}
          onChange={handleChange}
        />
         <input type="text"
          name="cidade"
          value={fieldValue.cidade}
          onChange={handleChange}
        />
      </form>
    </div>
  )
}
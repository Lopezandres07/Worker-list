import React from 'react'

const Buscador = ({data, dataFilter}) => {
  const handleChange = (e) => {
    const wordFinder = e.target.value.toLowerCase()

    const result = data.filter((Colaborador) => 
    Colaborador.name.toLowerCase().includes(wordFinder) ||
    Colaborador.email.toLowerCase().includes(wordFinder) ||
    Colaborador.age.toLowerCase().includes(wordFinder) ||
    Colaborador.jobTitle.toLowerCase().includes(wordFinder) ||
    Colaborador.telephoneNumber.toLowerCase().includes(wordFinder) ||
    Colaborador.workday.toLowerCase().includes(wordFinder)
    )

    dataFilter(result)
  } 

  return (
    <div>
      <input onChange={handleChange}
        type='text'
        name='buscador'
        id='buscador'
        placeholder='Busca un funcionario'
        className='form-control mb-3'
      />
    </div>
  )
}

export default Buscador
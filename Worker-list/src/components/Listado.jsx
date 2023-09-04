import React from 'react'
import { Table } from 'react-bootstrap'

const Listado = ({dataFilter, setData, setDataFilter}) => {
  const workers = dataFilter.map((worker) => (
    <tr key={worker.id}>
      <td>{worker.id}</td>
      <td>{worker.name}</td>
      <td>{worker.email}</td>
      <td>{worker.age}</td>
      <td>{worker.jobTitle}</td>
      <td>{worker.telephoneNumber}</td>
      <td>{worker.workday}</td>
      <td>
        <button onClick={() => deleteWorker(worker.id)}>Borrar</button>
      </td>
    </tr>
  ))

  const deleteWorker = (id) => {
    const index = dataFilter.filter((worker) => worker.id !== id)
    setDataFilter(index)
    setData(index)
  }

  return (
    <div>
      <Table className='list'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Edad</th>
            <th>Cargo</th>
            <th>Telefono</th>
            <th>Jornada</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>{workers}</tbody>
      </Table>
    </div>
  )
}

export default Listado
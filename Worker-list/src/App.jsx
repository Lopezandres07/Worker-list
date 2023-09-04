import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { useState } from 'react';
import Buscador from './components/Buscador';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import Alert from './components/Alert';
import { BaseColaboradores } from './components/BaseColaboradores';

function App() {
  const [data, setData] = useState(BaseColaboradores)
  const [dataFilter, setDataFilter] = useState(data)
  const [alert, setAlert] = useState({
    error: '',
    message: '',
    color: ''
  })
  console.log(data)

  return (
    <>
      <h1>
        Lista de funcionarios
      </h1>
      <Buscador
        data={data}
        dataFilter={setDataFilter}
      />
      <article className='flex'>
        <div>
          <Listado 
            data={data}
            setData={setData}
            dataFilter={dataFilter}
            setDataFilter={setDataFilter}
          />
        </div>
        <div>
          <Formulario
            data={data}
            setData={setData}
            dataFilter={dataFilter}
            setDataFilter={setDataFilter}
            setAlert={setAlert}
            />
          {alert.message && <Alert color={alert.color} message={alert.message}/>}
        </div>
      </article>
    </>
  )
}

export default App

import { useState } from "react"

const Formulario = ({data, setData, setDataFilter, setAlert}) => {
  
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: '',
        jobTitle: '',
        telephoneNumber: '',
        workday:''
    });
                 
    const validateInput = (e) => {
        e.preventDefault()

        const validateEmail = /^(.+)@(.+)$/
        
        const {name, email, age, jobTitle, telephoneNumber, workday} = formData;
             
        switch ((name.trim() == '' || email.trim() == '' || age.trim() == '' || jobTitle.trim() == ''|| telephoneNumber.trim() == '' || workday.trim() == '')) {
            case true:
            setAlert({
                error: true,
                message: 'Por favor ingrese todos los datos',
                color: 'text-danger'
            })
            
            return   
        
            case (validateEmail.test(formData.email)):
            setAlert({
                error: true,
                message: 'Por favor introduzca un correo valido',
                color: 'text-danger'
            })       
            
            return

            default:
            setAlert({
                error: false,
                message: 'Cuenta creada con exito',
                color: 'text-success'
            })
            setFormData({
                name: '',
                email: '',
                age: '',
                telephoneNumber: '',
                jobTitle: '',
                workday:''
            }) 
        }

        setTimeout(() => {
            setAlert({
                error: '',
                message: '',
                color: ''
            })  
        }, 5000);      

        
        const newWorker = {...formData, id: data.length + 1}
        setData([...data, newWorker])
        setDataFilter([...data, newWorker])
    };  

    const handleInputChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})   
    };
  
    return (
        <>
            <form onSubmit={validateInput} className='inputs'>
                
                <div className="form-group p-2">
                    <label className="p-1">Nombre</label>
                    <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Nombre"
                    onChange={handleInputChange}
                    value={formData.name}
                    />
                </div>

                <div className="form-group p-2">
                    <label className="p-1">Email</label>
                    <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="correo@correo.cl"
                    onChange={handleInputChange}
                    value={formData.email}
                    />
                </div>

                <div className="form-group p-2">
                    <label className="p-1">Edad</label>
                    <input
                    type="number"
                    name="age"
                    className="form-control"
                    placeholder="Edad"
                    onChange={handleInputChange}
                    value={formData.age}
                    />
                </div>

                <div className="form-group p-2">
                    <label className="p-1">Cargo</label>
                    <input
                    type="text"
                    name="jobTitle"
                    className="form-control"
                    placeholder="Cargo en la empresa"
                    onChange={handleInputChange}
                    value={formData.jobTitle}
                    />
                </div>

                <div className="form-group p-2">
                    <label className="p-1">Teléfono</label>
                    <input
                    type="number"
                    name="telephoneNumber"
                    className="form-control"
                    placeholder="Número de teléfono"
                    onChange={handleInputChange}
                    value={formData.telephoneNumber}
                    />
                </div>

                <div className="form-group p-2">
                    <label className="p-1">Jornada laboral</label>
                    <input
                    type="text"
                    name="workday"
                    className="form-control"
                    placeholder="Tipo de jornada"
                    onChange={handleInputChange}
                    value={formData.workday}
                    />
                </div>
               
                <button type="submit" className="mt-3 button">Registrar funcionario</button>

            </form>
        </>
    )
}

export default Formulario
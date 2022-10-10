import React from 'react'

const Formulario = () => {

    const [fruta, setFruta] = React.useState('')
    const [descripcion, setDescripcion] = React.useState('')
    const [lista, setLista] = React.useState([])

    const guardarDatos = (e) => {
        e.preventDefault()
        console.log('Procesando datos...')

        if(!fruta.trim()){
            console.log('fruta está vacío')
            return
        }
        if(!descripcion.trim()){
            console.log('descripción está vacío')
            return
        }
        console.log('Procesando datos...' + fruta + ' ' + descripcion)

        setLista ([
            ...lista,
            {nombreFruta: fruta, nombreDescripcion: descripcion}
        ])

        e.target.reset()
        setFruta('')
        setDescripcion('')
    }

  return (
    <form onSubmit={guardarDatos}>
        <div>Formulario</div>
        <input 
        type="text"
        placeholder='Escribe una fruta'
        className='form-control mb-2'
        onChange={(e) => setFruta(e.target.value)}
        />
        <input 
        type="text"
        placeholder='Escribe una descripción'
        className='form-control mb-2'
        onChange={(e) => setDescripcion(e.target.value)}
        />
        <button className='btn btn-success btn-block' type='submit'>Agregar</button>
        <ul>
            {
                lista.map((item, index) => (
                    <li key={index}>
                        {item.nombreFruta} - {item.nombreDescripcion}
                    </li>
                ))
            }
        </ul>
    </form>
  )
}

export default Formulario;
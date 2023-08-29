import React from 'react'
import { Text } from 'react-native'

const Objeto = () => {

  
    const carros = [{marca: 'Vw', modelo: 'Fusca', ano: 1978, cor: 'Preto', foto: ''},
                    {marca: 'GM', modelo: 'Celta', ano: 2003, cor: 'Preto', foto: ''},
                    {marca: 'Fiat', modelo: 'Pálio', ano: 1995, cor: 'Azul', foto: ''},
                    {marca: 'Vw', modelo: 'Gol', ano: 1910, cor: 'Vermelho', foto: ''},
                    {marca: 'Ford', modelo: 'Ka', ano: 1920, cor: 'Prata', foto: ''}
                ]
    
    return (
        <>
            {carros.map(item =>(
                <Text>{item.marca} - {item.modelo}</Text>
            ))}
</>
    )
}

export default Objeto
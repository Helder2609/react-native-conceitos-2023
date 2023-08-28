import React from 'react'
import Card from '../components/Card'
import { Button } from 'react-native'
import { Text } from 'react-native-paper'

const Pagina1 = () => {
  return (
 <>
 
<Card titulo="Sem conteúdo" />
<Card titulo="Mobile">
  <Text>React Native</Text>
</Card>

<Card titulo="Principal" nome="Orion">
  <Text>Parágrafo 1</Text>
  <Text>Parágrafo 2</Text>
  <Text>Parágrafo 3</Text>
  <Button title='Detalhes' />
</Card>

<Card titulo="Mengão">

</Card>

 </>
  )
}

export default Pagina1
import React from 'react'
<<<<<<< HEAD
import Card from '../components/Card'
import { Button } from 'react-native'
import { Text } from 'react-native-paper'

const Pagina1 = ({navigation}) => {


  return (
 <>
 <Button title='Página 2' onPress={()=>navigation.navigate('pagina2')}></Button>
 <Button title='Página 3' onPress={()=>navigation.navigate('pagina3')}></Button>

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
=======
import { Text } from 'react-native'
import Card from '../components/Card'
import { Button } from 'react-native'

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

            <Card titulo="Flamengo Cheirinho">

            </Card>
        </>
    )
>>>>>>> d493d472d06dbf83cf8fe59aa49e59fdebc27b44
}

export default Pagina1
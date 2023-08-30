import React from 'react'
<<<<<<< HEAD
import { Avatar, Button, Card, Text } from 'react-native-paper'

const Pagina3 = () => {

  const LeftContent = props => <Avatar.Icon {...props} icon="account-circle" />

  return (
    <>

      <Button title='Página 2' onPress={() => navigation.navigate('pagina1')}></Button>
      <Button title='Página 3' onPress={() => navigation.navigate('pagina2')}></Button>




      <Card style={{ marginTop: 15 }}>
        <Card.Title title="Helder" subtitle="Card Subtitle" left={LeftContent} icon="account-circle-outline" />
      </Card>
      <Card style={{ marginTop: 15 }}>
        <Card.Title title="Maria Braga" subtitle="Card Subtitle" left={LeftContent} />
      </Card>
      <Card style={{ marginTop: 15 }}>
        <Card.Title title="Wendel" subtitle="Card Subtitle" left={LeftContent} />
      </Card>
      <Card style={{ marginTop: 15 }}>
        <Card.Title title="José" subtitle="Card Subtitle" left={LeftContent} />
      </Card>
      <Card style={{ marginTop: 15 }}>
        <Card.Title title="Chaga" subtitle="Card Subtitle" left={LeftContent} />
      </Card>
    </>
  )
=======
import { Avatar, Card } from 'react-native-paper'

const Pagina3 = () => {


    const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

    return (
        <>
            <Card style={{marginBottom: 10}}>
                <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
            </Card>
            <Card style={{marginBottom: 10}}>
                <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
            </Card>
            <Card style={{marginBottom: 10}}>
                <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
            </Card>
            <Card style={{marginBottom: 10}}>
                <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
            </Card>
        </>
    )
>>>>>>> d493d472d06dbf83cf8fe59aa49e59fdebc27b44
}

export default Pagina3
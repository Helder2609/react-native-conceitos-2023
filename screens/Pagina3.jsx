import React from 'react'
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
}

export default Pagina3
import React from 'react'
import { Avatar, Button, Card, Text } from 'react-native-paper'

<<<<<<< HEAD

const Pagina2 = () => {

    const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
    return (
        <>

            <Button title='Página 2' onPress={() => navigation.navigate('pagina1')}></Button>
            <Button title='Página 3' onPress={() => navigation.navigate('pagina3')}></Button>



            <Card style={{ marginBottom: 20 }}>
=======
const Pagina2 = () => {

    const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

    return (
        <>
            <Card style={{marginBottom: 20}}>
>>>>>>> d493d472d06dbf83cf8fe59aa49e59fdebc27b44
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                <Card.Content>
                    <Text variant="titleLarge">Card title</Text>
                    <Text variant="bodyMedium">Card content</Text>
                </Card.Content>
                <Card.Actions>
                    <Button>Cancel</Button>
                    <Button>Ok</Button>
                </Card.Actions>
            </Card>
<<<<<<< HEAD
            <Card>

=======

            <Card>
                <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
>>>>>>> d493d472d06dbf83cf8fe59aa49e59fdebc27b44
                <Card.Content>
                    <Text variant="titleLarge">Card title</Text>
                    <Text variant="bodyMedium">Card content</Text>
                </Card.Content>
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                <Card.Actions>
                    <Button>Cancel</Button>
                    <Button>Ok</Button>
                </Card.Actions>
            </Card>
<<<<<<< HEAD

=======
>>>>>>> d493d472d06dbf83cf8fe59aa49e59fdebc27b44
        </>
    )
}

export default Pagina2
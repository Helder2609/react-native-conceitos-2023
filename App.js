import { StatusBar } from 'expo-status-bar';
import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Card from './components/Card';
import Botoes from './components/Botoes';
import Pagina1 from './screens/Pagina1';
import Pagina2 from './screens/Pagina2';
import Pagina3 from './screens/Pagina3';
<<<<<<< HEAD
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Arrays from './screens/Arrays';
import Objeto from './screens/Objeto';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="objeto" component={Objeto} options={{title: "Objetos"}}/>
        <Stack.Screen name="arrays" component={Arrays} options={{title: "Arrays"}}/>
        <Stack.Screen name="pagina1" component={Pagina1} options={{title: "Página Principal"}}/>
        <Stack.Screen name="pagina2" component={Pagina2} options={{title: "Página Secundaria"}} />
        <Stack.Screen name="pagina3" component={Pagina3} options={{title: "Página Terciaria"}}/>
        </Stack.Navigator>
      </NavigationContainer>

<<<<<<< HEAD

=======
    <NavigationContainer>
        
      
    </NavigationContainer>

    </ScrollView>
>>>>>>> d493d472d06dbf83cf8fe59aa49e59fdebc27b44
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    borderColor: 'red',
    borderStyle: 'solid',
    borderWidth: 2,
    marginBottom: 20
  },
  titulo: {
    color: 'white',
    fontSize: 30,
    padding: 10,
    marginBottom: 20,
    borderBottomColor: 'red',
    borderStyle: 'solid',
    borderBottomWidth: 2,
    textAlign: 'center',
    backgroundColor: 'red',
  },
  paragrafo: {
    fontSize: 20
  }
});

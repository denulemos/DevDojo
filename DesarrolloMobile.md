<a name="mob-base"></a>

## [Desarrollo Mobile](#mob)

| Temas |
|----------|
| [¿Qué es el Manifest.xml en Android y qué funciones cumple?](#mob1) |
| [Cuales son las capas que componen a la plataforma Android?](#mob3-1) |
| [¿Qué es el Android Runtime y cómo se ejecutan las aplicaciones en Android?](#mob3) |

<a name="mob-base-rn"></a>

| React Native |
|----------|
|[¿Qué es React Native y cómo se compara con otras soluciones de desarrollo móvil?](#mob5)|
|[¿Como se compara React Native al resto de soluciones?](#mob6)|
|[¿Cómo se maneja el estado en una aplicación React Native?](#mob7)|
|[¿Qué es Expo y cómo se compara con React Native?](#mob8)|
|[¿Cómo se maneja la navegación en una aplicación React Native?](#mob9)|
|[¿Cómo se maneja la persistencia de datos en una aplicación React Native?](#mob10)|
|[¿Cómo se maneja la autenticación de usuarios en una aplicación React Native?](#mob11)|
|[¿Cómo se maneja la internacionalización en una aplicación React Native?](#mob12)|
|¿Cómo se maneja la compatibilidad entre diferentes versiones de sistemas  operativos en una aplicación React Native?|
|¿Cómo se maneja la compatibilidad entre diferentes tamaños de pantalla en una aplicación React Native?|
|¿Cómo se maneja la optimización del rendimiento en una aplicación React Native?|
|¿Cómo se maneja la depuración en una aplicación React Native?|
|¿Cómo se maneja el manejo de errores y las excepciones en una aplicación React Native?|
|¿Cómo se maneja la implementación y el despliegue en una aplicación React Native?|
|¿Cómo se maneja la escalabilidad en una aplicación React Native?|
|¿Cómo se maneja la seguridad en una aplicación React Native?|
|¿Cómo se maneja la carga de recursos estáticos (imágenes, CSS, JavaScript) en React Native?|
|¿Cómo se maneja la comunicación entre JavaScript y el código nativo en React Native?|
|¿Cómo se maneja la animación en una aplicación React Native?|
|¿Cómo se maneja el acceso a las funcionalidades del dispositivo (cámara, GPS, etc.) en una aplicación React Native?|
|¿Cómo se manejan las pruebas en una aplicación React Native?|
|¿Cómo se maneja la actualización de la aplicación en una aplicación React Native?|

---

---

<a id="mob"></a>

# Desarrollo Mobile

<a id="mob1"></a>

### **¿Qué es el Manifest.xml en Android y qué funciones cumple?**

[Volver al indice](#mob-base)

El Manifest.xml es un archivo de configuración en Android que describe la estructura y los requisitos de una aplicación. Contiene información como los componentes de la aplicación, permisos necesarios, hardware y software requerido, entre otros detalles, y es fundamental para el funcionamiento adecuado de la aplicación en el sistema Android.

<a id="mob3-1"></a>

### **Cuales son las capas que componen a la plataforma Android?**

[Volver al indice](#mob-base)

![Plataforma android](src/plataforma-android.png)

#### Linux Kernel

Se utiliza para las cosas mas basicas como la administracion de memoria, seguridad, procesos, entre otros. Si bien Android esta basado en Linux, no es Linux en si mismo, ya que se han modificado muchas cosas para que funcione en dispositivos moviles como la comunicacion entre procesos con binder, la forma de manejar la mamoria compartida con ashmem, entre otros.

### Librerias y Ejecucion

Sobre el Kernel (Linux) se tienen librerias C y C++ que se usan con fines tales  

<a id="mob3"></a>

### **¿Qué es el Android Runtime y cómo se ejecutan las aplicaciones en Android?**

[Volver al indice](#mob-base)

El Android Runtime es el entorno de ejecución de aplicaciones de Android. Las aplicaciones de Android se ejecutan en el Android Runtime, que utiliza el compilador de tiempo de ejecución ART para convertir el código de la aplicación en código nativo que se ejecuta en el dispositivo.

<a id="mob5"></a>

### **¿Qué es React Native y cómo se compara con otras soluciones de desarrollo móvil?**

[Volver al indice](#mob-base-rn)

React Native es un framework de desarrollo de aplicaciones móviles creado por Facebook. Permite construir aplicaciones híbridas, lo que significa que puedes escribir un único código en JavaScript (con React) y generar aplicaciones nativas para iOS y Android. React Native utiliza un enfoque bridge para interactuar con componentes nativos, lo que lo hace más eficiente que soluciones basadas únicamente en WebViews.

-  Código Compartido: Puedes escribir una sola base de código y reutilizarla en ambas plataformas, reduciendo el esfuerzo de desarrollo y los costos.
- Curva de Aprendizaje: Si ya conoces React, aprender React Native es mucho más fácil que aprender lenguajes nativos como Swift/Objective-C o Kotlin/Java.
- Mantenimiento: Gracias a la base de código compartida, mantener y actualizar aplicaciones para ambas plataformas es más sencillo.
- Ecosistema React: Puedes aprovechar herramientas, librerías, y técnicas de React para desarrollar interfaces de usuario declarativas y reutilizables.
- Hot Reloading: Permite ver cambios en tiempo real durante el desarrollo, acelerando la iteración.

Aunque React Native tiene muchas ventajas, puede no ser la mejor opción para aplicaciones que requieren acceso intensivo a hardware, como juegos de alta gama, donde el desarrollo nativo aún domina. Sin embargo, para la mayoría de aplicaciones comerciales y de consumo, es una excelente solución.

<a id="mob6"></a>

### **¿Como se compara React Native al resto de soluciones?**

[Volver al indice](#mob-base-rn)

**Frente a Soluciones Web (Ionic, Cordova):**

- React Native utiliza componentes nativos reales, mientras que frameworks como Ionic o Cordova renderizan interfaces usando un WebView, lo que puede afectar el rendimiento.
- Las aplicaciones de React Native tienen una experiencia de usuario más fluida y cercana a lo nativo.

**Frente a Desarrollo Nativo Puro (Swift/Objective-C y Kotlin/Java):**

- React Native es más rápido de desarrollar gracias a la reutilización de código, pero puede no ofrecer acceso directo a todas las API nativas de cada plataforma.
- El desarrollo nativo ofrece un control absoluto sobre el hardware y las características, lo que puede ser esencial para aplicaciones con alto rendimiento o personalización extrema.

**Frente a Flutter:**

- Flutter, desarrollado por Google, utiliza un enfoque diferente, renderizando toda la interfaz con su propio motor gráfico (Skia). Esto le da mayor consistencia visual entre plataformas pero puede requerir más recursos en tiempo de ejecución. Aunque se dice que en general Flutter gestiona mucho mejor la performance.
- React Native tiene un ecosistema más maduro debido a su tiempo en el mercado y la adopción masiva por parte de la comunidad.

<a id="mob7"></a>

### **¿Cómo se maneja el estado en una aplicación React Native?**

[Volver al indice](#mob-base-rn)

El sistema de React Native y ReactJs es muy parecido ya que comparten el mismo core. Las formas de manejar el estado son:

**Estado Local (useState y useReducer)**

Se utiliza para manejar el estado dentro de un componente específico.

* useState: Ideal para estados simples y locales.

```jsx
const [count, setCount] = useState(0);
```

* useReducer: Útil para manejar estados más complejos o con lógica de actualización específica.

```jsx
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <View>
      <Text>Count: {state.count}</Text>
      <Button title="Increment" onPress={() => dispatch({ type: 'increment' })} />
      <Button title="Decrement" onPress={() => dispatch({ type: 'decrement' })} />
    </View>
  );
};
```

**Context API**

Permite compartir el estado entre componentes sin necesidad de pasar props manualmente por cada nivel del árbol. Es útil para aplicaciones con múltiples componentes que necesitan acceder al mismo estado.

```jsx
const CounterContext = createContext();

const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {children}
    </CounterContext.Provider>
  );
};

const CounterDisplay = () => {
  const { count } = useContext(CounterContext);
  return <Text>Count: {count}</Text>;
};

const CounterControls = () => {
  const { setCount } = useContext(CounterContext);
  return (
    <Button title="Increment" onPress={() => setCount((prev) => prev + 1)} />
  );
};

const App = () => (
  <CounterProvider>
    <View>
      <CounterDisplay />
      <CounterControls />
    </View>
  </CounterProvider>
);

```

**Estado Global (Librerias externas)**

Para aplicaciones más grandes, donde el estado necesita ser compartido ampliamente, es común usar librerías dedicadas.

* Redux: Se utiliza para manejar estados globales complejos y lógica de actualización avanzada.

```jsx
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { Text, Button, View } from 'react-native';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0 },
  reducers: {
    increment: (state) => { state.count += 1; },
    decrement: (state) => { state.count -= 1; },
  },
});

const store = configureStore({ reducer: counterSlice.reducer });

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={() => dispatch(counterSlice.actions.increment())} />
      <Button title="Decrement" onPress={() => dispatch(counterSlice.actions.decrement())} />
    </View>
  );
};

const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

```

Otra libreria muy usada tambien es MobX, que es una libreria de manejo de estado simple y escalable.

**Hooks y Librerías para Sincronización del Estado (SWR, React Query)**

Son útiles para manejar estados que dependen de datos remotos o asincrónicos. Permiten manejar la carga de datos, caché y actualización del estado de forma sencilla.

```jsx
import React from 'react';
import { Text, View } from 'react-native';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

const App = () => {
  const { data, error } = useSWR('https://api.example.com/data', fetcher);

  if (error) return <Text>Error loading data</Text>;
  if (!data) return <Text>Loading...</Text>;

  return (
    <View>
      <Text>Data: {JSON.stringify(data)}</Text>
    </View>
  );
};

```

<a id="mob8"></a>

### **¿Qué es Expo y cómo se compara con React Native?**

[Volver al indice](#mob-base-rn)

Expo es un conjunto de herramientas para facilitar el desarrollo en React Native, el mas usado es la facilidad de conectar un dispositivo fisico a la app en desarrollo sin tener que lidiar con Android Studio o XCode.

- Entorno Preconfigurado: Incluye una serie de bibliotecas y herramientas que funcionan "out-of-the-box" sin necesidad de configurar proyectos nativos. Aunque esto puede aumentar el peso de la aplicacion.
- Expo Go: Una aplicación que permite probar tu código en dispositivos reales sin necesidad de compilarlo. Simplemente escaneas un código QR y ves los cambios.
- Expo SDK: Ofrece un conjunto de APIs listas para usar (cámara, localización, notificaciones, etc.), simplificando la integración de funcionalidades comunes.
- Expo Dev Tools: Un panel interactivo para gestionar el desarrollo, depuración y compilación de tu proyecto.
- Expo Build: Permite compilar aplicaciones listas para distribución (APK, AAB, IPA) sin necesidad de configurar entornos nativos.

Es mucho mas facil de usar para principiantes, ya que no requiere la pre-configuracion previa de los entornos nativos. Sin embargo, puede tener limitaciones en cuanto a personalización y acceso a ciertas funcionalidades avanzadas.

**Cuando deberia usar expo?**

- Proyectos Simples o MVPs: Si necesitas prototipar rápidamente o crear aplicaciones sin mucha personalización nativa.
- Desarrolladores Principiantes: Es ideal para quienes quieren enfocarse en React Native sin lidiar con la configuración nativa.
- Casos Comunes: Si solo necesitas funcionalidades estándar (cámara, notificaciones, mapas, etc.) que ya soporta el SDK de Expo.

Expo es una excelente herramienta para desarrollar aplicaciones rápidamente y sin complicaciones, especialmente para quienes priorizan la velocidad y simplicidad. La elección entre Expo y React Native depende de las necesidades y limitaciones del proyecto.

<a id="mob9"></a>

### **¿Cómo se maneja la navegación en una aplicación React Native?**

[Volver al indice](#mob-base-rn)

Para la navegacion de una aplicacion de React Native se utiliza generalmente la libreria `react-navigation`. Hay distintos tipos de navegaciones que pueden ser agregadas a la aplicacion.

**Stack Navigation (Navegación en pila):**

Es para navegaciones mas basicas, es decir, de pantalla hacia adelante y hacia atrás. Ejemplo: Un flujo de inicio donde pasas de una pantalla de inicio a detalles y puedes regresar.

```jsx
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

<Stack.Navigator>
  <Stack.Screen name="Home" component={HomeScreen} />
  <Stack.Screen name="Details" component={DetailsScreen} />
</Stack.Navigator>
```

**Bottom Tab Navigation (Navegación por pestañas):**

Es el tipico menu estatico que aparece por debajo del contenido de la aplicacion con secciones estaticas. Ejemplo: Pestañas para "Inicio", "Buscar" y "Perfil".

```jsx
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

<Tab.Navigator>
  <Tab.Screen name="Home" component={HomeScreen} />
  <Tab.Screen name="Search" component={SearchScreen} />
</Tab.Navigator>
```

**Material Top Tabs Navigation (Pestañas superiores):**

Mismo concepto que Bottom Tab Navigation pero con las pestañas en la parte superior de la pantalla. Ejemplo: Pestañas para "Inicio", "Buscar" y "Perfil".

```jsx
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const TopTab = createMaterialTopTabNavigator();

<TopTab.Navigator>
  <TopTab.Screen name="Chats" component={ChatsScreen} />
  <TopTab.Screen name="Calls" component={CallsScreen} />
</TopTab.Navigator>
```

**Drawer Navigation (Navegación con menú lateral):**

Es el menu lateral de las aplicaciones mobile que es deslizable. Ejemplo: Un menú lateral para opciones como "Configuración" o "Cerrar sesión".

```jsx
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

<Drawer.Navigator>
  <Drawer.Screen name="Home" component={HomeScreen} />
  <Drawer.Screen name="Settings" component={SettingsScreen} />
</Drawer.Navigator>
```

<a id="mob10"></a>

### **¿Cómo se maneja la persistencia de datos en una aplicación React Native?**

[Volver al indice](#mob-base-rn)

Las aplicaciones mobile pueden ser cerradas diversas veces y es clave tener algun tipo de almacenamiento para poder sobrevivir al cierre o reinicio de la aplicacion.

**AsyncStorage**

Sirve para almacenar datos de tipo clave-valor, muy parecido al concepto de session o local storage de web. Se recomienda para guardar datos simples, como configuraciones o tokens.

```jsx
import AsyncStorage from '@react-native-async-storage/async-storage';

// Guardar un valor
const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.error('Error saving data', e);
  }
};

// Recuperar un valor
const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
  } catch (e) {
    console.error('Error reading data', e);
  }
};
```

**Secure Storage**

A veces nos toca guardar datos sensibles de los usuarios, como datos de autenticacion, para eso se usan liberias como `react-native-keychain` o `react-native-secure-storage`, o si se esta usando expo, `expo-secure-store`.

```jsx
import * as SecureStore from 'expo-secure-store';

// Guardar un valor
const storeData = async (key, value) => {
  try {
    await SecureStore.setItemAsync(key, value);
  } catch (e) {
    console.error('Error saving data', e);
  }
};

// Recuperar un valor

const getData = async (key) => {
  try {
    const value = await SecureStore.getItemAsync(key);
    if (value !== null) {
      return value;
    }
  } catch (e) {
    console.error('Error reading data', e);
  }
};
```

En el caso de `expo-secure-store` se puede usar de la misma forma que `AsyncStorage`, se guardan datos en formato clave-valor.

**Base de Datos Local (SQLite)**

Se utilizan para almacenar grandes volumenes de datos estructurados. Se puede usar bajo el soporte de librerias como `react-native-sqlite-storage` o `expo-sqlite`. se requiere un conocimiento sobre bases de datos para poder armar las queries.

```jsx
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('example.db');

db.transaction(tx => {
  tx.executeSql(
    'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY NOT NULL, name TEXT, age INTEGER);'
  );
});

const insertUser = (name, age) => {
  db.transaction(tx => {
    tx.executeSql('INSERT INTO users (name, age) VALUES (?, ?);', [name, age]);
  });
};
```

**Bases de datos NoSQL (Realm, WatermelonDB)**

Si el usuario posee mas experiencia con bases de datos noSQL, se pueden usar librerias como `realm` o `watermelonDB` para manejar la persistencia de datos.

**Realm** es ideal para aplicaciones con sincronizacion en tiempo real.

```jsx
import Realm from 'realm';

const UserSchema = {
  name: 'User',
  properties: {
    id: 'int',
    name: 'string',
    age: 'int',
  },
};

const realm = await Realm.open({ schema: [UserSchema] });

realm.write(() => {
  realm.create('User', { id: 1, name: 'John', age: 30 });
});
```

**WatermelonDB** es una base de datos local y reactiva para aplicaciones móviles, que se sincroniza con una base de datos remota. Es ideal para aplicaciones que precizan sincronizacion offline y rendimiento alto en dispositivos mobiles.

```jsx
import { Database } from '@nozbe/watermelondb';

const adapter = new SQLiteAdapter({
  dbName: 'myapp',
  schema: mySchema,
});

const database = new Database({
  adapter,
  modelClasses: [Post, Comment],
});
```

**Sincronización con Bases de Datos Remotas**

Se pueden encontrar soluciones en la nube para persistir los datos por fuera del dispositivo en si. Algunas opciones son Firebase Realtime Database, Firestore, AWS Amplify, o GraphQL con Apollo Client.

```jsx
import firestore from '@react-native-firebase/firestore';

const usersCollection = firestore().collection('Users');

const addUser = async () => {
  await usersCollection.add({ name: 'John Doe', age: 25 });
};
```

En conclusion, si se tiene en cuenta el tamaño y Complejidad de los Datos:

Datos simples -> AsyncStorage.
Datos estructurados y grandes -> SQLite, Realm, WatermelonDB.
Seguridad:
Datos sensibles -> Secure Storage.
Sincronización en Tiempo Real:
Firebase, Firestore o bases de datos con sincronización nativa.
Integración con el Estado Global:
Redux Persist para persistir el estado en almacenamiento local.

<a id="mob11"></a>

### **¿Cómo se maneja la autenticación de usuarios en una aplicación React Native?**

[Volver al indice](#mob-base-rn)

Se puede manejar usando un servicio propio, es decir, una autenticacion contra una base de datos propia y un servicio propio, o contra un servicio
de terceros como `Firebase`, `Auth0`, `AWS Cognito`, `Okta`, `OAuth`, `OpenID Connect`, entre otros.

El flujo basico de autenticacion consta de los siguientes pasos:

1. Autenticacion del usuario

Se le pide al usuario que ingrese sus datos en un, casi siempre, formulario en la aplicacion. Tambien
existe la posibilidad de implementar un servicio de autenticacion con Google, Facebook, Twitter, etc.

2. Verificacion de credenciales

Se verifica contra un backend propio o un servicio de terceros la informacion dada por el usuario. Se envian
a traves de una solicitud HTTPS a un servidor.
En caso de que las credenciales sean validadas, se vuelve un token de acceso como JWT.

3. Guardado del token

Como se necesita persistir la sesion del usuario en el celular a pesar de que la aplicacion pueda ser reiniciada, la misma se almacena
de manera segura usando librerias como `SecureStore` de iOS o `AsyncStorage` de React Native, que posee limitaciones de seguridad.
En Android, se puede usar el `Encrypted Shared Preferences` o librerías como `react-native-keychain`

4. Manutencion de la sesion

Como se menciono antes, se necesita el token para validar que el usuario se encuentra loggeado en cada reinicio de la aplicacion, tambien para enviar este token en caso de que se hagan ciertas solicitudes a la API.

Una vez que se cierra la sesion, el token es eliminado.

Otros extras a tener en cuenta son:

- Refresh Tokens: Utiliza un flujo de actualización de tokens para evitar expiraciones frecuentes.
- Time-out de sesión: Maneja expiraciones de sesión y redirige al usuario al flujo de inicio de sesión si el token es inválido.

**Ejemplo practico con Firebase**

Las librerias usadas son `@react-native-firebase/app @react-native-firebase/auth`

```jsx
import { View, TextInput, Button, Text, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const userCredential = await auth().signInWithEmailAndPassword(email, password);
      Alert.alert('Inicio de sesión exitoso', `Bienvenido ${userCredential.user.email}`);
    } catch (error) {
      Alert.alert('Error de autenticación', error.message);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Iniciar sesión" onPress={handleLogin} />
    </View>
  );
};

```

Luego almacenamos el token

```jsx
import AsyncStorage from '@react-native-async-storage/async-storage';

const storeToken = async (token) => {
  try {
    await AsyncStorage.setItem('@auth_token', token);
  } catch (e) {
    console.error('Error al guardar el token', e);
  }
};

const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem('@auth_token');
    return token;
  } catch (e) {
    console.error('Error al obtener el token', e);
    return null;
  }
};
```

<a id="mob12"></a>

### **¿Cómo se maneja la internacionalización en una aplicación React Native?**

[Volver al indice](#mob-base-rn)

La internacionalización es el proceso de adaptar una aplicación para que pueda ser utilizada en diferentes idiomas y regiones. En React Native, se puede manejar la internacionalización de varias formas:

**Librerías de Internacionalización**

Existen librerías como `i18next`, `react-intl`, `react-native-localize`, `react-i18next`, `react-native-i18n`, entre otras, que facilitan la implementación de la internacionalización en una aplicación React Native.

**Uso de Context API**

Se puede utilizar el Context API de React para manejar el idioma de la aplicación y compartirlo entre los componentes.

```jsx
import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();


const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

const useLanguage = () => useContext(LanguageContext);

export { LanguageProvider, useLanguage };
```

**Uso de Hooks Personalizados**

Se pueden crear hooks personalizados para manejar la internacionalización en los componentes.

```jsx
import { useLanguage } from './LanguageContext';

const useTranslation = () => {
  const { language } = useLanguage();

  const t = (key) => {
    // Lógica para traducir la clave al idioma seleccionado
    return translations[language][key] || key;
  };

  return { t };
};
```

**Implementación en Componentes**

```jsx
import { Text, Button, View } from 'react-native';
import { useTranslation } from './useTranslation';

const HomeScreen = () => {
  const { t } = useTranslation();

  return (
    <View>
      <Text>{t('welcome')}</Text>
      <Button title={t('login')} />
    </View>
  );
};

```

**Manejo de Traducciones**

Se pueden almacenar las traducciones en archivos JSON o en una base de datos, y cargarlas en la aplicación según el idioma seleccionado.

```json
{
  "en": {
    "welcome": "Welcome to the app",
    "login": "Login"
  },
  "es": {
    "welcome": "Bienvenido a la aplicación",
    "login": "Iniciar sesión"
  }
}
```

**Selección de Idioma**

Se puede permitir al usuario seleccionar el idioma de la aplicación y guardar esta preferencia en el almacenamiento local.

```jsx
import { Button, View } from 'react-native';
import { useLanguage } from './LanguageContext';

const LanguageSelector = () => {
  const { setLanguage } = useLanguage();

  const handleLanguageChange = (language) => {
    setLanguage(language);
  };

  return (
    <View>
      <Button title="English" onPress={() => handleLanguageChange('en')} />
      <Button title="Español" onPress={() => handleLanguageChange('es')} />
    </View>
  );
};

```

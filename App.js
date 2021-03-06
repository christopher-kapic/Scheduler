import React, { useState } from 'react'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import ScheduleScreen from './screens/ScheduleScreen'
import CourseDetailScreen from './screens/CourseDetailScreen'
import CourseEditScreen from './screens/CourseEditScreen'
import UserContext from './UserContext'

const Stack = createStackNavigator();

const App = () => {
  const [auth, setAuth] = useState();
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((auth) => {
      setAuth(auth);
    });
  }, []);

  return (
    <UserContext.Provider value={user}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="ScheduleScreen"
            component={ScheduleScreen}
            options={{ title: 'Schedule'}}
          />
          <Stack.Screen name="CourseDetailScreen"
            component={CourseDetailScreen}
            options={{ title: 'Course detail'}}
          />
          <Stack.Screen name="CourseEditScreen"
            component={CourseEditScreen}
            options={{ title: 'Course Editor'}} 
          />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen component={SchedulerScreen}
              options={({navigation}) => ({ 
                title: "Schedule",
                headerRight: () => (
                  <SignInButton navigation={navigation} user={user} />
                ),
              })
            } />
        </Stack.Navigator>
      </NavigationContainer>
    </UserContext.Provider>
  );
};


export default App;
import React from 'react';
import {setupStore} from "./redux";
import {Provider} from "react-redux";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {COLORS, Routes_} from "./constants";
import {NewsLineScreen, PhotoScreen} from "./screen";


export const Stack = createNativeStackNavigator();
const store = setupStore();


function App(): JSX.Element {

  return (
      <Provider store={store}>
          <NavigationContainer>
              <Stack.Navigator initialRouteName={Routes_.NewsLine} screenOptions={{
                  headerStyle:{
                      backgroundColor:COLORS.BASE_COLOR
                  }
              }} >
                  <Stack.Screen name={Routes_.NewsLine} component={NewsLineScreen} options={{
                      title: 'My Newsline',
                      headerStyle: {
                          backgroundColor: COLORS.COLOR_RED,
                      },
                      headerTintColor: COLORS.TEXT_COLOR_MAIN_WHITE,
                      headerTitleStyle: {
                          fontWeight: 'bold',
                      }
                  }}/>
                  <Stack.Screen name={Routes_.Photo} component={PhotoScreen} options={{
                      title: 'Photo',
                      headerStyle: {
                          backgroundColor: COLORS.COLOR_RED,
                      },
                      headerTintColor: COLORS.TEXT_COLOR_MAIN_WHITE,
                      headerTitleStyle: {
                          fontWeight: 'bold',
                      }}}/>
              </Stack.Navigator>
          </NavigationContainer>
      </Provider>
  );
}
export default App;

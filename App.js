import { store } from "./store/store";
import { Provider } from "react-redux";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./components/Login";
import AddFriendsScreen from "./screens/AddFriendsScreen";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{
          headerStyle:{
            backgroundColor: "#f2a456",
          }
        }}>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
          />
          <Stack.Screen
          name="AddFriends"
          component={AddFriendsScreen}
          options={{
            headerTitle: "Add Friends"
          }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

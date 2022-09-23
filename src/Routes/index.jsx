import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import Start from "../pages/Start";
import Rules from "../pages/Rules";
import PlayAlone from "../pages/PlayAlone";
import PlayTogether from "../pages/PlayTogether";
import Disarmed from "../pages/Disarmed";
import Exploded from "../pages/Exploded";

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Rules" component={Rules} />
        <Stack.Screen name="PlayAlone" component={PlayAlone} />
        <Stack.Screen name="PlayTogether" component={PlayTogether} />
        <Stack.Screen name="Disarmed" component={Disarmed} />
        <Stack.Screen name="Exploded" component={Exploded} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

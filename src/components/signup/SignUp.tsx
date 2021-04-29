import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignUpInfo from "./SignUpInfo";
import SignUpVertify from "./SignUpVertify";

const Stack = createStackNavigator();

const SignUp: FC = () => {
  return (
    <Stack.Navigator initialRouteName="SignUpVertify">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="SignUpInfo"
        component={SignUpInfo}
      />
      <Stack.Screen
        name="SignUpVertify"
        component={SignUpVertify}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default SignUp;

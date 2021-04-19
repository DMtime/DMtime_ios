import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import { MainPage, BoardDetailPage, PostDetailPage } from "../pages";
import Header from "../components/header";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Menu from "../components/menu";
import PostWritePage from "../pages/postWrite/PostWritePage";

const Stack = createStackNavigator();

const S = {
  flex: 1,
};

const RootRouter = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen
        options={{ headerShown: false }}
        name="BoardDetail"
        component={BoardDetailPage}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="PostDetail"
        component={PostDetailPage}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="PostWrite"
        component={PostWritePage}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Main"
        component={MainPage}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

const RouterWrapper = () => {
  const [menu, setMenu] = useState<boolean>(false);
  return (
    <>
      <SafeAreaView style={S}>
        <Header setMenu={setMenu} />
        <RootRouter />
      </SafeAreaView>
      {menu ? <Menu setMenu={setMenu} /> : <></>}
    </>
  );
};

export default RouterWrapper;

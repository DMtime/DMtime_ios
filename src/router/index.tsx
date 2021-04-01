import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import { MainPage, BoardDetailPage } from "../pages";
import Header from "../components/header";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Menu from "../components/menu";

const Drawer = createDrawerNavigator();

const S = {
  flex: 1,
};

const RootRouter = () => (
  <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen name="BoardDetail" component={BoardDetailPage} />
      <Drawer.Screen name="Main" component={MainPage} />
    </Drawer.Navigator>
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

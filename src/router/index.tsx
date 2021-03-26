import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import { MainPage } from "../pages";
import Header from "../components/header";

import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Menu from "../components/menu";

const S = {
  flex: 1,
};

const RootRouter = createAppContainer(
  createStackNavigator(
    {
      Home: {
        screen: MainPage,
      },
    },
    {
      defaultNavigationOptions: {
        headerStyle: {
          height: 0,
        },
      },
    }
  )
);

const RouterWrapper = () => {
  const [menu, setMenu] = useState(false);
  const renderMenu = (menu: boolean) => {
    return menu ? <Menu setMenu={setMenu} /> : <></>;
  };
  return (
    <>
      <SafeAreaView style={S}>
        <Header setMenu={setMenu} />
        <RootRouter />
      </SafeAreaView>
      {renderMenu(menu)}
    </>
  );
};

export default RouterWrapper;

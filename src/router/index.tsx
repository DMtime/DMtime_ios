import React, { useCallback, useRef, useState } from "react";
import { SafeAreaView } from "react-native";
import {
  MainPage,
  BoardDetailPage,
  PostDetailPage,
  PostWritePage,
  BoardWritePage,
} from "../pages";
import Header from "../components/header";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Menu from "../components/menu";

const Stack = createStackNavigator();

const S = {
  flex: 1,
};

const RouterWrapper = () => {
  const [menu, setMenu] = useState<boolean>(false);
  const ref = useRef<any>();
  const navigate = useCallback(
    (page: string, params: object) => {
      if (ref.current) ref.current.navigate(page, params);
    },
    [ref]
  );
  return (
    <>
      <SafeAreaView style={S}>
        <Header setMenu={setMenu} />
        <NavigationContainer ref={ref}>
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
            <Stack.Screen
              options={{ headerShown: false }}
              name="BoardWrite"
              component={BoardWritePage}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
      {menu ? <Menu setMenu={setMenu} navigate={navigate} /> : <></>}
    </>
  );
};

export default RouterWrapper;

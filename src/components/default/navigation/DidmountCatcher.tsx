import React, { FC, useEffect, useState } from "react";
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  RefreshControl,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

interface Props {
  mountHandler: () => Promise<void>;
  style?: Object;
  onScroll?: (e: NativeSyntheticEvent<NativeScrollEvent>) => void;
  scrollEventThrottle?: number;
}

const DidmountCatcher: FC<Props> = ({
  children,
  mountHandler,
  style,
  onScroll,
  scrollEventThrottle,
}) => {
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const navigation = useNavigation();

  const onRefresh = async () => {
    setRefreshing(true);
    await mountHandler();
    setRefreshing(false);
  };

  useEffect(() => {
    navigation.addListener("focus", async () => await mountHandler());
    return navigation.removeListener("focus", async () => await mountHandler());
  }, [navigation]);

  return (
    <ScrollView
      style={style}
      onScroll={onScroll}
      scrollEventThrottle={scrollEventThrottle}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      {children}
    </ScrollView>
  );
};

export default DidmountCatcher;

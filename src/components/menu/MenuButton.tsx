import React, { FC } from "react";
import { Text, TouchableOpacity } from "react-native";

const MenuButton: FC = ({ children }) => {
  return (
    <TouchableOpacity>
      <Text>{children}</Text>
    </TouchableOpacity>
  );
};

export default MenuButton;

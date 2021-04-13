import React, { FC, useEffect, useMemo, useState } from "react";
import {
  Animated,
  Dimensions,
  GestureResponderEvent,
  Image,
  View,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import S from "../style";

interface Props {
  imageUrls: string[];
  modal: boolean;
  setModal: (value: boolean) => void;
}

const Modal: FC<Props> = ({ imageUrls, modal, setModal }) => {
  const height = Dimensions.get("window").height;
  const [startDragPoint, setStartDragPoint] = useState<Record<string, number>>({
    x: 0,
    y: 0,
  });
  const [dragPoint, setDragPoint] = useState<Record<string, number>>({
    x: 0,
    y: height,
  });
  const modalRenderItem = ({ item, index }) => (
    <Image source={{ uri: item }} key={index} style={S.ModalImage} />
  );
  const modalDragMoveHandler = (e: GestureResponderEvent) => {
    const { pageX, pageY } = e.nativeEvent;
    setDragPoint({
      x: pageX,
      y: pageY > 100 ? pageY - 100 : 0,
    });
  };
  const modalDragStartHandler = (e: GestureResponderEvent) => {
    const { pageX, pageY } = e.nativeEvent;
    setStartDragPoint({
      x: pageX,
      y: pageY > 100 ? pageY - 100 : 0,
    });
  };
  const modalDragEndHandler = () => {
    if (modalPosition >= 200) setModal(false);
    else {
      setStartDragPoint({ x: 0, y: 0 });
      setDragPoint({ x: 0, y: 0 });
    }
  };
  const removeModal = () => {
    let buffer = modalPosition;
    const decreaseAnimation = setInterval(() => {
      buffer += 60;
      if (buffer >= height) {
        clearInterval(decreaseAnimation);
      }
      setDragPoint((point) => ({ ...point, y: point.y + 60 }));
    }, 1);
  };
  const initModal = () => {
    let buffer = modalPosition;
    const increaseAnimatin = setInterval(() => {
      buffer -= 60;
      if (buffer <= 0) {
        clearInterval(increaseAnimatin);
      }
      setDragPoint((point) => ({ ...point, y: point.y - 60 }));
    }, 1);
  };
  const modalPosition = useMemo(() => {
    const nowPosition = dragPoint.y - startDragPoint.y;
    if (nowPosition <= 0) {
      return 0;
    }
    return nowPosition;
  }, [dragPoint, startDragPoint]);
  useEffect(() => {
    if (modal) {
      initModal();
    } else {
      removeModal();
    }
  }, [modal]);
  return (
    <View
      style={{ ...S.ImageModal, top: modalPosition }}
      onTouchMove={modalDragMoveHandler}
      onTouchStart={modalDragStartHandler}
      onTouchEnd={modalDragEndHandler}
    >
      <View style={S.ImageModalWrapper}>
        <Carousel
          renderItem={modalRenderItem}
          data={imageUrls}
          sliderWidth={400}
          sliderHeight={400}
          itemWidth={300}
          itemHeight={300}
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      </View>
    </View>
  );
};

export default Modal;

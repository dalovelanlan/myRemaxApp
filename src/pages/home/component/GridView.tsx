import React from "react";
import { View, Text, Image, Button, ViewProps } from "remax/one";

interface IProps extends ViewProps {
  imageUrl?: string | undefined;
  title?: string | undefined;
}

const GridView = (props: IProps) => {
  const { imageUrl, title,onTap } = props;

  return (
    <View onTap={onTap} className="shadow-md w-full flex-col flex items-center justify-center h-16 rounded-xl bg-gray-50">
      <Image src={imageUrl} className="w-full h-3_6" mode="aspectFit" />
      <Text className="mt-1 font-mono tracking-wider text-xs  font-bold">
        {title}
      </Text>
    </View>
  );
};

export default GridView;

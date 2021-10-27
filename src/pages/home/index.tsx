import React, { useState } from "react";
import { View, Text, Image, Button,TapEvent } from "remax/one";
import {redirectTo,navigateTo} from 'remax/wechat'
import styles from "@/pages/home/index.css";
import GridView from "@/pages/home/component/gridView";

const Index = () => {

  const handleTap = ()=>{
    redirectTo({
      url: '/pages/switch/index',
    });
  }

  return (
    <View className={styles.pageContainer}>
      <View className="grid grid-cols-3 gap-4 text-center align-middle">
        <GridView
          imageUrl="http://r1l881ywq.hn-bkt.clouddn.com/light.png"
          title="开关"
          onTap={handleTap}
        />
        <GridView
          imageUrl="http://r1l881ywq.hn-bkt.clouddn.com/practice.png"
          title="错题练习"
        />
        <GridView
          imageUrl="http://r1l881ywq.hn-bkt.clouddn.com/idea.png"
          title="主意"
        />
        <GridView
          imageUrl="http://r1l881ywq.hn-bkt.clouddn.com/cooking.png"
          title="菜谱"
        />
        <GridView
          imageUrl="http://r1l881ywq.hn-bkt.clouddn.com/note%20%281%29.png"
          title="笔记"
        />
        {/* <GridView
          imageUrl="http://r1l881ywq.hn-bkt.clouddn.com/light.png"
          title="开关"
        /> */}
      </View>
    </View>
  );
};
export default Index;

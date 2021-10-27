import React, {useState} from 'react';
import {View, Text, Image, Button} from 'remax/one';
import styles from '@/pages/home/index.less'
import SearchInput from '@/pages/home/component/searchInput';


const Index = () => {

    return (
      <View className={styles.pageContainer}>
        <View className='grid grid-cols-3 gap-4 text-center align-middle'>
          <View className='w-full flex-col flex items-center justify-center h-16 rounded-xl bg-gradient-to-r from-blue-200 to-blue-500'>
            <Image
              src={'http://r1l881ywq.hn-bkt.clouddn.com/light.png'}
              className='w-full h-3_6'
              mode='aspectFit'
            />
            <Text className='mt-1 font-mono tracking-wider text-xs text-gray-200 font-bold'>
              开关
            </Text>
          </View>
          <View className='w-full flex items-center justify-center h-16 rounded-xl'>
            2
          </View>
          <View className='w-full flex items-center justify-center h-16 rounded-xl'>
            3
          </View>
          <View className='w-full flex items-center justify-center h-16 rounded-xl'>
            4
          </View>
          <View className='w-full flex items-center justify-center h-16 rounded-xl'>
            5
          </View>
          <View className='w-full flex items-center justify-center h-16 rounded-xl'>
            6
          </View>
          <View className='w-full flex items-center justify-center h-16 rounded-xl'>
            7
          </View>
        </View>
      </View>
    )
};
export default Index;

import React, {useState} from 'react';
import {View, Text, Image, Button} from 'remax/one';
import styles from '@/pages/index/index.less';
import SearchInput from '@/pages/index/component/searchInput';


const Index = () => {

    return (
        <View className={styles.pageContainer}>
            {/* <View className='text-center justify-center'>
                <Text className="font-bold text-2xl">首页</Text>
            </View> */}
            <View className='grid grid-cols-3 gap-4 text-center align-middle'>
                <View className='w-full flex items-center justify-center h-16 rounded-xl bg-indigo-500'>1</View>
                <View className='w-full flex items-center justify-center h-16 rounded-xl bg-indigo-500'>2</View>
                <View className='w-full flex items-center justify-center h-16 rounded-xl bg-indigo-500'>3</View>
                <View className='w-full flex items-center justify-center h-16 rounded-xl bg-indigo-500'>4</View>
                <View className='w-full flex items-center justify-center h-16 rounded-xl bg-indigo-500'>5</View>
                <View className='w-full flex items-center justify-center h-16 rounded-xl bg-indigo-500'>6</View>
                <View className='w-full flex items-center justify-center h-16 rounded-xl bg-indigo-500'>7</View>
            </View>
            {/*<HeaderBar headerCenter={<Text style={{fontSize: '40px'}}></Text>}/>*/}
            {/*<Text>{number}</Text>*/}
            {/* <Button>点我</Button> */}
        </View>
    )
};
export default Index;

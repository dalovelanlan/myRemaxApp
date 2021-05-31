import React, {useState} from 'react';
import {View, Text, Image, Button} from 'remax/one';
import styles from './index.css';
import SearchInput from '@/pages/index/component/searchInput';


const Index = () => {

    return (
        <View>

            <SearchInput/>
            {/*<HeaderBar headerCenter={<Text style={{fontSize: '40px'}}></Text>}/>*/}
            {/*<Text>{number}</Text>*/}
            {/*<Button onTap={handleClick}>点我</Button>*/}
        </View>
    );
};
export default Index;

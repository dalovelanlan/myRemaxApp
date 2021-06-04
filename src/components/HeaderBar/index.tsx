import React from 'react';
import {Text, View} from 'remax/one';
import styles from './index.css';



type Props = {
    headerLeft?: Element,
    headerCenter: Element,
    headerRight?: Element,
};
const Index = (props: any) => {
    const {headerCenter, headerLeft, headerRight} = props;
    return (
        <View className={styles.headerContainer}>
            <Text className={styles.headerLeft}>{headerLeft}</Text>
            <Text className={styles.headerCenter}>{headerCenter}</Text>
            <Text className={styles.headerRight}>{headerRight}</Text>
        </View>
    );
};


export default Index;
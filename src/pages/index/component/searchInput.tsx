import * as React from 'react';
import {View, Input} from 'remax/one';
import Icon from 'weui-miniprogram/miniprogram_dist/icon/icon';
import styles from '../index.less';


type Props = {};
const SearchInput = (props: Props) => {
    return (
        <View className={styles.searchContainer}>
            <View className={styles.icon}>
                <Icon icon="search" type="field" color="#8E959E" size={20}/>
            </View>
            <span className={styles.text}>搜索</span>
        </View>
    );
};

export default SearchInput;
import * as React from 'react';
import {View, Input} from 'remax/one';


type Props = {};
const SearchInput = (props: Props) => {
    return (
        <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <View style={{
                backgroundColor: 'red',
                width: '10%',
                height: '65px',
                borderTopLeftRadius: '30px',
                borderBottomLeftRadius: '30px'
            }}></View>
            <View style={{
                width: '60%',
                backgroundColor: '#fafaf5',
                borderBottomRightRadius: '30px',
                borderTopRightRadius: '30px',
                marginTop: '10px',
                paddingTop: '10px',
                paddingBottom: '10px',
                marginBottom: '10px',
                position: 'relative'
            }}>
                <Input placeholder={'请输入'}/>
            </View>
        </View>
    );
};

export default SearchInput;
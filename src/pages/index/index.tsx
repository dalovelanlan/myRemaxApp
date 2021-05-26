import React,{useState} from 'react';
import { View, Text, Image,Button } from 'remax/one';
import styles from './index.css';

const Index =  () => {
  const [number,setNumber] = useState(0)

  const handleClick = ()=>{
    setNumber(number+1);
  }
  return (
    <View className={styles.app}>
      <Text>{number}</Text>
      <Button onTap={handleClick}>点我</Button>
    </View>
  );
};
export default Index;

import React, { useState } from 'react'
import { View, Text } from 'remax/one'
import { Switch,GenericEvent } from 'remax/wechat'
import './index.css'

const Index = () => {
  const [isChecked, setIsChecked] = useState(false)
  const [status, setStatus] = useState('关')

  // 点击switch开关灯
  const handleChangeSwitch = (event: GenericEvent) => { 
    setIsChecked(event.detail.value)
    setStatus(event.detail.value?'开':'关')
  }  

  return (
    <View className='pageContainer'>
      <View className='page_switch_body'>
        <Switch
          color='#1f4f89'
          onChange={handleChangeSwitch}
          checked={isChecked}
        />
        <Text className='page_switch_status'>{status}</Text>
      </View>
    </View>
  )
}

export default Index

import { Avatar, Flex, Typography } from 'antd'
import Search from 'antd/es/input/Search'
import React from 'react'
import {MessageOutlined, SettingOutlined} from '@ant-design/icons'
import '../App.css'

const CustomHeader = () => {
  return (
    <Flex align='center' justify='space-between'><p className='products' style={{ fontWeight: '400', fontSize: '1.2rem', color: 'Black' }}>
    Products</p>  
        <Flex align='righ' gap="3rem" className='disable500'>
            <Search placeholder='search for...' allowClear  />
            <Flex align='center' gap='10px'>
                <MessageOutlined className='header-icon'/>
                <Avatar icon={<SettingOutlined />}/>
            </Flex>
        </Flex>
    </Flex>
  )
}

export default CustomHeader
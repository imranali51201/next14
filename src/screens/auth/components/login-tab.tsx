import { Button, Checkbox, Flex, Form, Input } from 'antd'
import Link from 'next/link'
import React from 'react'

function LoginTab() {

    return (
        <Form onFinish={console.log} layout='vertical'>
            <Form.Item name="email" rules={[{ required: true, message: "Please enter email!" }]}>
                <Input placeholder='name@gmail.com' />
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true, message: "Please enter password!" }]}>
                <Input.Password placeholder='*******' />
            </Form.Item>
            <Form.Item noStyle>
                <Flex className='mb-2' justify='space-between'>
                    <Checkbox>Remember me</Checkbox>
                    <Link href="#">Forgotten password?</Link>
                </Flex>
            </Form.Item>
            <Form.Item noStyle>
                <Button block type='primary' htmlType='submit'>Login</Button>
            </Form.Item>
        </Form>
    )
}

export default LoginTab
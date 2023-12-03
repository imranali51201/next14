import { CreateUserType } from '@src/types';
import { Button, Checkbox, Form, Input, Space } from 'antd'
import { useRouter } from 'next/navigation';
import React, { useCallback } from 'react'

function RegisterTab() {
  const router = useRouter();

  const onFinish = useCallback(async ({ re_password, ...rest }: CreateUserType & { "re_password": string }) => {
    const response = await fetch("/api/auth/register", { method: "POST", body: JSON.stringify({ ...rest }) });
    const data = await response.json()
    router.push("/dashboard");
    console.log("🚀 ~ file: register-tab.tsx:9 ~ onFinish ~ data:", data)
  }, []);

  return (
    <Form onFinish={onFinish} layout='vertical'>
      <Space>
        <Form.Item name="first_name" rules={[{ required: true, message: "Please enter first name!" }]}>
          <Input placeholder='First Name' />
        </Form.Item>
        <Form.Item name="last_name" rules={[{ required: true, message: "Please enter last name!" }]}>
          <Input placeholder='Last Name' />
        </Form.Item>
      </Space>
      <Form.Item name="email" rules={[{ required: true, message: "Please enter email!" }]}>
        <Input placeholder='name@gmail.com' />
      </Form.Item>
      <Space>
        <Form.Item name="password" rules={[{ required: true, message: "Please enter password!" }]}>
          <Input.Password placeholder='*******' />
        </Form.Item>
        <Form.Item name="re_password" rules={[
          { required: true, message: "Please re-enter password!" },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('Password do not match!'));
            },
          }),
        ]}>
          <Input.Password placeholder='*******' />
        </Form.Item>
      </Space>
      <Form.Item noStyle>
        <div className='mb-2'>
          <Checkbox>Agree Terms & conditions.</Checkbox>
        </div>
      </Form.Item>
      <Form.Item noStyle>
        <Button block type='primary' htmlType='submit'>Register</Button>
      </Form.Item>
    </Form>
  )
}

export default RegisterTab
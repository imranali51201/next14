'use client'
import { Button, Card, Divider, Space, Tabs, TabsProps, Typography } from 'antd';
import React from 'react';
import LoginTab from './components/login-tab';
import RegisterTab from './components/register-tab';
import Image from 'next/image';

function LoginScreen() {
  const tabs: TabsProps["items"] = [
    {
      label: "Login",
      key: "login",
      children: <LoginTab />,
    },
    {
      label: "Register",
      key: "register",
      children: <RegisterTab />
    }
  ];

  return (
    <div className='flex justify-center items-center h-full p-5'>
      <Card className='w-96'>
        <Space>
          <Image width={40} height={40} src="https://seeklogo.com/images/T/twitter-icon-circle-blue-logo-0902F48837-seeklogo.com.png" alt="logo" />
          <Typography.Text className='leading-none font-semibold text-lg'>WearHouse</Typography.Text>
        </Space>
        <Typography.Title level={3}>Welcome Back</Typography.Title>
        <Tabs items={tabs} />
        <Divider>OR</Divider>
        <Space direction='vertical' className='w-full'>
          <Button
            className='flex items-center justify-center'
            icon={<Image width={20} height={20} src="https://static-00.iconduck.com/assets.00/google-icon-2048x2048-czn3g8x8.png" alt="google-icon" />}
            block
          >
            Sign in with Google
          </Button>
          <Button
            className='flex items-center justify-center'
            icon={<Image width={20} height={20} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png" alt="google-icon" />}
            block
          >
            Sign in with Facebook
          </Button>
        </Space>
      </Card>
    </div>
  );
}

export default LoginScreen;
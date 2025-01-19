import React from 'react';
import { Button, Form, Input, Typography } from 'antd';
import { GoogleOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const SignUpForm = () => {
  return (
    <div className="flex justify-center py-4 items-center h-min-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-3 md:p-10 w-full max-w-md">
        {/* Title */}
        <Title level={3} className="text-center mb-2">
          Sign Up
        </Title>

        <Form
          name="signup-form"
          layout="vertical"
          initialValues={{
            remember: true,
          }}
          className="w-full"
        >
          {/* Email Input */}
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: 'Please enter your email!',
              },
            ]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>

          {/* Username Input */}
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please enter your username!',
              },
            ]}
          >
            <Input placeholder="Enter your username" />
          </Form.Item>

          {/* Password Input */}
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please enter your password!',
              },
            ]}
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item>

          {/* Sign Up Button */}
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full mb-1"
            >
              Sign Up
            </Button>
          </Form.Item>

          {/* Already have an account? */}
          <div className="text-center ">
            <Text>Already have an account?</Text>
          </div>

          {/* Login Button */}
          <Form.Item>
            <Button
              type="default"
              htmlType="button"
              className="w-full mb-1"
            >
              Login
            </Button>
          </Form.Item>

          {/* Sign Up with Google Button */}
          <Form.Item>
            <Button
              icon={<GoogleOutlined />}
              type="default"
              htmlType="button"
              className="w-full"
            >
              Sign Up with Google
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default SignUpForm;

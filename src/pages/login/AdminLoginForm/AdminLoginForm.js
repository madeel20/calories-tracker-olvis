import React, { useEffect, useState } from "react";
import { Form, Input, Button, Typography, message } from 'antd';
import { Link, useHistory } from "react-router-dom";
const { Title } = Typography;

const   AdminLoginForm = ({
    onSubmit,
    loading
}) => {
  return (
    <Form data-testid="admin-login-form" onFinish={onSubmit} className="inner-container">

         <Title className="mb-4">Calorie Tracking App(Admin Login)</Title>

        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input data-testid="email-field" type="email" placeholder="Email" disabled={loading} />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password
            iconRender={() => <a>Show</a>}
            placeholder="Password"
            disabled={loading}
            data-testid="password-field"
          />
        </Form.Item>

        <Button data-testid="login-button"  size="large" type="primary" htmlType="submit" className="c-button large" loading={loading}>
          Log in
        </Button>

        <div className="more-pages mt-4">
          <span>For Users <Link to="/">Go to Sign In</Link></span>
        </div>

      </Form>
  )
}

export default AdminLoginForm
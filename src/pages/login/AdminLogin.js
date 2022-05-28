import React, { useEffect, useState } from "react";
import { Form, Input, Button, Typography, message } from 'antd';
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase";
import AdminLoginForm from "./AdminLoginForm/AdminLoginForm";


export default function AdminLogin() {
  
  const [loading, setLoading] = useState(false)
  const history = useHistory();

  const handleSubmit = (values) => {

    setLoading(true)
      auth.signInWithEmailAndPassword(values.email,values.password).then(res=>{
        history.push('/');
      })
      .catch(err=>{
          message.error(err?.message);
      }).finally(()=>setLoading(false))
  }

  return (
    <div className="login-container text-center">
        <AdminLoginForm onSubmit={handleSubmit} loading={loading} />
    </div>
  );
}

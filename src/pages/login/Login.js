import React, { useEffect } from "react";
import { Form, Input, Button, Row } from "antd";
import { Link, useHistory } from "react-router-dom";
import { auth, firestore, googleProvider } from "../../firebase";
import { Typography } from "antd";
import classes from "./login.module.css";

const { Title } = Typography;

export default function LoginPage() {
  const history = useHistory();

  const handleSubmit = () => {
    auth.signInWithPopup(googleProvider).then(res=>{
      firestore.collection('users').doc(res.user.uid).get().then(doc=>{
        if(!doc.exists){
          firestore.collection('users').doc(res.user.uid).set({
            calories_limit: 2100
          })
        }
      });
    });
  };

  return (
    <div className={classes.form}>
      <Title>Calorie Tracking App</Title>

      <Button type="primary" size="large" onClick={handleSubmit}>
        Sign In with Google
      </Button>

      <div className="more-pages">
        <Link to="admin-login">Admin Login</Link>
      </div>
    </div>
  );
}

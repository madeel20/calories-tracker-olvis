import { Avatar, Button, Col, Dropdown, Layout, Menu, Row } from "antd";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Typography } from "antd";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { auth } from "../../firebase";
const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;

/**
 * This is a shared header for all the screens
 * @returns {JSX}
 */
function CHeader() {
  const history = useHistory();
  const [collapsed, setCollapsed] = useState(true);

  const menu = (
    <Menu
      items={[
        {
          icon: <LogoutOutlined />,
          onClick: () => auth.signOut().then((res) => history.push("/")),
          label: "Sign Out",
        },
      ]}
    />
  );

  return (
    <Header style={styles.header}>
      <Link to="/">
        <Title level={2} style={styles.heading}>
          Calories Tracking App
        </Title>
      </Link>
      <Col>
        {auth.currentUser && (
          <Dropdown overlay={menu} placement="bottomLeft" arrow>
            <Avatar size="large" icon={<UserOutlined />} />
          </Dropdown>
        )}
      </Col>
    </Header>
  );
}

const styles = {
  header: {
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
  },
  heading: { color: "white", marginBottom: 0 },
};

export default CHeader;

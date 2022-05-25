import { Button, Col, DatePicker, Row, Spin, Typography } from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { firestore } from "../../../firebase";
import { getReportsData } from "./helpers";
import classes from "./Reports.module.css";

const { Title } = Typography;

const Reports = () => {
  const [reportsData, setReportsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    setLoading(true);
    getReportsData()
      .then((res) => setReportsData(res))
      .finally(() => setLoading(false));
  }, []);


  return (
    <div className={classes.Dashboard}>
      <Row>
        <Col span={19}>
          <Title level={4}>Admin Dashboard - Reports </Title>
        </Col>
        <Col style={{ display: "flex", justifyContent: "end" }} span={5}>
          <Button onClick={() => history.push("/")} type="link">
            Foods list
          </Button>
        </Col>
      </Row>
      {loading ? (
        <div className={classes.spinContainer}>
          <Spin size="large" />
        </div>
      ) : (
        <>
          <Row className="mt-4">
            <Title className="mt-4" level={5}>
              Number of Added entries
            </Title>
          </Row>
          <Row gutter={24} className="mt-2">
            <Col span={12}>
              <div className={classes.statisticsContainer}>
                <Title level={5}>
                  <Title level={1}>{reportsData?.numberOfEntries?.last7Days}</Title>last 7 days
                </Title>
              </div>
            </Col>
            <Col span={12}>
              <div className={classes.statisticsContainer}>
                <Title level={5}>
                  <Title level={1}>{reportsData?.numberOfEntries?.lastWeek}</Title>last week
                </Title>
              </div>
            </Col>
          </Row>
          <Row className="mt-4">
            <Title className="mt-4" level={5}>
              Average number of calories ( last 7 days)
            </Title>
          </Row>
          <Row className="mt-2">
            <Col span={12}>
              <div className={classes.statisticsContainer}>
                <Title level={5}>
                  <Title level={1}>{reportsData?.averageNoOfCaloriesPerUserIn7Days} cal.</Title> per user
                </Title>
              </div>
            </Col>
          </Row>
        </>
      )}
    </div>
  );
};

export default Reports;

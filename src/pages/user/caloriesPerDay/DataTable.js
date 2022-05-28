import React from "react";
import { Table, Tag, Space } from "antd";
import moment from "moment";
import { CALORIES_LIMIT_PER_DAY } from "../../../utils/constants";

const DataTable = ({ loading, data }) => {
  const columns = [
    {
      title: "Date",
      key: "date",
      dataIndex: "date",
      render: (date) => {
        return <>{date}</>;
      },
    },
    {
      title: "Total Calories",
      dataIndex: "calories",
      key: "calories",
    },
    {
      title: "",
      dataIndex: "calories",
      key: "limit",
      render: (calories) => {
        return (
          <>
            {calories > CALORIES_LIMIT_PER_DAY ? (
              <Tag color={"volcano"}>
                DAILY LIMIT EXCEEDED
              </Tag>
            ) : (
              ""
            )}
          </>
        );
      },
    },
  ];

  return <Table rowKey={(eachRow)=>eachRow.date} pagination={{pageSize:7}} loading={loading} columns={columns} dataSource={data} />;
};

export default DataTable;

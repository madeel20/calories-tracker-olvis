import React from 'react'
import { Table, Tag, Space } from 'antd';
import moment from 'moment';

const FoodsList = ({
    loading,
    foodsList
}) => {

    const columns = [
        {
          title: 'Name',
          dataIndex: 'food',
          key: 'food',
          render: text => <a>{text}</a>,
        },
        {
          title: 'Calories',
          dataIndex: 'calories',
          key: 'calories',
        },
        {
          title: 'Date & Time',
          key: 'date',
          dataIndex: 'date',
          render: date => {
              return (
            <>
              {moment(new Date(date.seconds * 1000)).format("DD MMM YY, hh:mm A")}
            </>
          )},
        },
      ];

  return (
    <Table pagination={{pageSize:7}} loading={loading} columns={columns} dataSource={foodsList} />
  )
}

export default FoodsList
import React from 'react'
import { Table, Divider, Button, Pagination, Row } from 'antd'
import axios from 'axios'

const columns = [{
  title: 'System Name',
  dataIndex: 'name',
  sorter: true,
  width: '20%',
}, {
  title: 'Group Name',
  dataIndex: 'group',
  width: '20%',
}, {
  title: 'Group Code',
  dataIndex: 'groupCode',
  width: '20%',
}, {
  title: 'Action',
  key: 'action',
  render: (text, record) => (
    <span>
      <a href='javascript:;'>Invite {record.name}</a>
      <Divider type='vertical' />
      <a href='javascript:;'>Delete</a>
    </span>
  ),
}]

class SystemManage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [],
      pagination: {},
      loading: false,
    }
  }

  componentDidMount () {
    this.fetch()
  }

  handleTableChange = (current, pageSize, filters) => {
    const pager = { ...this.state.pagination }
    pager.current = current - 1
    pager.pageSize = pageSize
    this.setState({
      pagination: pager,
    })
    this.fetch({
      pageSize: pageSize,
      pageIndex: current - 1,
      ...filters,
    })
  }

  fetch = (params = {}) => {
    let paramRequet = {
      pageIndex: params.pageIndex,
      pageSize: params.pageSize
    }
    if (params.column) {
      paramRequet.sortField = params.column.dataIndex
      paramRequet.orderDescending = params.column.sorter
    }
    this.setState({ loading: true })
    axios({
      method: 'get',
      url: '/systems',
      params: paramRequet
    }).then((data) => {
      const pagination = { ...this.state.pagination }
      // Read total count from server
      // pagination.total = data.totalCount;
      pagination.total = data.data.total
      this.setState({
        loading: false,
        data: data.data.systems,
        pagination,
      })
    })
  }

  render () {
    return (
      <div style={{ margin: '0 16px' }}>
        <Button style={{ margin: '16px 0', right: 5 }}>
          Sửa
        </Button>
        <Table size='middle' style={{ padding: 24, background: '#fff', Height: '100%' }}
          columns={columns}
          rowKey={record => record.id}
          dataSource={this.state.data}
          pagination={false}
          onChange={this.handleTableChange}
        />
        <Row justify={'end'}>
          <Pagination style={{ padding: 24, background: '#fff' }}
            onShowSizeChange={this.handleTableChange}
            showSizeChanger
            showQuickJumper
            defaultCurrent={0}
            pageSizeOptions={['2', '5', '10', '100']}
            onChange={this.handleTableChange}
            total={this.state.pagination.total} />

        </Row>
      </div>

    )
  }
}

export default SystemManage

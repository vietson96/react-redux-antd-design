import React from 'react'
import { Link } from 'react-router'
import { Table, Divider, Button, Pagination, Row, Input, Icon, Modal } from 'antd'
import axios from 'axios/index'
import { message } from 'antd/lib/index'

const confirm = Modal.confirm
const Search = Input.Search
var columns = [{
  title: 'System Name',
  dataIndex: 'name',
  sorter: true,
  width: '30%',
}, {
  title: 'Group Name',
  dataIndex: 'group',
  width: '30%',
}, {
  title: 'Group Code',
  dataIndex: 'groupCode',
  width: '30%',
}, {
  title: 'Action',
  align: 'right',
  render: (text, record) => {
    return (
      <span>
        <Link to={`systems/detail/${record.id}`}><Icon size={'large'} type='edit' /></Link>
        <Divider type='vertical' />
        <Icon size={'large'} type='delete' onClick={() => showDeleteConfirm(record.id)} />
      </span>
    )
  }
}]

function showDeleteConfirm (id, transition) {
  confirm({
    title: 'Are you sure delete this task?',
    content: 'Some descriptions',
    okText: 'Yes',
    okType: 'danger',
    cancelText: 'No',
    onOk () {
      axios({
        method: 'delete',
        url: `/systems/${id}`,
      }).then(function (response) {
        this.dataSubscription
        message.success(response.data.result)
      }).catch(function (error) {
        message.error(error)
      })
      console.log('OK')
    },
  })
}

class SystemManage extends React.Component {
  constructor (props) {
    super(props)
  }
  componentDidMount () {
    this.props.getList()
  }

  handleTableChange = (current, pageSize, filters) => {
    this.fetch({
      pageIndex: current > 0 ? current - 1 : 0,
      pageSize: pageSize,
      ...filters,
    })
  }

  fetch = (params = {}) => {
    let paramRequet = {
      pageIndex: params.pageIndex,
      pageSize: params.pageSize,
      textSearch: params.textSearch || ''
    }
    if (params.column) {
      paramRequet.sortField = params.column.dataIndex
      paramRequet.orderDescending = params.column.sorter
    }
    this.props.getList(paramRequet)
  }

  // var
  // dataSubscription = Rx.Observable.merge(
  //
  // ).fetch({
  //   pageIndex: current > 0 ? current - 1 : 0,
  //   pageSize: pageSize,
  //   ...filters,
  // });

  render () {
    let systems = this.props.systems.systems
    return (
      <div style={{ margin: '0 16px' }}>
        <Link to={'/systems/new'}>
          <Button style={{ margin: '16px 0', right: 5 }}>
            Thêm mới
          </Button>
        </Link>
        <Search
          placeholder='input search text'
          size='large'
          onSearch={(value) => this.fetch({
            textSearch: value,
          })}
        />
        <Table size='middle' style={{ padding: 24, background: '#fff', Height: '100%' }}
          columns={columns}
          rowKey={record => record.id}
          dataSource={systems.systems}
          pagination={false}
          onChange={this.handleTableChange}
        />
        <Row justify={'end'}>
          <Pagination style={{ padding: 24, background: '#fff' }}
            onShowSizeChange={this.handleTableChange}
            size={'medium'}
            indentSize={200}
            showSizeChanger
            showQuickJumper
            defaultCurrent={0}
            pageSizeOptions={['2', '5', '10', '100']}
            onChange={this.handleTableChange}
            total={systems.total} />

        </Row>
      </div>
    )
  }
}

export default SystemManage

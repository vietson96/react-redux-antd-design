import React from 'react'
import { Link } from 'react-router'
import { Table, Divider, Button, Pagination, Row, Input } from 'antd'
import { Modal } from 'antd'

const confirm = Modal.confirm
const Search = Input.Search

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
  render: (text, record) => {
    debugger
    return (
      <span>
        <Link to={`systems/detail`}>Invite</Link>
        <Divider type='vertical' />
        <Button onClick={() => showDeleteConfirm(record.id)}>Delete</Button>
      </span>
    )
  }
}]

function showDeleteConfirm (id) {
  confirm({
    title: 'Are you sure delete this task?',
    content: 'Some descriptions',
    okText: 'Yes',
    okType: 'danger',
    cancelText: 'No',
    onOk () {
      console.log('OK')
    },
  })
}

class List extends React.Component {
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
    debugger
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

  render () {
    let systems = this.props.systems.systems
    return (
      <div style={{ margin: '0 16px' }}>
        <Button style={{ margin: '16px 0', right: 5 }}>
          Sửa
        </Button>
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

export default List

import {
  Button,
  Col,
  Form,
  Input,
  Row,
  Select,
  Space,
  Table,
  TablePaginationConfig,
} from 'antd'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Home() {
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    showSIzeChanger: true,
  })
  const [total, setTotal] = useState(0)
  const [form] = Form.useForm()
  const router = useRouter()

  const handleSearchFinish = (value) => {
    console.log(value)
  }

  const handelSearchReset = () => {
    form.resetFields()
  }

  const handBookEdit = (row: any) => {
    router.push(`/book/edit?id=${row.id}`)
  }

  const handleTableChange = (pageination: TablePaginationConfig) => {
    console.log(pageination)
  }

  const dataSource = [
    {
      key: 'book-1',
      id: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: 'book-2',
      id: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
    {
      key: 'book-3',
      id: '3',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: 'book-4',
      id: '4',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
    {
      key: 'book-5',
      id: '5',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: 'book-6',
      id: '6',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
    {
      key: 'book-7',
      id: '7',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: 'book-8',
      id: '8',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
    {
      key: 'book-9',
      id: '9',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: 'book-10',
      id: '10',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
    {
      key: 'book-11',
      id: '11',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: 'book-12',
      id: '12',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
    {
      key: 'book-13',
      id: '13',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: 'book-14',
      id: '14',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
    {
      key: 'book-15',
      id: '15',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: 'book-16',
      id: '16',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
    {
      key: 'book-17',
      id: '17',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: 'book-18',
      id: '18',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
    {
      key: 'book-19',
      id: '19',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: 'book-20',
      id: '20',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
  ]

  const COLUMNS = [
    {
      title: '名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '封面',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '作者',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '分类',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '描述',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '库存',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '创建时间',
      dataIndex: 'address',
      key: 'address',
    },
  ]

  const columns = [
    ...COLUMNS,
    {
      title: '操作',
      key: 'action',
      render: (_: any, row: any) => {
        return (
          <>
            <Space>
              <Button type='link' onClick={handBookEdit}>
                编辑
              </Button>
              <Button type='link' danger>
                删除
              </Button>
            </Space>
          </>
        )
      },
    },
  ]
  return (
    <>
      <Form
        name='search'
        form={form}
        onFinish={handleSearchFinish}
        initialValues={{
          name: '',
          author: '',
          category: '',
        }}>
        <Row gutter={24}>
          <Col span={5}>
            <Form.Item name='name' label='名称'>
              <Input placeholder='请输入名称' allowClear />
            </Form.Item>
          </Col>
          <Col span={5}>
            <Form.Item name='author' label='作者'>
              <Input placeholder='请输入作者' allowClear />
            </Form.Item>
          </Col>
          <Col span={5}>
            <Form.Item name='category' label='分类'>
              <Select
                allowClear
                showSearch
                placeholder='请选择分类'
                options={[
                  { value: '1', label: 'Jack' },
                  { value: '2', label: 'Lucy' },
                  { value: '3', label: 'Tom' },
                ]}
              />
            </Form.Item>
          </Col>
          <Col span={9}>
            <Form.Item>
              <Space>
                <Button type='primary' htmlType='submit'>
                  搜索
                </Button>
                <Button onClick={handelSearchReset}>清空</Button>
              </Space>
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <Table
        dataSource={dataSource}
        columns={columns}
        scroll={{ x: 1000 }}
        onChange={handleTableChange}
        pagination={{
          ...pagination,
          total,
          showTotal: () => `共${total}条`,
        }}
      />
    </>
  )
}

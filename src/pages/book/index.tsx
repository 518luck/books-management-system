import { Button, Form, Input, Select, Space } from 'antd'

export default function Home() {
  const [form] = Form.useForm()

  const handleSearchFinish = (value) => {
    console.log(value)
  }

  const handelSearchReset = () => {
    form.resetFields()
  }

  return (
    <>
      <Form
        name='search'
        layout='inline'
        form={form}
        onFinish={handleSearchFinish}
        initialValues={{
          name: '',
          author: '',
          category: '',
        }}>
        <Form.Item name='name' label='名称'>
          <Input placeholder='请输入名称' allowClear />
        </Form.Item>
        <Form.Item name='author' label='作者'>
          <Input placeholder='请输入作者' allowClear />
        </Form.Item>
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
            style={{ width: 150 }}
          />
        </Form.Item>
        <Form.Item>
          <Space>
            <Button type='primary' htmlType='submit'>
              搜索
            </Button>
            <Button onClick={handelSearchReset}>清空</Button>
          </Space>
        </Form.Item>
      </Form>
    </>
  )
}

import React from 'react'
import { useRouter } from 'next/router'
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from '@ant-design/icons'
import Image from 'next/image'
import { DownOutlined } from '@ant-design/icons'
import { Breadcrumb, Layout as AntdLayout, Menu, Dropdown, Space } from 'antd'
import type { MenuProps } from 'antd'

import styles from './index.module.scss'

const { Header, Content, Sider } = AntdLayout

const ITEMS = [
  {
    // icon: React.createElement(icon),
    label: `图书管理`,
    key: 'book',

    children: [
      { label: `图书列表`, key: '/book' },
      { label: `图书添加`, key: '/book/add' },
    ],
  },
  {
    // icon: React.createElement(icon),
    label: `借阅管理`,
    key: 'borrow',

    children: [
      { label: `借阅列表`, key: '/borrow' },
      { label: `借阅添加`, key: '/borrow/add' },
    ],
  },
  {
    // icon: React.createElement(icon),
    label: `分类管理`,
    key: 'category',

    children: [
      { label: `分类列表`, key: '/category' },
      { label: `分类添加`, key: '/category/add' },
    ],
  },
  {
    // icon: React.createElement(icon),
    label: `用户管理`,
    key: 'user',

    children: [
      { label: `用户列表`, key: '/user' },
      { label: `用户添加`, key: '/user/add' },
    ],
  },
]

const USER_ITEMS: MenuProps['items'] = [
  {
    label: '用户中心',
    key: '1',
  },
  {
    type: 'divider',
  },
  {
    label: '登出',
    key: '2',
  },
]

export function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const handleMenuClick = ({ key }: { key: string }) => {
    router.push(key)
  }

  return (
    <AntdLayout style={{ minHeight: '100vh' }}>
      <Header className={styles.header}>
        <Image
          src='/logo.svg'
          alt='logo'
          width={27}
          height={27}
          className={styles.logo}
        />
        多云图书管理系统
        <span className={styles.user}>
          <Dropdown menu={{ items: USER_ITEMS }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                用户名
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </span>
      </Header>
      <AntdLayout>
        <Sider width={200}>
          <Menu
            mode='inline'
            defaultSelectedKeys={['/book']}
            defaultOpenKeys={['book']}
            style={{ height: '100%', borderRight: 0 }}
            items={ITEMS}
            onClick={handleMenuClick}
          />
        </Sider>
        <AntdLayout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb
            items={[{ title: 'Home' }, { title: 'List' }, { title: 'App' }]}
            style={{ margin: '16px 0' }}
          />
          <Content>
            Content
            {children}
          </Content>
        </AntdLayout>
      </AntdLayout>
    </AntdLayout>
  )
}

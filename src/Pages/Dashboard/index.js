import React, { useState } from 'react';
import { Layout, Row, Dropdown, Menu, Col } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined, UserAddOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons';
import SideNavbar from '../../Components/UI/SideNavbar';
import { Link, useHistory } from 'react-router-dom';
import Cookies from "js-cookie";

const { Header } = Layout;

const Dashboard = ({children}) => {
    const [collapsed, setCollapsed] = useState(false);
    const history = useHistory()

    const logoutUser = () => {
        Cookies.remove('token')
        history.push('/login')
    }

    const menu = (
        <Menu items={[
            {
                label: <Link to="/profile" className="text-body"><UserOutlined style={{color:"blue"}} />&nbsp;Profile</Link>,
                key: '0',
            },
            {
                label: <div onClick={logoutUser}><LogoutOutlined style={{color:"red"}} />&nbsp;Logout</div>,
                key: '1',
            },
          ]}
        />
    );

    return (
        <Layout style={{height : '100vh'}}>
            <Layout>
                <SideNavbar collapsed={collapsed}/>
                <Layout className='overflow-auto'>
                    <Header className='bg-white mb-4'>
                        <Row justify="space-between" className='px-4 header' >
                            <Col>
                            {
                            React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                                className : 'trigger fs-4',
                                onClick: () => setCollapsed(!collapsed)
                            })
                            }
                            </Col>
                            <Col span={4}>
                                <Dropdown overlay={menu} trigger={['click']} >
                                    <div className='text-center d-flex align-items-center justify-content-end fs-5 fw-bolder'>
                                        <img src="/user-1.png" alt='pic' width="45px" /> &nbsp;
                                        Hi, {JSON.parse(localStorage.getItem('user'))?.username}
                                    </div>
                                </Dropdown>
                            </Col>
                        </Row>
                    </Header>
                    <div className="bg-white text-center p-4 mx-4 main-card mb-4">
                        {children}
                    </div>
                </Layout>
            </Layout>
        </Layout>
    )
}

export default Dashboard
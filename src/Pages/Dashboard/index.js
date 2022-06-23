import React, { useState } from 'react';
import { Layout, Row, Dropdown, Menu, Col } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined, UserAddOutlined } from '@ant-design/icons';
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
                label: <Link to="/profile">Profile</Link>,
                key: '0',
            },
            {
                label: <div onClick={logoutUser}>Logout</div>,
                key: '1',
            },
          ]}
        />
    );

    return (
        <Layout style={{height : '100vh'}}>
             <Header className='bg-white mb-4'>
                <Row justify="space-between" className='px-4 header' >
                    <Col span={4}>
                        <img src="https://images-platform.99static.com/VjQlwl2IRxelKQzp4tzqY8pD4nY=/500x500/top/smart/99designs-contests-attachments/23/23280/attachment_23280405" alt='pic' style={{width:'50px'}}/>
                        <span>Assests Management System</span>
                    </Col>
                    <Col span={4}>
                    <Dropdown overlay={menu} trigger={['click']} >
                        <div className='text-center d-flex align-items-center justify-content-end fs-5 fw-bolder'>
                            <UserAddOutlined className='px-4'/>
                            {/* <img src="user-1.png" alt='pic' style={{width : '20px', height:'20px', borderRadius : '10px'}}/> */}
                            Hi,{ JSON.parse(Cookies.get('user'))?.username}
                        </div>
                    </Dropdown>
                    </Col>
                </Row>
              
            </Header>
            <Layout className='mb-4 mx-2'>
                <SideNavbar collapsed={collapsed}/>
                <Layout className='p-4  mx-3'>
                    <Header className="site-layout-background ">
                        <Row justify="space-between" className='d-flex align-items-center'>
                        {
                            React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                                className : 'trigger fs-4',
                                onClick: () => setCollapsed(!collapsed)
                            })
                        }
                        {/* <Dropdown overlay={menu} trigger={['click']} >
                            <div className='text-center d-flex align-items-center fs-5 fw-bolder'>
                                <UserAddOutlined className='px-4'/>
                                Hi, {JSON.parse(localStorage.getItem('user'))?.username}
                            </div>
                        </Dropdown> */}
                        </Row>
                    </Header>
                    {children}
                </Layout>
            </Layout>
        </Layout>
    )
}

export default Dashboard
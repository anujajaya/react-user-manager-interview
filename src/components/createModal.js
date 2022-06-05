import React from 'react'
import { Modal, Form, Input, Button } from 'antd'
const CreateModal = ({ isModalVisible, handleCancel, handleOk }) => {
    return (
        <div>
            <Modal style={{
                width: '500px', height: '500px', backgroundColour: '#FFFCFC'
            }}
                title="create user"
                visible={isModalVisible}
                footer={null}
                onCancel={handleCancel}>
                <Form
                    name='userAdd'
                    onFinish={handleOk}
                    autoComplete="off"
                >
                    <Form.Item
                        name="userName"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}>
                        <Input placeholder='Name' />

                    </Form.Item>
                    <Form.Item
                        name="emailId"
                        rules={[{
                            required: true,
                            massage: 'please input your email'
                        },
                        {
                            type: 'email'
                        }]}>
                        <Input placeholder='Email id' />

                    </Form.Item>
                    <Form.Item
                        name="mobileNumber"
                        rules={[
                            {
                                required: true,
                                message: 'please input your mobile number'
                            }
                        ]}>
                        <Input placeholder='Mobile number' />

                    </Form.Item>
                    <Form.Item
                        name='homeAdress'
                        rules={[
                            {
                                required: true,
                                message: 'please enter your Home adress'
                            }
                        ]}>
                        <Input placeholder='Home adress' />

                    </Form.Item>
                    <Form.Item
                        name='officeAdress'
                        rules={[
                            {
                                required: true,
                                message: 'enter your Office adress'
                            }
                        ]}>

                        <Input placeholder='Office adress' />

                    </Form.Item>
                    <Form.Item>
                        <Button
                            style={{
                                width: '422px',
                                height: '64px',
                                backgroundColor: 'green',
                                marginLeft: "20px",
                                marginTop: '10px',
                                borderRadius: '10px'
                            }}
                            htmlType="submit"
                        >Submit</Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div >
    )
}
export default CreateModal
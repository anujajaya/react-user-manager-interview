import React from 'react'
import { Modal, Form, Input, Button } from 'antd'
const CreateModalDelete = ({ showModal, handeCancel, handelOk }) => {
    return (
        <div>
            <Modal
                title="delete user"
                visible={showModal}
                onOk={handelOk}
                onCancel={handeCancel}
                footer={null}
            >
                <Form>
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username',
                            },
                        ]}>
                        <Input placeholder='Name(pre populated)' />

                    </Form.Item>
                    <Form.Item
                        name="Email id"
                        rules={[{
                            required: true,
                            massage: 'please input your email'
                        }]}>
                        <Input placeholder='Email id(pre populated)' />

                    </Form.Item>
                    <Form.Item
                        name="Mobile number"
                        rules={[
                            {
                                required: true,
                                message: 'please input your mobile number'
                            }
                        ]}>
                        <Input placeholder='Mobile number(pre populated)' />

                    </Form.Item>
                    <Form.Item
                        name='Home adress'
                        rules={[
                            {
                                required: true,
                                message: 'please enter your Home adress'
                            }
                        ]}>
                        <Input placeholder='Home adress(pre populated)' />

                    </Form.Item>
                    <Form.Item
                        name='Office adress'
                        rules={[
                            {
                                required: true,
                                message: 'enter your Office adress'
                            }
                        ]}>

                        <Input placeholder='Office adress(pre populated)' />

                    </Form.Item>
                    <Form.Item>
                        <Button style={{
                            width: '422px', height: '64px', backgroundColor: 'red',
                            marginLeft: "20px", marginTop: '10px', borderRadius: '10px'
                        }}
                        >Delete</Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div >
    )
}
export default CreateModalDelete;
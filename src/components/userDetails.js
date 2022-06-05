import React from 'react'
import { Table, Button } from 'antd'
import CreateModal from './createModal'
import CreateModalDelete from './createmodaldelete'
import { useState } from 'react'
import axios from 'axios'
import Header from './heder'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { adduser } from '../slice/userslice'

const columns = [
  {
    title: 'Name',
    dataIndex: 'userName',
    key: 'name',
    render: (text) => <span>{text}</span>
  },
  {
    title: 'Email Id',
    dataIndex: 'emailId',
    key: 'emailid',
  },
  {
    title: 'Mobile Number',
    dataIndex: 'mobileNumber',
    key: 'mobilenumber',
  },
  {
    title: 'Home Adress',
    dataIndex: 'homeAdress',
    key: 'homeadress',
  },
  {
    title: 'Office Adress',
    dataIndex: 'officeAdress',
    key: 'officeadress',
  }]
const data = [
  {
    name: "rk",
    emailid: "scbnjdbjk",
    mobilenumber: 1234567890,
    homeaddress: "dkcnkdcn",
    officeaddress: "sjbvhsjcvhj"
  }
]

const UserDetails = () => {
  const [createModalVisible, setCreateModalVisible] = useState(false)
  const [createModalDelete, setCreateModalDelete] = useState(false)
  const dispatch = useDispatch()
  const state = useSelector((state) => {
    return state
  })
  const [userDetails, setUserDetails] = useState()


  const netWorkCall = async () => {
    await axios.post('http://localhost:8080/users/finduser', {
      // signal: controller.signal
    }).then((response) => {
      console.log("hihihihihihihih", response)
      const { data } = response
      dispatch(adduser(data))
    })

  }
  useEffect(() => {
    // const controller = new AbortController()
    console.log("hahahahahaha")
    netWorkCall()
    // return () => {
    //   controller.abort()
    // }
  }, [])
  useEffect(() => {
    let { user } = state
    let { userArray } = user
    console.log(userArray)
    userArray && userArray.length > 0 ? setUserDetails(userArray) : setUserDetails('')
  }, [state])

  const saveUserInDB = async (values) => {
    await axios.post('http://localhost:8080/users/create', { ...values }).then(async (response) => {
      console.log("hihihihihihihih", response)
      netWorkCall()
      setCreateModalVisible(false)
    }).catch(err => {
      console.log(err)
    })
  }
  return (
    <div>
      <Header />
      <div style={{
        display: 'flex',
        justifyContent: 'end',
        marginRight: '70px',
        width: '100%',
        margin: '0px auto',
        marginTop: '128px',
        marginBottom: '75px'
      }}>

        <Button style={{
          width: '115px',
          height: '46px',
          border: 'none',
          backgroundColor: 'red',
          borderRadius: '5px'
        }}
          onClick={() => { setCreateModalDelete(true) }}
        >Delete Record</Button>
        <Button
          style={{
            width: '97px',
            height: '46px',
            border: 'none',
            backgroundColor: 'green',
            marginLeft: '20px', borderRadius: '5px'
          }}
          onClick={() => setCreateModalVisible(true)}
        >Add New</Button>
      </div>
      <Table
        columns={columns}
        dataSource={userDetails}
        style={{ width: '1700px', margin: '0px auto' }}
      >
      </Table>
      <CreateModal
        isModalVisible={createModalVisible}
        handleCancel={() => { setCreateModalVisible(false) }}
        handleOk={saveUserInDB}
      />
      <CreateModalDelete
        showModal={createModalDelete}
        handeCancel={() => { setCreateModalDelete(false) }} />
    </div>
  )
}
export default UserDetails;
import style from '../Registr/Registr.module.css';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space, Avatar, Button } from 'antd';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { searchUserByEmail } from '../../helpers/searchUserByEmail';
import updateUserStatus from '../../helpers/updateUserStatus';
import { useEffect } from 'react';
const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);

export default function AdminPanel() {
  const [findUser, setFindUser] = useState({email: '', status: ''});
  const [notFindUser, setNotFindUser] = useState(false);
  const [okFindUser, setOkFindUser] = useState(false);
  const [newStatus, setNewStatus] = useState();
  const [updateResult, setUpdateResult] = useState();

  const onSearch = async (value) => {
    const result = await searchUserByEmail(value);
    if (result === 'NO') {
      setNotFindUser(true);
      setTimeout(() => {
        setNotFindUser(false);
      }, 3000);
    } else {
      setFindUser(result);
      setOkFindUser(true);
    }
  };

  useEffect(() => {
  }, [findUser])

  const saveStatusHandler = async () => {
    const resultUpdate = await updateUserStatus(newStatus);
    if (resultUpdate.result === 'success') {
      setFindUser({...findUser, status: resultUpdate.newStatus })      
      setUpdateResult(resultUpdate.result);
    } else {
      setUpdateResult('error');
    }
  };

  const updateStatusHandler = async (event) => {
    const newStatus = event.target.value;
    const email = findUser.email;
    setNewStatus({ newStatus, email });
  };
  
  console.log('newStatus: ', newStatus);
  return (
    <div>
      <div>
        <div>Enter email:</div>
        <Space direction="vertical">
          <Search
            placeholder="input search text"
            allowClear
            enterButton="Search"
            size="large"
            onSearch={onSearch}
          />
        </Space>
        {notFindUser ? <div>User not found</div> : null}
        {okFindUser ? (
          <>
            <div>Текущий статус: {findUser.status}</div>
            <div style={{ display: 'flex', marginTop: '10px' }}>
              <Avatar
                style={{
                  backgroundColor: '#b700ff',
                }}
              >
                {/* {findUser.login[0].toUpperCase()} */}
              </Avatar>
              <div style={{ margin: '5px', fontSize: '20px' }}>
                {/* {findUser.login} */}
              </div>
            </div>
            <div>
              <div>
                <select onChange={updateStatusHandler} name="tag1" id="cars">
                  <option>Choose a new role</option>
                  <option value="buyer">Buyer</option>
                  <option value="seller">Seller</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
              {setUpdateResult ? <div>{updateResult}</div> : null}
              <Button
                className={style.btnReg}
                onClick={saveStatusHandler}
                style={{ width: '300px', height: '40px' }}
                type="primary"
                shape="round"
                htmlType="submit"
              >
                Save
              </Button>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}

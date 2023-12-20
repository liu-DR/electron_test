import React from "react";
import { Input, Button } from 'antd';
import image from '../../common/images/桜の季節.png'
import styles from './index.less'


const Login = () => {

    return (
        <div className={styles.loginContent}>
            <img src={image} alt="" />
            <div className="ipt-con">
                <Input placeholder="账号" />
            </div>
            <div className="ipt-con">
                <Input.Password placeholder="密码" />
            </div>
            <div className="ipt-con">
                <Button type="primary" block={true}>
                    登录
                </Button>
            </div>
        </div>
    )
}

export default Login
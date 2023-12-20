import React from 'react';
import ReactDOM from 'react-dom/client';
import './common/styles/frame.less'
import { ConfigProvider } from 'antd'
// 引入Ant Design中文语言包
import zhCN from 'antd/locale/zh_CN'

import Login from '../src/pages/login/Login'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<ConfigProvider locale={zhCN}>
			<Login />
		</ConfigProvider>
	</React.StrictMode>
);
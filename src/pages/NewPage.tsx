import React from 'react';
import { Card, Typography, Alert } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { FormattedMessage } from 'umi-plugin-react/locale';

export default (): React.ReactNode => (
  <PageHeaderWrapper>
    <Card>
      <Alert
        message="umi ui 现已发布，欢迎使用 npm run ui 启动体验。"
        type="success"
        showIcon
        banner
        style={{
          margin: -12,
          marginBottom: 24,
        }}
      />
      <Typography.Text strong>
        <a target="_blank" rel="noopener noreferrer" href="https://pro.ant.design/docs/block">
          <FormattedMessage
            id="app.welcome.link.block-list"
            defaultMessage="基于 block 开发，快速构建标准页面"
          />
        </a>
      </Typography.Text>

      <Typography.Text
        strong
        style={{
          marginBottom: 12,
        }}
      >
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://pro.ant.design/docs/available-script#npm-run-fetchblocks"
        >
          <FormattedMessage id="app.welcome.link.fetch-blocks" defaultMessage="获取全部区块" />
        </a>
      </Typography.Text>

    </Card>
    <p style={{ textAlign: 'center', marginTop: 24 }}>
      Want to add more pages? Please refer to{' '}
      <a href="https://pro.ant.design/docs/block-cn" target="_blank" rel="noopener noreferrer">
        use block
      </a>
      。
    </p>
  </PageHeaderWrapper>
);

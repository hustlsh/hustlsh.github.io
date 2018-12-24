import React from 'react';
import Layout from './layout';

export default function Error(props) {
  const { error: { status, stack }, content, message, ...layout } = props;
  return (
    <Layout {...layout}>
      <p>{content}</p>
      <h1>{message}</h1>
      <h2>{status}</h2>
      <p>{stack}</p>
    </Layout>
  );
}

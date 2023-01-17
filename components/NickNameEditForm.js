import React from 'react';
import { Form, Input } from 'antd';
import styled from 'styled-components';

styled.

const NickNameEditForm = () => {
  return (
    <Form>
      <Input.Search addonBefore="닉네임" enterButton="수정" />
    </Form>
  )
}

export default NickNameEditForm
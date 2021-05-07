import {Layout, Row, Col, Button, Typography, Divider} from "antd";
import {useState} from "react";
import React from 'react';

function App() {
  const {Content} = Layout
    const {Paragraph} = Typography
    const [lang, setLang] = useState('ru')
  return (
      <Layout>
        <Content style = {{padding: '27px'}}>
            <Row>
                <Col flex={'none'}>
                    <Button type="primary" disabled={lang === 'ru'} onClick={() => setLang('ru')}>Русский</Button>
                </Col>
                <Col flex={'none'}>
                    <Button type="danger" disabled={lang === 'en'} onClick={() => setLang('en')}>Английский</Button>
                </Col>
            </Row>
            <Divider></Divider>
            <Row>
                <Col span={1}></Col>
                <Col span={23}><Paragraph>{lang === 'ru' ? 'Привет мир' : 'Hello World'}</Paragraph></Col>
            </Row>
        </Content>
      </Layout>
  );
}

export default App;

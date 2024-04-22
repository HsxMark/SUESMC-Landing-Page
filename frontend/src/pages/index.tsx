import { useContext } from "react";
import Head from "next/head";
import Image from 'next/image';
import { FloatButton, Grid, Layout, Space, Typography } from "antd";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import BasicCard from "@/components/basic-card";
import ThemeContext from '@/contexts/theme';
import BgLight from '../../assets/bg-light.png';
import BgDark from '../../assets/bg-dark.png';

const { useBreakpoint } = Grid;
const { Header, Footer, Content } = Layout;
const { Title } = Typography;

export default function HomePage() {

  const screens = useBreakpoint();
  const themeCtx = useContext(ThemeContext);

  return (
    <>
      <Head>
        <title>SJMC Landing Page</title>
      </Head>
      <Layout className="main-layout">
        <Header className="layout-header">
          <Image src={themeCtx.userTheme === 'light' ? BgLight : BgDark} 
            alt="Background" unoptimized layout="fill" objectFit="cover"
          />
        </Header>
        <Content className="layout-content">
          <Space direction="vertical" style={{width: '100%'}} size="large">
            <div className="home-title">
              <Title className="home-title" level={2}>标题</Title>
            </div>
            <BasicCard link="" title="Test Card" subtitle="测试测试测试测试"></BasicCard>
            <BasicCard link="" title="Test Card" subtitle="测试测试测试测试"></BasicCard>
            <BasicCard link="" title="Test Card" subtitle="测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试"></BasicCard>
            <BasicCard link="" title="Test Card" subtitle="测试测试测试测试"></BasicCard>
          </Space>
        </Content>
        <Footer className="layout-footer">
            上海交通大学 Minecraft 社 | 沪ICP备05052060号-7
        </Footer>
      </Layout>
      <FloatButton
        shape="square"
        style={{ right: 24 }}
        onClick={() => {themeCtx.changeTheme(themeCtx.userTheme === 'light' ? 'dark' : 'light')}}
        icon = {themeCtx.userTheme === 'light' ? <MoonOutlined /> : <SunOutlined />}
      />
    </>
  );
}

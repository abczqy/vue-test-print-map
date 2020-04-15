<template>
  <div id="app">
    <Layout style="height: 100vh">
      <Sider style="max-height: 100vh; overflow: auto">
        <SelfMenu />
      </Sider>
      <Layout>
        <Header style="height: 50px">vue test</Header>
        <Content style="height: calc(100vh - 50px)">
          <router-view></router-view>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>

<script>
import { Layout } from "ant-design-vue";
import SelfMenu from "./components/sider";
const { Header, Sider, Content } = Layout;
export default {
  name: "App",
  components: {
    Layout,
    Header,
    Sider,
    Content,
    SelfMenu
  }
};
</script>

<style lang="less">
html, body {
  font-size: 14px;
  font-family: '微软雅黑', 'microsoft-yahei', sans-serif;
}  
</style>

<template>
  <Menu
    theme="dark"
    mode="inline"
    @click="chooseItem"
    @openChange="openChange"
    :openKeys.sync="openKeys"
    :selectedKeys="selectedKeys"
  >
    <template v-for="o in routes">
      <Item v-if="!o.children" :key="o.path">{{ o.name }}</Item>
      <SubMenu v-else :key="o.path" :title="o.name">
        <template v-for="item in o.children">
          <Children :key="item.path" :itemKey="item.path" :menuItem="item"></Children>
        </template>
      </SubMenu>
    </template>
  </Menu>
</template>

<script>
import { Menu } from "ant-design-vue";
import Children from "./children";
import routes from "@/routes";

const { Item, SubMenu } = Menu;

export default {
  name: "selfMenu",
  components: {
    Menu,
    Children,
    Item,
    SubMenu
  },
  data() {
    return {
      openKeys: [],
      selectedKeys: []
    };
  },
  computed: {
    routes() {
      return routes.filter(route => route.name);
    }
  },
  methods: {
    chooseItem(o) {
      this.openKeys = o.keyPath;
      this.selectedKeys = [o.key];
      const route = o.keyPath.reverse().join("/");
      if (route !== this.$route.path) {
        this.$router.push(route);
      }
    },
    openChange(openKeys) {
      this.openKeys = openKeys;
    },
    init() {
      let route = this.$route.path.split("/").filter(i => i);
      route[0] = `/${route[0]}`;
      this.selectedKeys = [route[route.length - 1]];
      this.openKeys = route;
    }
  },
  mounted() {
    setTimeout(this.init, 100);
  }
};
</script>
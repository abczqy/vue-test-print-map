<template functional>
  <SubMenu :key="props.itemKey" v-if="props.menuItem.children" :title="props.menuItem.name">
    <template v-for="o in props.menuItem.children">
      <Children :key="o.path" :itemKey="o.path" :menuItem="o"></Children>
    </template>
  </SubMenu>
  <Item v-else :key="props.itemKey">{{ props.menuItem.name }}</Item>
</template>

<script>
import { Menu } from "ant-design-vue";
const { SubMenu, Item } = Menu;
export default {
  name: "Children",
  components: {
    SubMenu,
    Item
  },
  props: {
    menuItem: Object,
    itemKey: String
  }
};
</script>
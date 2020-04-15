<template>
  <div class="config-wrapper">
    <header>通用配置</header>
    <Item>
      <span slot="label">字体大小：</span>
      <Select slot="content" v-model="config['font-size']" :options="fontSize" @change="value => changeConfig('font-size', value)" :dropdownMatchSelectWidth="false" />
    </Item>
    <Item>
      <span slot="label">字体粗细：</span>
      <ButtonGroup slot="content">
        <Button @click="changeConfig('font-weight', 'bold')" :type="config['font-weight'] === 'bold' ? 'primary' : 'default'">粗体</Button>
        <Button @click="changeConfig('font-weight', 'normal')" :type="config['font-weight'] === 'normal' ? 'primary' : 'default'">正常</Button>
        <Button @click="changeConfig('font-weight', 'lighter')" :type="config['font-weight'] === 'lighter' ? 'primary' : 'default'">细体</Button>
      </ButtonGroup>
    </Item>
    <Item>
      <span slot="label">字体颜色：</span>
      <div slot="content">
        <Input v-model="config.color" @change="e => changeConfig('color', e.target.value)" />
      </div>
    </Item>
  </div>
</template>

<script>
import { Input, Select, Button } from 'ant-design-vue'
import Item from '@/components/item'
export default {
  name: 'common',
  components: {
    Input,
    Select,
    Button,
    ButtonGroup: Button.Group,
    Item
  },
  data() {
    return {
      fontSize: [
        { label: 12, value: '12pt', key: 1 },
        { label: 14, value: '14pt', key: 2 },
        { label: 16, value: '16pt', key: 3 },
        { label: 18, value: '18pt', key: 4 },
        { label: 20, value: '20pt', key: 5 },
        { label: 22, value: '22pt', key: 6 },
        { label: 24, value: '24pt', key: 7 },
        { label: 26, value: '26pt', key: 8 },
        { label: 28, value: '28pt', key: 9 },
        { label: 30, value: '30pt', key: 10 }
      ]
    }
  },
  props: {
    config: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    changeConfig(name, value) {
      this.$emit('changeCommon', name, value)
    }
  }
}
</script>

<style lang="less">
.config-wrapper {
  width: 95%;
  padding: 10px;
  margin: 10px auto;
  background: #fff;
  border-radius: 10px;
  border: 1px solid #f4f4f4;
  header {
    font-size: 16px;
    color: #333;
    margin-bottom: 15px;
  }
  .item {
    font-size: 14px;
    color: #333;
    padding: 10px 0;
  }
}
</style>
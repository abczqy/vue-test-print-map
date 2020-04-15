<template>
  <div class="config-wrapper">
    <header>其他配置</header>
    <div v-for="(item, index) in data.cont" :key="index">
      <Item>
        <span slot="label">参数{{ index + 1 }}名称：</span>
        <Input slot="content" v-model="item.name" @change="e => changeValue(e.target.value, 'name', index)" />
      </Item>
       <Item>
        <span slot="label">参数{{ index + 1 }}值：</span>
        <Input slot="content" v-model="item.value" @change="e => changeValue(e.target.value, 'value', index)" />
      </Item>
    </div>
  </div>
</template>

<script>
import Item from '@/components/item'
import { Input } from 'ant-design-vue'
export default {
  name: 'rowConfig',
  components: {
    Item,
    Input
  },
  props: {
    data: Object
  },
  methods: {
    changeValue(value, name, index) {
      const o = this.data.cont
      console.log(o)
      o[index][name] = value
      this.$emit('changeCont', 'cont', o)
    }
  }
}
</script>
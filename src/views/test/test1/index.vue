<template>
  <div class="test1">
    <section class="section-left">
      <Button type='primary' @click="add('row', { span: 2, cont: [{name: '', value:''}, {name: '', value: ''}] })">添加一行两列</Button>
      <br>
      <Button type='primary' v-print="'#printCont'">打印</Button>
    </section>
    <section class="section-center" id="printCont">
      <div @click="changeChoose(item.id)" :class="{'section-item': true, 'choose-item': id === item.id}" :key="i" v-for="(item, i) in list">
        <Cont :data="item" />
      </div>
    </section>
    <section class="section-right">
      <Config />
    </section>
  </div>
</template>

<script>
import { Button } from "ant-design-vue";
import Config from './components/config';
import Cont from './components/cont';
import { createNamespacedHelpers } from 'vuex'

const { mapGetters, mapActions } = createNamespacedHelpers('print')

const defaultCommonCss = {
  'font-size': '14pt',
  'color': '#333',
  'font-weight': 'normal'
}

export default {
  name: "test1",
  components: {
    Button,
    Cont,
    Config
  },
  data() {
    return {
      index: 0
    }
  },
  computed: {
    ...mapGetters(['list', 'id'])
  },
  methods: {
    ...mapActions(['changeChoose', 'insertData']),
    add(type, conf) {
      switch (type) {
      case 'row':
        this.insertData({
          type: 'row',
          data: conf,
          config: {
            common: defaultCommonCss
          },
          id: this.index
        })
        this.index++
      }
    }
  }
};
</script>

<style lang="less" scoped>
.test1 {
  display: flex;
  height: 100%;

  .section-left {
    flex: 2
  }

  .section-right {
    flex: 3;
  }

  .section-center {
    flex: 6;
    background: #fff;

    .section-item {
      padding: 5px 10px;
      border: 1px dashed #e4e4e4;
    }

    .choose-item {
      border: 1px solid red;
    }
  }
}
</style>
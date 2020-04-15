<template>
  <div :style="css" style="line-height: 1.5cm;min-height: 1.5cm">
    <Row :gutter="24">
      <template v-for="(item, index) in data.cont">
        <Col :span="24 / data.span" :key="index">
          {{ item.name }}  {{ item.value }}
        </Col>
      </template>
    </Row>
  </div>
</template>

<script>
import { Row, Col } from "ant-design-vue";

export default {
  name: "row",
  components: {
    Row,
    Col
  },
  props: {
    data: {
      type: Object,
      default: () => {
        return {
          span: 2,
          cont: []
        }
      }
    },
    css: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>
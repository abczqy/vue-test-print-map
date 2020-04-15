<template>
  <div>
    <Common v-if="common" :config="common" @changeCommon="changeCommon" />
    <RowConfig :data="data.data" v-if="data.type === 'row'" @changeCont="changeCont" />
  </div>
</template>

<script>
import Common from './common'
import RowConfig from './rowConfig'
import { createNamespacedHelpers } from 'vuex'
const { mapGetters, mapActions } = createNamespacedHelpers('print')

export default {
  name: 'config',
  components: {
    Common,
    RowConfig
  },
  computed: {
    ...mapGetters(['data']),
    common() {
      return this.data.config ? this.data.config.common : undefined
    }
  },
  methods: {
    ...mapActions(['changeConfig', 'changeData']),
    changeCommon(name, value) {
      this.changeConfig({
        name: 'common',
        data: {
          [name]: value
        }
      })
    },
    changeCont(name, value) {
      this.changeData({
        [name]: value
      })
    }
  }
}
</script>
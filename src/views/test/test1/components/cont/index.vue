<script>
import selfRow from './row'
export default {
  functional: true,
  name: 'cont',
  props: {
    data: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },
  render: function(createElement, context) {
    function get() {
      const data = context.props.data
      switch(data.type) {
      case 'row':
        return selfRow
      default:
        return ''
      }
    }
    return createElement(
      get(),
      {
        props: {
          data: context.props.data.data,
          css: context.props.data.config.common
        }
      },
      context.slots().default
    )
  }
}
</script>
export { default as Accordion } from '../../components/Accordion.vue'
export { default as AccordionItem } from '../../components/AccordionItem.vue'
export { default as ColumnList } from '../../components/ColumnList.vue'
export { default as NuxtLogo } from '../../components/NuxtLogo.vue'
export { default as Radio } from '../../components/Radio.vue'
export { default as RadioGroup } from '../../components/RadioGroup.vue'
export { default as SelectBrand } from '../../components/SelectBrand.vue'
export { default as Tutorial } from '../../components/Tutorial.vue'
export { default as PubTeacherList } from '../../components/pub/TeacherList.vue'
export { default as PubTeacherView } from '../../components/pub/TeacherView.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}

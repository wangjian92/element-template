<template>
  <section>
    <el-radio-group v-model="menuPosition" size="small" @change="changeTheme(menuPosition)">
      <el-radio-button label="left">Left</el-radio-button>
      <el-radio-button label="top">Top</el-radio-button>
    </el-radio-group>
  </section>
</template>
<script>
export default {
  data () {
    return {
      menuPosition: 'left'
    }
  },
  methods: {
    changeTheme (theme) {
      this.$store.commit('setLayout', theme)
    }
  },
  mounted () {}
}
</script>

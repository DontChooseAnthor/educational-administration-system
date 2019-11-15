<template>
  <div class="main">
      <appLink v-show="$route.path !== '/home'"></appLink>
    <router-view></router-view>
  </div>
</template>

<script>
import appLink from './appLink'
export default {
  name:'appMain',
  components:{appLink}
}
</script>

<style lang="scss" scoped>
  .main[data-v-005bfc5a]{
    padding: 0;
  }
</style>
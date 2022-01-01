<template>
  <div class="bg" @click="this.$root.leftbar();" :class="{close: this.$parent.isCloseLeftBar}">
  </div>
</template>

<script>
</script>

<style scoped>
  .bg:not(.close) {
    top: 0px;
    transition: 0.5s;
    height: 100%;
    width: 100%;
    position: fixed;
    background: rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }
  @media (min-width: 750px){
    .bg {
      display: none;
    }
  }
</style>

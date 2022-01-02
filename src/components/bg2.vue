<template>
  <div class="bg2" @click="this.$root.rightbar();" :class="{close: this.$parent.isCloseRightBar}">
  </div>
</template>

<script>
</script>

<style scoped>
  .bg2:not(.close) {
    top: 0px;
    transition: 0.5s;
    height: 100%;
    width: 100%;
    position: fixed;
    background: rgba(0, 0, 0, 0.3);
    cursor: pointer;
    z-index: 6;
  }
  @media (min-width: 1500px){
    .bg2 {
      display: none;
    }
  }
</style>

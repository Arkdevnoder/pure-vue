<template>
  <div class="rightbar" :class="{close: this.$root.isCloseRightBar}">
    <div class="rightbar-uppings"></div>
  </div>
</template>

<script>
</script>

<style scoped>
  .rightbar-uppings {
    width: 100%;
    height: 45px;
  }
  .rightbar {
    transition: 0.3s;
    position: fixed;
    width: 400px;
    height: 100%;
    top: 0px;
    right: 0px;
    z-index: 3;
    background: #eeeeee;
  }
  .rightbar.close {
    transform: translateX(400px);
  }
  @media (max-width:  1500px){
    .rightbar {
      z-index: 7;
    }
  }
</style>

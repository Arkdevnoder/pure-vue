<template>
  <div class="navbar">
    <div class="logo-lefting" :class="{close: isCloseLeftBar}"></div>
    <div class="navbar__menu" @click="leftbar();">
      <i class="bi bi-list"></i>
    </div>
  </div>
  <div class="leftbar" :class="{close: isCloseLeftBar}">
    <div class="logo">
    </div>
  </div>
  <div class="content" :class="{close: isCloseLeftBar}">
    123
  </div>
  <div class="footer">
  </div>
  <div class="bg" @click="leftbar();" :class="{close: isCloseLeftBar}">
  </div>
</template>
<style>
  html, body, #app, .content, .content-lefting {
    height:  100%;
  }
  .content {
    box-sizing: border-box;
    padding-top: 45px;
    padding-left: 200px;
    transition: 0.5s;
  }
  body {
    margin: 0px;
  }
  .navbar {
    position: fixed;
    height: 45px;
    width: 100%;
    background: #0F4FA8;
  }
  .navbar__menu {
    position: relative;
    height: 45px;
    width: 45px;
    text-align: center;
    line-height: 45px;
    color: white;
    float: left;
    display: block;
    font-size: 20px;
    cursor: pointer;
  }
  .navbar__menu:hover {
    background: rgba(0, 0, 0, 0.1);
  }
  .leftbar {
    height: 100%;
    width: 200px;
    position: fixed;
    background: #284C7E;
    left: 0px;
    top: 0px;
    display: block;
    transition: 0.5s;
    z-index: 4;
  }
  .logo {
    display: block;
    float: left;
    height: 45px;
    width: 200px;
    background: url(assets/logo.svg) no-repeat;
    background-size: cover;
    background-color: #193b7e;
    background-position: center;
    display: block;
    transition: 0.5s;
  }
  .close:not(.logo-lefting, .content, .bg) {
    transform: translateX(-200px);
  }
  .logo-lefting.close {
    width: 0px;
  }
  .logo-lefting.close {
    width: 0px;
  }
  .content.close {
    padding-left: 0px;
  }
  .close-lefting {
    width: 0px;
  }
  .logo-lefting {
    transition: 0.5s;
    height: 45px;
    width: 200px;
    float: left;
  }
  .bg:not(.close) {
    top: 0px;
    transition: 0.5s;
    height: 100%;
    width: 100%;
    position: fixed;
    background: rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }
  @media (max-width: 750px){
    .content {
      padding-left: 0px !important;
    }
    .logo-lefting {
      width: 0px;
    }
  }
  @media (min-width: 750px){
    .bg {
      display: none;
    }
  }
</style>
<script>
  export default {
    created(){
      if(window.innerWidth < 750){
        this.isCloseLeftBar = true;
      }
    },
    data () {
      return {
        tableData: [
        ],
        isCloseLeftBar: false
      }
    },
    methods: {
      leftbar(event) {
        this.isCloseLeftBar = !this.isCloseLeftBar;
      }
    }
  }
</script>
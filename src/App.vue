<template>
	<leftbar></leftbar>
	<div class="content" :class="{close: this.isCloseLeftBar, close2: this.isCloseRightBar}">
		<router-view></router-view>
	</div>
	<bg></bg>
	<bg2></bg2>
</template>
<style>
	html, body, #app, .content, .content-lefting {
		height:  100%;
	}
	body {
		margin: 0px;
		font-family: arial;
	}
	.close:not(
		.content,
		.logo-lefting,
		.bg,
		.bg2,
		.chat__input-inner.close
	) {
		transform: translateX(-300px);
	}
	.content {
		box-sizing: border-box;
		padding-left: 300px;
		padding-right: 400px;
		transition: 0.5s;
	}
	.content.close {
		padding-left: 0px;
	}
	.content.close2 {
		padding-right: 0px;
	}
	@media (max-width: 750px){
		.content {
			padding-left: 0px !important;
		}
	}
	@media (max-width: 1500px){
		.content {
			padding-right: 0px !important;
		}
	}
</style>
<script>
	import leftbar from './components/leftbar.vue';
	import bg from './components/bg.vue';
	import bg2 from './components/bg2.vue';

	export default {
		created(){
			if(window.innerWidth < 750){
				this.isCloseLeftBar = true;
			}
			if(window.innerWidth < 1500){
				this.isCloseRightBar = true;
			}
		},
		data () {
			return {
				isCloseLeftBar: false,
				isCloseRightBar: false
			}
		},
		methods: {
			leftbar() {
				this.isCloseLeftBar = !this.isCloseLeftBar;
			},
			rightbar(){
				this.isCloseRightBar = !this.isCloseRightBar;
				console.log(this.isCloseRightBar);
			},
			leftbarMobile() {
				if(window.innerWidth < 750){
					this.isCloseLeftBar = !this.isCloseLeftBar;
				}
			}
		},
		components: {
			leftbar,
			bg,
			bg2
		}
	}
</script>
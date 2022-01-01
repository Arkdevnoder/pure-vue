<template>
	<leftbar></leftbar>
	<div class="content" :class="{close: this.isCloseLeftBar}">
		<router-view></router-view>
	</div>
	<bg></bg>
</template>
<style>
	html, body, #app, .content, .content-lefting {
		height:  100%;
	}
	body {
		margin: 0px;
	}
	.close:not(.content, .logo-lefting, .bg) {
		transform: translateX(-200px);
	}
	.content {
		box-sizing: border-box;
		padding-left: 200px;
		transition: 0.5s;
	}
	.content.close {
		padding-left: 0px;
	}
	@media (max-width: 750px){
		.content {
			padding-left: 0px !important;
		}
	}
</style>
<script>
	import leftbar from './components/leftbar.vue';
	import bg from './components/bg.vue';

	export default {
		created(){
			if(window.innerWidth < 750){
				this.isCloseLeftBar = true;
			}
		},
		data () {
			return {
				isCloseLeftBar: false
			}
		},
		methods: {
			leftbar() {
				this.isCloseLeftBar = !this.isCloseLeftBar;
			},
			leftbarMobile() {
				if(window.innerWidth < 750){
					this.isCloseLeftBar = !this.isCloseLeftBar;
				}
			}
		},
		components: {
			leftbar,
			bg
		}
	}
</script>
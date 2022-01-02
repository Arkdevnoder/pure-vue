<template>
	<navbar>
		<navbarRightbar></navbarRightbar>
	</navbar>
	<rightbar></rightbar>
	<div class="chat">
		<div class="chat__input">
			<div class="chat__left-bottom" :class="{hide: this.$root.isCloseLeftBar}"></div>
			<div class="chat__input-inner">
				<div class="chat__input-align">
					<div class="chat__input-action">
						<i class="bi bi-paperclip"></i>
					</div>
					<textarea class="chat__input-text"></textarea>
				</div>
			</div>
			<div class="chat__right-bottom" :class="{hide: this.$root.isCloseRightBar}"></div>
		</div>
	</div>
</template>
<style>
	.hide {
		width: 0px !important;
	}
	.chat * {
		transition: 0.3s;
	}
	.chat__input-align {
		margin: 0px auto;
		width: 100%;
		max-width: 750px;
		height: 100%;
	}
	.chat__input {
		position: fixed;
		bottom: 0px;
		height: 45px;
		width: 100%;
		border-top: 2px solid #eee;
		left: 0px;
		display: flex;
		justify-content: center;
		transition: 0.3s;
	}
	.chat__left-bottom {
		height: 100%;
		width: 300px;
	}
	.chat__right-bottom {
		height: 100%;
		width: 400px;
	}
	.chat__input-inner {
		height: 100%;
		width: calc(100% - 700px);
	}
	.chat__input-action {
		float: left;
		height: 45px;
		width: 45px;
		text-align: center;
		font-size: 25px;
		line-height: 45px;
		color: #557;
	}
	.chat__input-text {
		height: calc(100% - 7.9px);
		width: calc(100% - 95px);
		float: left;
	}
	@media (max-width: 1500px){
		.chat__right-bottom {
			display: none;
		}
		.chat__input-inner {
			width: calc(100% - 300px);
		}
	}
	@media (max-width: 750px){
		.chat__left-bottom {
			display: none;
		}
		.chat__input-inner {
			width: 100%;
		}
	}
</style>
<script>
	import navbar from '../components/navbar.vue';
	import rightbar from '../components/rightbar.vue';
	import navbarRightbar from '../components/navbarRightbar.vue';
	export default {
		components: {
			navbar,
			rightbar,
			navbarRightbar
		}
	}
</script>
<template>
	<div class="navbar__rightbar" @click="this.$root.rightbar">
		<i class="bi bi-grid"></i>
	</div>
</template>
<style>
	.navbar__rightbar {
		display: block;
		transition: 0.3s;
		height: 45px;
		width: 45px;
		color:  white;
		float: right;
		text-align: center;
		line-height: 45px;
		cursor:  pointer;
	}
	.navbar__rightbar:hover {
		background: rgba(0, 0, 0, 0.1);
	}
</style>
<script>
	export default {
		methods: {

		}
	}
</script>
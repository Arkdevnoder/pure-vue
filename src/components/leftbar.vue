<template>
	<div class="leftbar" :class="{close: this.$parent.isCloseLeftBar}">
		<router-link to="/" @click="this.$root.leftbarMobile();">
			<div class="logo">
			</div>
		</router-link>
		<router-link to="/test" @click="this.$root.leftbarMobile();">Link</router-link>
	</div>
</template>

<script>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
		background: url(../assets/logo.svg) no-repeat;
		background-size: cover;
		background-color: #193b7e;
		background-position: center;
		display: block;
		transition: 0.5s;
	}
</style>

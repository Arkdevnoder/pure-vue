<template>
	<div class="navbar">
		<div class="logo-lefting" :class="{close: this.$root.isCloseLeftBar}"></div>
		<div class="navbar__menu" @click="this.$root.leftbar();">
			<i class="bi bi-list"></i>
		</div>
	</div>
	<div class="navbar-static-distance"></div>
</template>

<style scoped>
.navbar {
	top: 0px;
	left: 0px;
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
.logo-lefting.close {
	width: 0px;
}
.logo-lefting.close {
	width: 0px;
}
.logo-lefting {
	transition: 0.5s;
	height: 45px;
	width: 300px;
	float: left;
}
.navbar-static-distance {
	width: 100%;
	height: 45px;
}
@media (max-width: 750px){
	.logo-lefting {
		width: 0px;
	}
}

</style>

<script>
</script>
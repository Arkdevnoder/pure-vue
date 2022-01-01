<template>
	<div class="leftbar" :class="{close: this.$parent.isCloseLeftBar}">
		<router-link to="/" @click="this.$root.leftbarMobile();">
			<div class="logo">
			</div>
		</router-link>
		<div class="logo-uppings"></div>
		<div class="account-info">
			<div class="account-info__inner">
				<div class="account-info__avatar">
					<div class="account-info__avatar-image">
						<i class="bi bi-person"></i>
					</div>
				</div>
				<div class="avatar-info__text">
					<div class="avatar-info__text-inner">
						<div class="avatar-info__em">
							<div>
								Name surname
							</div>
							<div class="avatar-info__top">
								Arkcoins: 0
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="links-collection">
			<div class="links-collection__em" data-route="main">
				Игровой мир
			</div>
			<div class="links-collection__em" data-route="exchange">
				Валютный обменник
			</div>
			<div class="links-collection__em" data-route="crowdfunding">
				Краудфандинговая платформа
			</div>
			<div class="links-collection__em" data-route="news">
				Новости системы
			</div>
		</div>
		<router-link to="/test" @click="this.$root.leftbarMobile();">Link</router-link>
	</div>
</template>

<script>
	export default {
		created(){
			console.log(this.$route.path);
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.leftbar {
		height: 100%;
		width: 300px;
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
		width: 300px;
		background: url(../assets/logo.svg) no-repeat;
		background-size: 150px 100px;
		background-color: #193b7e;
		background-position: center;
		display: block;
		transition: 0.5s;
	}
	.account-info {
		width: 100%;
		height: 120px;
		box-sizing: border-box;
		padding: 10px;
	}
	.account-info__inner {
		width: 100%;
		height: 100%;
		background: #0F4FA9;
		border-radius: 5px;
	}
	.logo-uppings {
		width: 100%;
		height: 45px;
	}
	.account-info__avatar {
		height: 100px;
		width: 100px;
		float: left;
		box-sizing: border-box;
		padding: 15px;
	}
	.account-info__avatar-image {
		height: 100%;
		width: 100%;
		border-radius: 50%;
		background: #284C7E;
		font-size: 30px;
		color: #7299d1;
		text-align: center;
	}
	.account-info__avatar-image > i {
		line-height: 74px;
	}
	.avatar-info__text {
		float: left;
		height: 100%;
		width: calc(100% - 100px);
	}
	.avatar-info__text-inner {
		height: 100%;
		width: 100%;
		display: table;
	}
	.avatar-info__em {
		width: 100%;
		vertical-align: middle;
		display: table-cell;
		color: #ddd;
		font-weight: 700;
		font-size: 14px;
	}
	.avatar-info__top {
		margin-top: 12px;
		font-weight: 500;
	}
	.links-collection {
		display: block;
	}
	.links-collection__em {
		height: 45px;
		width: 100%;
		color: #b8c7ce;
		line-height: 45px;
		box-sizing: border-box;
		padding-left: 15px;
		padding-right: 15px;
	}
	.links-collection__em:hover {
		cursor: pointer;
		background: rgba(0, 0, 0, 0.05);
	}
</style>

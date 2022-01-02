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
			<router-link to="/">
				<div class="links-collection__em" :class="{active: this.main}">
					Игровой мир
				</div>
			</router-link>
			<router-link to="/swaps">
				<div class="links-collection__em" :class="{active: this.swaps}">
					Валютный обменник
				</div>
			</router-link>
			<router-link to="/crowdfunding">
				<div class="links-collection__em" :class="{active: this.crowdfunding}">
					Краудфандинговая платформа
				</div>
			</router-link>
			<router-link to="/news">
				<div class="links-collection__em" :class="{active: this.news}">
					Новости системы
				</div>
			</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		watch: {
			'$route' (to) {
				var path = to.path.replace('/', '');
				path = (path == '') ? 'main' : path;
				console.log(path);
				this.disableLeftbar();
				this[path] = true;
			}
		},
		methods: {
			disableLeftbar(){
				this.main = false;
				this.swaps = false;
				this.crowdfunding = false;
				this.news = false;
			},
			replaceSlash(str){
				return str.replace('/', '');
			}
		},
		data(){
			return {
				main: false,
				swaps: false,
				crowdfunding: false,
				news: false
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	a {
		text-decoration: none;
	}
	.leftbar {
		height: 100%;
		width: 300px;
		position: fixed;
		background: #284C7E;
		left: 0px;
		top: 0px;
		display: block;
		transition: 0.5s;
		z-index: 5;
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
		display: block;
		transition: 0.1s;
		height: 45px;
		width: 100%;
		color: #b8c7ce;
		line-height: 45px;
		box-sizing: border-box;
		padding-left: 15px;
		padding-right: 15px;
		position: relative;
		font-size: 14px;
	}
	.links-collection__em:after {
		transition: 0.1s;
		top: 0px;
		left: 0px;
		content: '';
		height: 100%;
		width: 4px;
		position: absolute;
		background: transparent;
		transform: translateX(-4px);
		pointer-events: none;
	}
	.links-collection__em:hover {
		cursor: pointer;
		background: rgba(0, 0, 0, 0.05);
	}
	.links-collection__em.active {
		background: rgba(0, 0, 0, 0.05);
	}
	.links-collection__em.active:after {
		transition: 0.1s;
		top: 0px;
		left: 0px;
		content: '';
		height: 100%;
		width: 4px;
		transform: translateX(0px);
		position: absolute;
		background: #387bec;
		pointer-events: none;
	}
</style>

import { createRouter, createWebHistory } from 'vue-router';
import Main from '../views/Main.vue';
import 'bootstrap-icons/font/bootstrap-icons.css';

const routes = [
	{
		path: '/',
		name: 'Main',
		component: Main
	},
	{
		path: '/swaps',
		name: 'Swaps',
		component: () => import('../views/Swaps.vue')
	},
	{
		path: '/crowdfunding',
		name: 'Crowdfunding',
		component: () => import('../views/Crowdfunding.vue')
	},
	{
		path: '/news',
		name: 'News',
		component: () => import('../views/News.vue')
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router

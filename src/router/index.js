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
		path: '/test',
		name: 'Test',
		component: () => import('../views/Test.vue')
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router

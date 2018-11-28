import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
Vue.config.productionTip = false;
window.io = require('socket.io-client');
import Echo from 'laravel-echo';
const baseURL = 'http://imws.fengpintech.com';
Vue.prototype.$Echo = new Echo({
	broadcaster: 'socket.io',
	host: baseURL
});
Vue.prototype.$axios = axios.create({
	baseURL: 'http://im.fengpintech.com',
	headers: {
		Authentication: 'O4pH7suKVx2T9eDK6iN77pWj58nLxBJH',
		'Content-Type': 'application/json; charset=UTF-8'
	}
});
new Vue({
	render: h => h(App)
}).$mount('#app');


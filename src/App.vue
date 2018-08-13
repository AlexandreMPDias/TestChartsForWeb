<template>
	<div id="app">
		<nav class="navbar navbar-dark bg-dark">
			<div style="height: 80px;">
				<img class="h-100 pl-5" src=".\assets\logo\logo_amarelo.svg" alt="Italian Trulli">
			</div>
			<div class="btn-toolbar d-flex flex-row-reverse" role="toolbar" aria-label="Toolbar with button groups">
				<div class="btn-group" role="group" aria-label="Basic example" v-for="r in routes" :key=r.titulo>
					<router-link :to="r.path ? r.path : '/'">
						<button type="button" class="btn btn-primary ml-1">
							{{ r.titulo }}
						</button>
					</router-link>
				</div>
			</div>
		</nav>
		<router-view></router-view>
	</div>
</template>

<script>
import { routes } from './global/routes';

export default {
	data() {
		return {
			routes
		}
	}
}
</script>

<style>

</style>

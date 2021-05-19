<template>
	<div id="app">
	 <Button>Buton with text</Button>
	 <Button>
	 		<i class="fa fa-copy"></i>
	 </Button>

	 <Button>
	 		<i class="fa fa-user"></i>Profile
	 </Button>
	 
	</div>
</template>

<script>
	import Button from './components/Button.vue'
	export default {
    name: 'app',
		components: {
			Button
		}
  }
</script>

<style scoped>
.btn{
	margin-left: 10px;
}
</style>
<script>

	let img_src = 'img/logo-radius.png?v='+Math.random();
	let hover  = false;
	export let text = "Welcome to use Svelte-record"

</script>
<style>

	.ctrl {
		width: 160px;
		border-radius: 50%;
		animation: animation_logo 2s;
	}

	h1 {
		font-size: 30px
	} 

	@media screen and (max-width: 768px) { 
		.ctrl {
			width: 120px;
		}
      	h1 {
			font-size: 20px
		}        
  	}

  	@keyframes animation_logo
	{
	    from {}
    	to {transform: rotate(360deg)}
	}


</style>

<center>
	<br/>
		<img 
			alt="logo"
			class="ctrl"
			src={img_src} 
		/>
	<br/><br/>
	<h1 class="display-4">{ text }</h1>
</center>
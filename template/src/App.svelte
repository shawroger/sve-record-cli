<script>	
	import { Router, Link, Route } from "svelte-routing"
	import Index from './page/index.svelte'
	import Error from './page/error404.svelte'
	import Nav from './component/nav.app.svelte'
</script>






<Router>
	<Nav/>
  	<Route path="/" component="{Index}" />
    <Route path="*" component="{Error}" />
</Router>
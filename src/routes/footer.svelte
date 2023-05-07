<script lang="ts">
	import * as config from '$lib/config'
</script>

<footer>
	<p>{config.title} &copy {new Date().getFullYear()}</p>
</footer>

<style>
	footer {
		padding-block: var(--size-7);
		border-top: solid var(--border-size-1);
	}

	p {
		color: var(--text-2);
	}
</style>

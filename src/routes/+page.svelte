<script lang="ts">
	import * as config from '$lib/config'
	import { formatDate } from '$lib/utils'

	export let data
	const { posts } = data
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<section>
	<ul class="posts">
		{#each posts as { slug, title, description, date }}
			<li class="post">
				<p class="file">{slug}</p>
				<a href={slug} class="title">{title}</a>
				<p class="date">{formatDate(date)}</p>
				<p class="description">{description}</p>
			</li>
		{/each}
	</ul>
</section>

<style>
	.posts {
		display: grid;
		gap: var(--size-7);
	}

	.post {
		max-inline-size: var(--size-content-3);
	}

	.post:not(:last-child) {
		border-bottom: solid var(--border-size-1);
		padding-bottom: var(--size-7);
	}

	.title {
		font-size: var(--font-size-fluid-3);
		text-transform: capitalize;
	}
	.date {
		color: var(--text-2);
	}
	.description {
		margin-top: var(--size-3);
	}

	.file {
		font-size: var(--font-size-0);
		font-family: var(--font-mono);
		letter-spacing: var(--font-letterspacing-4);
		margin-bottom: -1rem;
		color: var(--text-2);
	}
</style>

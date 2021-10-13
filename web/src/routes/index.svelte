<script context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export const load = async ({ fetch }) => {
		const url =
			'https://r4l4xmqo.api.sanity.io/v1/data/query/production?query=*%5B_type%20%3D%3D%20%22frontpage%22%20%26%26%20!(_id%20in%20path(%22drafts.**%22))%5D%5B0%5D';
		const res = await fetch(url);
		if (res.ok) {
			const data = await res.json();
			return {
				props: {
					introduction: data.result.introduction
				}
			};
		}
	};
</script>

<script>
	export let introduction;
</script>

<section class="mt-4 p-4">
	<h1 class="text-3xl mb-2">
		Hei, I'm Anh-Kha Vo and on the web I go by <span class="name">Kharann 👋</span>
	</h1>
	<byline class="text-lg text-gray">{introduction.role}</byline>
	<p class="mt-4">
		My forte is creating products that promotes value for the end-user without sacrificing quality.
		I also love every aspect of software development, from the infrastructure to the backend and
		frontend.
	</p>
	<!-- <h1 class="text-3xl font-bold">Latest post</h1> -->
</section>

<style lang="postcss">
	.name {
		@apply text-primary-dark font-black font-hack;
	}
</style>

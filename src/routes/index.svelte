<script>
	// @ts-nocheck
	import Icon from "@iconify/svelte";

	import discord from "@iconify/icons-mdi/discord";
	import sheet from "@iconify/icons-mdi/google-spreadsheet";
	import soundcloud from "@iconify/icons-mdi/soundcloud";
	import youtube from "@iconify/icons-mdi/youtube";

	const entries = [
		{
			artist: "Casper Slakes",
			artistPhoto: "/artists/casper-slakes.jpg",
			blurb: `The track started with some spoken word thing I wrote down after I thought of a wordplay between "lunatic"  and "lunar", which kinda sounded like a fancy word for a werewolf. From there I recorded it and fucked around with some effects, and eventually the song shaped itself.`,
			track: "Lunartic",
		},
		{
			artist: "kovak",
			artistPhoto: "/artists/kovak.jpg",
			blurb: `While making SHELL (full title {}{}7{}{}4{}SHELL//////E0eNT/////===) I was heavily inspired by the sound pallets of IPs like Mr. Robot or the FAITH series of games; something that bears a resemblance of something that was once warm, nostalgic and fuzzy and use those sounds in these droning, ominous textures. I wanted to create a strong sense of paranoia, and the feeling of being alone yet feeling like there is someone just out of view watching your every move.`,
			track: "SHELL",
		},
		{
			artist: "Jodastt",
			artistPhoto: "/artists/jodastt.jpg",
			blurb: `Requiescat (Wilde) is an ambient piece based on trying to musically translate a poem of the same name by Irish poet Oscar Wilde.  The main themes of the poem are about death and the influence of death on loved ones, so I tried to imagine how that would sound by manipulating pure white noise.`,
			track: "Requiescat (Wilde)",
		},
		{
			artist: "Soarhook",
			artistPhoto: "/artists/soarhook.png",
			blurb: undefined,
			track: "Anti-Realism",
		},
		{
			artist: "Adamo's preferred alias",
			artistPhoto: "/artists/adamo.png",
			blurb: undefined,
			track: "Adamo's track title",
		},
		{
			artist: "NON's preferred alias",
			artistPhoto: "/artists/non.png",
			blurb: undefined,
			track: "NON's track title",
		},
		{
			artist: "Polyghost & Liz's alias",
			artistPhoto: "/artists/polyghost-and-liz.png",
			blurb: undefined,
			track: "Their track title",
		},
	];

	const streamings = [
		{
			backgroundColor: "bg-orange-500",
			icon: soundcloud,
			siteName: "SoundCloud",
			url: "https://soundcloud.com/thecatalogranks",
		},
		{
			backgroundColor: "bg-red-600",
			icon: youtube,
			siteName: "YouTube",
			url: "https://www.youtube.com/channel/UCh5KiLyALx7wzo5pj3TOWTg",
		},
		{
			backgroundColor: "bg-green-600",
			icon: sheet,
			siteName: "MCatalog",
			url: "https://docs.google.com/spreadsheets/d/116LycNEkWChmHmDK2HM2WV85fO3p3YTYDATpAthL8_g",
		},
		{
			backgroundColor: "bg-blurple",
			icon: discord,
			siteName: "Discord",
			url: "https://discord.gg/D4BahnC",
		},
	];

	// Browser settings :(
	let muted = true;

	let currentTime = 0;
</script>

<style>
	.centerer {
		@apply flex-1 flex flex-col items-center justify-center;
	}
</style>

<div class="px-8 py-16 bg-gradient-to-b from-body">
	<h1 class="text-5xl font-semibold text-center">Catalog Records</h1>
</div>

<h2 class="text-3xl text-center align-middle">featuring our <em>debut compilation</em><br /><span class="text-6xl text-orange-text font-halloween">A Catalog Halloween (name tbd)</span></h2>

<div class:centerer={true}>
	<div class="px-8 py-12">
		<div class="relative overflow-hidden max-w-7xl rounded-2xl">
			{#if muted}
				<button on:click={() => { muted = false; currentTime = 0 }} class="absolute inset-0 z-10 flex items-center justify-center w-full text-3xl font-light text-white bg-black bg-opacity-25 md:text-6xl">Click to unmute</button>
			{/if}
			<video autoplay bind:muted bind:currentTime paused={false} loop={false} class="w-full">
				<source src="/videos/lunartic.mp4" type="video/mp4" />
			</video>
		</div>
	</div>

	<p class="px-8 py-12 text-2xl">
		These tracks sound good, but we don't know whether they'll <strong class="font-extrabold text-orange-text">spook</strong> you or not.
		<br />
		<span class="block w-full mt-2" />
		What is <strong class="font-medium">PROVEN</strong> is that this compilation has <strong class="font-extrabold text-orange-text">BANGERS</strong>!
		<br />
		<span class="block w-full mt-2" />
		Just look at this lineup <strong class="font-medium">stacked</strong> with <strong class="font-extrabold text-orange-text">absolute talent</strong>:
	</p>

	<section class="px-8 py-12 space-y-16">
		{#each entries as entry, i}
			<div class="overflow-hidden shadow-lg max-w-7xl rounded-2xl text-on-card bg-card">
				<div class="flex flex-col {i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}">
					<div class="z-20 flex flex-col {entry.blurb ? 'justify-between' : 'justify-center'} p-8 md:w-1/2">
						<div>
							<span class="block text-6xl font-personality text-title">{entry.track}</span>
							<span class="text-4xl font-personality"><span class="text-entry-by">by </span><span class="text-title">{entry.artist}</span></span>

							{#if entry.blurb}
								<hr class="w-full h-1 mt-4 bg-blurb-divider border-t-0" />
							{/if}
						</div>

						{#if entry.blurb}
							<blockquote class="mt-6 text-2xl italic leading-relaxed font-personality text-blurb">{entry.blurb}</blockquote>
						{/if}
					</div>
					<img class="{entry.blurb ? 'object-cover' : 'object-contain'} object-center md:w-1/2" style="{entry.blurb ? '' : 'max-height: 16rem'}" src={entry.artistPhoto} alt="Photo of {entry.artist}" />
				</div>
			</div>
		{/each}
	</section>
	
	<section class="px-8 py-8">
		<p class="text-xl">
			We know you're <em>dying</em> (how appropriate for the holiday) to get to streaming services to hear the mix.
			<br />
			<span class="block w-full mt-2" />
			Let us guide you:
		</p>
		
		<div class="text-center">
			{#each streamings as streaming}
				<a href={streaming.url} class="{streaming.backgroundColor} m-4 w-48 rounded-full shadow-lg text-white text-center inline-block align-baseline px-4 py-2 font-medium text-lg"><Icon icon={streaming.icon} style="font-size: 200%" class="inline mr-2" />{streaming.siteName}</a>
			{/each}
		</div>
	</section>

	<!-- <hr class="h-1 light:bg-gray-200" style="width: calc(100% - 4rem)" />
	
	<section class="w-full px-8 py-8 bg-gradient-to-t from-gray-200">
		<p class="text-center">
			Looking for the MCatalog? Find <a class="hover:underline focus:underline text-orange-text" href="https://docs.google.com/spreadsheets/d/116LycNEkWChmHmDK2HM2WV85fO3p3YTYDATpAthL8_g">our spreadsheet here</a>.
		</p>
	</section> -->
</div>

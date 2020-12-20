<script>
	// @ts-nocheck
	import Icon from "@iconify/svelte";

	import unmute from "@iconify/icons-mdi/volume-mute";

	import discord from "@iconify/icons-mdi/discord";
	import sheet from "@iconify/icons-mdi/google-spreadsheet";
	import soundcloud from "@iconify/icons-mdi/soundcloud";
	import youtube from "@iconify/icons-mdi/youtube";

	import Metadata from "../components/Metadata.svelte";

	import Scribble from "./_scribble-2.svg.svelte";

	const entries = [
		{
			artist: "Casper Slakes",
			artistPhoto: "/artists/casper-slakes.jpg",
			artistSocialMedia: "https://twitter.com/CasperSlakes",
			blurb: `The track started with some spoken word thing I wrote down after I thought of a wordplay between "lunatic"  and "lunar", which kinda sounded like a fancy word for a werewolf. From there I recorded it and fucked around with some effects, and eventually the song shaped itself.`,
			track: "Lunartic",
			trackDirectLink: "https://soundcloud.com/thecatalogranks/casper-slakes-lunartic",
		},
		{
			artist: "kovak",
			artistPhoto: "/artists/kovak.jpg",
			artistSocialMedia: "https://soundcloud.com/kovakovakovak",
			blurb: `While making SHELL (full title {}{}7{}{}4{}SHELL//////E0eNT/////===) I was heavily inspired by the sound palletes of IPs like Mr. Robot or the FAITH series of games; something that bears a resemblance of something that was once warm, nostalgic and fuzzy and use those sounds in these droning, ominous textures. I wanted to create a strong sense of paranoia, and the feeling of being alone yet feeling like there is someone just out of view watching your every move.`,
			track: "SHELL",
			trackDirectLink: "https://soundcloud.com/kovakovakovak/74shelle0ent",
		},
		{
			artist: "Adamo",
			artistPhoto: "/artists/adamo.png",
			artistSocialMedia: "https://soundcloud.com/itsadamo",
			blurb: undefined,
			track: "Abyss",
			trackDirectLink: "https://soundcloud.com/itsadamo/abyss",
		},
		{
			artist: "Polyghost & Sick Lizard",
			artistPhotoWhenLight: "/artists/polyghost-sick-lizard-when-light.png",
			artistPhotoWhenDark: "/artists/polyghost-sick-lizard-when-dark.png",
			artistSocialMedia: "https://soundcloud.com/mostrino04",
			blurb: "Sick Lizard sent me some spooky organ chords and music box melodies that fit perfectly for a Halloween-themed track. I then built the track around those and took it in all sorts of different directions.",
			track: "Numb",
			trackDirectLink: "https://soundcloud.com/mostrino04/numb",
		},
		{
			artist: "Soarhook",
			artistPhotoWhenLight: "/artists/soarhook-when-light.png",
			artistPhotoWhenDark: "/artists/soarhook-when-dark.png",
			artistSocialMedia: "https://soundcloud.com/user-531200407",
			blurb: undefined,
			track: "Anti-Realism",
			trackDirectLink: "https://soundcloud.com/user-531200407/anti-realism-1",
		},	
		{
			artist: "Jodastt",
			artistPhoto: "/artists/jodastt.jpg",
			artistSocialMedia: "https://soundcloud.com/itsmejodastt",
			blurb: `Requiescat (Wilde) is an ambient piece based on trying to musically translate a poem of the same name by Irish poet Oscar Wilde.  The main themes of the poem are about death and the influence of death on loved ones, so I tried to imagine how that would sound by manipulating pure white noise.`,
			track: "Requiescat (Wilde)",
			trackDirectLink: "https://soundcloud.com/itsmejodastt/requiescat-wilde",
		},
		{
			artist: "latus",
			artistPhotoWhenDark: "/artists/latus-when-dark.png",
			artistPhotoWhenLight: "/artists/latus-when-light.png",
			artistSocialMedia: "https://soundcloud.com/latusflos",
			blurb: undefined,
			track: "bloodshot",
			trackDirectLink: "https://soundcloud.com/latusflos/bloodshot",
		},
	];

	const streamings = [
		{
			backgroundColor: "bg-orange-500",
			icon: soundcloud,
			siteName: "SoundCloud",
			url: "https://soundcloud.com/thecatalogranks/sets/catalog-compilation-vol-1",
		},
		{
			backgroundColor: "bg-red-600",
			icon: youtube,
			siteName: "YouTube",
			url: "https://www.youtube.com/playlist?list=PLJ8y6BLxKWXXa2k9v8nDyPI1wrdfvcJK4",
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

<Metadata />

<div class="px-8 py-16 bg-gradient-to-b from-body">
	<h1 class="text-5xl font-semibold text-center">Catalog Records</h1>
</div>

<h2 class="space-y-4 text-3xl text-center align-middle">
	<p><em>featuring our debut</em></p>
	<p class="text-5xl text-orange-text">Catalog Compilation<p>
	<p class="text-6xl text-orange-text font-halloween">Vol. 1: Halloween<p>
</h2>

<div class:centerer={true}>
	<div class="px-8 py-12">
		<div class="relative overflow-hidden max-w-7xl rounded-2xl light:shadow-none dark:shadow-extreme">
			{#if muted}
				<button on:click={() => { muted = false; currentTime = 0 }} class="absolute inset-0 z-10 flex flex-col items-center justify-center w-full text-3xl font-light text-white bg-black bg-opacity-25 md:text-6xl">
					<div class="p-4 bg-black rounded-full bg-opacity-30">
						<Icon icon={unmute} />
					</div>
					<p>Click to unmute</p>
				</button>
			{/if}
			<video autoplay bind:muted bind:currentTime paused={false} loop={false} poster="/lunartic-video-thumbnail.jpg" class="w-full">
				<source src="/videos/lunartic.mp4" type="video/mp4" />
			</video>
		</div>
	</div>

	<div class="px-8 py-12 space-y-2 text-2xl">
		<p>These tracks sound good, but we don't know whether they'll <strong class="font-extrabold text-orange-text">spook</strong> you or not.</p>
		<p>What is <strong class="font-medium">PROVEN</strong> is that this compilation has <strong class="font-extrabold text-orange-text">BANGERS</strong>!</p>
		<p>Just look at this lineup <strong class="font-medium">stacked</strong> with <strong class="font-extrabold text-orange-text">absolute talent</strong>:</p>
	</div>

	<section class="px-8 py-12 space-y-16">
		{#each entries as entry, i}
			<div class="overflow-hidden shadow-lg max-w-7xl rounded-2xl text-on-card bg-card">
				<div class="flex flex-col {i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}">
					<div class="z-20 flex flex-col {entry.blurb ? 'justify-center' : 'justify-center'} p-8 md:w-1/2">
						<div>
							<span class="block text-6xl font-personality text-title"><a href={entry.trackDirectLink} class="text-title hover:underline">{entry.track}</a></span>
							<span class="text-4xl font-personality"><span class="text-entry-by">by </span><a href={entry.artistSocialMedia} class="text-title hover:underline">{entry.artist}</a></span>
						</div>

						{#if entry.blurb}
							<div class="mt-4 text-blurb-divider">
								<Scribble />
							</div>
							<blockquote class="mt-6 text-2xl italic leading-relaxed font-personality text-blurb">{entry.blurb}</blockquote>
						{/if}
					</div>
					<a href={entry.artistSocialMedia} class="flex items-stretch justify-center flex-shrink md:w-1/2">
						<img 
							class="dark:hidden light:inline-block {entry.blurb ? 'object-cover' : 'object-contain'} object-center flex-shrink"
							style="{entry.blurb ? '' : 'max-height: 20rem;'}"
							src={entry.artistPhotoWhenLight ?? entry.artistPhoto}
							alt="Photo of {entry.artist}" />

						<img 
							class="light:hidden dark:inline-block {entry.blurb ? 'object-cover' : 'object-contain'} object-center flex-shrink"
							style="{entry.blurb ? '' : 'max-height: 20rem;'}"
							src={entry.artistPhotoWhenDark ?? entry.artistPhoto}
							alt="Photo of {entry.artist}" />
					</a>
				</div>
			</div>
		{/each}
	</section>
	
	<div class="px-8 py-12 space-y-4 text-2xl">
		<div class="space-y-2 text-xl">
			<p>We know you're <strong class="font-extrabold text-orange-text">dying</strong> to get to streaming services to hear the mix.</p>
			<p>Let us guide you there:</p>
		</div>
		
		<div class="text-center">
			{#each streamings as streaming}
				<a href={streaming.url} class="{streaming.backgroundColor} m-4 w-48 rounded-full shadow-lg text-white text-center inline-block align-baseline px-4 py-2 font-medium text-lg transition ease-out duration-200 transform hover:scale-110"><Icon icon={streaming.icon} style="font-size: 200%" class="inline mr-2" />{streaming.siteName}</a>
			{/each}
		</div>
	</div>

	<hr class="h-1 border-0 light:bg-warm-gray-200 dark:bg-blue-gray-800" style="width: calc(100% - 4rem)" />
	
	<section class="w-full px-8 py-8 space-y-4 bg-gradient-to-t from-body">
		<div class="space-y-2 text-center">
			<p>Thanks for joining us! We had fun, so we may have more for you in the future. :)</p>
		</div>
		
		<div class="space-y-2 text-center">
			<p>Managed and organized by <a class="hover:underline focus:underline text-orange-text" href="https://soundcloud.com/mostrino04">mostrino</a>.</p>
			<p>Compilation art by <a class="hover:underline focus:underline text-orange-text" href="https://soundcloud.com/kovakovakovak">kovak</a>, <a class="hover:underline focus:underline text-orange-text" href="https://soundcloud.com/user-531200407">Soarhook</a>, and <a class="hover:underline focus:underline text-orange-text" href="https://github.com/JakeNavith">Navith</a>.</p>
			<p>Website by <a class="hover:underline focus:underline text-orange-text" href="https://github.com/JakeNavith">Navith</a>.</p>
		</div>

		<div class="space-y-2 text-center">
			<p>Background pattern by <a class="hover:underline focus:underline text-orange-text" href="https://www.steveschoger.com/">Steve Schoger</a> on <a class="hover:underline focus:underline text-orange-text" href="https://www.heropatterns.com/">Hero Patterns</a>.</p>
			<p>Background photo by <a class="hover:underline focus:underline text-orange-text" href="https://unsplash.com/@avesmhl?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Avery Lewis</a> on <a class="hover:underline focus:underline text-orange-text" href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a>.</p>
			<p>Background lightning from <a class="hover:underline focus:underline text-orange-text" href="https://steamcommunity.com/id/ThaMatrixMJ">MatthewK</a> on <a class="hover:underline focus:underline text-orange-text" href="https://steamcommunity.com/sharedfiles/filedetails/?id=1309603919">Steam</a>.</p>
		</div>
	</section>
</div>

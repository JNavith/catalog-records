<script>
	const siteName = "Catalog Records";
	const siteAuthor = "The Catalog";
	const siteDomain = "https://catalog-records.web.app";

	export let pageTitle: string | undefined = undefined;
	export let title = pageTitle === undefined ? siteName : `${pageTitle} - ${siteName}`;

	export let description: string = "A homegrown record label for members of the MCatalog. Now debuting Catalog Compilation Vol. 1: Halloween!";

	export let author = siteAuthor;

	export let route = "/";

	$: url = `${siteDomain}${route}`;

	export let image = `${siteDomain}/social-1200.png`;
	export let imageAlt = `The backdrop of the artwork for "Catalog Compilation Vol. 1: Halloween"`;

	let metaTagsProperty: {
		[property: string]: string;
	};
	$: metaTagsProperty = {
		"author": author,

		"og:url": url,
		"og:type": "website",
		"og:title": title,
		"og:image": image,
		"og:image:alt": imageAlt,
		...(description ? {
			"og:description": description,
		} : {}),
		"og:site_name": siteName,
		"og:locale": "en_US",
	};

	let metaTagsName: {
		[name: string]: string;
	};
	$: metaTagsName = {
		"twitter:card": "summary_large_image",
		"twitter:url": url,
		"twitter:title": title,
		...(description ? {
			"twitter:description": description,
		} : {}),
		"twitter:image": image,
		"twitter:image:alt": imageAlt,
	}
</script>

<svelte:head>
	<title>{title}</title>

	{#each Object.entries(metaTagsProperty) as [property, content]}
		<meta {property} {content} />
	{/each}

	{#each Object.entries(metaTagsName) as [name, content]}
		<meta {name} {content} />
	{/each}
</svelte:head>

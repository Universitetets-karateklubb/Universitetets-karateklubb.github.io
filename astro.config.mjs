import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			customCss: [
				// Relative path to your custom CSS file
				'./src/styles/custom.css',
			],
			title: 'Universitetets karateklubb',
			sidebar: [
				{
					label: 'Trening',
					items: [{ autogenerate: { directory: 'trening' } }],
				},
				{
					label: 'Klubben',
					items: [{ autogenerate: { directory: 'klubben' } }],
				},
				{
					label: 'Chito ryu',
					items: [{ autogenerate: { directory: 'chito-ryu' } }],
				},
			],
		}),
	],

	// Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
	image: { service: { entrypoint: 'astro/assets/services/sharp' } },
});

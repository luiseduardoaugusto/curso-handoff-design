// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Handoff de Figma',
			description: 'Curso completo para dominar la comunicación efectiva entre equipos de diseño y desarrollo',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com' },
			],
			sidebar: [
				{
					label: 'Módulos del Curso',
					items: [
						{ label: '1. Fundamentos del Handoff', slug: 'modulo-1-fundamentos' },
						{ label: '2. Compartir Diseños', slug: 'modulo-2-compartir' },
						{ label: '3. Preparación del Archivo', slug: 'modulo-3-preparacion' },
						{ label: '4. Estados y Animaciones', slug: 'modulo-4-estados' },
						{ label: '5. Dev Mode', slug: 'modulo-5-dev-mode' },
						{ label: '6. Feedback y Colaboración', slug: 'modulo-6-feedback' },
					],
				},
				{
					label: 'Recursos',
					items: [
						{ label: 'Checklist de Handoff', slug: 'recursos/checklist' },
						{ label: 'Guía de Nomenclatura', slug: 'recursos/nomenclatura' },
						{ label: 'Plugins Recomendados', slug: 'recursos/plugins' },
						{ label: 'Template de Documentación', slug: 'recursos/template' },
					],
				},
			],
			customCss: [
				'./src/styles/custom.css',
			],
		}),
	],
});

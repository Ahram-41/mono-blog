import { dev } from '$app/environment';
import type { Work, Education, Project } from '$lib/types';

export const title = 'Name';
export const description = "Sample blog";
export const url = dev ? 'http://localhost:5173/' : 'https://sample.com/';
export const skills = [
	'Python',
	'JavaScript',
	'TypeScript',
	'Svelte/SvelteKit',
	'Java',
	'R',
	'Kubernetes',
	'Helm',
	'SQL',
	'Streamlit',
	'Torch/JAX',
	'Transformers',
	'FastAPI',
	'Git',
	'Docker',
	'LaTeX',
	'GitHub Actions'
];

export const educations = [
	{
		degree: 'BSc (Hons.) of Science',
		university: 'National University of Singapore',
		from: '2020',
		to: '2024'
	}
] satisfies Education[];

export const works = [
	{
		company: 'sample company',
		description:
			'this is a sample description of the company',
		isInternship: true,
		position: 'sample position',
		from: 'NA',
		to: 'NA'
	},

] satisfies Work[];

export const projects = [
	{
		title: 'sample project',
		description: 'a sample project of the website',
		href: 'sample.com',
		tags: ['sample']
	},
	
] satisfies Project[];

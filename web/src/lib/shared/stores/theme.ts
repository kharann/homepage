import { browser } from '$app/env';
import { writable } from 'svelte/store';

const initialValue = browser ? localStorage.getItem('theme') ?? 'system' : 'system';

export const theme = writable(initialValue);

theme.subscribe((value) => {
	if (browser) {
		localStorage.setItem('theme', value);
		document.body.classList.toggle('dark', value === 'dark');
	}
});

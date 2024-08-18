// src/lib/stores/togglePreviewSize.ts
import { writable } from 'svelte/store';

const createToggleStore = (initialState: string) => {
	const { subscribe, set } = writable(initialState);

	return {
		subscribe,
		set,
		setDesktop: () => set('Desktop'),
		setTablet: () => set('Tablet'),
		setMobile: () => set('Mobile')
	};
};

export const togglePreviewSize = createToggleStore('Desktop');

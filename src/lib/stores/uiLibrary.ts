// src/lib/stores/togglePreviewSize.ts
import { writable } from 'svelte/store';

const createUiLibraryStore = (initialState: string) => {
	const { subscribe, set } = writable(initialState);

	return {
		subscribe,
		set,
		setShad: () => set('shad'),
		setDaisy: () => set('daisy'),
		setTailwind: () => set('tailwind')
	};
};

export const toggleUiLibrary = createUiLibraryStore('shad');

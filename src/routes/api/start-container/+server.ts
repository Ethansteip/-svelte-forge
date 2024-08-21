import { env } from '$env/dynamic/public';

export const GET = async () => {
	console.log('Incoming Request!');
	console.log('Backend Url: ', `${env.PUBLIC_SVELTE_BUILDER_API_URL}/start-container`);
	try {
		const response = await fetch(`${env.PUBLIC_SVELTE_BUILDER_API_URL}/start-container`, {
			method: 'POST'
		});

		const data = await response.json();

		return new Response(
			JSON.stringify({
				status: 200,
				body: data
			})
		);
	} catch (error) {
		return new Response(
			JSON.stringify({
				message: 'Failed to start container. Check Express logs',
				error
			})
		);
	}
};

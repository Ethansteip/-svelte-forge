import { env } from '$env/dynamic/public';

export const GET = async () => {
	try {
		const response = await fetch(`${env.PUBLIC_SVELTE_BUILDER_API_URL}/hello`);
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
				message: 'Failed to get response from Express server',
				error
			})
		);
	}
};

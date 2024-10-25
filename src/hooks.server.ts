import { getUrlEntryFromId } from '$lib/db';
import { redirect, type Handle } from '@sveltejs/kit';


export const handle: Handle = async ({ event, resolve }) => {

    if (event.url.searchParams.get('id')) {

        const urlId = event.url.searchParams.get('id');
        const urlEntry = await getUrlEntryFromId(urlId!);

        throw redirect(301, urlEntry.fullurl);
    }

    const response = await resolve(event); return response;
};
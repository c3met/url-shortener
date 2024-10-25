import type { Actions } from './$types';
import { checkForURLFormat, generateShortendId } from "$lib/helper";
import { checkForExistingEntry, addEntry } from "$lib/db";
import type { ShortendLink } from '$lib/type';

export const actions: Actions = {
    default: async ({ request }) => {
        try {
            const formData = await request.formData();
            const url = formData.get('url') as string;

            if (!url || !checkForURLFormat(url)) {
                return { success: false, message: "No URL specified" };
            }

            const shortedUrlObj: ShortendLink = generateShortendId(url);

            if (await checkForExistingEntry(shortedUrlObj.urlId)) {
                return {
                    success: true,
                    message: `Shortened URL: ${shortedUrlObj.shortendLink}`
                };
            }

            await addEntry(url, shortedUrlObj.urlId);
            return {
                success: true,
                message: `Shortened URL: ${shortedUrlObj.shortendLink}`
            };
        } catch (err) {
            console.error("An error occurred: ", err);
            return {
                success: false,
                message: "Something went wrong!"
            };
        }
    }
};

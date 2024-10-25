import { env } from 'process';
import {Md5} from 'ts-md5';
import type { ShortendLink } from './type';


export const generateShortendId = (url: string): ShortendLink => {
    const urlId = Md5.hashStr(url).slice(0, 10); 
    const shortendLink = `${env.APP_URL}?id=${urlId}`  ;

    return {
        urlId,
        shortendLink
    }
}

export const checkForURLFormat = (url: string) => {
    const urlRegex = /^(https?:\/\/)?([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})(:[0-9]{1,5})?(\/[^\s]*)?$/;
    return urlRegex.test(url);
}

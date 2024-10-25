import { PrismaClient, type UrlEntry } from "@prisma/client";

const prisma = new PrismaClient();


export const addEntry = async (url: string, urlId: string) => {
    const entry = await prisma.urlEntry.create({
        data: {
            urlId: urlId,
            fullurl: url
        }
    })

    if (entry == null) throw new Error("Something went wrong while trying to add the Users URL");

    return entry;
};

export const checkForExistingEntry = async (urlId: string): Promise<boolean> => {
    const exisitng = await prisma.urlEntry.findUnique({
        where: {
            urlId: urlId
        }
    });

    if (exisitng != null) return true;

    return false;
}

export const getUrlEntryFromId = async (urlId: string): Promise<UrlEntry> => {
    const exisitng = await prisma.urlEntry.findUnique({
        where: {
            urlId: urlId
        }
    });

    if (exisitng == null) throw new Error("Url could not be found");

    return exisitng;

};
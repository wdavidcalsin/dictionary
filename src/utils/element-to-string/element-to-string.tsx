export const elementToString = (elementText: cheerio.Cheerio): string[] => {
    return elementText.map((index, word) => word.toString()).get();
};

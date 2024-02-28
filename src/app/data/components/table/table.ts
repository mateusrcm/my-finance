/**
 * This function transforms a word in snake_case
 * EX.: Banana Split => banana_split
 *
 * @param {string} value
 * @returns {string} the transformed value
 */
export const convertToProp = (value: string): string => {
 const result = value
    .toLocaleLowerCase()
    .replaceAll(' ', '_') // replace spaces with underscore
    .replaceAll(/([A-Z])/g, '${1}'.toLocaleLowerCase()) // all to lower case
    .replaceAll(/[^\w]/g, ''); // remove special characters

  return result;
};

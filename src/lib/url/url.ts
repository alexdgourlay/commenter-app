import Url from 'url-parse';

/**
 * Condenses a url into a short form.
 *
 * @param url - The url to condense.
 * @returns A shortened version of the supplied url.
 */
export const condense = (url: string) => {
  // URL needs to include a protocol to parse correctly usign url-parse.
  if (!url.startsWith('https://') && !url.startsWith('http://')) {
    url = `http://${url}`;
  }
  const parsedUrl = new Url(url);
  let condensed = parsedUrl.hostname;

  // Remove the subdomain if equal to www.
  const subdomainToRemove = 'www.';
  if (condensed.startsWith(subdomainToRemove)) {
    condensed = condensed.substring(subdomainToRemove.length);
  }
  return condensed;
};

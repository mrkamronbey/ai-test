/**
 * Formats a given date value into an ISO 8601 string (YYYY-MM-DDTHH:mm:ss.sssZ).
 *
 * This function accepts various date representations (Date object, timestamp, or date string)
 * and converts them into a standard ISO format. If the input cannot be resolved to a valid date,
 * or if the input is `null` or `undefined`, it returns `null`.
 *
 * @param date The date value to format. Can be a `Date` object, a `number` (timestamp), or a `string` parsable by `new Date()`.
 *             `null` or `undefined` inputs will also result in `null` return.
 * @returns A string representing the date in ISO 8601 format, or `null` if the input is invalid.
 */
export function formatToISOString(date: Date | string | number | null | undefined): string | null {
  const d = new Date(date);

  // Check if the parsed date is valid.
  // `new Date(null)`, `new Date(undefined)`, or `new Date('invalid string')` all result in an 'Invalid Date' object,
  // for which `getTime()` returns `NaN`.
  if (isNaN(d.getTime())) {
    return null;
  }

  return d.toISOString();
}
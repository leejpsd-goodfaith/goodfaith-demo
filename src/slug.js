// Slug utility function for generating slugs from text input strings.
// This function takes text and returns the slug of the text.
export function slug(inputText) {
  const result = inputText
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
  return result;
}

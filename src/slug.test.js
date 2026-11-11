import assert from 'node:assert/strict';
import { test } from 'node:test';
import { slug } from './slug.js';

test('joins words with hyphens', () => {
  assert.equal(slug('Hello, World!'), 'hello-world');
});

test('keeps digits', () => {
  assert.equal(slug('Version 2 notes'), 'version-2-notes');
});

test('lowercases mixed-case input', () => {
  assert.equal(slug("ReadMe FILE"), "readme-file");
});

// Run: node --experimental-strip-types --test app/api/contact/validate.test.ts
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { escapeHtml, validate } from './validate.ts';

test('escapes html', () => {
    assert.equal(escapeHtml('<img src=x onerror="a()">&\''), '&lt;img src=x onerror=&quot;a()&quot;&gt;&amp;&#39;');
});

test('validates input', () => {
    assert.deepEqual(validate({ name: ' A ', email: 'a@b.co', message: 'hi' }), { name: 'A', email: 'a@b.co', message: 'hi' });
    assert.equal(typeof validate(null), 'string');
    assert.equal(typeof validate({ name: 'A', email: 'a@b.co', message: '   ' }), 'string');
    assert.equal(typeof validate({ name: 'A', email: 'not-an-email', message: 'hi' }), 'string');
    assert.equal(typeof validate({ name: 'A', email: 'a@b.co', message: 'x'.repeat(5001) }), 'string');
    assert.equal(typeof validate({ name: ['A'], email: 'a@b.co', message: 'hi' }), 'string');
});

import { sanityCheck } from '../app/index';

describe('Sanity check for JestJS', () => {
    test('sanityCheck from index.ts', () => {
        expect(sanityCheck).toBe('Running TypeScript on Node.js');
    });
});
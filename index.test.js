import { deepStrictEqual } from 'node:assert';
import { describe, it } from 'mocha';
import { generateLabelPdf } from './index.js';
import { generateLabelMock } from './mocks/generateLabel.mock.js';

describe('generate label pdf', () => {
    it('should generate a pdf with the correct content', async () => {
        const result = await generateLabelPdf(generateLabelMock);
        deepStrictEqual(typeof result, 'string');
        deepStrictEqual(result.length > 0, true)
    })
})


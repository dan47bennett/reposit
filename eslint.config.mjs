import { defineConfig, globalIgnores } from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier/flat';

import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
});

export default defineConfig([
    globalIgnores([
        '**/node_modules',
        '**/package.json',
        '**/package-lock.json',
        'build/*',
    ]),
    {
        extends: compat.extends(
            'eslint:recommended',
            'plugin:@typescript-eslint/eslint-recommended',
            'plugin:@typescript-eslint/recommended',
            'prettier'
        ),

        plugins: {
            '@typescript-eslint': typescriptEslint,
        },

        languageOptions: {
            parser: tsParser,
        },
    },
    eslintConfigPrettier,
]);

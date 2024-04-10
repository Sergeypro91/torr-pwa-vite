module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'plugin:@tanstack/eslint-plugin-query/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', '@tanstack/query', 'prettier', 'import'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],

    'quotes': ['error', 'single'],

    // запрещает больше одной пустой строки
    'no-multiple-empty-lines': 'error',

    // отключает правило, которое заставялет делать дефолтный экспорт, если экспортиться только одна сущность
    'import/prefer-default-export': 'off',

    // добавляет разделительные пустые строки для блоков импортов
    'import/order': [
      'error',
      {
        'pathGroups': [
          {
            pattern: '@torr/**',
            group: 'internal',
            position: 'after',
          },
        ],
        'newlines-between': 'always',
        'pathGroupsExcludedImportTypes': ['internal'],
        'groups': [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'object',
          'index',
        ],
      },
    ],

    // сортирует импорты
    'sort-imports': [
      'error',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        allowSeparatedGroups: false,
      },
    ],

    // добавляет запятую в конец списка, если представлен в виде нескольких строк
    'comma-dangle': ['error', 'always-multiline'],

    // добавляет отступы между конструкциями
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: ['const', 'let'], next: '*' },
      { blankLine: 'always', prev: '*', next: ['const', 'let'] },
      {
        blankLine: 'any',
        prev: ['const', 'let'],
        next: ['const', 'let'],
      },
      { blankLine: 'always', prev: 'directive', next: '*' },
      { blankLine: 'any', prev: 'directive', next: 'directive' },
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: '*', next: 'break' },
      { blankLine: 'always', prev: '*', next: 'switch' },
      { blankLine: 'always', prev: 'switch', next: '*' },
      { blankLine: 'always', prev: '*', next: 'try' },
      { blankLine: 'always', prev: 'try', next: '*' },
      { blankLine: 'always', prev: 'while', next: '*' },
      { blankLine: 'always', prev: '*', next: 'while' },
      { blankLine: 'always', prev: '*', next: 'if' },
      { blankLine: 'always', prev: 'if', next: '*' },
      { blankLine: 'always', prev: '*', next: 'for' },
      { blankLine: 'always', prev: 'for', next: '*' },
      { blankLine: 'always', prev: '*', next: 'function' },
      { blankLine: 'always', prev: 'function', next: '*' },
      { blankLine: 'always', prev: '*', next: 'export' },
      { blankLine: 'always', prev: 'export', next: '*' },
      { blankLine: 'always', prev: '*', next: 'class' },
      { blankLine: 'always', prev: 'class', next: '*' },
      { blankLine: 'never', prev: 'expression', next: 'expression' },
      // добавляет отступы перед и после, если выражение написано в несколько строк (например, promise)
      { blankLine: 'always', prev: 'multiline-expression', next: '*' },
      { blankLine: 'always', prev: '*', next: 'multiline-expression' },
    ],

    // делает обязательным скобки для if
    'curly': ['error', 'all'],
  },
  overrides: [
    {
      files: 'shared/**/*.+(ts|tsx)',
      rules: {
        'no-restricted-imports': [
          'error',
          {
            patterns: [
              {
                group: ['@torr/data', '@torr/modules', '@torr/screens'],
                message: 'Shared не должен зависеть от: data, modules, screens',
              },
            ],
          },
        ],
      },
    },
    {
      files: 'pages/**/*.+(ts|tsx)',
      rules: {
        'no-restricted-imports': [
          'error',
          {
            patterns: [
              {
                group: ['@torr/data', '@torr/modules'],
                message: 'Pages не зависит от: data и modules',
              },
            ],
          },
        ],
      },
    },
    {
      files: '+(modules|screens|pages)/**/*.+(ts|tsx)',
      rules: {
        'no-restricted-imports': [
          'error',
          {
            patterns: [
              {
                group: ['@astral', '@mui', 'lodash-es'],
                message: 'Зависимость должна быть инвертирована через shared',
              },
            ],
          },
        ],
      },
    },
    // разрешаем импорт из других модулей только через external.ts файлы
    {
      files: 'modules/**/*.+(ts|tsx)',
      excludedFiles: ['modules/**/external.ts'],
      rules: {
        'no-restricted-imports': [
          'error',
          {
            patterns: [
              {
                group: ['@torr/modules'],
                message:
                  'Импорты из других модулей должны проходить через external.ts',
              },
            ],
          },
        ],
      },
    },
  ],
};

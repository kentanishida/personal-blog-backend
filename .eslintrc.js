module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'prettier', // Prettierプラグインを追加
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint', // PrettierとTypeScriptのESLintルールを競合させない
    'prettier', // Prettierのルールを適用
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    //custom rules
    'no-console': 'warn', // コンソールの使用を警告
    'no-cond-assign': 'error', // 条件文内の代入を禁止
    'no-constant-condition': 'error', // 常に真または偽となる条件を禁止
    'no-duplicate-case': 'error', // switch文内の重複caseラベルを禁止
    'no-empty': 'error', // 空ブロックを禁止
    'no-ex-assign': 'error', // catch節内での例外変数の代入を禁止
    'no-extra-parens': 'error', // 不必要な括弧を禁止
    'no-unreachable': 'error', // 到達不可能なコードを禁止
    'consistent-return': 'error', // 同一関数内のreturn文で一貫性を保持
    'no-eval': 'error', // eval()の使用を禁止
    'no-fallthrough': 'error', // switch文でのcase落ちを禁止
    'no-implied-eval': 'error', // 暗黙的なeval()を禁止
    'no-return-assign': 'error', // return文内での代入を禁止
    'no-unused-expressions': 'error', // 使用されない式を禁止
    strict: ['error', 'global'], // 厳格モードを必須に
    semi: ['error', 'never'], // セミコロンを禁止
    camelcase: 'error', // キャメルケースの強制
    'comma-spacing': 'error', // カンマの後の空白を強制
    'no-dupe-class-members': 'error', // クラスメンバーの重複を禁止
    'no-duplicate-imports': 'error', // 重複するimport文を禁止
    'no-var': 'error', // varの使用を禁止
    'prefer-const': 'error', // 再代入されない変数はconstを使用
  },
}

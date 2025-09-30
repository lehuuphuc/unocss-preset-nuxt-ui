import antfu from '@antfu/eslint-config';

export default antfu({
  unocss: true,
  rules: {
    'style/semi': ['error', 'always'],
  },
});

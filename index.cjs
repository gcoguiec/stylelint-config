const bemcased = '^([a-z][a-z0-9]*)((?:-{1,2}|_{1,2}|)[a-z0-9]+)*$';

module.exports = {
  plugins: ['stylelint-order', 'stylelint-scss'],
  rules: {
    // stylelint-core
    'alpha-value-notation': [
      'percentage',
      {
        exceptProperties: [
          'opacity',
          'fill-opacity',
          'flood-opacity',
          'stop-opacity',
          'stroke-opacity'
        ]
      }
    ],
    'at-rule-empty-line-before': null,
    'at-rule-no-unknown': null,
    'at-rule-no-vendor-prefix': true,
    'block-no-empty': true,
    'color-hex-length': 'short',
    'color-no-invalid-hex': true,
    'color-function-notation': 'modern',
    'custom-property-no-missing-var-function': true,
    'comment-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['stylelint-commands']
      }
    ],
    'comment-whitespace-inside': 'always',
    'custom-property-empty-line-before': [
      'always',
      {
        except: ['after-custom-property', 'first-nested'],
        ignore: ['after-comment', 'inside-single-line-block']
      }
    ],
    'custom-media-pattern': [
      bemcased,
      {
        message: name =>
          `Expected custom media query name "${name}" to be BEM-cased`
      }
    ],
    'custom-property-pattern': [
      bemcased,
      {
        message: name =>
          `Expected custom property name "${name}" to be BEM-cased`
      }
    ],
    'comment-no-empty': true,
    'declaration-block-no-duplicate-properties': [
      true,
      {
        ignore: ['consecutive-duplicates-with-different-values']
      }
    ],
    'declaration-block-no-duplicate-custom-properties': true,
    'declaration-block-no-redundant-longhand-properties': true,
    'declaration-block-no-shorthand-property-overrides': true,
    'declaration-block-single-line-max-declarations': 1,
    'declaration-empty-line-before': [
      'always',
      {
        except: ['after-declaration', 'first-nested'],
        ignore: ['after-comment', 'inside-single-line-block']
      }
    ],
    'font-family-no-duplicate-names': true,
    'font-family-no-missing-generic-family-keyword': true,
    'font-family-name-quotes': 'always-where-recommended',
    'function-calc-no-unspaced-operator': true,
    'function-linear-gradient-no-nonstandard-direction': true,
    'function-no-unknown': null,
    'function-name-case': 'lower',
    'function-url-quotes': 'always',
    'hue-degree-notation': 'angle',
    'keyframe-selector-notation': 'percentage-unless-within-keyword-only-block',
    'keyframe-block-no-duplicate-selectors': true,
    'keyframe-declaration-no-important': true,
    'keyframes-name-pattern': [
      bemcased,
      {
        message: name => `Expected keyframe name "${name}" to be BEM-cased`
      }
    ],
    'length-zero-no-unit': [
      true,
      {
        ignore: ['custom-properties']
      }
    ],
    'media-feature-name-no-vendor-prefix': true,
    'media-feature-name-no-unknown': true,
    'named-grid-areas-no-invalid': true,
    'no-descending-specificity': null,
    'no-duplicate-at-import-rules': true,
    'no-duplicate-selectors': true,
    'no-empty-source': null,
    'no-invalid-double-slash-comments': true,
    'no-invalid-position-at-import-rule': null,
    'no-irregular-whitespace': true,
    'number-max-precision': 5,
    'property-no-unknown': true,
    'rule-empty-line-before': [
      'always-multi-line',
      {
        except: ['first-nested'],
        ignore: ['after-comment']
      }
    ],
    'selector-attribute-quotes': 'always',
    'selector-class-pattern': [
      bemcased,
      {
        message: selector =>
          `Expected class selector "${selector}" to be BEM-cased`
      }
    ],
    'selector-id-pattern': [
      bemcased,
      {
        message: selector =>
          `Expected id selector "${selector}" to be BEM-cased`
      }
    ],
    'selector-pseudo-class-no-unknown': true,
    'selector-pseudo-element-no-unknown': null,
    'selector-type-no-unknown': null,
    'selector-max-compound-selectors': 3,
    'selector-max-specificity': '0,4,0',
    'selector-pseudo-element-colon-notation': 'double',
    'selector-type-case': 'lower',
    'selector-no-vendor-prefix': true,
    'selector-not-notation': 'complex',
    'shorthand-property-no-redundant-values': true,
    'string-no-newline': true,
    'unit-no-unknown': true,
    'value-keyword-case': 'lower',
    'value-no-vendor-prefix': [
      true,
      {
        ignoreValues: ['box', 'inline-box']
      }
    ],

    // stylelint-scss
    'scss/at-each-key-value-single-line': true,
    'scss/at-else-closing-brace-newline-after': 'always-last-in-chain',
    'scss/at-else-if-parentheses-space-before': 'always',
    'scss/at-extend-no-missing-placeholder': true,
    'scss/at-function-parentheses-space-before': 'never',
    'scss/at-mixin-parentheses-space-before': 'never',
    'scss/load-no-partial-leading-underscore': true,
    'scss/at-mixin-argumentless-call-parentheses': 'always',
    'scss/at-rule-no-unknown': true,
    'scss/comment-no-empty': true,
    'scss/no-duplicate-mixins': true,
    'scss/comment-no-loud': true,
    'scss/double-slash-comment-whitespace-inside': 'always',

    // stylelint-order
    'order/order': ['custom-properties', 'declarations']
  }
};

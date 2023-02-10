import stylelint from 'stylelint';

import config from './index.cjs';

// The idea here is to write a test if you have a doubt about a specific rule
// configuration (if it's working as-intended and so on).

async function lint() {
  const [literals] = Array.prototype.slice.call(arguments);
  const code = typeof literals === 'string' ? literals : literals[0];
  const output = await stylelint.lint({ code, config });
  const { output: fixed } = await stylelint.lint({ code, config, fix: true });

  return { ...output, fixed };
}

it('Allows an empty line before an at-rule', async () => {
  const { results } = await lint`
    .class {}

    @media {}
  `;

  expect(results).toHaveBeenParsed();
  expect(results).not.toHaveAnError('at-rule-empty-line-before');
});

it('Allows no empty line before an at-rule', async () => {
  const { results } = await lint`
    .class {
      @keyframes {}
    }
  `;

  expect(results).toHaveBeenParsed();
  expect(results).not.toHaveAnError('at-rule-empty-line-before');
});

it('Accepts scss at-rules', async () => {
  const { results } = await lint`
    $flag: true;

    @if $flag {
      .class {}
    }
  `;

  expect(results).toHaveBeenParsed();
  expect(results).not.toHaveAnError('at-rule-no-unknown');
});

it('Allows a newline after a closing brace', async () => {
  const { results } = await lint`
    a { color: pink; }

    b { color: red; }
  `;

  expect(results).toHaveBeenParsed();
  expect(results).not.toHaveAnError('block-closing-brace-newline-after');
});

it('Disallows empty blocks', async () => {
  const { results } = await lint`
    .class {}
  `;

  expect(results).toHaveBeenParsed();
  expect(results).toHaveAnError('block-no-empty', {
    line: 2,
    column: 12,
    text: 'Unexpected empty block (block-no-empty)'
  });
});

it('Requires color to be lower-case', async () => {
  const { results, fixed } = await lint`
    $color: #FFFFFF;
  `;

  expect(results).toHaveBeenParsed();
  expect(results).toHaveAnError('color-hex-case', {
    line: 2,
    column: 13,
    text: 'Expected "#FFFFFF" to be "#ffffff" (color-hex-case)'
  });
  expect(fixed).toMatchSnapshot();
});

it('Requires color to be short', async () => {
  const { results, fixed } = await lint`
    $color: #ffffff;
  `;

  expect(results).toHaveBeenParsed();
  expect(results).toHaveAnError('color-hex-length', {
    line: 2,
    column: 13,
    text: 'Expected "#ffffff" to be "#fff" (color-hex-length)'
  });
  expect(fixed).toMatchSnapshot();
});

it('Disallows invalid color hex', async () => {
  const { results } = await lint`
    $color: #12345aa;
  `;

  expect(results).toHaveBeenParsed();
  expect(results).toHaveAnError('color-no-invalid-hex', {
    line: 2,
    column: 13,
    text: 'Unexpected invalid hex color "#12345aa" (color-no-invalid-hex)'
  });
});

it('Requires an empty line before a comment', async () => {
  const { results, fixed } = await lint`
    a {}
    /* comment */
  `;

  expect(results).toHaveBeenParsed();
  expect(results).toHaveAnError('comment-empty-line-before', {
    line: 3,
    column: 5,
    text: 'Expected empty line before comment (comment-empty-line-before)'
  });
  expect(fixed).toMatchSnapshot();
});

it('Allows no empty line before a comment when it is first in a nested block', async () => {
  const { results } = await lint`
    a {
      /* comment */
    }
  `;

  expect(results).toHaveBeenParsed();
  expect(results).not.toHaveAnError('comment-empty-line-before');
});

it('Requires whitespaces before and after the comment', async () => {
  const { results, fixed } = await lint`
    /*comment*/
  `;

  expect(results).toHaveBeenParsed();
  expect(results).toHaveAnError('comment-whitespace-inside', {
    line: 2,
    column: 7,
    text: 'Expected whitespace after "/*" (comment-whitespace-inside)'
  });
  expect(fixed).toMatchSnapshot();
});

it('Requires an empty line before custom properties', async () => {
  const { results, fixed } = await lint`
    a {
      top: 10px;
      --foo: pink;
      --bar: red;
    }
  `;

  expect(results).toHaveBeenParsed();
  expect(results).toHaveAnError('custom-property-empty-line-before', {
    line: 4,
    column: 7,
    text: 'Expected empty line before custom property (custom-property-empty-line-before)'
  });
  expect(fixed).toMatchSnapshot();
});

it('Disallows empty comments', async () => {
  const { results } = await lint`
    /**/
  `;

  expect(results).toHaveBeenParsed();
  expect(results).toHaveAnError('comment-no-empty', {
    line: 2,
    column: 5,
    text: 'Unexpected empty comment (comment-no-empty)'
  });
});

it('Disallows shorthand props that override related longhand props', async () => {
  const { results } = await lint`
    a {
      padding-left: 10px;
      padding: 20px;
    }
  `;

  expect(results).toHaveBeenParsed();
  expect(results).toHaveAnError(
    'declaration-block-no-shorthand-property-overrides',
    {
      line: 4,
      column: 7,
      text: 'Unexpected shorthand "padding" after "padding-left" (declaration-block-no-shorthand-property-overrides)'
    }
  );
});

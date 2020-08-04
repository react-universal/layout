import React from 'react';
import Box from './Box';

import renderer from 'react-test-renderer';

test('Example Renders', () => {
  const example = <Box />;
  const tree = renderer.create(example).toJSON();
  expect(tree).toMatchSnapshot();
});

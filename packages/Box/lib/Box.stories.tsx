import React from 'react';
import {View} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import {storiesOf} from '../../../storybook/helpers/storiesOf';
import Theme from '../../../storybook/theme';
import Box from './Box';

type GetStory = () => JSX.Element;

storiesOf('Components | Box', module)
	.addParameters({jest: ['Box']})
	.addDecorator((getStory: GetStory) => (
		<ThemeProvider theme={Theme}>{getStory()}</ThemeProvider>
	))
	.add('Simple', () => (
		<View>
			<Box
				width={100}
				height={100}
				m={[2, 5, 4]}
				bg="primary"
			/>
		</View>
	))
	.add('Nested', () => (
		<View>
			<Box width={200} height={200} bg="primary" justifyContent='center' alignItems='center'>
					<Box width={100} height={100} bg="secondary" justifyContent={'center'} alignItems='center'>
					<Box
						width={50}
						height={50}
						bg={'tertiary'}
					/>
				</Box>
			</Box>
		</View>
	));

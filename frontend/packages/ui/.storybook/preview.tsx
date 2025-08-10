import type { Preview } from "@storybook/react-vite";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { withThemeByClassName } from "@storybook/addon-themes";

const preview: Preview = {
	decorators: [
		(Story) => (
			<ChakraProvider value={defaultSystem}>
				<Story />
			</ChakraProvider>
		),
		withThemeByClassName({
			defaultTheme: "light",
			themes: { light: "", dark: "dark" },
		}),
	],
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},

		a11y: {
			// 'todo' - show a11y violations in the test UI only
			// 'error' - fail CI on a11y violations
			// 'off' - skip a11y checks entirely
			test: "todo",
		},
	},
};

export default preview;

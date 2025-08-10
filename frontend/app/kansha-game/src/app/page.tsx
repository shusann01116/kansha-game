import { Menu } from "@/components/shared/menu";
import { Box, Flex, Text } from "@chakra-ui/react";

export default function Home() {
	return (
		<>
			<Box padding="4" position="sticky" top="0" width="full">
				<Flex justifyContent="space-between" alignItems="center">
					<Text textStyle="3xl">kansha game</Text>
					<Menu />
				</Flex>
			</Box>
			<Box>
				<div>place holder</div>
			</Box>
		</>
	);
}

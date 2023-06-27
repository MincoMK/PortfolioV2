import React from 'react';
import {
	Box,
	Flex,
	Heading,
} from '@chakra-ui/react';
import Nabvbar from './Navbar';
import DarkToggler from './DarkToggler';

interface LayoutProps {
	nonav?: boolean,
	children: React.ReactNode
}

export default function Layout({ nonav, children }: LayoutProps) {
	return (
		<>
			{nonav ?
				<Box
					as="header"
					position="fixed"
					top="20px"
					right="20px"
				>
					<DarkToggler />
				</Box>
			: <Nabvbar />}
			<Box
				as="main"
				w="100%"
				h={nonav?"100%":"calc(100% - 70px)"}
				p={5}
			>
				{children}
			</Box>
		</>
	)
}

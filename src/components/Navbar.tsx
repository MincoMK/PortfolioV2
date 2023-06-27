import React from 'react';
import { Link as ReactLink } from 'react-router-dom';
import {
	Box,
	Flex,
	Heading,
	IconButton,
	useColorModeValue,
	useColorMode,
	Button,
	Link,
} from '@chakra-ui/react';
import logo from '../logo.svg'
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import DarkToggler from './DarkToggler';

export default function Navbar() {
	const { colorMode, toggleColorMode } = useColorMode();
	const bg = useColorModeValue("gray.900", "gray.200");
	const color = useColorModeValue("gray.200", "gray.900");

	return (
		<Flex
			align="center"
			justify="center"
			w="100%"
			h="70px"
			p={2}
		>
			<Flex
				as="nav"
				align="center"
				justify="space-between"
				w="100%"
				h="100%"
				bg={bg}
				borderRadius="10px"
			color={color}
				p={5}
			>
				<Flex>
					<Heading as="h1" size="lg">Minco</Heading>
				</Flex>
				<Flex gap="5">
					<NavLink to="/">Home</NavLink>
					<NavLink to="/info">Info</NavLink>
					<NavLink to="/contact">Contact</NavLink>
				</Flex>
				<Flex>
					<DarkToggler />
				</Flex>
			</Flex>
		</Flex>
	)
}

function NavLink({ children, to }: { to: string, children: React.ReactNode }) {
	return (
		<Link
			as={ReactLink}
			to={to}
			_hover={{
				textDecoration: "none",
				color: "gray.400",
			}}
			marginRight="10px"
		>{children}</Link>
	)
}

import {
	Box,
	Button,
	Flex,
	Heading,
} from '@chakra-ui/react'
import React from 'react'
import Layout from '../components/Layout'
import side from '../side.svg'
import styled from '@emotion/styled'
import { AddIcon, PhoneIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'

const SideImg = styled.img`
	width: auto;
	height: 100vh;
	position: absolute;
	right: 0;
	top: 0;
	z-index: -1;
`

export default function Home() {
	const navigate = useNavigate();

	return (
		<>
			<Layout nonav>
				<Flex
					w="50%"
					h="100%"
					align="center"
					justify="center"
				>
					<Box mt="10px">
						<p><Heading as="h1" size="lg" fontWeight="light">Hey! My name is</Heading></p>
						<p><Heading as="h1" size="4xl">Minco,</Heading></p>
						<p><Heading as="h1" size="lg" fontWeight="light">a full stack developer.</Heading></p>
						<Box mt="20px">
							<Button onClick={()=>navigate("/info")} mr="10px" colorScheme="telegram" leftIcon={<AddIcon />}>More Information</Button>
							<Button onClick={()=>navigate("/contact")} colorScheme="yellow" leftIcon={<PhoneIcon />}>Contact</Button>
						</Box>
					</Box>
				</Flex>
			</Layout>
			<Box>
				<SideImg src={side} alt="side" />
			</Box>
		</>
	)
}

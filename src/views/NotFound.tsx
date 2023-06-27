import { Flex, Heading, Box, Button } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'

export default function NotFound() {
	const navigate = useNavigate()

	return (
		<Layout>
			<Flex
				w="100%"
				h="100%"
				flexDir="column"
				align="center"
				justify="center"
			>
				<p><Heading as="h1" fontSize="200px">Oops!</Heading></p>
				<p><Heading as="h1" size="lg">404 - NOT FOUND</Heading></p>
				<Box>
					<Button mt="20px" onClick={()=>window.history.back()} colorScheme="teal">Go Back</Button>
				</Box>
			</Flex>
		</Layout>
	)
}

import {
    Button,
	Flex,
	FormControl,
	FormLabel,
	Heading,
	Input,
	useColorModeValue,
} from "@chakra-ui/react"
import React from "react"
import { Form } from "react-router-dom"
import Layout from "../components/Layout"
export default function Avg() {
	const [result, setResult] = React.useState('')

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()
		const form = e.currentTarget
		const sum = form["sum"].value
		setResult((sum * 0.1256181).toFixed(2))
	}

	return (
		<Layout>
			<Flex align="center" justify="center" h="100%">
				<Flex
					w="500px"
					h="400px"
					bg={useColorModeValue("gray.300", "gray.700")}
					borderRadius="25px"
					p="25px"
				>
					<form onSubmit={handleSubmit}>
						<Heading>해강 평균</Heading>
						<FormControl mb="10px">
							<FormLabel>전과목 점수 총합</FormLabel>
							<Input type="number" name="sum" />
						</FormControl>
						<Button colorScheme={useColorModeValue('teal', 'yellow')} type="submit" mb="20px">계산</Button>
						<Heading as="h3" size="md">결과: {result}</Heading>
					</form>
				</Flex>
			</Flex>
		</Layout>
	)
}

import React from 'react';
import {
	Box,
	Flex,
	FormControl,
	FormHelperText,
	FormLabel,
	Heading,
    Input,
	Button,
    Link,
    IconButton,
	Tooltip
} from '@chakra-ui/react';
import Layout from '../components/Layout';
import { BsDiscord, BsGithub } from 'react-icons/bs';
import { AiFillMail } from 'react-icons/ai';

export default function Contact() {

	return (
		<Layout>
			<Flex
				w="100%"
				h="100%"
				flexDir="column"
				align="center"
				justify="center"
			>
				<form>
					<FormControl>
						<FormLabel>Name</FormLabel>
						<Input type="text" name="username" />
					</FormControl>
					<FormControl>
						<FormLabel>Message</FormLabel>
						<Input type="text" name="message" />
						<FormHelperText>You can send various short messages with this form.</FormHelperText>
					</FormControl>
					<Button mt="20px" type="submit" colorScheme="yellow">Send</Button>
				</form>
				<Flex mt="10px" gap="10px">
					<Tooltip label="Discord: mincomk">
						<IconButton
							onClick={()=>open("https://discord.com/users/590826711147347973", "_blank")}
							icon={<BsDiscord />}
							aria-label="Discord"
						/>
					</Tooltip>
					<Tooltip label="GitHub: MincoMK">
						<IconButton
							onClick={()=>open("https://github.com/MincoMK", "_blank")}
							icon={<BsGithub />}
							aria-label="GitHub"
						/>
					</Tooltip>
					<Tooltip label="E-Mail: me@mincomk.com">
						<IconButton
							onClick={()=>open("mailto:me@mincomk.com", "_blank")}
							icon={<AiFillMail />}
							aria-label="E-Mail"
						/>
					</Tooltip>
				</Flex>
			</Flex>
		</Layout>
	)
}

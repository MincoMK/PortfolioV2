import { IconButton, useColorMode } from "@chakra-ui/react"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import React from "react"

export default function DarkToggler() {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<IconButton
			aria-label="Toggle color mode"
			icon={ colorMode === "light" ? (<MoonIcon />) : (<SunIcon />) }
			onClick={toggleColorMode}
			colorScheme={colorMode === "light" ? "yellow" : "teal"}
		/>
	)
}

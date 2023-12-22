import { extendTheme,ThemeConfig } from "@chakra-ui/react";

const config:ThemeConfig={
    initialColorMode:"dark",
    useSystemColorMode:false
}

const theme =extendTheme({config,
    colors:{
        gray:{
            50:"#f9f9f9",
            100:"#ededed",
            200:"#d3d3d3",
            300:"#b0b1b2",
            400:"#a0a1a2",
            500:"#898887",
            600:"#676665",
            700:"#212223",
            800:"#121212",
            900:"#111",
        }
    }})

export default theme;
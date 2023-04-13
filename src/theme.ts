import {extendTheme,ThemeConfig} from "@chakra-ui/react";
// function , interface

const config: ThemeConfig = {
    initialColorMode :'dark'
    // useSystemColorMode:true,
};

const theme = extendTheme({config});

export default theme;
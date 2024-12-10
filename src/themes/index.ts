import bg_login from '../assets/images/login.png'

export const Light = {
    colors: {
        bg: "#FFFFFF",
        bg2: "#FAFAFA",
        text: "#383838",
        text2: "#838383",
        primary: "#FFFFFF",
        red: "#C00003",
        redStrong: "#FF0029",
    },
    images: {
        bg_login: bg_login
    }
};

export const Dark = {
    colors: {
        bg: "#121212",
        bg2: "#1A1919",
        text: "#FFFFFF",
        text2: "#747373",
        primary: "#FFFFFF",
        red: "#C00003",
        redStrong: "#FF0029",
    },
    images: {
        bg_login: bg_login
    }
}

export type ThemeType = typeof Light;
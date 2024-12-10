import bg_login from '../assets/images/login.png'

export const Light = {
    colors: {
        bg: "#FFFFFF",
        text: "#383838",
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
        bg: "##121212",
        text: "#FFFFFF",
        primary: "#FFFFFF",
        red: "#C00003",
        redStrong: "#FF0029",
    },
    images: {
        bg_login: bg_login
    }
}

export type ThemeType = typeof Light;
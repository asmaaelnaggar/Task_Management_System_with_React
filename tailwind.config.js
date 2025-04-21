import { coolGray, lightBlue, rose, fuchsia } from 'tailwindcss/colors'

export const theme = {
    colors: {
        gray: coolGray,
        blue: lightBlue,
        red: rose,
        pink: fuchsia,
    },
    fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
    },
    extend: {
        spacing: {
            '128': '32rem',
            '144': '36rem',
        },
        borderRadius: {
            '4xl': '2rem',
        }
    }
}
export const variants = {
    extend: {
        borderColor: ['focus-visible'],
        opacity: ['disabled'],
    }
}
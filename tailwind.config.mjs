/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
		  sans: ['Inter var', ...defaultTheme.fontFamily.sans],
		},
    colors: {
      bve_peach: '#f7d2bc',
      bve_green: '#cee5d8',
      bve_white: '#fcfcfc',
      bve_peach: '#f7d2bc',
      bve_gray: '#6d5d6f',
      bve_red: '#e04834',
      bve_red: {
        light: '#e06854',
        DEFAULT: '#e04834',
        dark: '#c03824',
        faint: '#f7e2cc',
      },
      bve_red__light: '#e07864',
      bve_red__dark: '#c03824',
      bve_blue: '#427f94',
      ...colors
    }
	},
	plugins: [
		require('@tailwindcss/forms'),
	],
}

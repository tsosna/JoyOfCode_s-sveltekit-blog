import { browser } from "$app/environment"
import { writable } from "svelte/store"

type Theme = 'light' | 'dark'

const userTheme = browser && localStorage.getItem('color-scheme')

console.log(userTheme)

export const theme = writable(userTheme ?? 'dark')

export const toggleTcheme = () => {
  theme.update((currentTheme) => {
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark'
    document.documentElement.setAttribute('color-scheme', newTheme)
    localStorage.setItem('color-scheme', newTheme)
    return newTheme
  })
}

export const setTheme = (newTheme: Theme) => {
  theme.set(newTheme)
}



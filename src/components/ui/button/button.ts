import { cva } from 'class-variance-authority'

export const buttonVariants = cva('*ifcc text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:cursor-not-allowed disabled:opacity-50', {
    variants: {
        size: {
            sm: 'space-x-1.5',
            md: 'space-x-1.5',
            lg: 'space-x-2',
        },
        variant: {
            primary: 'text-white bg-indigo-600 active:bg-indigo-700 hover:bg-indigo-500',
            secondary: 'bg-white dark:bg-white/10 active:bg-gray-200 dark:active:bg-white/5 hover:bg-gray-50 dark:hover:bg-white/20 ring-1 dark:ring-0 ring-inset ring-gray-300',
            soft: 'text-indigo-600 bg-indigo-50 dark:bg-indigo-600/10 active:bg-indigo-200 dark:active:bg-indigo-600/5 hover:bg-indigo-100 dark:hover:bg-indigo-600/20',
            ghost: 'text-indigo-600 bg-transparent active:bg-indigo-100 dark:active:bg-indigo-600/5 hover:bg-indigo-50 dark:hover:bg-indigo-600/20',
        },
        shape: {
            square: '',
            rounded: '',
            circle: '',
        },
    },
    compoundVariants: [
        // Border radius
        { shape: ['rounded', 'circle'], class: 'rounded-full' },
        { size: 'sm', shape: 'square', class: 'rounded' },
        { size: ['md', 'lg'], shape: 'square', class: 'rounded-md' },

        // Spacing
        { size: 'sm', shape: ['square', 'rounded'], class: 'px-2 py-1' },
        { size: 'sm', shape: 'circle', class: 'p-1' },
        { size: 'md', shape: ['square', 'rounded'], class: 'px-2.5 py-1.5' },
        { size: 'md', shape: 'circle', class: 'p-1.5' },
        { size: 'lg', shape: ['square', 'rounded'], class: 'px-3 py-2' },
        { size: 'lg', shape: 'circle', class: 'p-2' },
    ],
})

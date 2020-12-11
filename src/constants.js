import TailwindConfig from '../tailwind.config'

/* MEDIA SETTINGS */
const matchedMedia = matchMedia('(prefers-reduced-motion: no-preference)');
const hasMotion = matchedMedia.matches;


/* TAILWIND CONFIG */
const SCREENS_PX = TailwindConfig.theme.screens

//strip 'px' from items
const SCREENS = Object.keys(TailwindConfig.theme.screens).reduce((acc, item) => {
    acc[item] = parseInt(TailwindConfig.theme.screens[item])
    return acc
}, {})



export {
    SCREENS_PX,
    SCREENS,
    hasMotion
}
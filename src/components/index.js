import Vue from 'vue'
import ScrollNotify from "./scrollNotify/scrollNotify.component"
import Button from './button/button.component'
import HeroImage from './heroImage/heroImage.component'

Vue.component(ScrollNotify.name, ScrollNotify)
Vue.component(Button.name, Button)
Vue.component(HeroImage.name, HeroImage)


export {
    ScrollNotify,
    Button,
    HeroImage
}


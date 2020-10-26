import Vue from 'vue'
import ScrollNotify from "./scrollNotify/scrollNotify.component"
import Button from './button/button.component'

Vue.component(ScrollNotify.name, ScrollNotify)
Vue.component(Button.name, Button)


export {
    ScrollNotify,
    Button
}


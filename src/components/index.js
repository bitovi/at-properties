import Vue from 'vue'
import ScrollNotify from "./scrollNotify/scrollNotify.component"
import Button from './button/button.component'
import ProfileImage from './profileImage/profileImage.component'

Vue.component(ScrollNotify.name, ScrollNotify)
Vue.component(Button.name, Button)
Vue.component(ProfileImage.name, ProfileImage)


export {
    ScrollNotify,
    Button,
    ProfileImage
}


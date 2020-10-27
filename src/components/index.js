import Vue from 'vue'
import ScrollNotify from "./scrollNotify/scrollNotify.component"
import Button from './button/button.component'
import ProfileImage from './profileImage/profileImage.component'
import Rating from './rating/rating.component'
import Testimonial from './testimonial/testimonial.component'

Vue.component(ScrollNotify.name, ScrollNotify)
Vue.component(Button.name, Button)
Vue.component(ProfileImage.name, ProfileImage)
Vue.component(Rating.name, Rating)
Vue.component(Testimonial.name, Testimonial)


export {
    ScrollNotify,
    Button,
    ProfileImage,
    Rating,
    Testimonial
}


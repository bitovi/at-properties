import Vue from 'vue'
import ScrollNotify from "./scrollNotify/scrollNotify.component"
import Button from './button/button.component'
import Nav from './nav/nav.component'
import ProfileImage from './profileImage/profileImage.component'
import Rating from './rating/rating.component'
import Testimonial from './testimonial/testimonial.component'
import SalesCard from './salesCard/salesCard.component'

Vue.component(ScrollNotify.name, ScrollNotify)
Vue.component(Button.name, Button)
Vue.component(Nav.name, Nav)
Vue.component(ProfileImage.name, ProfileImage)
Vue.component(Rating.name, Rating)
Vue.component(Testimonial.name, Testimonial)
Vue.component(SalesCard.name, SalesCard)


export {
    ScrollNotify,
    Button,
    Nav,
    ProfileImage,
    Rating,
    Testimonial,
    SalesCard
}


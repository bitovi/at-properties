import Vue from 'vue'
import ScrollNotify from "./scrollNotify/scrollNotify.component"
import Button from './button/button.component'
import Nav from './nav/nav.component'
import ProfileImage from './profileImage/profileImage.component'
import Rating from './rating/rating.component'
import Testimonial from './testimonial/testimonial.component'
import SalesCard from './salesCard/salesCard.component'
import SlideIn from './slideIn/slideIn.component'
import CloseBtn from './close/close.component';

Vue.component(ScrollNotify.name, ScrollNotify)
Vue.component(Button.name, Button)
Vue.component(Nav.name, Nav)
Vue.component(ProfileImage.name, ProfileImage)
Vue.component(Rating.name, Rating)
Vue.component(Testimonial.name, Testimonial)
Vue.component(SalesCard.name, SalesCard)
Vue.component(SlideIn.name, SlideIn)
Vue.component(CloseBtn.name, CloseBtn)


export {
    ScrollNotify,
    Button,
    Nav,
    ProfileImage,
    Rating,
    Testimonial,
    SalesCard,
    SlideIn,
    CloseBtn
}


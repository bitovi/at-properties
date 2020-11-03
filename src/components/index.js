import Vue from 'vue'
// import ScrollNotify from "./scrollNotify/scrollNotify.component"
// import Button from './button/button.component'
import Photo from './photo/photo.component'
import Rating from './rating/rating.component'
import Testimonial from './testimonial/testimonial.component'
import Social from './social/social.component'

// Vue.component(ScrollNotify.name, ScrollNotify)
// Vue.component(Button.name, Button)
Vue.component(Photo.name, Photo)
Vue.component(Rating.name, Rating)
Vue.component(Testimonial.name, Testimonial)
Vue.component(Social.name, Social)

export {
    // ScrollNotify,
    // Button,
    Photo,
    Rating,
    Testimonial,
    Social
}
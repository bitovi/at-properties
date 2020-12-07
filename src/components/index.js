import Vue from 'vue'
import ScrollNotify from "./scrollNotify/scrollNotify.component"
import Button from './button/button.component'
import Nav from './nav/nav.component'
import Figure from './figure/figure.component'
import Rating from './rating/rating.component'
import Testimonial from './testimonial/testimonial.component'
import SalesCard from './salesCard/salesCard.component'
import CloseBtn from './close/close.component'
import TitlePage from './title/title.page'
import DisplayCard from './displayCard/displayCard.component'
import Social from './social/social.component'
import BioCard from './bioCard/bioCard.component.vue'
import Carousel from './carousel/carousel.component.vue'
import FlatScroll from './flatScroll/flatScroll.component.vue'

import Transition from './transition/transition.component.vue'

//Modals
import SlideIn from './modals/slideIn/slideIn.component'
import VideoModal from './modals/videoModal/videoModal.component.vue'

Vue.component(ScrollNotify.name, ScrollNotify)
Vue.component(Button.name, Button)
Vue.component(Nav.name, Nav)
Vue.component(Figure.name, Figure)
Vue.component(Rating.name, Rating)
Vue.component(Testimonial.name, Testimonial)
Vue.component(SalesCard.name, SalesCard)
Vue.component(SlideIn.name, SlideIn)
Vue.component(CloseBtn.name, CloseBtn)
Vue.component(TitlePage.name, TitlePage)
Vue.component(DisplayCard.name, DisplayCard)
Vue.component(Social.name, Social)
Vue.component(VideoModal.name, VideoModal)
Vue.component(BioCard.name, BioCard)
Vue.component(Carousel.name, Carousel)

Vue.component(Transition.name, Transition)

Vue.component(FlatScroll.name, FlatScroll)


export {
    ScrollNotify,
    Button,
    Nav,
    Figure,
    Rating,
    Testimonial,
    SalesCard,
    SlideIn,
    CloseBtn,
    TitlePage,
    DisplayCard,
    Social,
    VideoModal,
    BioCard,
    Carousel,
    Transition,
    FlatScroll
}


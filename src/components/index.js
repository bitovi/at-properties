import Vue from 'vue'
import Button from './button/button.component'
import Nav from './nav/nav.component'
import Figure from './figure/figure.component'
import Rating from './rating/rating.component'
import TitlePage from './title/title.page'
import Social from './social/social.component'
import Carousel from './carousel/carousel.component.vue'
// import FlatScroll from './flatScroll/flatScroll.component.vue'
import Timeline from './timeline/timeline.component.vue'
import TimelineItem from './timeline/timelineItem.component.vue'

import Transition from './transition/transition.component.vue'

//Modals
import {
    AppearModal,
    VideoModal
} from './modals'


//Cards
import {
    BioCard,
    DisplayCard,
    VideoCard,
    PropertyCard,
    TestimonialCard
} from './cards'

//install modals
Vue.component(AppearModal.name, AppearModal)
Vue.component(VideoModal.name, VideoModal)

//install cards
Vue.component(BioCard.name, BioCard)
Vue.component(DisplayCard.name, DisplayCard)
Vue.component(VideoCard.name, VideoCard)
Vue.component(PropertyCard.name, PropertyCard)
Vue.component(TestimonialCard.name, TestimonialCard)

Vue.component(Button.name, Button)
Vue.component(Nav.name, Nav)
Vue.component(Figure.name, Figure)
Vue.component(Rating.name, Rating)

Vue.component(TitlePage.name, TitlePage)

Vue.component(Social.name, Social)

Vue.component(Carousel.name, Carousel)
// Vue.component(FlatScroll.name, FlatScroll)
Vue.component(Timeline.name, Timeline)
Vue.component(TimelineItem.name, TimelineItem)

Vue.component(Transition.name, Transition)



export {
    Button,
    Nav,
    Figure,
    Rating,
    TestimonialCard,
    AppearModal,
    TitlePage,
    DisplayCard,
    Social,
    VideoModal,
    BioCard,
    Carousel,
    Timeline,
    TimelineItem,
    Transition,
    // FlatScroll,
    VideoCard
}


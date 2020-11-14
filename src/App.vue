<template>
  <div id="app">
    <header>
      <Nav />
    </header>
    <main class="dlp-main">
      <TitleContainer />
      <article id="agent">
        <AgentContainer />
      </article>
      <article id="co-agent">
        <CoagentContainer />
      </article>
      <article id="team">
        <TeamContainer />
      </article>
      <article id="company">
        <TitlePage 
          :backgroundUrl="`${publicPath}images/bg/bg-company.jpg`"
          heading="Every home has a story" 
          subheading="Company Profile" />
        <CompanyContainer />
      </article>
      <article id="marketing">
        <TitlePage 
          :backgroundUrl="`${publicPath}images/bg/bg-marketing.jpg`"
          heading="Marketing your home" 
          subheading="Marketing Plan" />
        <MarketingContainer />
      </article>
      <article id="selling">
        <TitlePage 
          :backgroundUrl="`${publicPath}images/bg/bg-selling.jpg`"
          heading="Selling your home"/>
        <SellingContainer />
      </article>
      <article id="partners">
        <TitlePage 
          :backgroundUrl="`${publicPath}images/bg/bg-partners.jpg`"
          heading="Our Partners"
          subheading="all working as a team, through every step of the transaction."/>
        <PartnerContainer />
      </article>
      <footer id="contact">
        <ContactContainer />
      </footer>
    </main>
  </div>
</template>

<script>
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";

import Nav from './components/nav/nav.component.vue'
import TitleContainer from './containers/title.container.vue'
import AgentContainer from './containers/agent.container.vue'
import CoagentContainer from './containers/coagent.container.vue'
import TeamContainer from './containers/team.container.vue'
import CompanyContainer from './containers/company.container.vue'
import MarketingContainer from './containers/marketing.container.vue'
import SellingContainer from './containers/selling.component.vue'
import PartnerContainer from './containers/partner.container.vue'
import ContactContainer from './containers/contact.container.vue'

import TitlePage from './components/title/title.page.vue'

import './assets/base.styles.scss'


export default {
  name: 'App',
  components: {
    Nav,
    TitleContainer,
    AgentContainer,
    CoagentContainer,
    TeamContainer,
    CompanyContainer,
    MarketingContainer,
    SellingContainer,
    PartnerContainer,
    ContactContainer,

    TitlePage
  },
  data(){
      return {
          publicPath: process.env.BASE_URL
      }
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger);
    // gsap.from("#company .bg", {
    //     // yPercent: 50,
    //     // ease: "none",
    //     // duration: 5,
    //     transform: 'perspective(100px) translate3d(0, 0, 0px)',
    //     opacity: 1,
    //     // x: 300,
    //     // onUpdate() {
    //     //   // also onStart, onComplete
    //     //   // console.log('update');
    //     // },
    //     scrollTrigger: {
    //         trigger: "#company hgroup",
    //     //     // start: "top bottom", // the default values
    //         end: "bottom top",
    //         scrub: true
    //     },
    // });
    const elSelector = '#company hgroup';
    const el = document.querySelector(elSelector);
    const elOffsetH = el.offsetHeight;

    gsap.from(el, {
      ease: 'sine-inOut',
      duration: 1.5,
      transform: 'perspective(100px) translate3d(0, 300px, 0)',
      opacity: 0,
      scrollTrigger: {
        trigger: el,
        start() {
          return `top bottom-=${elOffsetH}px`
        }, // the default values trigger scroller
        end() {
          return `50%-${elOffsetH} 50%`
        }, // triggger scroller
        scrub: true,
        markers: true,
      },
    });
  },
}
</script>

<style>
#app {
  min-height: 100%;
}
</style>

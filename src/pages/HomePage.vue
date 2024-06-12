<template>
    <div class="">
        <!-- <DashboardNav /> -->
        <!-- <TopNav /> -->
        <Banner v-observe />
        <div class="" id="second">
            <LeadManagement v-observe />
        </div>
        <div class="">
            <RequestDemo v-observe />
        </div>
        <div class="">
            <WhyChooseUs v-observe />
        </div>
        <!-- <div class="">
            <ImageWithText :title="title1" :description="description1" :image="image1" :points="false" />
        </div> -->

        <div class="">
            <KycSection v-observe />
        </div>
        <div class="">
            <PriceSection v-observe />
        </div>
        <div class="">
            <ImageWithText :title="title3" :description="description3" :image="image3" :points="true" v-observe />
        </div>
        <div class="">
            <SalesFunnel v-observe />
        </div>
        <div class="">
            <CounterSection v-observe />
        </div>
        <div class="">
            <SucessSection v-observe />
        </div>
        <!-- <div class="">
            <OurFeatures />
        </div> -->
        <!-- <div class="">
            <MoveToSuccess />
        </div> -->

        <div class="">
            <TestSection v-observe />
        </div>


        <div class="">
            <FaqSection v-observe />
        </div>
        <div class="">
            <WayToShare v-observe />
        </div>


        <FooterBar v-observe />
    </div>
</template>

<script>
import Banner from '@/components/landing/Banner.vue'
import KycSection from '@/components/landing/KycSection.vue'
import SucessSection from '@/components/landing/SucessSection.vue'
import CounterSection from '@/components/landing/CounterSection.vue'
import FooterBar from '@/components/landing/FooterBar.vue'
import TestSection from '@/components/landing/TestSection.vue'
// import OurFeatures from '@/components/landing/OurFeatures.vue'
import WayToShare from '@/components/landing/WayToShare.vue'
import ImageWithText from '@/components/landing/ImageWithText.vue'
// import DashboardNav from '@/components/DashboardNav.vue'
// import TopNav from '@/components/landing/TopNav.vue'
// import MoveToSuccess from '@/components/landing/MoveToSuccess.vue'
import FaqSection from '@/components/landing/FaqSection.vue'
import LeadManagement from '@/components/landing/LeadManagement.vue'
import WhyChooseUs from '@/components/landing/WhyChooseUs.vue'
import PriceSection from '@/components/landing/PriceSection.vue'
import SalesFunnel from '@/components/landing/SalesFunnel.vue'
import RequestDemo from '@/components/landing/RequestDemo.vue'

export default {
    name: 'HomePage',
    components: {
        Banner,
        KycSection,
        SucessSection,
        CounterSection,
        FooterBar,
        TestSection,
        // OurFeatures,
        WayToShare,
        ImageWithText,
        // DashboardNav,
        // MoveToSuccess,
        FaqSection,
        LeadManagement,
        WhyChooseUs,
        PriceSection,
        SalesFunnel,
        RequestDemo,
        // TopNav,
    },
    data() {
        return {
            title1: "Why do you need a lead management system?",
            description1: "Leads are the lifeline of your business. The more leads you generate, the more leads you impress,and the more your business grows! Every business needs a streamlined system for acquiring,nurturing, and successfully converting leads.",
            image1: "img/whychoose.svg",

            title2: "You do the hard Work.We just want to help out in our small way.",
            description2: "Registered non-profit organizations are eligible for a 50% discount on Twist",
            image2: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRSz50BTImU58OGe8b4grAn32srbKo1ON7OhOwZ7mcxp7HK7Ixl",

            title3: "Lead Automation & distribution",
            description3: "Leads are the lifeline of your business. The more leads you generate, the more leads you impress,and the more your business grows! Every business needs a streamlined system for acquiring,nurturing, and successfully converting leads.",
            image3: "https://cfw42.rabbitloader.xyz/eyJjIjp0cnVlLCJoIjoiY3JhdGlvY3JtLmNvbSIsInYiOjE4ODg5ODM4NDgsImkiOiI0YmM3Y2E5OS1mMWRiLTQ1ODctYTc1NS02MGJiYzE0NmE0MDAifQ/wp-content/uploads/2023/09/Funnel-Image.png",
        }
    }
}
</script>

<style>
/* You can put the CSS classes here too */
.before-enter {
    opacity: 0;
    transform: translateY(40px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.enter {
    opacity: 1;
    transform: translateY(0);
}
</style>

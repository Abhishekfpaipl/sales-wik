<template>
    <div class="my-5 pb-5" style="background: linear-gradient(112deg, rgba(1,76,117,1) 0%, rgba(240,27,70,1) 100%);">
        <div class="container">
            <h1 class="text-center py-5 text-capitalize text-white">sales funnel</h1>
            <div class="row m-0 gy-2 mb-4">
                <div v-for="(demo, index) in demos" :key="index" class="col-12 col-lg-4">
                    <div class="card p-3 ">
                        <router-link :to="demo.link" class="text-decoration-none text-dark">
                            <div class="d-flex justify-content-center align-items-center">
                                <i class="bi bi-play-circle fs-1"></i>
                                <!-- <img :src="demo.img" width="120" class=""> -->
                            </div>
                            <h3 class=" text-center">{{ demo.head }}</h3>
                            <p class="text-center w-100">{{ demo.text }}</p>
                            <button class="btn btn-danger">Preview</button>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'KycSection',
    data() {
        return {
            demos: [
                {
                    id: 1,
                    img: 'img/registration.png',
                    head: 'Demo 1',
                    link: '/demo-page1'
                },
                {
                    id: 2,
                    img: 'img/1.png',
                    head: 'Demo 2',
                    link: '/demo-page2'
                },
                {
                    id: 3,
                    img: 'img/2.png',
                    head: 'Demo 3',
                    link: '/demo-page3'
                },
            ],

        }
    },
}
</script>
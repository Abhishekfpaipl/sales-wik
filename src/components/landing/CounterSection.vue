<template>
    <div>
        <div class="p-5" style="background-color: #014c75;">
            <div class="d-flex justify-content-center">
                <h1 class="text-white text-center">The numbers add up with SalesWik CRM</h1>
            </div>
            <div class="text-white d-md-flex justify-content-between mt-4 ">
                <div class="text-center fw-bold">
                    <p class="m-0 d-flex justify-content-center align-items-center" style="font-size: 50px;">
                        <AutoCounter :data="300"> </AutoCounter>&nbsp;%
                    </p>
                    <p class="fs-5 mt-0">Improvement in lead conversion rates.</p>
                </div>
                 <div class="text-center fw-bold">
                    <p class="m-0 d-flex justify-content-center align-items-center" style="font-size: 50px;">
                        <AutoCounter :data="40"> </AutoCounter>&nbsp;%
                    </p>
                    <p class="fs-5 mt-0">Revenue increase per salesperson.</p>
                </div>
                <div class="text-center fw-bold">
                    <p class="m-0 d-flex justify-content-center align-items-center" style="font-size: 50px;">
                        <AutoCounter :data="30"> </AutoCounter>&nbsp;%
                    </p>
                    <p class="fs-5 mt-0">Improvement in customer retention.</p>
                </div>
                <div class="text-center fw-bold">
                    <p class="m-0 d-flex justify-content-center align-items-center" style="font-size: 50px;">
                        <AutoCounter :data="40"> </AutoCounter>&nbsp;%
                    </p>
                    <p class="fs-5 mt-0">Shorter sales cycles.</p>
                </div>
                <!-- <div class="text-center fw-bold">
                    <p class=" m-0 d-flex justify-content-center align-items-center" style="font-size: 50px;">
                        <AutoCounter :data="900"> </AutoCounter>&nbsp;+
                    </p>
                    <p class="fs-5 mt-0 d-flex justify-content-center">Daily Cities</p>
                </div>  -->
            </div>
        </div>
    </div>
</template>
<script>
import AutoCounter from '@/components/AutoCounter.vue'
export default {
    name: 'CounterSection',
    components: {
        AutoCounter
    }
}
</script>
<style lang="">

</style>
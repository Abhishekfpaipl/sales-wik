<template>
    <div>
        <div class="d-flex align-items-center gap-3 bg-light position-fixed top-0 w-100 p-2 border-bottom" style="z-index: 999;">
            <router-link to="/" class="text-decoration-none text-dark d-flex align-items-center">
                <img :src="`${publicPath}${img}`" style="width: 60px;object-fit: contain;">
                <div class="d-flex flex-column">
                    <span class="ms-2 fw-bold fs-4">Saleswik </span>
                    <small class="smaller text-end text-muted" style="margin-top: -4px;">Let's Get Wicked</small>
                </div>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    name: "TopNav",
    data() {
        return {
            publicPath: process.env.BASE_URL,
            img: "img/logo.png",
        }
    },
}
</script>
<style lang="">

</style>
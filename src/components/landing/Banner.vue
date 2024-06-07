<template lang="">
    <div>
        <div class="d-md-flex d-lg-flex justify-content-center align-items-center w-100 pt-2">
            <div class="d-flex flex-column justify-content-center align-items-center">
                <div class="text-center"> 
                    <p class="fs-1 fw-bold m-0 ">SalesWik</p>
                </div>
                <h3 class="text-center mt-3">Streamline Your Lead Management.</h3>
                <small>Convert curious prospects into loyal customers</small>
                <ol class="list-group list-group-numbered list-group-flush my-3">
                    <li class="list-group-item text-start"> Capture leads from multiple sources.</li>
                    <li class="list-group-item text-start"> Properly nurture each lead.</li>
                    <li class="list-group-item text-start">Maximize lead conversion.</li>
                    <li class="list-group-item text-start"> Boost sales and productivity.</li> 
                </ol>
                
                <RouterLink to="/">
                    <div class="btn btn-dark my-4 fs-5 fw-bold">
                        Get Started 
                    </div>
                </RouterLink>
                <a href="#second"><i class="bi bi-chevron-down fs-1  "></i></a>
            </div>
            <div class="d-flex justify-content-center align-items-center pt-5">
                <div class="rounded-circle" style="width:800px; max-width:50%">
                    <img src="img/landinglogo.png" class="w-100" >
                </div>
            </div>
        </div> 
    </div>
</template>
<script>
export default {
    name: 'BannerComp',
}
</script>
<style lang="">

</style>
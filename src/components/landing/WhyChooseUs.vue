<template>
    <div class="my-5 py-3" style="background-color: var(--bg-primary);">
        <div class="container">
            <div class="row d-flex align-items-start rounded-md-5 rounded-0 p-md-5 p-3 text-dark">
                <div class="col-12 col-md-6 text-center text-md-start">
                    <h1 class="text-white mb-3">{{ title }}</h1>
                    <div v-for="(link, index) in test" :key="index" class="d-flex text-center text-white my-2">
                        <i class="bi bi-check-square-fill me-2"></i>
                        <p class="mb-0">{{ link }}</p>
                    </div>
                </div>
                <div class="col-12 col-md-6 d-flex flex-column mt-5 mt-md-0">
                    <h1 class="text-capitalize text-white text-start">Book A free Demo</h1>
                    <form @submit.prevent="submitQuery()" class="mt-3 row g-3 needs-validation" novalidate>
                        <div class="w-100 form-floating mt-2">
                            <input type="text" class="form-control" placeholder="Mobile" v-model="name" required>
                            <label for="floatingInput" class="text-muted ms-2">First name</label>
                        </div>
                        <div class="w-100 form-floating mt-2">
                            <input type="text" class="form-control" placeholder="Mobile" v-model="email" required>
                            <label class="ms-2 text-muted">Email.</label>
                        </div>
                        <div class="w-100 form-floating mt-2">
                            <input type="tel" class="form-control" placeholder="Mobile" v-model="number" required>
                            <label class="ms-2 text-muted">Mobile No.</label>
                        </div>
                        <div class="w-100 form-floating mt-2">
                            <input type="text" class="form-control" placeholder="Mobile" v-model="businessName"
                                required>
                            <label class="ms-2 text-muted">Business Name.</label>
                        </div>

                        <div class="col-12">
                            <button class="btn btn-danger py-2 fs-5 w-100" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'WhyChooseUs',
    data() {
        return {
            title: "Why Choose Us",
            test: [
                "Ensure Zero Lead Leakage",
                "No Missing Follow - ups",
                "Increase 100 - 200 % Additional Sales",
                "Cost effective",
                "Secured Plateform",
                "Free support",
                "Modern Interface",
                "Easy Setup & Fast Adoption",
            ],
            name: "",
            email: "",
            number: "",
            businessName: "",
        }
    }
}
</script>
<style lang="">

</style>
<template>
    <div class="my3 py-3">
        <div class="container">
            <h1 class="text-center text-capitalize mb-5">#1 Lead management software to automate your lead journey</h1>
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                <div class="col card p-3" v-for="(lead, index) in leads" :key="index">
                    <img :src="lead.image" class="card-img-top" alt="image" style="width: 48px;">
                    <div class="card-body px-0">
                        <h5 class="card-title text-start">{{ lead.title }}</h5>
                        <p class="card-text text-start">{{ lead.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "LeadManagement",
    data() {
        return {
            leads: [
                {
                    id: 1,
                    image: "https://ppc.leadsquared.com/wp-content/uploads/sites/2/2023/10/chat-bubble-user-1.svg",
                    title: "Lead capture automation",
                    description: "Capture leads from all sources- website, facbook, google, lead providers, referrals - onto one platform with zero leakage.",
                },
                {
                    id: 2,
                    image: "https://ppc.leadsquared.com/wp-content/uploads/sites/2/2023/10/teams-1.svg",
                    title: "Lead distribution",
                    description: "Easily track and distribute leads between your teams based on requirements or other dynamic criteria.",
                },
                {
                    id: 3,
                    image: "https://ppc.leadsquared.com/wp-content/uploads/sites/2/2023/10/add-account-1.svg",
                    title: "Quality & engagement scoring",
                    description: "Auto-qualify leads based on pre-defined rules. Assign scores based on actions they take. Like - website visits, emails opens, link clicks, inquiries, etc",
                },
                {
                    id: 4,
                    image: "https://ppc.leadsquared.com/wp-content/uploads/sites/2/2023/10/marketing-automation-1.svg",
                    title: "Sales & marketing automation",
                    description: "Automate sales processes. Communicate with leads across various channels - whatsapp, sms, email, phone and more.",
                },
                {
                    id: 5,
                    image: "https://ppc.leadsquared.com/wp-content/uploads/sites/2/2023/10/telephone-dial-1.svg",
                    title: "Built-in dialer",
                    description: "Call prospects in just one click . Track and record conversations to ensure high compliance and productivity.",
                },
                {
                    id: 6,
                    image: "https://ppc.leadsquared.com/wp-content/uploads/sites/2/2023/10/reports-1.svg",
                    title: "Real-time dashboards & reports",
                    description: "Over 135+ reports help you measure every piece of your process - from campaign spending to sales closure rates.",
                },
            ]
        }
    }
}
</script>
<style lang="">

</style>
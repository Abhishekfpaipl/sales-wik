<template>
    <div class="my3 py-3">
        <div class="container">
            <h1 class="text-center text-capitalize mb-5">#1 Lead management software to automate your lead journey</h1>
            <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-3">
                <div class="col" v-for="(lead, index) in leads" :key="index">
                    <!-- <HoverCard :lead="lead" /> -->
                    <div class="position-relative w-100 d-flex justify-content-center align-items-center flex-fill">
                        <div class="card position-relative w-100 bg-white p-3 d-flex flex-column">
                            <div class="image">
                                <!-- <img src="https://i.pinimg.com/originals/a4/7b/a5/a47ba59b4a353e0928ef0551ca44f980.jpg" alt="Card Image"> -->
                                <img :src="lead.image" style="width: 32px;" alt="Card Image">
                                <p class="ms-2 fw-bold">{{ lead.title }}</p>
                            </div>
                            <div class="content">
                                <p>{{ lead.description }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- <CardFlip  /> -->
        </div>
    </div>
</template>
<script>
// import CardFlip from "@/components/landing/CardFlip.vue"
// import HoverCard from "@/components/HoverCard.vue"
export default {
    name: "LeadManagement",
    components: {
        //  CardFlip ,
        // HoverCard
    },
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
                {
                    id: 13,
                    icon: 'bi-building',
                    image: 'img/features/custom.png',
                    title: 'Score leads',
                    description: 'Qualify leads based on their region, behavior, and other parameters'
                },
                {
                    id: 23,
                    icon: 'bi-building',
                    image: 'img/features/gear.png',
                    title: 'Assign leads to the right rep',
                    description: 'Get the right sales rep on the job based on customer preferences and other predefined criteria.'
                },
                {
                    id: 54,
                    icon: 'bi-building',
                    image: 'img/features/uniform.png',
                    title: 'Close deals quickly',
                    description: "Generate invoices within CRM from prospect's record and update the deal stage and status."
                },

                {
                    id: 72,
                    icon: 'bi-building',
                    image: 'img/features/block.png',
                    title: 'Attach relevant details',
                    description: 'Add notes, labels, or other documents to record in CRM.'
                },

                {
                    id: 31,
                    icon: 'bi-building',
                    image: 'img/features/wallet.png',
                    title: 'Automate activites',
                    description: 'Create workflows for faster, erro-free communication and service.'
                },
                {
                    id: 432,
                    icon: 'bi-building',
                    image: 'img/features/lead.png',
                    title: 'lead capture',
                    description: 'Get in touch with customers by using our contact form and sync their data with a CRM of your favour.'
                },
                {
                    id: 623,
                    icon: 'bi-building',
                    image: 'img/features/users.png',
                    title: 'User management',
                    description: 'Invite all your team members, upload them by Excel/CSV or connect with Microsoft 365 or google workspace.'
                },
                {
                    id: 823,
                    icon: 'bi-building',
                    title: 'Stay connected',
                    image: 'img/features/data.png',
                    description: 'Receive real-time notification about activities in CRM across devices.'
                },
            ],
        }
    }
}
</script>
<style scoped>
/* .container {
    position: relative;
    width: 100%;
    max-width: 1100px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding: 30px;
  } */
.card {
    /* position: relative; */
    /* width: 100%; */
    max-width: 300px;
    /* background-color: #fff; */
    /* margin: 20px; */
    /* padding: 20px 15px; */
    /* display: flex; */
    /* flex-direction: column; */
    /* box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5); */
    transition: 0.3s ease-in-out;
    border-radius: 15px;
    overflow: hidden;
}

.container .card .image {
    position: relative;
    width: 100%;
    max-width: 260px;
    margin: 0 auto;
    /* box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2); */
    z-index: 1;
    transition: 0.3s ease-in-out;
}

.container .card .image img {
    max-width: 100%;
    border-radius: 15px;
}

.container .card .content {
    position: relative;
    /* padding: 10px 15px; */
    color: #111;
    text-align: center;
    visibility: hidden;
    opacity: 0;
    max-height: 0;
    transition: visibility 0s, opacity 0.3s ease-in-out, max-height 0.3s ease-in-out;
}

.container .card:hover .content {
    visibility: visible;
    opacity: 1;
    max-height: 200px;
    /* Adjust this value as needed */
    transition-delay: 0.2s;
}

.container .card:hover .image {
    transform: translateY(-10px);
}

/* @media (max-width: 768px) {
    .container .card { 
        max-width: 100%;
    }
    .container .card .image {
        max-width: 100%;
    }
}

@media (max-width: 480px) {
    .container .card .image {
        max-width: 100%;
    }
} */
</style>
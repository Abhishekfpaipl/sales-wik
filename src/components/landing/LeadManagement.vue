<template>
    <div class="my-3 py-3">
        <div class="container">
            <div class="py-2 mb-5">
                <h1 class="text-center">Features, that boost your attention!</h1>
                <small class="text-capitalize">A simple <span class="text-uppercase">crm</span> that grows with your
                    business</small>
            </div>
            <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-3">
                <div class="col" v-for="(lead, index) in leads" :key="index">
                    <!-- <HoverCard :lead="lead" /> -->
                    <div class="position-relative w-100 d-flex justify-content-center align-items-center flex-fill">
                        <div class="card position-relative w-100 p-3 d-flex flex-column bg-light"
                            style="color: var(--bg-primary);">
                            <div class="image">
                                <!-- <img src="https://i.pinimg.com/originals/a4/7b/a5/a47ba59b4a353e0928ef0551ca44f980.jpg" alt="Card Image"> -->
                                <i class="bi" :class="lead.icon"></i>
                                <!-- <img :src="lead.image" style="width: 32px;" alt="Card Image"> -->
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
                    // image: "https://ppc.leadsquared.com/wp-content/uploads/sites/2/2023/10/chat-bubble-user-1.svg",
                    icon: 'bi-funnel fs-4',
                    title: "Lead capture automation",
                    description: "Capture leads from all sources- website, facbook, google, lead providers, referrals - onto one platform with zero leakage.",
                },
                {
                    id: 2,
                    // image: "https://ppc.leadsquared.com/wp-content/uploads/sites/2/2023/10/teams-1.svg",
                    icon: 'bi-diagram-3 fs-4',
                    title: "Lead distribution",
                    description: "Easily track and distribute leads between your teams based on requirements or other dynamic criteria.",
                },
                {
                    id: 3,
                    // image: "https://ppc.leadsquared.com/wp-content/uploads/sites/2/2023/10/add-account-1.svg",
                    icon: 'bi-hand-thumbs-up fs-4',
                    title: "Quality & engagement scoring",
                    description: "Auto-qualify leads based on pre-defined rules. Assign scores based on actions they take. Like - website visits, emails opens, link clicks, inquiries, etc",
                },
                {
                    id: 4,
                    // image: "https://ppc.leadsquared.com/wp-content/uploads/sites/2/2023/10/marketing-automation-1.svg",
                    icon: 'bi-megaphone fs-4',
                    title: "Sales & marketing automation",
                    description: "Automate sales processes. Communicate with leads across various channels - whatsapp, sms, email, phone and more.",
                },
                {
                    id: 5,
                    // image: "https://ppc.leadsquared.com/wp-content/uploads/sites/2/2023/10/telephone-dial-1.svg",
                    icon: 'bi-telephone fs-4',
                    title: "Direct Call Integration",
                    description: "Call prospects in just one click . Track and record conversations to ensure high compliance and productivity.",
                },
                {
                    id: 65,
                    // image: "https://ppc.leadsquared.com/wp-content/uploads/sites/2/2023/10/telephone-dial-1.svg",
                    icon: 'bi-whatsapp fs-4',
                    title: "WhatsApp Call Integration",
                    description: "Call prospects in just one click . Track and record conversations to ensure high compliance and productivity.",
                },
                {
                    id: 6,
                    // image: "https://ppc.leadsquared.com/wp-content/uploads/sites/2/2023/10/reports-1.svg",
                    icon: 'bi-clipboard-data fs-4',
                    title: "Real-time dashboards & reports",
                    description: "Over 135+ reports help you measure every piece of your process - from campaign spending to sales closure rates.",
                },
                {
                    id: 32,
                    // image: "https://ppc.leadsquared.com/wp-content/uploads/sites/2/2023/10/reports-1.svg",
                    icon: 'bi-box-arrow-in-down-left fs-4',
                    title: "Import Leads",
                    description: "Over 135+ reports help you measure every piece of your process - from campaign spending to sales closure rates.",
                },
                {
                    id: 43,
                    // image: "https://ppc.leadsquared.com/wp-content/uploads/sites/2/2023/10/reports-1.svg",
                    icon: 'bi-box-arrow-up-right fs-4',
                    title: "Export Leads",
                    description: "Over 135+ reports help you measure every piece of your process - from campaign spending to sales closure rates.",
                },
                {
                    id: 13,
                    icon: 'bi-stars fs-4',
                    image: 'img/features/custom.png',
                    title: 'Score leads',
                    description: 'Qualify leads based on their region, behavior, and other parameters'
                },
                {
                    id: 23,
                    icon: 'bi-hand-index fs-4',
                    image: 'img/features/gear.png',
                    title: 'Assign leads to the right rep',
                    description: 'Get the right sales rep on the job based on customer preferences and other predefined criteria.'
                },
                {
                    id: 54,
                    icon: ' bi-lightning fs-4',
                    image: 'img/features/uniform.png',
                    title: 'Close deals quickly',
                    description: "Generate invoices within CRM from prospect's record and update the deal stage and status."
                },

                {
                    id: 72,
                    // image: 'img/features/block.png',
                    icon: 'bi-archive fs-4',
                    title: 'Attach relevant details',
                    description: 'Add notes, labels, or other documents to record in CRM.'
                },

                {
                    id: 31,
                    icon: 'bi-stack-overflow fs-4',
                    image: 'img/features/wallet.png',
                    title: 'Automate activites',
                    description: 'Create workflows for faster, erro-free communication and service.'
                },
                {
                    id: 432,
                    // image: 'img/features/lead.png',
                    icon: 'bi-magnet fs-4',
                    title: 'lead capture',
                    description: 'Get in touch with customers by using our contact form and sync their data with a CRM of your favour.'
                },
                {
                    id: 623,
                    // image: 'img/features/users.png',
                    icon: 'bi-people fs-4',
                    title: 'User management',
                    description: 'Invite all your team members, upload them by Excel/CSV or connect with Microsoft 365 or google workspace.'
                },
                {
                    id: 823,
                    // image: 'img/features/data.png',
                    icon: ' bi-ui-checks fs-4',
                    title: 'Stay connected',
                    description: 'Receive real-time notification about activities in CRM across devices.'
                },
                {
                    id: 823,
                    // image: 'img/features/data.png',
                    icon: ' bi-calendar2-date fs-4',
                    title: 'Schedule Leads',
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
.card:hover {
    background-color: var(--bg-primary) !important;
    color: white !important
}

.content {
    color: white !important
}

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

/* @keyframes fadeIn {
    0% {
        opacity: 0;
        transform: translateY(20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

.container {
    animation: fadeIn 1.5s ease-in-out;
} */
</style>

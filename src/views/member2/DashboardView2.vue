<template>
    <div class="xs:p-3 sm:px-5 md:px-5 lg:px-8 xl:px-10 py-3">

        <div id="header">
            <div class="flex gap-3 items-center">
                <img class="xs:w-28 w-32" src="../../assets/profile.png" />
                <div>
                    <label class="xs:text-xl text-3xl font-semibold">{{ user.name }}'s Dashboard</label>
                    <div class="xs:block flex gap-3">
                        <div id="dashboardNav">
                            <label class="xs:text-lg text-base hover:text-sky-500" type="button" @click="showDashboard()">Dashboard</label>
                        </div>

                        <label class="xs:hidden">||</label>

                        <div id="listNav" @click="showList()">
                            <label class="xs:text-lg text-base hover:text-sky-500" type="button">List-Book</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="profile" v-show="status">
            <ProfileUser />
        </div>

        <div id="list" v-show="!status">
            <ListBook />
        </div>
    </div>
</template>

<script>
import ListBook from '@/components/member2/ListBook.vue';
import ProfileUser from '@/components/member2/ProfileUser.vue';
import axios from 'axios';

export default {
    name: "DashboardView2",
    components: {
        ListBook,
        ProfileUser
    },

    data() {
        return {
            user: {},
            status: true
        }
    },

    async mounted() {
        const res = await axios.get('http://localhost:3000/user/2')
        this.user = res.data;
    },

    methods: {
        showDashboard() {
            const profile = document.getElementById('profile');
            const list = document.getElementById('list');

            profile.style.display = "block";
            list.style.display = "none";
        },

        showList() {
            const profile = document.getElementById('profile');
            const list = document.getElementById('list');

            profile.style.display = "none";
            list.style.display = "block";
        }
    }
}
</script>
<template>
    <div class="xs:p-3 sm:px-5 md:px-5 lg:px-8 xl:px-10 py-3">

        <div id="header">
            <div class="flex gap-3 items-center">
                <img class="xs:w-28 w-32" src="../../assets/profile.png" />
                <div>
                    <h3 class="xs:text-md">{{ user.name }}'s Dashboard</h3>
                    <div class="xs:block flex gap-3">
                        <div id="dashboardNav">
                            <h6 class="xs:text-sm hover:text-sky-500" type="button" @click="showDashboard()">Dashboard</h6>
                        </div>

                        <h6 class="xs:hidden">||</h6>

                        <div id="listNav" @click="showList()">
                            <h6 class="xs:text-sm hover:text-sky-500" type="button">List-Book</h6>
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
import ListBook from '@/components/member1/ListBook.vue';
import ProfileUser from '@/components/member1/ProfileUser.vue';
import axios from 'axios';

export default {
    name: "DashboardView",
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
        const res = await axios.get('http://localhost:3000/user/1')
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
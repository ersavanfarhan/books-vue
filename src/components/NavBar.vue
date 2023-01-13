<template>
    <nav class="w-full p-3 flex bg-green-200 justify-between items-center">
        <div class="grid">
            <div class="flex items-center">
                <label class="m-0 text-2xl font-semibold text-green-900">BooK</label>
                <img class="w-10" src="@/assets/logo.png" />
            </div>
            <p class="text-xs m-0">{{ auth }}</p>
        </div>

        <div>
            <!-- Button For Modal -->
            <button data-bs-toggle="modal" data-bs-target="#modalLogout" class="btn btn-danger">
                LOGOUT
            </button>

            <!-- Modal Pop Up -->
            <div class="modal fade" id="modalLogout" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">Are You Sure?</h1>
                            <button class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div class="modal-footer">
                            <button class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button class="btn btn-danger" data-bs-dismiss="modal"
                                @click="logoutButton()">Sure</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    <router-view />
</template>

<script>
import router from '@/router';

export default {
    name: "NavBar",
    data() {
        return {
            auth: []
        }
    },

    methods: {
        getUser() {
            const user = localStorage.key(0);
            this.auth = user
        },

        logoutButton() {
            localStorage.clear();
            router.push("/");
            this.getUser();
        },
    },

    mounted() {
        this.getUser();
    }
}
</script>
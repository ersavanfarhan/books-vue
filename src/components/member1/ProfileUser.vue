<template>
    <div class="my-3 text-justify">
        <h3>Bio :</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis cupiditate qui ad a voluptate iste
            molestias quia rem enim provident odio minima blanditiis reprehenderit id eum, dolorum nam, dolores laborum.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa officiis explicabo modi illum? Ad eos earum
            assumenda debitis dolore. Accusantium odit ducimus quas enim fugit vero velit ipsum alias iure.</p>

        <!-- Button For Modal User -->
        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalUser">
            User Setting
        </button>

        <!-- Modal Pop Up -->
        <div class="modal fade" id="modalUser" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="staticBackdropLabel">USER SETTING</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body grid gap-3">
                        <div>
                            <label for="exampleFormControlInput1" class="form-label">Name</label>
                            <input type="text" class="form-control" v-model="user.name">
                        </div>

                        <div>
                            <label for="exampleFormControlInput1" class="form-label">E-mail</label>
                            <input type="text" class="form-control" v-model="user.email">
                        </div>

                        <div>
                            <label for="exampleFormControlInput1" class="form-label">New Password</label>
                            <input :type="type" class="form-control" v-model="user.password">
                        </div>

                        <div>
                            <label for="exampleFormControlInput1" class="form-label">Confirm New Password</label>
                            <div class="input input-group">
                                <input :type="type" class="form-control" v-model="user.confirm">
                                <div type="button" class="input-group-text" @click="showPassword()">
                                    <span class="material-symbols-outlined" v-if="status">
                                        visibility_off
                                    </span>
                                    <span class="material-symbols-outlined" v-if="!status">
                                        visibility
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal"
                            @click="userSetting()">Update</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "ProfileUser",

    data() {
        return {
            user: {},
            type: "password",
            status: true

        }
    },

    async mounted() {
        const res = await axios.get('http://localhost:3000/user/1')
        this.user = res.data;
    },

    methods: {
        showPassword() {
            this.type = this.type === "password" ? "text" : "password";
            this.status = !this.status
        },

        userSetting() {
            if (this.user.password == this.user.confirm) {
                axios
                    .put('http://localhost:3000/user/1', this.user)
                    .then(() => {
                        window.location.reload();
                        confirm("Your Profile Has Been Updated");
                    })
                    .catch((error) => console.log(error))
            } else {
                alert("Your Password Doesn't Match");
            }
        }
    }
}
</script>
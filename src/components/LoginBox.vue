<template>
    <div id="wrapper" class="xs:p-3 sm:px-5 md:px-48 lg:px-80 xl:px-96">
        <div id="box" class="grid gap-5 p-5 border-2 border-green-900 rounded-2xl">
            <h1 class="m-0">LOGIN</h1>

            <div>
                <label for="exampleFormControlInput1" class="form-label">Username</label>
                <input id="inputEmail" type="text" class="form-control">
            </div>

            <div>
                <label for="exampleFormControlInput1" class="form-label">Password</label>
                <input id="inputPassword" type="password" class="form-control">
            </div>

            <button class="btn btn-success" @click="userLogin()">Login</button>
        </div>
    </div>
</template>

<script>
import router from '@/router';
import axios from 'axios';

export default {
    name: "LoginBox",

    data() {
        return {
            member: {},
            member2: {},
            admin: {}
        }
    },

    async mounted() {
        const res1 = await axios.get('http://localhost:3000/user/1')
        this.member = res1.data;

        const res2 = await axios.get('http://localhost:3000/user/2')
        this.member2 = res2.data;

        const res3 = await axios.get('http://localhost:3000/user/3')
        this.admin = res3.data;
    },

    methods: {
        userLogin() {
            var inputEmail = document.getElementById("inputEmail").value,
                inputPassword = document.getElementById("inputPassword").value;

            var emailAdmin = this.admin.email,
                passwordAdmin = this.admin.password,

                emailMember = this.member.email,
                passwordMember = this.member.password,

                emailMember2 = this.member2.email,
                passwordMember2 = this.member2.password;

            if (inputEmail == emailAdmin && inputPassword == passwordAdmin) {
                router.push("/admin");
                localStorage.setItem('admin-authenticated', true);
                window.location.reload();
            } else if (inputEmail == emailMember && inputPassword == passwordMember) {
                router.push("/member");
                localStorage.setItem('member-authenticated', true);
                window.location.reload();
            } else if (inputEmail == emailMember2 && inputPassword == passwordMember2) {
                router.push("/member2");
                localStorage.setItem('member2-authenticated', true);
                window.location.reload();
            } else {
                alert('Incorrect login')
            }
        }
    }
}
</script>
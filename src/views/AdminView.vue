<template>
    <div class="xs:p-3 sm:px-5 md:px-5 lg:px-8 xl:px-10 py-3">

        <div id="header">
            <div class="flex gap-3 items-center">
                <img class="xs:w-28 w-32" src="../assets/profile.png" />
                <div>
                    <h3 class="xs:text-md">Admin's Dashboard</h3>
                    <div class="xs:block flex gap-3">
                        <div id="member1">
                            <router-link :to="('/member')" class="xs:text-sm no-underline">
                                Member 1
                            </router-link>
                        </div>

                        <h6 class="xs:hidden">||</h6>

                        <div id="member2">
                            <router-link :to="('/member2')" class="xs:text-sm no-underline">
                                Member 2
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data(){
        return{
            
        }
    }
    
};
</script>

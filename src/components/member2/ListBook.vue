<template>
    <div>
        <h3 class="my-3">My List</h3>
        <BookTable />
        <ModalAdd />
    </div>
</template>

<script>
import BookTable from './BookTable.vue'
import ModalAdd from './ModalAdd.vue';

export default {
    name: "ListBook",
    components: {
        BookTable, ModalAdd
    },

    data() {
        return {
            books: []
        }
    }
};
</script>


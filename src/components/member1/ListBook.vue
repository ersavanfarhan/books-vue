<template>
    <div>
        <label class="xs:text-xl text-3xl font-semibold my-3">My List</label>
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


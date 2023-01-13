<template>
    <div id="table-wrapper" class="mb-3 w-full overflow-x-auto">
        <table id="table-book" class="w-full">
            <thead>
                <tr id="table-header ">
                    <th class="xs:text-xs border-2 p-2 text-center">NO</th>
                    <th class="xs:text-xs border-2 p-2 text-center">TITLE</th>
                    <th class="xs:text-xs border-2 p-2 text-center">AUTHOR</th>
                    <th class="xs:text-xs border-2 p-2 text-center">YEAR PUBLISHED</th>
                    <th class="xs:text-xs border-2 p-2 text-center">SETTING</th>
                </tr>
            </thead>
            <tbody>
                <tr id="table-item" v-for="(book, index) in books" :key="book.id">
                    <td class="xs:text-xs border-2 p-2 text-center">{{ index + 1 }}</td>
                    <td class="xs:text-xs border-2 p-2 text-center">{{ book.title }}</td>
                    <td class="xs:text-xs border-2 p-2 text-center">{{ book.author }}</td>
                    <td class="xs:text-xs border-2 p-2 text-center">{{ book.published }}</td>
                    <td class="xs:text-xs border-2 p-2 flex gap-1">
                        <router-link class="w-full" :to="('/member/' + book.id)">
                            <button class="btn btn-primary w-full">Detail</button>
                        </router-link>

                        <button class="btn btn-danger w-full" @click="deleteList(book.id)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "BookTable",
    components: {
    },

    data() {
        return {
            books: []
        }
    },

    methods: {
        async dataBook() {
            const res = await axios.get("http://localhost:3000/book1/");
            this.books = res.data
        },

        deleteList(id) {
            axios.delete("http://localhost:3000/book1/" + id).then(() => {
                this.dataBook();
            });
        }
    },

    mounted() {
        this.dataBook();
    }

}
</script>
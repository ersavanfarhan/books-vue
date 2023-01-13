<template>
    <!-- Button For Modal -->
    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalAddList">
        Add List
    </button>

    <!-- Modal Pop Up -->
    <div class="modal fade" id="modalAddList" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">ADD NEW DATA BOOK</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body grid gap-3">
                    <div>
                        <label for="exampleFormControlInput1" class="form-label">Title</label>
                        <input type="text" class="form-control" v-model="books.title">
                    </div>

                    <div>
                        <label for="exampleFormControlInput1" class="form-label">Author</label>
                        <input type="text" class="form-control" v-model="books.author">
                    </div>

                    <div>
                        <label for="exampleFormControlInput1" class="form-label">Published</label>
                        <input type="text" class="form-control" v-model="books.published">
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button class="btn btn-primary" data-bs-dismiss="modal" @click="addList()">Add To
                        List</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "ModalAdd",

    data() {
        return {
            books: {}
        }
    },

    methods: {
        addList() {
            if (this.books.title) {
                axios.post('http://localhost:3000/book2', this.books)
                    .then(() => {
                        confirm("Your List Has Been Added");
                        window.location.reload();
                    })
                    .catch((error) => console.log(error))
            }
            else {
                alert("Please fill the form")
            }
        }
    },
}
</script>
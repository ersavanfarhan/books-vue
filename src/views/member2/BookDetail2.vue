<template>
    <div class="xs:p-3 sm:px-5 md:px-5 lg:px-8 xl:px-10 py-3">
        <label class="text-4xl font-semibold mb-1">Book Detail</label>
        <div class="w-full grid gap-2 lg:flex xl:flex">
            <div id="coveExample" class="grid gap-2 w-full md:justify-center lg:w-7/12 xl:w-7/12">
                <img class="w-full" src="../../assets/vintage-book.jpg" />
                <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalEdit">Edit Book</button>
            </div>
            <div id="detailInfo" class="grid gap-3 lg:block lg:pl-10 xl:block xl:pl-10">
                <div id="title-author" class="grid lg:mb-10 xl:mb-5">
                    <label class="m-0 text-3xl font-semibold">{{ books.title }}</label>
                    <label class="m-0 text-xl font-semibold">{{ books.author }} - {{ books.published }}</label>
                </div>
                <div id="sinopsis">
                    <label class="m-0 text-xl">Sinopsis :</label>
                    <p class="m-0 italic text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
                        rem
                        quisquam qui aperiam magni,
                        numquam praesentium nisi nam, officia architecto iste vitae quia ratione voluptatem sequi
                        accusantium nobis saepe dolores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                        suscipit tenetur vero pariatur quas enim
                        quos dolorum laborum fuga nostrum officiis a doloremque adipisci accusantium odio, itaque,
                        placeat
                        ipsa debitis?</p>
                </div>
            </div>
        </div>

        <!-- Modal Pop Up -->
        <div class="modal fade" id="modalEdit" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="staticBackdropLabel">EDIT DATA</h1>
                        <button class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
                        <button class="btn btn-primary" data-bs-dismiss="modal"
                            @click="editBook()">Update</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "BookDetai2",

    data() {
        return {
            books: {}
        }
    },

    async mounted() {
        const res = await axios.get('http://localhost:3000/book2/' + this.$route.params.id)
        this.books = res.data;
    },

    methods: {
        editBook() {
            axios
                .put('http://localhost:3000/book2/' + this.$route.params.id, this.books)
                .then(() => {
                    confirm("Your List Has Been Updated");
                })
                .catch((error) => console.log(error))
        }
    }
}
</script>
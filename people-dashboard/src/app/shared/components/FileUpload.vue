<template>
    <div class="file-upload">
        <div>File</div>
        <input type="file" hidden ref="file" accept="image/*" @change="handleFileUpload()">
        <img :src="imagePreview" v-if="showPreview">
        <v-button title="Upload" @click="uploadFile"/>
    </div>
</template>

<script>
    export default {
        name: "FileUpload",
        data() {
            return {
                imageFile: null,
                imagePreview: null,
                showPreview: false,
            }
        },
        methods: {
            uploadFile() {

            },
            handleFileUpload() {
                this.imageFile = this.$refs.file.files[0];

                let reader = new FileReader();

                reader.addEventListener("load", () => {
                    this.showPreview = true;
                    this.imagePreview = reader.result;
                })

                if (this.imageFile) {
                    if (/\.(jpe?g|png|gif)$/i.test(this.imageFile.name)) {
                        reader.readAsDataURL(this.imageFile)
                    }
                }

            }
        }
    }
</script>

<style scoped>

</style>
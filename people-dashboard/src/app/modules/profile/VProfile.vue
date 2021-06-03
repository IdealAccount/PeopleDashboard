<template>
    <div class="user-profile">
        <v-form>
            <v-input title="Name" v-model="formData.displayName"/>
            <v-input title="Email" type="email" v-model="formData.email"/>
            <v-input title="Phone" type="tel" v-model="formData.phoneNumber"/>
        </v-form>
    </div>
</template>

<script>
    import {state} from "../../store";

    export default {
        name: "VProfile",
        data() {
            return {
                formData: state.user
            }
        },
        mounted() {
            console.log(this.formData, 'form data')
        }
    }
</script>

<style scoped>

</style>
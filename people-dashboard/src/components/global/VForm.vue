<!--
This is a stupid component,
but maybe it will be extended,
for example, for validation
-->
<template>
    <form @submit.prevent="$emit('submit', $event)">
        <slot></slot>
    </form>

</template>

<script>
    export default {
        name: "VForm",
    }
</script>

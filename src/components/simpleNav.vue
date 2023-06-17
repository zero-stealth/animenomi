<script setup>
defineProps({
    title : String
})
</script>
<template>
    <div class="title-container">
        <h1>{{ title }}</h1>
    </div>
</template>
<style>
@import "@/style/simpleNav.css";
</style>
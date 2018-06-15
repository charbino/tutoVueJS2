<template>
    <div class="row">
        <app-Quote v-for="quote in quotes">{{ quote }}</app-Quote>
    </div>
</template>


<script>
    import Quote from './Quote.vue';

    export default {
        props: ['quotes'],
        components: {
            appQuote: Quote
        }
    }
</script>


<style scoped>


</style>
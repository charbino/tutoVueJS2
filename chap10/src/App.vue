<template>
    <div class="container">
        <app-quote-grid
        :quotes="quotes"
        >
        </app-quote-grid>
    </div>
</template>

<script>
    import QuoteGrid from './component/QuoteGrid.vue';

    export default {
        data:function(){
            return {
                quotes: [
                    'Juste a Qote to see something'
                ],
                maxQuotes: 10
            }
        },
        components: {
            appQuoteGrid: QuoteGrid
        }
    }
</script>

<style>
</style>

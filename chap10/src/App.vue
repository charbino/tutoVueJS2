<template>
    <div class="container">
        <app-header :quoteCount="quotes.length" :maxQuotes="maxQuotes"> </app-header>
        <app-new-quote @quoteAdded="newQuote"></app-new-quote>
        <app-quote-grid
                :quotes="quotes"
                @quoteDeleted="deleteQuote"
        >
        </app-quote-grid>
        <div class="row">
            <div class="col-sm-12 text-center">
                <div class="alert alert-info">
                    Info click on a quote to delete it!
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from './component/Header.vue';
    import QuoteGrid from './component/QuoteGrid.vue';
    import NewQuote from './component/NewQuote.vue';

    export default {
        data: function () {
            return {
                quotes: [
                    'Juste a Qote to see something'
                ],
                maxQuotes: 10
            }
        },
        methods: {
            newQuote(quote) {
                if (this.quotes.length >= this.maxQuotes){
                    return alert('Delete quote first !');
                }
                this.quotes.push(quote)
            },
            deleteQuote(index) {
                this.quotes.splice(index, 1);
            }
        },
        components: {
            appHeader: Header,
            appQuoteGrid: QuoteGrid,
            appNewQuote: NewQuote,
        }
    }
</script>

<style>
</style>

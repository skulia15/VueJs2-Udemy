<template>
    <div class="container">
        <app-header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-header>
        <app-new-quote @quoteAdded="newQuote"></app-new-quote>
        <app-quote-grid :quotes="quotes" @quoteDeleted="deleteQuote"></app-quote-grid>
        <div class="row">
            <div class="col-sm-12 text-center">
                <div class="alert alert-info">Info: Click on a Quote to delete it!</div>
            </div>
        </div>
        {{ quotes }}
        {{ quotes.length }}
        {{ maxQuotes }}

    </div>
</template>

<script>
    import Header from './components/Header.vue';
    import QuoteGrid from './components/QuoteGrid.vue';
    import NewQuote from './components/NewQuote.vue';

    export default {
        data: function() {
            return {
                quotes: [
                    'Dummy Quote numero Uno'
                ],
                maxQuotes: 10,
            }
        },
        methods: {
            newQuote(quote) {
                if(this.quotes.length >= this.maxQuotes){
                    return alert('Maximum number of quotes reached!');
                }
                if(quote.length <= 0){
                    return alert('Quote cannot be empty!');
                }
                console.log(quote.length);
                this.quotes.push(quote);
            },
            deleteQuote(index) {
                this.quotes.splice(index, 1);
            }
        },
        components: {
            appHeader: Header,
            appQuoteGrid: QuoteGrid,
            appNewQuote: NewQuote
        },
        
    }
</script>

<style>
</style>

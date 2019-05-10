<template>
    <div>
        <button class="btn btn-primary" @click="increment(100)">Increment</button>
        <button class="btn btn-primary" @click="decrement(50)">Decrement</button>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex';
    import * as types from '../store/types';


    export default {
        methods: {
            ...mapMutations([
                'increment', 
                'decrement'
            ])
        }
    }
</script>
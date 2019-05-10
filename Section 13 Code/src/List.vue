<template>
            <div >
                <h1>Filters & Mixins</h1>
                <hr>
                <input v-model="filterText">
                <ul>
                    <li v-for="(fruit, index) in fitleredFruits" :key="index">{{ fruit }}</li>
                </ul>
            </div>
</template>

<script>
    import { fruitMixin } from "./fruitMixin";
    export default {
        mixins: [ fruitMixin ],
        created(){
            console.log('Inside List Created Hook');
        }
    }
</script>

<style>

</style>

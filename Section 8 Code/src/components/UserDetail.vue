<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User name:  {{ switchName() }}</p>
        <p>User age: {{ userAge }} </p>
        <button @click="resetName">Reset Name</button>
        <button @click="resetFn()">Reset Name</button>
        
    </div>
</template>

<script>
    import { eventBus } from '../main.js';

    export default {
        props: {
            myName: {
                type: String,
            },
            resetFn: Function,
            userAge: Number
        },
        methods: {
            switchName() {
                return this.myName.split("").reverse().join("");
            },
            resetName(){
                this.$emit('nameWasReset', 'Skúli');
            }
        },
        created() {
            // eventBus.$on('ageWasEdited', (age) => {
            //     this.userAge = age;
            // } );
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>

<template>
    <textarea :id="name" class="textarea" :name="name" :value="value"
        @input="onInputEvent($event)" >
    </textarea>
</template>

<script>
export default {
    props: {
        name: {
            required: true,
            type: String,
        },
        value: {
            required: false, 
        }
    },
    methods: {
        onInputEvent (e) {
            this.$emit('input', e.target.value);
            e.target.style.height = 'auto';
            e.target.style.height = `${e.target.scrollHeight}px`;

        }
    }
}
</script>

<style scoped>

.textarea {
    display: block;
    width: 100%;
    border: none;
    background-color: rgb(21, 29, 41);
    color: white;
    resize: none;
    font-size: inherit;
    outline: none;
    margin: 5px;
    padding: 20px;
    min-height: 40px;
    box-sizing: border-box;
    overflow: hidden;
    border-radius: 5px;
}

/* .textarea:focus {
    border: 0.4mm solid rgba(189, 17, 205, 0.5) ;
} */


</style>
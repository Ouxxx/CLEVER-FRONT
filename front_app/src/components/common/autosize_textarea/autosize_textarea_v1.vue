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
    resize: none;
    font-size: inherit;
    outline: none;
    padding: 20px;
    min-height: 40px;
    box-sizing: border-box;
    overflow: hidden;
    border-radius: 5px;
}


</style>
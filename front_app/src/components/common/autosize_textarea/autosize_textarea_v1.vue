<template>
    <textarea 
        class="textarea" 
        :name="name" 
        @input="$emit('input', $event.target.value); resize($event)" 
        :id="name" 
        :value="value">
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
        resize (a) {
            a.target.style.height = 'auto'
            a.target.style.height = '${a.target.scrollHeight}px'
        }
    }
}
</script>

<style scoped>

.textarea {
    display: inline;
    width: 90%;
    resize: none;
    font-size: inherit;
    outline: none;
    padding: 20px;
    min-height: 40px;
    box-sizing: border-box;
}


</style>
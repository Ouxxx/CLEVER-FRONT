<template>
    <div class="editor-root" :style="cssProps.borderColorStyle">
        <div class="editor-content" :style="cssProps.textColorStyle" contenteditable="true" />
    </div>
</template>

<script>
export default {
    props : {
        textcolor : {
            type: String,
            default: 'white'
        }
    },
    data () {
        return {
            cssProps : {
                textColorStyle : {
                    color : this.textcolor
                },
                borderColorStyle : {
                    'border-color' : this.textcolor
                }
            }
        }
    }
}
</script>

<style scoped>

.editor-root {
    margin: 5px 10px;
    padding: 20px 8px;
    min-height: 200px;
    border-style: solid;
    border-radius: 7px;
    border-width:1px;
}

.editor-content {
    min-height: 200px;
}

.editor-content:focus {
    outline: none;
}
</style>
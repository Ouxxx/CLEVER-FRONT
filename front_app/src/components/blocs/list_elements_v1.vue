<template>
    <div class="list-root">
        <h1>{{ this.category }}</h1>
        <div class="list-grp">
            <div class="list-elem" v-for="elem in elems" :key="elem.id" >
                {{ elem.id }}
            </div>
        </div>

    </div>
</template>


<script>

export default {
    props: {
        category: {
            type: String,
            required: true
        }
    },
    methods: {
        getLarge(){
            if (document.body) {
                return document.body.clientWidth
            } else {
                return window.innerWidth
            }
        },
        makeMainList () {
            // TODO definir la largeur min d'un element 
        
            var elemMinWidth = 200;
            var listMaxSize = Math.trunc(this.getLarge()/elemMinWidth);
            for( var i = 0 ; i < listMaxSize ; i++){
                if(this.holdingOnList.length != 0){
                    this.mainList.push(this.holdingOnList.pop())
                }else{
                    break
                }
            }
        }
    },

    data () {
        return {
            cathegorie : 'cathegorie1',
            mainList : [],
            holdingOnList : [],
            elems : [
                {
                    id: 1,
                    type: 'doc',
                    name: 'doc1',
                    cathegorie: 'cathegorie1'
                },{
                    id: 2,
                    type: 'doc',
                    name: 'doc2',
                    cathegorie: 'cathegorie1'
                },{
                    id: 3,
                    type: 'doc',
                    name: 'doc3',
                    cathegorie: 'cathegorie1'
                },{
                    id: 4,
                    type: 'doc',
                    name: 'doc4',
                    cathegorie: 'cathegorie1'
                },{
                    id: 5,
                    type: 'doc',
                    name: 'doc5',
                    cathegorie: 'cathegorie1'
                },{
                    id: 6,
                    type: 'doc',
                    name: 'doc5',
                    cathegorie: 'cathegorie1'
                }
            ]
        }
    }
}
</script>

<style scoped>

.list-grp {
    padding-left: 50px;
}



.list-elem {
    display: inline-block;
    background-color: aliceblue;
    margin: 5px;
    padding: 5px;
    min-height: 150px;
    min-width: 250px;
    cursor: pointer;
}
.list-btn {
    width: 100px;
}



p {
    color: darkslategrey;
}

</style>

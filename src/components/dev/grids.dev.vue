<template>
    <div v-if="showEl" id="grids">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        
        <div class="appear-md"></div>
        <div class="appear-md"></div>
        <div class="appear-md"></div>
        <div class="appear-md"></div>
        <div class="appear-md"></div>
        <div class="appear-md"></div>
        <div class="appear-md"></div>
        <div class="appear-md"></div>
        
        <div class="appear-lg"></div>
        <div class="appear-lg"></div>
        <div class="appear-lg"></div>
        <div class="appear-lg"></div>
    </div>
</template>
<script>
const ElBody = document.getElementsByTagName("body")[0]

export default {
    name: 'dev-grids',
    data() {
        return {
            showEl: false,
            bookFont: false
        }
    },
    mounted: function () {
        //g
        document.addEventListener("keydown", (event) => {
            if((event.ctrlKey || event.metaKey) && event.altKey && event.which == 71) {
                this.toggleGrid()
            }
        })  


        //t
        document.addEventListener("keydown", (event) => {
            if((event.ctrlKey || event.metaKey) && event.altKey && event.which == 84) {
                this.toggleBookFont()
            }
        })  
    },
    methods: {
        showGrid() {
            this.showEl = true;
        },
        hideGrid() {
            this.showEl = false
        },
        toggleGrid() {
            if(this.showEl){
                this.hideGrid()
            } else {
                this.showGrid()
            }
        },
        toggleBookFont() {
            if(this.bookFont){
                ElBody.classList.remove('font-book')
                this.bookFont = false
                console.log('Font: Gotham Medium')
            } else {
                ElBody.classList.add('font-book')
                this.bookFont = true
                console.log('Font: Gotham Book')
            }
        }
    }
}
</script>
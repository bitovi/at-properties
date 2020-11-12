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
export default {
    name: 'dev-grids',
    data() {
        return {
            showEl: false
        }
    },
    mounted: function () {
        document.addEventListener("keydown", (event) => {
            if((event.ctrlKey || event.metaKey) && event.altKey && event.which == 71) {
                this.toggleGrid()
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
        }
    }
}
</script>
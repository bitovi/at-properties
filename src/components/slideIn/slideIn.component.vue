<template>
    <transition
        name="fade-slide"
        >
        <div class="sc-slide-in-mask" @click.self="close" v-if="showModal">
                <div class="sc-slide-in fade-slide-content">
                    <nav>
                        <sc-close-btn @click.stop="close" />
                    </nav>
                    <div class="sc-slide-in-content" >
                        <slot />
                    </div>
                </div>
        </div>
    </transition>
</template>
<script>
export default {
    name: 'sc-slide-in',
    data() {
        //flag for inner transition
        return {
            showModal: false
        }
    },
    mounted: function () {
        document.addEventListener("keydown", (e) => {
            if (this.show && e.keyCode == 27) {
                this.close()
            }
        })
    },
    methods: {
        open() {
            this.showModal = true
        },
        close: function() {
            this.showModal = false
            this.$emit('close')
        }
    }
}
</script>
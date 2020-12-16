<template>
    <button
        type="button"
        v-bind="$attrs"
        :class="`btn--style-${theme}`"
        class="btn"
        v-on="$listeners"
    >
        <span :class="innerClass">
            <slot />
        </span>
    </button>
</template>

<script>
export default {
    name: 'dlp-button',
    props: {
        theme: {
            type: String,
            default: 'dark',
            validator: function(val) {
                return ['dark', 'light'].indexOf(val) !== -1
            }
        },
        icon: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        innerClass() {
            return this.icon ? 'btn__icon' : 'btn__text'
        }
    }
}
</script>
<template>
    <button
        type="button"
        v-bind="$attrs"
        :class="`btn--style-${theme}`"
        class="btn"
        v-on="$listeners"
    >
        <span class="btn__text">
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

        }
    }
}
</script>
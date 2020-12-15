<template>
    <component
        :is="type"
        :type="nativeType"
        v-bind="$attrs"
        :href="href"
        class="btn btn--style-dark"
        v-on="$listeners"
    >
        <span class="btn__text">
            <slot />
        </span>
    </component>
</template>

<script>
export default {
    name: 'dlp-button',
    props: {
        href: {
            type: String,
            default: null
        },
        nativeType: {
            type: [String, null],
            default: null,
            validator: (value) => {
                //allow <a> tag
                if(value === null) return null
                return [
                    'button',
                    'submit',
                    'reset'
                ].indexOf(value) >= 0
            }
        },
    },
    computed: {
        type() {
            if(this.href){
                return 'a'
            } else {
                return 'button'
            }
        }
    }
}
</script>
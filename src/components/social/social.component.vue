<template>
    <div class="sc-social">
        <a v-if="facebook" :href="facebook" aria-label="Facebook">
            <svg>
                <use xlink:href="#facebook" />
            </svg>
        </a>
        <a v-if="instagram" :href="instagram" aria-label="Instagram">
            <svg>
                <use xlink:href="#instagram" />
            </svg>
        </a>
        <a v-if="twitter" :href="twitter" aria-label="Twitter">
            <svg> 
                <use xlink:href="#twitter" />
            </svg>
        </a>
        <a v-if="youtube" :href="youtube" aria-label="YouTube">
            <svg>
                <use xlink:href="#youtube" />
            </svg>
        </a>
    </div>
</template>

<script>
export default {
    name: 'sc-social',
    props: {
        facebook: {
            type: String,
            default: null
        },
        instagram: {
            type: String,
            default: null
        },
        twitter: {
            type: String,
            default: null
        },
        youtube: {
            type: String,
            default: null
        }
    }
}
</script>
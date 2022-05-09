<template>
    <div>
        <a :href="this.url" target="_blank">
            <div v-if="this.image !== ''"
                 class="contact-background"
                 :style="{backgroundImage: 'url(\'' + this.image + '\')'}">
            </div>
            <div v-else class="contact-name">{{capitalizeName(this.name)}}</div>

            <div class="contact-username">{{this.username}}</div>
        </a>

    </div>
</template>

<script>
export default {
    name: "ContactElement",
    props: {
        name: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: false,
        },
        url: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            required: true,
        }
    },

    methods: {

        capitalizeName(name) {
            return name.charAt(0).toUpperCase() + name.slice(1);
        }
    }
}
</script>

<style scoped>
    a {
        position: relative;
        display: block;
        height: 150px;
        background-color: var(--background-secondary);
        padding: 25px 10px 10px 10px;
        transition: all .2s ease;
        text-decoration: none;
    }

    a:hover {
        padding: 10px;
        background-color: var(--card-background-hover);
    }

    a:before {
        --offset: 4px;

        z-index: -12;
        content: "";
        position: absolute;
            background-color: var(--accent-color);
        width: calc(100% + var(--offset));
        height: calc(100% + var(--offset));
        top: calc(var(--offset) / -2);
        left: calc(var(--offset) / -2);
        filter: drop-shadow(0 0 5px var(--accent-color));
        opacity: 0;
    }

    a:hover:before {
        opacity: 1;
    }

    .contact-background {
        height: 100px;
        width: 100%;
        background-position: center;
        background-size: cover;
        filter: grayscale(1) invert(1);
        transition: filter .2s ease;
    }


    a:hover .contact-background {
        filter: grayscale(0) invert(0);
    }

    .contact-name {
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2.25em;
        font-weight: bold;
        color: var(--color-secondary);
        transition: all .2s ease;
    }

    a:hover .contact-name {
        color: var(--card-color)
    }

    .contact-username {
        position: absolute;
        bottom: 25px;
        left: 0;
        right: 0;
        text-align: center;
        opacity: 0;
        transition: opacity .2s ease, transform .3s ease;
        color: var(--card-color);
        transform: translateY(25px);
    }

    a:hover .contact-username {
        opacity: 1;
        transform: translateY(0);
    }
</style>
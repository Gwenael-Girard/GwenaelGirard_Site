<template>
    <header>
        <div class="header-container">
            <router-link to="/" class="logo">
                <span class="material-icons">chevron_right</span>Gwenael.Girard<span class="cursor"></span>
            </router-link>
            <div class="header-right">
                <nav class="header-navigation">
                    <router-link to="/">Accueil</router-link>
                    <router-link to="/contact">Contact</router-link>
                </nav>
                <button class="light-dark-btn" @click="switchTheme">
                    <span class="material-icons">contrast</span>
                    <div class="tooltip">
                        <span class="tooltiptext"><span class="material-icons">chevron_left</span>{{this.inversedTheme}} mode</span>
                    </div>
                </button>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: "Header",
    data() {
        return {
            theme: "dark"
        }
    },

    computed: {
        inversedTheme() {
            if(this.theme === "dark") {
                return "light"
            } else if (this.theme === "light") {
                return "dark"
            }
        }
    },

    methods: {
        switchTheme() {
            if(this.theme === "dark") {
                this.theme = "light";

                document.documentElement.style.setProperty('--background', '#ffffff');
                document.documentElement.style.setProperty('--background-secondary', '#f1efef');
                document.documentElement.style.setProperty('--header', '#e3e2e2');
                document.documentElement.style.setProperty('--color', '#222222');
                document.documentElement.style.setProperty('--color-secondary', '#999999');
                document.documentElement.style.setProperty('--border-color', '#dcdcdc');

            } else if (this.theme === "light") {
                this.theme = "dark";

                document.documentElement.style.setProperty('--background', '#292a2d');
                document.documentElement.style.setProperty('--background-secondary', '#3b3d42');
                document.documentElement.style.setProperty('--header', '#252627');
                document.documentElement.style.setProperty('--color', '#caccd3');
                document.documentElement.style.setProperty('--color-secondary', '#b1b7bd');
                document.documentElement.style.setProperty('--border-color', '#4a4b50');
            }
        },
    }
}
</script>

<style scoped>
    header {
        z-index: 100;
        position: fixed;
        width: 100%;
        top: 0;
        left: 0;
        background-color: var(--header);
        filter: drop-shadow(0 5px 10px var(--header));
        overflow: hidden;
    }

    header * {
        font-size: var(--header-text-size);
    }

    .header-container {
        position: relative;
        z-index: 200;
        width: var(--readable-width);
        height: var(--header-height);
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .logo {
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
        user-select: none;
        font-weight: bold;
        height: var(--min-clickable-dim);
        transition: transform 200ms ease-in-out;
        overflow: hidden;
    }

    .logo .material-icons {
        font-size: calc(var(--header-text-size)*1.3);
        font-weight: bold;
        transition: color 200ms ease-in-out, filter 200ms ease-in-out;
    }

    .logo:hover .material-icons{
        color: var(--accent-color);
        filter: drop-shadow(0 0 2px var(--accent-color));
    }

    .logo .cursor {
        display: inline-block;
        background-color: var(--accent-color);
        margin-left: calc(var(--header-text-size) / 2);
        border-radius: 2px;
        height: var(--header-text-size);
        width: calc(var(--header-text-size) / 1.6);
        filter: drop-shadow(0 0 2px var(--accent-color));
        animation: cursor-blink;
        animation-duration: 1s;
        animation-iteration-count: infinite;
    }

    @keyframes cursor-blink {
        0% {opacity: 1}
        50% {opacity: 0}
        75% {opacity: 1}
        100% {opacity: 1}

    }

    .header-right {
        display: flex;
        align-items: center;
    }

    .header-navigation {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 .5em;
        border-right: 2.5px solid var(--color);
        height: var(--min-clickable-dim);
    }

    .header-navigation a {
        position: relative;
        text-decoration: none;
        margin: 0 .5em;
        opacity: .5;
        font-size: 18px;
        transition: color 200ms ease-in-out, opacity 200ms ease-in-out;
    }

    .header-navigation a:hover {
        color: var(--accent-color) !important;
        opacity: 1;
    }

    .header-navigation a:after {
        content: "";
        position: absolute;
        width: 0;
        height: 2.5px;
        background-color: var(--accent-color);
        filter: drop-shadow(0 0 1px var(--accent-color));
        bottom: -5px;
        left: unset;
        right: 0;
        transition: width 200ms ease-in-out;
    }

    .header-navigation a:hover:after {
        right: unset;
        left: 0;
        width: 100%;
    }

    .header-navigation a.router-link-exact-active {
        opacity: 1;
    }

    .light-dark-btn {
        margin-left: 1em;
        padding: 4px;
        text-align: center;
        background-color: transparent;
        border: none;
        width: 32px;
        height: 32px;
    }

    .light-dark-btn .material-icons {
        font-size: 24px;
    }

    .light-dark-btn .tooltip {
        opacity: 1;
        position: absolute;
        width: 90px;
        height: 24px;
        display: inline;
        left: 100%;
        transition: all .2s ease;
        border-radius: 5px;
        overflow: hidden;
    }

    .light-dark-btn .tooltip .tooltiptext {
        position: absolute;
        left: -90px;
        width: 100%;
        height: 100%;
        background-color: var(--background);
        line-height: 24px;
        font-size: 12px;
        transition: left .3s ease;
        display: flex;
        align-items: center;
        padding: 0 5px;
        justify-content: space-around;
    }

    .light-dark-btn .tooltip .tooltiptext .material-icons {
        font-size: 16px;
    }

    .light-dark-btn:hover .tooltip .tooltiptext {
        left: 0;
    }

</style>
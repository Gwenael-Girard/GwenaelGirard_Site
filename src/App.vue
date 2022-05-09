<template>
    <Header />
    <router-view/>
    <Footer />
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
    name: "app",
    components: {
        Header,
        Footer
    },

    data() {
        return {
            color: [
                "#4285e1",
                "#53b43d",
                "#d0b240",
                "#d33131",
            ]
        }
    },

    methods: {
      setAccentColor() {
          let colorChoice = Math.floor(Math.random() * this.color.length);
          document.documentElement.style.setProperty('--accent-color', this.color[colorChoice]);
      }
    },

    beforeMount() {
        this.setAccentColor()
    }
}
</script>

<style lang="scss">

:root {

    --background: #292a2d;
    --background-secondary: #3b3d42;
    --header: #252627;
    --color: #caccd3;
    --color-secondary: #b1b7bd;
    --border-color: #4a4b50;

    --card-background-hover: #ececf1;
    --card-color: #3b3d42;

    --accent-color: #4285e1;

    --min-clickable-dim: 32px;

    --readable-width: 900px;

    //Header
    --header-height: 80px;
    --header-text-size: 18px;

    --footer-height: calc(var(--header-height) * 2);
}

@import 'normalize.css';

* {
    box-sizing: border-box;
    color: var(--color);
    font-family: 'Inter', sans-serif;

}

body {
    background-color: var(--background);
    padding: 1em 0 0 0 ;
}

.page {
    width: var(--readable-width);
    margin: 0 auto;
    min-height: calc(100vh - var(--footer-height) - 2em);
}

section {
    margin: 0 0 4em 0;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h2 {
    font-size: 2em;
    margin: .5em 0 .75em 0;
    padding-bottom: .25em;
    border-bottom: 2px solid var(--color);
}

h3, h3 sup, h3 sub {
    font-weight: normal;
    font-style: italic;
    color: var(--color-secondary);
    margin: .25em 0 0 0;
}

code {
    background-color: var(--background-secondary);
    padding: 0.2em 0.3em;
    border-radius: 5px;
    color: var(--accent-color)
}

em, em sup, em sub {
    font-style: normal;
    color: var(--color-secondary)
}

strong, strong sup, strong sub {
    font-weight: bold;
}
</style>

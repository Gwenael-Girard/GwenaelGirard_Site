<template>
    <footer>
        <div class="footer-container">

        </div>
    </footer>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped>
    footer {
        width: 100%;
        height: calc(var(--header-height) * 2);
        background-color: var(--header);
    }

    .footer-container {
        width: var(--readable-width);
        height: 100%;
        margin: 0 auto;
    }
</style>
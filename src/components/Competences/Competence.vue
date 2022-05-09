<template>
    <div class="comptence">
        <h4 class="comptence-titre"><slot></slot></h4>

        <div class="comptences-liste">
            <slot name="competences"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "Competence",
}
</script>

<style scoped>
    .comptence {
        background-color: var(--background-secondary);
        text-align: center;
        padding: 2.25em .75em .75em .75em;
        border-radius: 10px;
        position: relative;
        overflow: hidden;
    }

    .comptence h4 {
        margin: 0 0 .75em 0;
        font-size: 18px;
        background-color: var(--header);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        padding: .25em;
    }

    .comptences-liste {
        text-align: left;
    }
</style>
<template>
    <div class="competence">
        <span class="competence-titre"><slot></slot></span>
        <div class="barre" >
            <div class="scale"><span>|</span><span>|</span><span>|</span><span>|</span></div>
            <div class="curseur" :style="{width: this.getWidth(this.note) + 'px'}">

            </div>
        </div>
    </div>
</template>

<script>

const maxWidth = 100;
const maxNote = 5;

export default {
    name: "Barre",
    props: {
        note: {
            required: true
        }
    },

    methods: {
        getWidth(note) {
            let unitWidth = maxWidth / maxNote
            let verifiedNote = note < 1 ? 1 : note > maxNote ? maxNote : note;

            return unitWidth * verifiedNote;

        }
    },
}
</script>

<style scoped>
    .competence {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: var(--min-clickable-dim)
    }

    .competence-titre {
        color: var(--color-secondary)
    }

    .barre {
        background: var(--background);
        width: 100px;
        height: 5px;
        position: relative;
        border-radius: 1.5px;
    }

    .scale {
        position: absolute;
        width: calc(100% - 4px);
        top: 0;
        left: 2px;
        display: flex;
        justify-content: space-evenly;
        overflow: hidden;
        height: 5px
    }

    .scale span {
        color: var(--background-secondary);
        margin: 0;
        padding: 0;
    }

    .curseur {
        background: var(--accent-color);
        position: absolute;
        height: 100%;
        left: 0;
        filter: drop-shadow(0 0 3px var(--accent-color));
        border-radius: 1.5px;
    }
</style>
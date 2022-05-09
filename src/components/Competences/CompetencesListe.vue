<template>
    <div class="grid-comptences">
        <Competence v-for="category in this.$store.state.comptencesListe">
            {{ category.name }}
            <template v-slot:competences>
                <Barre v-for="competence in category.comptences" :note="competence.note">{{ competence.title }}</Barre>
            </template>
        </Competence>
    </div>
</template>

<script>
import Competence from "@/components/Competences/Competence";
import Barre from "@/components/Competences/Barre";

export default {
    name: "CompetencesListe",
    components: {
        Competence,
        Barre
    },

    computed: {
        competences() {
            return this.$store.state.comptencesListe
        }
    },
}
</script>

<style scoped>
.grid-comptences {
    --gap: 35px;
    --grid-elements-width: calc((100% - var(--gap) * 2)/3);

    display: grid;
    gap: var(--gap);
    grid-template-columns:  var(--grid-elements-width)
                                var(--grid-elements-width)
                                var(--grid-elements-width);
}
</style>
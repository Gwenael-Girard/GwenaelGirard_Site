<template>
  <div class="page home">
      <section>
          <h2>Gwenael Girard</h2>
          <h3>Étudiant en 2<sup>ème</sup> année en informatique</h3>
      </section>

      <section>
          <h2>Compétences</h2>
          <CompetencesListe />
      </section>
  </div>
</template>

<script>
import CompetencesListe from "@/components/Competences/CompetencesListe";
export default {
  name: 'HomeView',
  components: {
      CompetencesListe
  }
}
</script>

<style scoped>

</style>

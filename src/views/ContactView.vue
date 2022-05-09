<template>
    <div class="page contact">
        <h2>Contacts : </h2>
        <div class="grid-contact">
            <ContactElement v-for="contact in this.$store.state.contacts"
                            :url="contact.url"
                            :name="contact.name"
                            :username="contact.username"
                            :image="contact.image"/>
        </div>
    </div>

</template>

<script>
import ContactElement from "@/components/ContactElement";
export default {
    name: "ContactView",
    components: {
        ContactElement
    }
}
</script>

<style scoped>
    .grid-contact{
        --gap: 35px;
        --grid-elements-width: calc((100% - var(--gap) * 2)/3);

        display: grid;
        gap: var(--gap);
        grid-template-columns:  var(--grid-elements-width)
                                var(--grid-elements-width)
                                var(--grid-elements-width);
    }
</style>
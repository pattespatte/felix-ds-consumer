<script setup lang="ts">
import { ref } from "vue";
import { FButton, FExpandableParagraph, FModal } from "@fkui/vue";

// FExpandableParagraph is fully controlled: bare usage renders a dead button
// with no console error, so the open/toggle state must be wired by the page.
const expanderad = ref(false);
const modalOppen = ref(false);
</script>

<template>
    <section aria-labelledby="atkoppling-heading">
        <h1 id="atkoppling-heading">Återkoppling</h1>
        <p class="atkoppling__intro">
            Expanderbar text med styrd expanderingsstate och en modal dialog – båda styrs av sidan, inte av komponenten.
        </p>

        <f-expandable-paragraph
            header-tag="h2"
            :expanded="expanderad"
            @toggle="expanderad = !expanderad"
        >
            <template #title> Hur konsumeras felix-ds? </template>
            <template #default>
                Temat läggs ovanpå FKUI:s publika npm-paket med ett par mixins
                i appens stilmall – inga komponenter byts ut. Ljust och mörkt
                läge styrs av attributet på html-elementet.
            </template>
        </f-expandable-paragraph>

        <f-button size="medium" variant="primary" @click="modalOppen = true">
            Öppna modal
        </f-button>

        <f-modal :is-open="modalOppen" @close="modalOppen = false">
            <template #header> Bekräfta </template>
            <template #content>
                Detta är en modal som följer det aktiva temat och färgläget.
            </template>
            <template #footer>
                <f-button size="medium" variant="primary" @click="modalOppen = false">
                    Stäng
                </f-button>
            </template>
        </f-modal>
    </section>
</template>

<style scoped>
.atkoppling__intro {
    max-width: 46rem;
}
</style>

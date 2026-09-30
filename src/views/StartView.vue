<template>
    <section aria-labelledby="start-heading">
        <h1 id="start-heading">felix-ds-konsument</h1>
        <p class="start__intro">
            En minimal testapp som konsumerar felix-ds precis som guiden beskriver: FKUI:s publika paket med felix-temat ovanpå, i både ljust och mörkt läge. Syftet är att öva konsumtionskontraktet – byt version, byt FKUI-träd och se att temat håller.
        </p>
        <ul class="start__list">
            <li><router-link :to="{ name: 'formular' }">Formulär</router-link> – valideringsgrupper och fältkomponenter.</li>
            <li><router-link :to="{ name: 'tabeller' }">Tabeller</router-link> – datatabell med kolumner och radrubriker.</li>
            <li><router-link :to="{ name: 'atkoppling' }">Återkoppling</router-link> – expanderbar text och modal dialog.</li>
        </ul>
    </section>
</template>

<style scoped lang="scss">
.start__intro {
    max-width: 46rem;
}

.start__list {
    max-width: 46rem;
    padding-left: 1.25rem;

    li {
        margin-bottom: 0.5rem;
    }

    a {
        color: var(--fkds-color-text-action, #0053a7);
    }
}
</style>

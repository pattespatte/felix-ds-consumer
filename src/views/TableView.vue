<script setup lang="ts">
import { FDataTable, FTableColumn, FTableColumnType } from "@fkui/vue";

interface UppgiftRow {
    id: string;
    aktivitet: string;
    vecka: string;
    timmar: number;
    status: string;
}

const rows: UppgiftRow[] = [
    { id: "1", aktivitet: "Genomgång av kontrakt", vecka: "2026-v40", timmar: 6, status: "Klar" },
    { id: "2", aktivitet: "Visuell port", vecka: "2026-v40", timmar: 4, status: "Pågår" },
    { id: "3", aktivitet: "Utgivningsrunda", vecka: "2026-v41", timmar: 2, status: "Ej startad" },
    { id: "4", aktivitet: "Uppföljning hos konsument", vecka: "2026-v41", timmar: 3, status: "Planerad" },
];
</script>

<template>
    <section aria-labelledby="tabeller-heading">
        <h1 id="tabeller-heading">Tabeller</h1>
        <p class="tabeller__intro">
            Datatabell med radrubriker, datum-/veckokolumn med formatbeskrivning och numerisk kolumn.
        </p>

        <f-data-table :rows key-attribute="id">
            <template #caption> Planerade aktiviteter </template>
            <template #default="{ row }">
                <f-table-column title="Aktivitet" row-header :type="FTableColumnType.TEXT">
                    {{ row.aktivitet }}
                </f-table-column>
                <f-table-column title="Vecka" :type="FTableColumnType.TEXT">
                    {{ row.vecka }}
                </f-table-column>
                <f-table-column title="Timmar" :type="FTableColumnType.NUMERIC">
                    {{ row.timmar }}
                </f-table-column>
                <f-table-column title="Status" :type="FTableColumnType.TEXT">
                    {{ row.status }}
                </f-table-column>
            </template>
        </f-data-table>
    </section>
</template>

<style scoped lang="scss">
.tabeller__intro {
    max-width: 46rem;
}
</style>

<script setup lang="ts">
import { ref } from "vue";
import {
    FButton,
    FCheckboxField,
    FFieldset,
    FSelectField,
    FTextField,
    FTextareaField,
    FValidationForm,
    FValidationGroup,
    type GroupValidityEvent,
} from "@fkui/vue";

const namn = ref("");
const epost = ref("");
const meddelande = ref("");
const ort = ref("");
const amnen = ref<string[]>([]);
const kontaktuppgifter = ref({} as GroupValidityEvent);
</script>

<template>
    <section aria-labelledby="formular-heading">
        <h1 id="formular-heading">Formulär</h1>
        <p class="formular__intro">
            Ett formulär med valderingsformulär, valideringsgrupp och fältkomponenter. Skicka med tomma obligatoriska fält för att se fellistan.
        </p>

        <f-validation-form>
            <template #error-message> Fel i följande fält: </template>

            <f-text-field id="formular-namn" v-model="namn" v-validation.required :maxlength="100">
                Namn
            </f-text-field>

            <f-validation-group v-model="kontaktuppgifter" name="kontaktuppgifter">
                <f-text-field id="formular-epost" v-model="epost" v-validation.required.email :maxlength="100">
                    E-postadress
                </f-text-field>

                <f-select-field v-model="ort">
                    <template #label> Ort </template>
                    <option value="goteborg">Göteborg</option>
                    <option value="stockholm">Stockholm</option>
                    <option value="umea">Umeå</option>
                </f-select-field>
            </f-validation-group>

            <f-fieldset name="amnen">
                <template #label> Vill du ha information om </template>
                <f-checkbox-field v-model="amnen" value="tema"> Temautveckling </f-checkbox-field>
                <f-checkbox-field v-model="amnen" value="utgivning"> Utgivning av versioner </f-checkbox-field>
            </f-fieldset>

            <f-textarea-field v-model="meddelande" v-validation.required :maxlength="500">
                Meddelande
            </f-textarea-field>

            <f-button type="submit" size="medium" variant="primary">
                Skicka
            </f-button>
        </f-validation-form>

        <p class="formular__status">
            Delgruppens giltighet: {{ kontaktuppgifter?.isValid ? "giltig" : "inte giltig" }}
        </p>
    </section>
</template>

<style scoped>
.formular__intro {
    max-width: 46rem;
}

.formular__status {
    margin-top: 1rem;
    color: var(--fkds-color-text-secondary, #585f71);
}
</style>

<template>
  <v-row class="h-svh" justify="center" align="center">
    <v-col cols="12" md="4">
      <v-card text="Login">
        <v-form ref="form" v-model="valid" fast-fail @submit.prevent="handleSubmit">
          <v-row>
            <v-col cols="3" md="12">
              <v-text-field
                  v-model="firstName"
                  :rules="nameRules"
                  :error-messages="firstNameErrors"
                  label="First Name"
                  required
              ></v-text-field>
            </v-col>
            <v-col cols="3" md="12">
              <v-text-field
                  v-model="lastName"
                  :rules="nameRules"
                  :error-messages="lastNameErrors"
                  label="Last name"
                  required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-btn type="submit" width="100%" >Submit</v-btn>
        </v-form>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import {VForm} from "vuetify/components";


const valid = ref(false);
const lastName = ref('');
const firstName = ref('');
const firstNameErrors = ref<string[]>([]);
const lastNameErrors = ref<string[]>([]);
const nameRules = [
  (value: string) => !!value || 'You must enter a first name.',
];
const lastNameRules = [
  (value: string) => !!value || 'You must enter a first name.',
];

const form = ref<VForm | null>(null);

const handleSubmit = async () => {
  resetValidation();

  if (form.value) {
    const {valid} = await form.value.validate();
    if (valid) {
      console.log('Form is valid');
      console.log('First Name:', firstName.value);
      alert('Form is valid');
      // You can add your form submission logic here, such as sending the data to an API
    } else {
      // Manually trigger validation to show errors
      firstNameErrors.value = validateField(firstName.value, nameRules);
      lastNameErrors.value = validateField(firstName.value, lastNameRules);
    }
  }
};

const resetValidation = () => {
  form.value?.resetValidation();
  firstNameErrors.value = [];
};

const validateField = (value: string, rules: ((value: string) => boolean | string)[]) => {
  return rules.map(rule => rule(value)).filter(result => typeof result === 'string') as string[];
};

</script>

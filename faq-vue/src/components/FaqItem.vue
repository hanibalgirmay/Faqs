<template>
  <v-expansion-panels>
    <v-expansion-panel v-for="(faq, i) in faqData" :key="i">
      <v-expansion-panel-header> {{faq.question}} </v-expansion-panel-header>
      <v-expansion-panel-content>
        {{faq.answer}}
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
  props: ["faqData"]
};
</script>

<style></style>

<template>
  <v-app>
    <div class="banner">
      </div>
    <v-main>
      <v-container>
        <v-row>
          <v-col class="justify-content-center">
            <h2 class="title">Frequently Asked Questions</h2>
          </v-col>
          <v-col cols="12">
            <FaqItemVue :faqData="faqList" />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import FaqItemVue from "./components/FaqItem.vue";
import api from "./services/api";

export default {
  name: "App",
  components: {
    FaqItemVue,
  },

  data: () => ({
    url: "./assets/questions.json",
    faqList: [],
  }),
  methods: {
    Faqs() {
      api
        .getFaqs()
        .then((res) => {
          this.faqList = res.questions;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.Faqs();
  },
};
</script>

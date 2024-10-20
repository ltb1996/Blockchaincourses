<template>
  <Shop :product="getWomen" :image="heroWomen" :category="category" />
</template>

<script>
import { mapGetters } from "vuex";
import Shop from "@/components/Shop.vue";

export default {
  components: { Shop },
  data() {
    return {
      heroWomen: "home-back-top.jpg",
      category: "专业核心课",
    };
  },
  computed: {
    ...mapGetters(["getWomen"]),
  },
};
</script>

<style></style>

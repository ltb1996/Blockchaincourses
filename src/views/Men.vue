<template>
  <Shop :product="getMen" :image="heroMen" :category="category" />
</template>

<script>
import { mapGetters } from "vuex";
import Shop from "@/components/Shop.vue";

export default {
  components: { Shop },
  data() {
    return {
      heroMen: "xuanxiu.jpg",
      category: "专业选修课",
    };
  },
  computed: {
    ...mapGetters(["getMen"]),
  },
};
</script>

<style></style>

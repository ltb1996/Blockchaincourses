<template>
  <link
    rel="stylesheet"
    href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
  />
  <Navbar @toggle="toggleCart" />
  <Cart :class="{ open: !openThisCart }" @toggleCart="toggleCart" />
  <router-view :class="{ opacity: openThisCart }" />
</template>
--

<script>
import Navbar from "@/components/Navbar.vue";
import Cart from "@/components/NavCart.vue";

export default {
  components: { Navbar, Cart },
  data() {
    return {
      openThisCart: false,
    };
  },
  methods: {
    toggleCart() {
      this.openThisCart = !this.openThisCart;
    },
  },
};
</script>

<style>
@font-face {
  font-family: ITC Cheltenham Std;
  src: url(./fonts/CheltenhamStd.otf);
}
@font-face {
  font-family: Clab Personal Use;
  src: url(./fonts/ClabPersonalUse.otf);
}
@font-face {
  font-family: Magisho;
  src: url(./fonts/Magisho.otf);
}
@font-face {
  font-family: Hjet;
  src: url(./fonts/Hjet.otf);
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  width: 100%;
  margin: 0;
  padding: 0;
  height: 100%;
}
.opacity {
  opacity: 0.8;
}

html,
body,
p,
h1,
h3 {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

textarea:focus,
input:focus {
  outline: none;
}

button:focus {
  outline: 0;
}

button {
  cursor: pointer;
}

img {
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}

/* 隐藏水平滚动条，保留垂直滚动条 */
/* html, body {
  overflow-x: hidden;
}

* {
  scrollbar-width: thin;
  scrollbar-color: rgba(155, 155, 155, 0.5) transparent;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: rgba(155, 155, 155, 0.5);
  border-radius: 20px;
  border: transparent;
}

html, body {
  overflow-y: auto;
  overflow-x: hidden;
} */
/* 隐藏水平滚动条，保留垂直滚动条 */

html, body {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
}

html::-webkit-scrollbar, body::-webkit-scrollbar {
  display: none; /* Chrome, Safari and Opera */
}

* {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

*::-webkit-scrollbar {
  display: none;
}
</style>

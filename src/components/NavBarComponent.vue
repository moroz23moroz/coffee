<template>
  <header>
    <ul
      class="header d-flex justify-content-center justify-content-md-start flex-wrap"
    >
      <li v-for="link in links" :key="link.id" class="header__item">
        <RouterLink :to="link.link">
          <template v-if="link.icon">
            <img :src="link.icon" :alt="link.icon" />
          </template>
          <template v-else>
            {{ link.text }}
          </template>
        </RouterLink>
      </li>
    </ul>
  </header>
</template>

<script>
import Logo from "@/assets/logo/Logo.svg";

export default {
  data() {
    return {
      links: [
        { id: 0, link: "/", icon: Logo },
        { id: 1, text: "Our coffee", link: "/our-coffee" },
        { id: 2, text: "For your pleasure", link: "/for-your-pleasure" },
        { id: 3, text: "Contact us", link: "/contact-us" },
      ],
    };
  },
};
</script>

<style scoped lang="scss"></style>

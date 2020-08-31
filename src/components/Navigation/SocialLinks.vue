<template>
  <ul class="socialLinks">
    <li class="socialLinks__item">
      <a href="#">
        <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }" />
      </a>
    </li>
    <li class="socialLinks__item">
      <a href="#">
        <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook-f' }" />
      </a>
    </li>
    <li class="socialLinks__item">
      <a href="#">
        <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'dribbble' }" />
      </a>
    </li>
    <li class="socialLinks__item">
      <a href="#">
        <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'instagram' }" />
      </a>
    </li>
  </ul>
</template>

<script>
export default {};
</script>

<style lang="scss">
.socialLinks {
  @include aboluteCenterLeft;

  &__item {
    margin: 0 10px 0 10px;
    cursor: pointer;

    & > a {
      color: $color__menu;
    }

    &:hover {
      & > a {
        color: $color__title;
      }
    }
  }
}
</style>

<template>
  <div>
    <div class="fileterBtn" @click="onItemClick" v-bind:class="{active: isOpen}">
      <span></span>
    </div>
    <ul class="filter" v-bind:class="{openFilter : isOpen}">
      <li
        class="filter__item"
        v-for="(listItem, index) in list"
        :key="index"
        @click="setItem(listItem)"
        v-bind:class="{active: isActive(listItem), opened: isOpen}"
      >{{listItem}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      isOpen: false,
      activeItem: "all",
    };
  },
  props: ["gottenList"],
  methods: {
    isActive(menuItem) {
      return this.activeItem === menuItem;
    },
    onItemClick() {
      this.isOpen = !this.isOpen;
    },
    setItem(string) {
      this.activeItem = string;
      this.$emit("filterItems", string);
    },
  },
  created() {
    this.list = this.gottenList;
  },
};
</script>

<style lang="scss" scoped>
.filter {
  display: flex;
  transition: visibility 1s, opacity 1s linear;
  flex-wrap: wrap;
  justify-content: center;
  text-transform: uppercase;
  margin-top: 25px;
  visibility: hidden;
  opacity: 0;

  &__item {
    margin: 0 20px 0 20px;
    cursor: pointer;
    color: $color__menu;
    font-family: $font-workSans;
    font-size: 13px;
    font-weight: 400;
    position: relative;

    &:hover {
      color: $color__title;
    }
  }

  .active {
    color: $color__title;
  }
}

.fileterBtn {
  width: 16px;
  height: 16px;
  margin: 0 auto;
  cursor: pointer;
  position: relative;

  &::before,
  &::after {
    content: "";
    width: 6px;
    height: 6px;
    display: block;
    background-color: $color__btnBg;
    position: absolute;
    left: 0;
  }

  &::before {
    top: 0;
  }

  &::after {
    bottom: 0;
  }

  & > span {
    &::before,
    &::after {
      content: "";
      width: 6px;
      height: 6px;
      display: block;
      background-color: $color__btnBg;
      position: absolute;
      right: 0;
    }

    &::before {
      top: 0;
    }

    &::after {
      bottom: 0;
    }
  }

  &:hover {
    &::before,
    &::after {
      opacity: 0.6;
    }

    & > span {
      &::before,
      &::after {
        opacity: 0.6;
      }
    }
  }
}

.active {
  &::before,
  &::after {
    opacity: 0.6;
  }

  & > span {
    &::before,
    &::after {
      opacity: 0.6;
    }
  }
}

.openFilter {
  visibility: visible;
  opacity: 1;
}

.opened {
  animation: dropDown 0.8s ease-in;
}

@keyframes dropDown {
  0% {
    visibility: hidden;
    opacity: 0;
    bottom: 25px;
  }
  100% {
    visibility: visible;
    opacity: 1;
    bottom: 0;
  }
}
</style>
<template>
  <ul class="section--pattern achievements">
    <li class="achievements__item" v-for="(achievement, index) in achievements" :key="index">
      <font-awesome-icon
        class="achievements__icon"
        :icon="{ prefix: achievement.icon.prefix, iconName: achievement.icon.iconName }"
      />
      <div class="achievements__desc">
        <span class="achievements__quantity">{{achievement.quantity}}</span>
        <p class="achievements__name">{{achievement.name}}</p>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      achievements: [
        {
          name: "projects completed",
          quantity: 548,
          icon: { prefix: "fas", iconName: "briefcase" },
        },
        {
          name: "working hours",
          quantity: 1465,
          icon: { prefix: "far", iconName: "clock" },
        },
        {
          name: "positive feedbacks",
          quantity: 612,
          icon: { prefix: "far", iconName: "star" },
        },
        {
          name: "happy clients",
          quantity: 735,
          icon: { prefix: "far", iconName: "heart" },
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.achievements {
  height: auto;
  color: $color__main--white;
  @include flexAlignCenter(space-around);
  flex-wrap: wrap;
  font-family: $font-workSans;

  @include tablet {
    height: 250px;
  }

  @include laptop {
    height: 250px;
  }

  @include desktop {
    height: 250px;
  }

  &__item {
    display: flex;
    width: 100%;
    height: 80px;
    justify-content: left;
    padding: 0 15vw 0 20vw;
    align-items: center;

    @include tablet {
      @include autoWidthHeight;
      padding: 0;

      &:first-child {
        margin-left: 15px;
      }

      &:last-child {
        margin-right: 15px;
      }
    }

    @include laptop {
      @include autoWidthHeight;
      padding: 0;

      &:first-child {
        margin-left: 25px;
      }

      &:last-child {
        margin-right: 25px;
      }
    }

    @include desktop {
      @include autoWidthHeight;
      padding: 0;

      &:first-child {
        margin-left: 50px;
      }

      &:last-child {
        margin-right: 50px;
      }
    }
  }

  &__icon {
    margin-right: 28px;
    font-size: 45px;
  }

  &__desc {
    text-transform: uppercase;
    text-align: left;
    font-size: 18px;
    letter-spacing: 0.35px;
    font-weight: 500;
  }

  &__name {
    font-size: 14px;
    padding-top: 10px;
  }
}
</style>
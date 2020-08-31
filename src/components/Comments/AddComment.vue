<template>
  <div class="postMessage">
    <h2 class="section__title postMessage__title" v-if="!isHomeForm">Leave a Comment:</h2>

    <form
      method="get"
      class="section section--grey postMessage__form"
      autocomplete="off"
      @submit.prevent="onSubmit"
    >
      <div class="error-name">
        <span class="error" v-if="!$v.name.customAlpha">Name must include only letters.</span>
        <span
          class="error"
          v-if="!$v.name.minLength"
        >Name must have at least {{$v.name.$params.minLength.min}} letters.</span>
      </div>

      <input
        :class="{invalid : $v.name.$invalid && $v.name.$dirty && !submitted }"
        type="text"
        name="name"
        placeholder="Your name..."
        v-model.trim="$v.name.$model"
      />

      <span class="error error-email" v-if="!$v.email.email">Enter valid email</span>

      <input
        :class="{invalid : $v.email.$error && $v.email.$dirty && !submitted }"
        type="email"
        name="email"
        placeholder="Your e-mail..."
        v-model.trim="$v.email.$model"
      />
      <input
        :class="{invalid : $v.title.$invalid && $v.title.$dirty && !submitted }"
        v-if="isHomeForm"
        class="postMessage__titleForm"
        type="text"
        name="title"
        placeholder="Your title..."
        v-model.trim="$v.title.$model"
      />

      <span
        class="error"
        v-if="!$v.title.minLength && $v.title.$dirty "
      >Title must have at least {{$v.title.$params.minLength.min}} letters.</span>

      <span class="error" v-if="!$v.title.customAlpha">Title must include only letters.</span>

      <textarea
        name="comment"
        placeholder="Your comment"
        v-model.trim="$v.commentText.$model"
        :class="{invalid : $v.title.$invalid && $v.title.$dirty && !submitted }"
      ></textarea>
      <span
        class="error"
        v-if="!$v.commentText.minLength && $v.commentText.$dirty"
      >Comment must have at least {{$v.commentText.$params.minLength.min}} letters.</span>

      <span class="error" v-if="!$v.commentText.alpha">Invalid symbols in comment.</span>
      <button class="postMessage__btn btn" type="submit">Post a comment</button>
    </form>
  </div>
</template>

<script>
import {
  required,
  minLength,
  between,
  helpers,
  requiredIf,
} from "vuelidate/lib/validators";

const customAlpha = helpers.regex("alpha", /^[a-zA-Z- ]*$/);
const alpha = helpers.regex("alpha", /^[a-zA-Z0-9- ,.():;*']*$/);
const email = helpers.regex("email", /^[a-z0-9._-]+@[a-z]+\.[a-z]{2,}$/);

export default {
  data() {
    return {
      name: "",
      email: "",
      title: "",
      commentText: "",
      submitted: false,
    };
  },

  validations() {
    return {
      name: {
        required,
        customAlpha,
        minLength: minLength(4),
      },

      email: {
        required,
        email,
      },

      title: {
        required: requiredIf(this.isHomeForm),
        customAlpha,
        minLength: minLength(10),
      },

      commentText: {
        required,
        alpha,
        minLength: minLength(15),
      },
    };
  },

  props: ["blogID", "isHomeForm"],

  methods: {
    getCurrentDate(day, month, year) {
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      return `${monthNames[month]} ${day}, ${year}`;
    },

    onSubmit() {
      if (this.$v.$invalid) {
        console.log("invalid");
        this.submitted = false;
      } else {
        this.submitted = true;
        console.log(
          `name: ${this.name}
email: ${this.email}
${this.isHomeForm ? `title ${this.title}` : ""}
comment: ${this.commentText}`
        );

        if (!this.isHomeForm) {
          location.reload();
          let date = new Date();

          this.$store.commit("addNewComment", {
            name: this.name,
            commentText: this.commentText,
            blogID: this.blogID,
            date: this.getCurrentDate(
              date.getDay(),
              date.getMonth(),
              date.getFullYear()
            ),
          });
        } else {
          this.name = "";
          this.email = "";
          this.title = "";
          this.commentText = "";
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.postMessage {
  width: 90vw;
  margin: 0 auto;

  @include tablet {
    max-width: 610px;
  }

  @include laptop {
    max-width: 610px;
  }

  @include desktop {
    max-width: 610px;
  }

  &__title {
    font-size: 26px;
    padding-top: 60px;
    padding-left: 0;
    padding-bottom: 20px;
  }

  &__form {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    font-family: $font-workSans;
    font-size: 14px;
    position: relative;

    & > input {
      width: 100%;
      margin-top: 20px;
      height: 50px;
      padding-left: 16px;
      background-color: $color__main--white;
      border: 0;
      color: $color__form--placeholder;

      &:focus {
        outline: none;
        border-bottom: 1px solid $color__subtitle;
      }

      &:invalid {
        border-bottom: 1px solid rgba($color: red, $alpha: 0.2);
      }

      @include tablet {
        width: 48%;
        margin-top: 0;
      }

      @include laptop {
        width: 48%;
        margin-top: 0;
      }

      @include desktop {
        width: 48%;
        margin-top: 0;
      }
    }

    & > textarea {
      margin-top: 20px;
      width: 100%;
      padding-left: 16px;
      padding-top: 20px;
      height: 168px;
      background-color: $color__main--white;
      border: 0;
      color: $color__form--placeholder;
      resize: none;

      &:focus {
        outline: none;
        border-bottom: 2px solid $color__subtitle;
      }
    }
  }

  &__titleForm {
    width: 100% !important;
    margin-top: 20px !important;
  }

  &__btn {
    margin: 20px auto;

    @include laptop {
      margin: 20px 0 20px 0;
    }

    @include desktop {
      margin: 20px 0 20px 0;
    }
  }
}

.invalid {
  border-bottom: 1px solid rgba($color: red, $alpha: 0.2) !important;
}

.error {
  color: rgba($color: red, $alpha: 0.7);
  margin: 5px 0 5px 0;
  font-family: $font-roboto;
  font-size: 14px;
  padding-right: 15px;
}

.error-name {
  text-align: left;
  position: absolute;
  top: -20px;
  & > span {
    display: block;
  }

  @include tablet {
    top: 53px;

    & > span {
      display: inline;
    }
  }

  @include laptop {
    top: 53px;

    & > span {
      display: inline;
    }
  }

  @include desktop {
    top: 53px;

    & > span {
      display: inline;
    }
  }
}

.error-email {
  position: absolute;
  top: 70px;
  left: 0;

  @include tablet {
    top: -25px;
    left: auto;
    right: 0;
  }

  @include laptop {
    top: -25px;
    left: auto;
    right: 0;
  }

  @include desktop {
    top: -25px;
    left: auto;
    right: 0;
  }
}
</style>
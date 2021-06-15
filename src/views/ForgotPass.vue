<template>
  <v-app>
    <v-img src="@/assets/background.png" aspect-ratio="2" class="x-shrink">
      <!-- Start Component for login card -->
      <v-container fill-height fluid>
        <v-row class="mt-16 mb-n16" align="center" justify="center">
          <!--Card-->
          <v-card
            tile
            elevation="10"
            class="pa-12 rounded-lg"
            outlined
            width="600"
          >
            <v-card-title class="justify-center mb-1">
              <h1 class="black--text text--lighten-1">Forgot Password</h1>
            </v-card-title>
            <!--- Form -->
            <v-form v-model="isValid">
              <v-card-text>
                <!-- Email Field -->
                <v-text-field
                  :rules="emailRules"
                  class="mb-1"
                  label="Email"
                  prepend-icon="mdi-email"
                  color="black"
                  type="email"
                  v-model="email"
                />
              </v-card-text>

              <!-- Button Section -->
              <v-row align="center" justify="center">
                <!--Login Button -->
                <v-col>
                  <v-card-actions>
                    <v-btn
                      x-large
                      color="black"
                      @click="goToLogin"
                      outlined
                      block
                      >Login</v-btn
                    >
                  </v-card-actions>
                </v-col>
                <!-- Login Button -->
              </v-row>
              <!-- Button Section -->

              <!-- Button Section -->
              <v-row align="center" justify="center" class="my-n5">
                <!-- Forgot Password Button -->
                <v-col>
                  <v-card-actions>
                    <v-btn
                      x-large
                      color="black"
                      class="white--text text--lighten-1"
                      @click="handleSubmit"
                      :disabled="!isValid"
                      block
                      >Send Email</v-btn
                    >
                  </v-card-actions>
                </v-col>
                <!-- Forgot Password Button -->
              </v-row>
              <!-- Button Section -->
            </v-form>
            <!--- Form -->
          </v-card>
          <!--Card-->
        </v-row>
      </v-container>
      <!-- End Component for login card -->
    </v-img>
  </v-app>
</template>

<script>
//Import Firebase
import firebase from "firebase";
//Import Map Getters
import { mapGetters } from "vuex";
//Export method
export default {
  name: "ForgotPass",
  computed: {
    ...mapGetters(["user"]),
  },
  data() {
    return {
      email: "",
      emailRules: [
        (emailvalue) => emailvalue != "" || "Please input the Email",
      ],
      isValid: false,
    };
  },
  watch: {
    user(auth) {
      if (auth) {
        this.$router.replace({ name: "Home" });
      }
    },
  },
  methods: {
    handleSubmit() {
      //Log the user in
      firebase
        .auth()
        .sendPasswordResetEmail(this.email)
        .then(
          (userData) => {
            console.log(userData);
            alert("Sucessfully sent, please check your email");
            this.$router.replace({ name: "Login" });
          },
          (error) => {
            alert(error);
          }
        );
    },
    goToLogin() {
      this.$router.replace({ name: "Login" });
    },
  },
};
</script>

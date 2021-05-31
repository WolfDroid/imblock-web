<template>
  <v-app>
    <v-img src='@/assets/background.png'
    aspect-ratio="2"
    class="x-shrink">
      <!-- Start Component for login card -->
      <v-container fill-height fluid>
        <v-row class= "mt-16 mb-n16" align="center" justify="center">
          <!--Card-->
          <v-card tile elevation="10" class="pa-12 rounded-lg" outlined width="600">
            <v-card-title class="justify-center mb-1" >
              <h1 class="black--text text--lighten-1">Login</h1>
            </v-card-title>
            <!--- Form -->
            <v-form v-model="isValid">
              <v-card-text>
                  <!-- Email Field -->
                  <v-text-field :rules="emailRules" class="mb-1" label="Email" prepend-icon="mdi-account-circle" color="black"
                  type="email" v-model= "email"/>
                  <!-- Password Field -->
                  <v-text-field :rules="passwordRules" class="mb-2" label="Password" prepend-icon="mdi-lock"  color="black"
                  :type =" showPassword ? 'text' : 'password' " 
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off' " 
                  @click:append="handleClick" v-model= "password"/>
              </v-card-text>

              <!-- Button Section -->
              <v-row align="center" justify="center">
                <!-- Signup Button -->
                <v-col>
                  <v-card-actions>
                    <v-btn x-large color="black" @click="goToSignup" outlined block>Sign Up</v-btn>
                  </v-card-actions>
                </v-col>
                <!-- Signup Button -->
                <!-- Forgot Password Button -->
                <v-col>
                  <v-card-actions>
                    <v-btn x-large color="black"  @click="goToForgotPass" outlined block>Forgot Password</v-btn>
                  </v-card-actions>
                </v-col>
                <!-- Forgot Password Button -->
              </v-row>
              <!-- Button Section -->

              <!-- Button Section -->
              <v-row align="center" justify="center" class="my-n5">
                <!-- Login Button -->
                <v-col>
                  <v-card-actions>
                    <v-btn x-large color="black" class="white--text text--lighten-1"
                    @click="handleSubmit" :disabled="!isValid" block>Login</v-btn>
                  </v-card-actions>
                </v-col>
                <!-- Login Button -->
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
  name: 'Login',
    computed:{
    ...mapGetters(["user"])
  },
  data() {  
    return {
      showPassword :false,
      email:'',
      password:'',
      emailRules:[
        emailvalue => emailvalue != '' || 'Please input the Email'
      ],
      passwordRules:[
        passwordvalue => passwordvalue != '' || 'Please input the Password'
      ],
      isValid: false
    }
  },
  watch:{
    user(auth){
      if(auth){
        this.$router.replace({ name: "Home" });
      }
    }
  },
  methods:{
    handleClick(){
      this.showPassword = !this.showPassword
    },
    handleSubmit(){
    //Log the user in
      firebase.auth()
      .signInWithEmailAndPassword(this.email, this.password)
      .then(
        user=>{
          console.log(user.data);
        },
        error=>{
          alert(error);
        }
      )
    },
    goToSignup(){
      this.$router.replace({ name: "Signup" });
    },
    goToForgotPass(){
      this.$router.replace({ name: "ForgotPass" });
    }
  }
};
</script>

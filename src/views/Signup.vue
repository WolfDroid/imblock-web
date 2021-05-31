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
              <h1 class="black--text text--lighten-1">Signup</h1>
            </v-card-title>
            <!--- Form -->
            <v-form v-model="isValid">
              <v-card-text>

                  <!-- Email Field -->
                  <v-text-field :rules="emailRules" class="mb-1" label="Email" prepend-icon="mdi-email" color="black"
                  type="email" v-model= "email"/>

                  <!-- Password Field -->
                  <v-text-field :rules="passwordRules" class="mb-2" label="Password" prepend-icon="mdi-lock"  color="black"
                  :type =" showPassword ? 'text' : 'password' " 
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off' " 
                  @click:append="handleClickPassword" v-model= "password"
                  />

                  <!-- Re-type Password Field -->
                  <v-text-field :rules="confirmPasswordRules" class="mb-2" label="Re-enter password" prepend-icon="mdi-lock"  color="black"
                  :type =" showRePassword ? 'text' : 'password' " 
                  :append-icon="showRePassword ? 'mdi-eye' : 'mdi-eye-off' " 
                  @click:append="handleClickRePassword" v-model="repassword" />

              </v-card-text>

              <!-- Button Section -->
              <v-row align="center" justify="center">
                <!-- Login Button -->
                <v-col>
                  <v-card-actions>
                    <v-btn x-large color="black" @click="goToLogin" outlined block>Login</v-btn>
                  </v-card-actions>
                </v-col>
                <!-- Login Button -->
              </v-row>
              <!-- Button Section -->

              <!-- Button Section -->
              <v-row align="center" justify="center" class="my-n5">
                <!-- Signup Button -->
                <v-col>
                  <v-card-actions>
                    <v-btn x-large color="black" class="white--text text--lighten-1"
                    @click="handleSubmit" :disabled="!isValid" block>Signup</v-btn>
                  </v-card-actions>
                </v-col>
                <!-- Signup Button -->
              </v-row>
              <!-- Button Section -->

            </v-form>
            <!--- Form -->
          </v-card>
          <!--Card-->
        </v-row>
      </v-container>
      <!-- End Component for signup card -->
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
  name: 'Signup',
    computed:{
    ...mapGetters(["user"])
  },
  data() {  
    return {
      showPassword :false,
      showRePassword : false,
      email:'',
      password  :'',
      repassword: '',
      emailRules:[
        emailvalue => emailvalue != '' || 'Please input the Email'
      ],
      passwordRules:[
        passwordvalue => passwordvalue != '' || 'Please input the Password',
        passwordvalue =>
        {
          const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
          return (
            pattern.test(passwordvalue) ||
            "Min. 8 characters with at least one capital letter and a number"
          );
        }
      ],
      confirmPasswordRules: [
        repasswordvalue => !!repasswordvalue || 'type confirm password',
        repasswordvalue => repasswordvalue == this.password || 'The password confirmation does not match.'
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
    handleClickPassword(){
      this.showPassword = !this.showPassword
    },
    handleClickRePassword(){
      this.showRePassword = !this.showRePassword
    },
    handleSubmit(){
    //Log the user in
      firebase.auth()
      .createUserWithEmailAndPassword(this.email, this.password)
      .then(
        user=>{
          console.log(user.data);
          alert("Sucessfully created, please check your email");
          this.$router.replace({ name: "Login" });
          user.user.sendEmailVerification();
        },
        error=>{
          alert(error);
        }
      )
    },
    goToLogin(){
      this.$router.replace({ name: "Login" });
    }
  }
};
</script>

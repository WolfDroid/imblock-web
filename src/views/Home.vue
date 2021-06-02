<template>
<v-app>
  <v-container fill-height fluid>
    <!-- App Bar -->
    <v-app-bar
      min-width="500px"
      absolute
      elevate-on-scroll
      dark>
      <v-row no-gutters>
        <!-- Navicon -->
        <v-col align="left" justify="center">
          <v-toolbar-title>
            <v-img
            src='@/assets/navicon.png'
            max-width='100'
            class='x-shrink'>
            </v-img>
          </v-toolbar-title>
        </v-col>
        <!-- Navicon -->
        <!-- Menu Button -->
        <v-col align="right" justify="center">
          <!--Drop down menu -->
          <v-menu offset-y open-on-hover transition="scale-transition">
            <template v-slot:activator="{ on, attrs }">
              <v-btn dark outlined class = "mx-4" v-bind="attrs" v-on="on" shrink>
                <v-icon class="mr-2">mdi-account</v-icon>
                Account
              </v-btn>
            </template>
            <!-- Pop over Card -->
            <v-card>
                <v-img src='@/assets/samplepattern.jpg' height="100px" width="400px">
                <v-card-title class="white--text mt-2">
                  <v-row>
                    <v-col cols="2" align="center" justify="center">
                    <!-- Avatar Image -->
                      <v-avatar rounded size="50">
                        <v-img src='@/assets/sample user.png' alt="userimage">
                        </v-img>
                      </v-avatar>
                    <!-- Avatar Image -->
                    </v-col>
                    <v-col cols="10">
                      <!-- Brief User Field -->
                      <v-list-item align="left" justify="center" class="my-n2">
                        <v-list-item-content class="white--text">
                          <v-list-item-title v-if="user.email == null" color="white"> User Email </v-list-item-title>
                          <v-list-item-title v-else>{{user.email}}</v-list-item-title>
                          <v-list-item-title class="mt-1 white--text font-weight-light" v-if="user.uid == null" color="white"> User UID </v-list-item-title>
                          <v-list-item-subtitle class="mt-1 white--text font-weight-light" v-else>{{user.uid}}</v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                      <!-- Brief User Field -->
                    </v-col>
                  </v-row>
                  </v-card-title>
                </v-img> 

                <v-list>
                    <!-- Account Setting -->
                    <v-list-item link>
                      <v-icon color="black" class="mr-3">mdi-tools</v-icon>
                      <v-list-item-title class="font-weight-medium" >Configuration</v-list-item-title>
                    </v-list-item>
                    <!-- Account Setting -->

                    <!-- Logout Button -->
                    <v-list-item link  @click="logout">
                      <v-icon color="black" class="mr-3">mdi-logout</v-icon>
                      <v-list-item-title class="font-weight-medium" >Logout</v-list-item-title>
                    </v-list-item>
                    <!-- Logout Button -->

                </v-list>
            </v-card>
            <!-- Pop over Card -->
          </v-menu>
          <!--Drop down menu -->
        </v-col>
      </v-row>
    </v-app-bar>
    <v-row align="center"> 
      <!-- Upload a Document -->
      <v-col align="center" justify="center">
        <v-card class="ma-6" outlined elevation="2" style="border: 10px solid black;">
          <v-img class="mx-10 mt-5" src='@/assets/uploadicon.png' max-width="300px" max-height="300px"></v-img>
          <v-dialog
            v-model="dialog"
            persistent
            max-width="500px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn class="mb-10" dark
              v-bind="attrs"
              v-on="on">
                Upload a document
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">Upload SHM Data</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <!-- Nomor SHM Field -->
                    <v-col cols="12">
                      <v-text-field color="black" label="Nomor SHM" required hint="Biasanya terdapat pada bagian kanan bawah sampul. Contoh : 10.15.22.05.3.01234">
                      </v-text-field>
                    </v-col>
                    <!-- Nomor SHM Field -->
                    <!-- Provinsi SHM Field -->
                    <v-col cols="12">
                      <v-select color="black"
                        :items="['Aceh', 'Sumatera Utara', 'Sumatera Barat', 'Riau', 'Kepulauan Riau', 'Jambi', 'Sumatera Selatan', 'Kepulauan Bangka Belitung', 'Bengkulu',
                                  'Lampung', 'DKI Jakarta', 'Banten', 'Jawa Barat', 'Jawa Tengah', 'DI Yogyakarta', 'Jawa Timur', 'Bali', 'Nusa Tenggara Barat', 'Nusa Tenggara Timur',
                                  'Kalimantan Barat', 'Kalimantan Tengah', 'Provinsi Kalimantan Selatan', 'Kalimantan Timur', 'Kalimantan Utara', 'Sulawesi Utara', 'Gorontalo',
                                  'Sulawesi Tengah', 'Sulawesi Barat', 'Provinsi Sulawesi Selatan', 'Sulawesi Tenggara', 'Maluku', 'Maluku Utara ', 'Papua Barat', 'Papua']"
                        label="Provinsi"
                        required>
                    </v-select>
                    <!-- Provinsi SHM Field -->
                    <!-- Kabupaten / Kota SHM Field -->
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-text-field color="black" label="Kabupaten / Kota" required></v-text-field>
                    </v-col>
                    <!-- Kabupaten / Kota SHM Field -->
                    <!-- Kelurahan SHM Field -->
                    <v-col cols="12" sm="6">
                      <v-text-field color="black" label="Kelurahan" required></v-text-field>
                    </v-col>
                    <!-- Kelurahan SHM Field -->
                    <!-- Nama Pemegang SHM Field -->
                    <v-col cols="12">
                      <v-text-field color="black" label="Nama Pemegang Hak" required></v-text-field>
                    </v-col>
                    <!-- Nama Pemegang SHM Field -->
                    <!-- Kalendar SHM Field -->
                    <v-col cols="12">
                      <v-menu
                        ref="menu"
                        v-model="menu"
                        :close-on-content-click="false"
                        transition="scale-transition"
                        offset-y
                        min-width="auto">
                        <template v-slot:activator="{ on, attrs }">
                          <v-text-field
                            v-model="date"
                            label="Penerbitan"
                            prepend-icon="mdi-calendar"
                            readonly
                            color="black"
                            v-bind="attrs"
                            v-on="on">
                        </v-text-field>
                        </template>
                        <v-date-picker
                          color="black"
                          v-model="date"
                          :active-picker.sync="activePicker"
                          :max="new Date().toISOString().substr(0, 10)"
                          @change="save">
                        </v-date-picker>
                      </v-menu>
                    </v-col>
                    <!-- Kalendar SHM Field -->
                    <!-- Luas Tanah Field -->
                    <v-col cols="12">
                      <v-text-field color="black" label="Luas" required hint="Dalam m2. Contoh : Luas tanah = 100m2 maka masukkan angka '100' "></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-file-input
                        accept="application/pdf"
                        placeholder="Pick a Document"
                        prepend-icon="mdi-file-document"
                        label="Upload Document"
                        color="Black"
                        required>
                      </v-file-input>
                    </v-col>
                    <!-- Luas Tanah Field -->
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <!-- Close Button -->
                <v-btn color="black" text @click="dialog = false">
                  Close
                </v-btn>
                <!-- Close Button -->
                <!-- Save Button -->
                <v-btn color="b1ack" text @click="dialog = false">
                  Save
                </v-btn>
                <!-- Save Button -->
              </v-card-actions>
              
            </v-card>
          </v-dialog>
        </v-card>
        
      </v-col>
      <!-- Upload a Document -->
      <!-- List Uploaded Document -->
      <v-col align="center" justify="center">
        <v-card class="ma-6" outlined elevation="2" style="border: 10px solid black;">
          <v-img class="mx-10 mt-5" src='@/assets/uploadedlisticon.png' max-width="300px" max-height="300px"></v-img>
          <v-btn class="mb-10" dark>
            Uploaded Document List
          </v-btn>
        </v-card>
      </v-col>
      <!-- List Uploaded Document -->
      <v-col>
      </v-col>
      <v-col>
      </v-col>
    </v-row>
    <!-- App Bar -->
  </v-container>
</v-app>
</template>

<script>
//Import Firebase
import firebase from "firebase";
//Import Map Getters
import { mapGetters } from "vuex";
export default {
    name:'home',
    computed:{
      ...mapGetters(["user"])
    },
    data: () => ({
      loading: false,
      selection: 1,
      loggedIn : false,
      dialog: false,
      activePicker: null,
      date: null,
      menu: false
    }),
    watch:{
      user(auth){
        if(auth){
          //
        } else {
          this.$router.replace(this.nextRoute);
        }
      },
      menu (val) {
        val && setTimeout(() => (this.activePicker = 'YEAR'))
      }
    },
    methods: {
      reserve () {
        this.loading = true
        setTimeout(() => (this.loading = false), 2000)
      },
      save (date) {
        this.$refs.menu.save(date)
      },
      logout(){
        firebase.auth().signOut()
        .then( () => {
          this.$router.replace({ name: "Login" });
        });
      }
    },
  }
</script>

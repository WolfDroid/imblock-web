<template>
  <v-app>
    <v-container fill-height fluid>
      <!-- App Bar -->
      <v-app-bar min-width="500px" absolute elevate-on-scroll dark>
        <v-row no-gutters>
          <!-- Navicon -->
          <v-col align="left" justify="center">
            <v-toolbar-title>
              <v-img
                src="@/assets/navicon.png"
                max-width="100"
                class="x-shrink"
              >
              </v-img>
            </v-toolbar-title>
          </v-col>
          <!-- Navicon -->
          <!-- Menu Button -->
          <v-col align="right" justify="center">
            <!--Drop down menu -->
            <v-menu offset-y open-on-hover transition="scale-transition">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  dark
                  outlined
                  class="mx-4"
                  v-bind="attrs"
                  v-on="on"
                  shrink
                >
                  <v-icon class="mr-2">mdi-account</v-icon>
                  Account
                </v-btn>
              </template>
              <!-- Pop over Card -->
              <v-card>
                <v-img
                  src="@/assets/samplepattern.jpg"
                  height="100px"
                  width="400px"
                >
                  <v-card-title class="white--text mt-2">
                    <v-row>
                      <v-col cols="2" align="center" justify="center">
                        <!-- Avatar Image -->
                        <v-avatar rounded size="50">
                          <v-img src="@/assets/sample user.png" alt="userimage">
                          </v-img>
                        </v-avatar>
                        <!-- Avatar Image -->
                      </v-col>
                      <v-col cols="10">
                        <!-- Brief User Field -->
                        <v-list-item
                          align="left"
                          justify="center"
                          class="my-n2"
                        >
                          <v-list-item-content class="white--text">
                            <v-list-item-title
                              v-if="user.email == null"
                              color="white"
                            >
                              User Email
                            </v-list-item-title>
                            <v-list-item-title v-else>{{
                              user.email
                            }}</v-list-item-title>
                            <v-list-item-title
                              class="mt-1 white--text font-weight-light"
                              v-if="user.uid == null"
                              color="white"
                            >
                              User UID
                            </v-list-item-title>
                            <v-list-item-subtitle
                              class="mt-1 white--text font-weight-light"
                              v-else
                              >{{ user.uid }}</v-list-item-subtitle
                            >
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
                    <v-list-item-title class="font-weight-medium"
                      >Configuration</v-list-item-title
                    >
                  </v-list-item>
                  <!-- Account Setting -->

                  <!-- Logout Button -->
                  <v-list-item link @click="logout">
                    <v-icon color="black" class="mr-3">mdi-logout</v-icon>
                    <v-list-item-title class="font-weight-medium"
                      >Logout</v-list-item-title
                    >
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
          <v-card
            class="ma-6"
            outlined
            elevation="2"
            style="border: 10px solid black;"
          >
            <v-img
              class="mx-10 mt-5"
              src="@/assets/uploadicon.png"
              max-width="300px"
              max-height="300px"
            ></v-img>
            <v-dialog v-model="dialog" persistent max-width="500px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn class="mb-10" dark v-bind="attrs" v-on="on">
                  Upload a document
                </v-btn>
              </template>
              <v-card>
                <v-card-title class="black white--text">
                  Upload SHM Data
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <!-- Nomor SHM Field -->
                      <v-col cols="12">
                        <v-text-field
                          color="black"
                          label="Nomor SHM"
                          required
                          hint="Biasanya terdapat pada bagian kanan bawah sampul. Contoh : 10.15.22.05.3.01234"
                          v-model="noShm"
                        >
                        </v-text-field>
                      </v-col>
                      <!-- Nomor SHM Field -->
                      <!-- Provinsi SHM Field -->
                      <v-col cols="12">
                        <v-select
                          color="black"
                          :items="[
                            'Aceh',
                            'Sumatera Utara',
                            'Sumatera Barat',
                            'Riau',
                            'Kepulauan Riau',
                            'Jambi',
                            'Sumatera Selatan',
                            'Kepulauan Bangka Belitung',
                            'Bengkulu',
                            'Lampung',
                            'DKI Jakarta',
                            'Banten',
                            'Jawa Barat',
                            'Jawa Tengah',
                            'DI Yogyakarta',
                            'Jawa Timur',
                            'Bali',
                            'Nusa Tenggara Barat',
                            'Nusa Tenggara Timur',
                            'Kalimantan Barat',
                            'Kalimantan Tengah',
                            'Provinsi Kalimantan Selatan',
                            'Kalimantan Timur',
                            'Kalimantan Utara',
                            'Sulawesi Utara',
                            'Gorontalo',
                            'Sulawesi Tengah',
                            'Sulawesi Barat',
                            'Provinsi Sulawesi Selatan',
                            'Sulawesi Tenggara',
                            'Maluku',
                            'Maluku Utara ',
                            'Papua Barat',
                            'Papua',
                          ]"
                          label="Provinsi"
                          v-model="provinsi"
                          required
                        >
                        </v-select>
                        <!-- Provinsi SHM Field -->
                        <!-- Kabupaten / Kota SHM Field -->
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-text-field
                          color="black"
                          label="Kabupaten / Kota"
                          v-model="kabupaten"
                          required
                        ></v-text-field>
                      </v-col>
                      <!-- Kabupaten / Kota SHM Field -->
                      <!-- Kelurahan SHM Field -->
                      <v-col cols="12" sm="6">
                        <v-text-field
                          color="black"
                          label="Kelurahan"
                          v-model="kelurahan"
                          required
                        ></v-text-field>
                      </v-col>
                      <!-- Kelurahan SHM Field -->
                      <!-- Nama Pemegang SHM Field -->
                      <v-col cols="12">
                        <v-text-field
                          color="black"
                          label="Nama Pemegang Hak"
                          v-model="name"
                          required
                        ></v-text-field>
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
                          min-width="auto"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                              v-model="date"
                              label="Penerbitan"
                              prepend-icon="mdi-calendar"
                              readonly
                              color="black"
                              v-bind="attrs"
                              v-on="on"
                            >
                            </v-text-field>
                          </template>
                          <v-date-picker
                            color="black"
                            v-model="date"
                            :active-picker.sync="activePicker"
                            :max="new Date().toISOString().substr(0, 10)"
                            @change="save"
                          >
                          </v-date-picker>
                        </v-menu>
                      </v-col>
                      <!-- Kalendar SHM Field -->
                      <!-- Luas Tanah Field -->
                      <v-col cols="12">
                        <v-text-field
                          color="black"
                          label="Luas"
                          required
                          hint="Dalam m2. Contoh : Luas tanah = 100m2 maka masukkan angka '100' "
                          v-model="luas"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-file-input
                          accept="application/pdf"
                          placeholder="Pick a Document"
                          prepend-icon="mdi-file-document"
                          label="Upload Document"
                          color="Black"
                          v-model="file"
                          required
                        >
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
                  <v-btn
                    color="b1ack"
                    text
                    @click="saveData"
                    :loading="loadingRegister"
                  >
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
          <v-card
            class="ma-6"
            outlined
            elevation="2"
            style="border: 10px solid black;"
          >
            <!-- Upload Document Icon -->
            <v-img
              class="mx-10 mt-5"
              src="@/assets/uploadedlisticon.png"
              max-width="300px"
              max-height="300px"
            >
            </v-img>
            <!-- Upload Document Icon -->
            <v-dialog v-model="dialogUploaded" max-width="800px">
              <template v-slot:activator="{ on, trigger }">
                <!-- Uploaded Document Button -->
                <v-btn
                  class="mb-10"
                  dark
                  v-bind="trigger"
                  v-on="on"
                  @click="manageUploadedOnClick"
                >
                  Manage Uploaded Document
                </v-btn>
                <!-- Uploaded Document Button -->
              </template>
              <!-- Document List -->
              <v-card>
                <v-card-title class="black white--text">
                  Upload Document
                </v-card-title>

                <v-card-text class="mt-6">
                  <v-container>
                    <v-row>
                      <!-- Uploaded Document Table -->
                      <v-col cols="12">
                        <v-data-table
                          :headers="headers"
                          :items="listUploaded"
                          :items-per-page="5"
                          :expanded.sync="expanded"
                          :single-expand="singleExpand"
                          item-key="record_id"
                          show-expand
                          class="elevation-2"
                        >
                          <!-- Delete Item Dialogue -->
                          <template v-slot:[`item.actions`]="{ item }">
                            <!-- Delete Item -->
                            <v-icon
                              small
                              color="dark"
                              @click="deleteItem(item)"
                            >
                              mdi-delete
                            </v-icon>
                            <!-- Delete Item -->
                          </template>
                          <!-- Delete Item Dialogue -->
                          <!-- Details Item Expandable -->
                          <template v-slot:expanded-item="{ item }">
                            <v-container class="my-4">
                              <!-- Headers -->
                              <v-row align="center" class="font-weight-bold">
                                <v-col align="center" justify="center">
                                  <p>Nama Pemilik</p>
                                </v-col>
                                <v-col align="center" justify="center">
                                  <p>Tahun Terbitan</p>
                                </v-col>
                                <v-col align="center" justify="center">
                                  <p>Luas Tanah</p>
                                </v-col>
                              </v-row>
                              <!-- Headers -->
                              <!-- Filling  -->
                              <v-row align="center" class="mt-n8">
                                <v-col align="center">
                                  <p>{{ item.owner_name }}</p>
                                </v-col>
                                <v-col align="center">
                                  <p>{{ item.penerbitan }}</p>
                                </v-col>
                                <v-col align="center">
                                  <p>{{ item.luas }}</p>
                                </v-col>
                              </v-row>
                              <!-- Filling -->
                              <!-- Headers -->
                              <v-row
                                align="center"
                                class="mt-n6 font-weight-bold"
                              >
                                <v-col align="center" justify="center">
                                  <p>Kelurahan</p>
                                </v-col>
                                <v-col align="center" justify="center">
                                  <p>Kabupaten / Kota</p>
                                </v-col>
                                <v-col align="center" justify="center">
                                  <p>Provinsi</p>
                                </v-col>
                              </v-row>
                              <!-- Headers -->
                              <!-- Filling  -->
                              <v-row align="center" class="mt-n8">
                                <v-col align="center">
                                  <p>{{ item.kelurahan }}</p>
                                </v-col>
                                <v-col align="center">
                                  <p>{{ item.kabupaten }}</p>
                                </v-col>
                                <v-col align="center">
                                  <p>{{ item.provinsi }}</p>
                                </v-col>
                              </v-row>
                              <!-- Filling -->
                              <!-- Download Document -->
                              <v-row class="mt-n4">
                                <v-col align="center" justify="center">
                                  <v-btn
                                    elevation="1"
                                    @click="downloadFile(item)"
                                  >
                                    <v-icon dark class="mr-4">
                                      mdi-download
                                    </v-icon>
                                    Download Document
                                  </v-btn>
                                </v-col>
                              </v-row>
                            </v-container>
                          </template>
                          <!-- Details Item Expandable -->
                        </v-data-table>
                        <!-- Confirm Delete Dialogue -->
                        <v-dialog v-model="dialogDelete" max-width="500px">
                          <v-card>
                            <v-card-title class="text-h5"
                              >Are you sure you want to delete this
                              item?</v-card-title
                            >
                            <v-card-actions>
                              <v-spacer></v-spacer>
                              <v-btn color="gray" @click="closeDelete"
                                >Cancel</v-btn
                              >
                              <v-btn
                                color="red darken-1 white--text"
                                @click="deleteItemConfirm"
                                >OK</v-btn
                              >
                              <v-spacer></v-spacer>
                            </v-card-actions>
                          </v-card>
                        </v-dialog>
                        <!-- Confirm Delete Dialogue -->
                      </v-col>
                      <!-- Uploaded Document Table -->
                    </v-row>
                  </v-container>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <!-- Close Button -->
                  <v-btn color="black" text @click="dialogUploaded = false">
                    Close
                  </v-btn>
                  <!-- Close Button -->
                </v-card-actions>
              </v-card>
              <!-- Document List -->
            </v-dialog>
          </v-card>
        </v-col>
        <!-- List Uploaded Document -->
        <v-col> </v-col>
        <v-col> </v-col>
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
import axios from "axios";
import fileDownload from "js-file-download";

export default {
  name: "home",
  computed: {
    ...mapGetters(["user"]),
  },
  data: () => ({
    loading: false,
    loadingRegister: false,
    selection: 1,
    loggedIn: false,
    dialog: false,
    dialogUploaded: false,
    dialogDelete: false,
    dialog2: false,
    activePicker: null,
    date: null,
    singleExpand: true,
    menu: false,

    headers: [
      { text: "Nomor SHM", align: "start", sortable: false, value: "no_shm" },
      // { text: 'Uploaded On', value: 'uploadDate' },
      { text: "Actions", value: "actions", sortable: false },
      { text: "", value: "data-table-expand" },
    ],

    listUploaded: [],
    expanded:[],


    noShm: "",
    provinsi: "",
    kabupaten: "",
    kelurahan: "",
    name: "",
    penerbitan: "",
    luas: "",
    fileName: "",
    fileCid: "",
    file: null,
  }),
  watch: {
    user(auth) {
      if (auth) {
        //
      } else {
        this.$router.replace(this.nextRoute);
      }
    },
    menu(val) {
      val && setTimeout(() => (this.activePicker = "YEAR"));
    },
  },
  methods: {
    deleteItem(item) {
      this.editedIndex = this.data.indexOf(item);
      this.editedItem = Object.assign({}, item);
      // console.log(this.editedItem);
      this.dialogDelete = true;
    },
    async deleteItemConfirm() {
      console.log(this.editedItem);
      try {
        console.log("deleting item");
        var params = new URLSearchParams();
        params.append("record_id", this.editedItem.record_id);

        var response = await axios.post(
          "https://api.catena.id/v1/imblock/fabric/record/delete",
          params,
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        this.listUploaded.splice(this.editedIndex, 1);
        console.log(response.data);
        console.log("Data deleted");
        this.closeDelete();
      } catch (error) {
        console.log(error);
      }
    },
    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    reserve() {
      this.loading = true;
      setTimeout(() => (this.loading = false), 2000);
    },
    save(date) {
      this.$refs.menu.save(date);
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          localStorage.clear();
          this.$router.replace({ name: "Login" });
        });
    },
    async saveData() {
      console.log(this.data);
      // console.log("file : " + this.file.name);
      // this.dialog = false;

      try {
        this.loadingRegister = true;
        const formData = new FormData();
        formData.append("file", this.file);
        formData.append("email", localStorage.getItem("email"));
        console.log(formData);
        console.log("Uploading document");

        var ipfsResponse = await axios.post(
          "https://api.catena.id/v1/imblock/ipfs/user/upload",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
            withCredentials: true,
          }
        );
        console.log("Document uploaded");
        console.log(ipfsResponse);

        const params = new URLSearchParams();
        params.append("owner_name", this.data.name);
        params.append("email", localStorage.getItem("email"));
        params.append("no_shm", this.data.noShm);
        params.append("provinsi", this.data.provinsi);
        params.append("kabupaten", this.data.kabupaten);
        params.append("kelurahan", this.data.kelurahan);
        params.append("penerbitan", this.data.date);
        params.append("luas", this.data.luas);
        params.append("cert_filename", ipfsResponse.data.name);
        params.append("cert_cid", ipfsResponse.data.hash);

        console.log("Registering record");
        var registerResponse = await axios.post(
          "https://api.catena.id/v1/imblock/fabric/record/register",
          params,
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        console.log(registerResponse.data);
        console.log("Success");
        this.loadingRegister = false;
        this.dialog = false;
      } catch (error) {
        this.loadingRegister = false;
        console.log(error);
      }
    },
    async manageUploadedOnClick() {
      console.log("managed");
      try {
        var url =
          "https://api.catena.id/v1/imblock/fabric/record/search?mode=email&query=" +
          localStorage.getItem("email");
        var response = await axios.get(url);
        this.listUploaded = response.data;
        console.log(this.listUploaded);
      } catch (error) {
        console.log(error);
      }
    },
    async downloadFile(item) {
      console.log(item);
      try {
        console.log("downloading file");
        var response = await axios.get(
          "https://api.catena.id/v1/imblock/ipfs/user/fetch",
          {
            params: {
              cid: item.cert_cid,
              email: localStorage.getItem("email"),
            },
            withCredentials: true,
            responseType: "blob",
          }
        );

        fileDownload(response.data, item.cert_filename);
        console.log("file downloaded");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<template>
  <html>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <div >
      <b-navbar id="navb" toggleable="lg" type="dark" >
        <b-navbar-brand href="#"><img alt="Vue logo" src="./assets/pict/logo.png" width="30px" ></b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>

          <b-navbar-nav class="ml-auto mt-1">
            <b-navbar-nav class="mr-4">
              <b-nav-item><router-link to="/produk">Produk</router-link></b-nav-item>
              <b-nav-item><router-link to="/desa">Desa</router-link> </b-nav-item>
            </b-navbar-nav>
            <p class="h2"><b-icon-people-circle></b-icon-people-circle></p>
<!--            <img alt="Vue logo" src="./assets/pict/profile.png" width="45px" height="45px" >-->
            <b-nav-item-dropdown  right class="">
              <b-dropdown-item v-if="authenticated"><router-link to="/">Profile</router-link></b-dropdown-item>
              <b-dropdown-item v-if="authenticated"><router-link to="/">Keranjang</router-link></b-dropdown-item>
              <b-dropdown-item v-if="authenticated"><router-link to="/">Pesanan</router-link></b-dropdown-item>
              <b-dropdown-item><router-link v-if="authenticated" to="/logout">Logout</router-link><router-link v-else to="/login">Login</router-link></b-dropdown-item>
            </b-nav-item-dropdown>

            <b-navbar-brand><router-link to="/"></router-link> </b-navbar-brand>

          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <router-view />
  </html>
</template>

<script>
  export default {
    name: 'App',
    data(){
      return{
        authenticated: false
      }
    },

  }
</script>

<style>
  #navb{
    background-color: #ACE7EF;
  }

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {

  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {

  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {

  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {

  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {

  }

</style>

<script setup>

</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand" >JCode</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link active" aria-current="page" >Acceuil</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/add-employe" class="nav-link" >Ajouter</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div class="container">
   <router-view></router-view>
  </div>

</template>

<style scoped>

</style>

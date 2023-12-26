<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <main class="flex-shrink-0">
    <nav class="navbar navbar-expand-lg navbar-light bg-white py-3">
      <div class="container px-5">
        <RouterLink class="navbar-brand" to="/"><span class="fw-bolder text-primary">Sunel Lopez</span></RouterLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
            <RouterLink class="nav-link" to="/">Home</RouterLink>
            <RouterLink class="nav-link" to="/resume">Resume</RouterLink>
            <RouterLink class="nav-link" to="/projects">Projects</RouterLink>
            <RouterLink class="nav-link" to="/contact">Contact</RouterLink>
          </div>
        </div>
      </div>
    </nav>
    <RouterView />
  </main>
  <footer class="bg-white py-4 mt-auto">
      <div class="container px-5">
          <div class="row align-items-center justify-content-between flex-column flex-sm-row">
              <div class="col-auto"><div class="small m-0">Copyright &copy; 2023</div></div>
              <div class="col-auto">
                  <a class="small" href="#!">Privacy</a>
                  <span class="mx-1">&middot;</span>
                  <a class="small" href="#!">Terms</a>
                  <span class="mx-1">&middot;</span>
                  <a class="small" href="#!">Contact</a>
              </div>
          </div>
      </div>
  </footer>
  
</template>
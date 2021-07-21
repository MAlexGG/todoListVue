<template>
  <div id="nav">
    <router-link to="/" class="router">Home</router-link> |
    <router-link to="/create" class="router">Crear Tarea</router-link>

  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #3C5186;
}

#nav {
  padding: 30px;
  display: flex;
  justify-content: flex-start;
}

#nav a {
  font-weight: bold;
  color: #C6B4CE;
}

#nav a.router-link-exact-active {
  color: #3C5186;
}

#nav :hover {
  color:#9B72AA;
}

.router{
  margin: 0px 10px 0px 10px;
}
</style>

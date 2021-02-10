<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Staff</router-link> |
      
      <router-link to="/departments">Departments</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');
#app {
  font-family: 'Fira Sans Condensed', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  
}

#nav a {
  font-weight: bold;
  color: #1a5632;
}

#nav a.router-link-exact-active {
  color: #f5a800 ;
}
</style>

<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/form">Form</router-link> |
    <router-link to="/Markdown">Markdown</router-link> |
    <router-link to="/FetchData">FetchData</router-link> |
    <router-link to="/GridView">GridView</router-link> |
    <router-link to="/TreeView">TreeView</router-link> |
    <router-link to="/SVGGraph">SVGGraph</router-link> |
    <router-link to="/ModalView">ModalView</router-link> |
    <router-link to="/TransitionGroup">TransitionGroup</router-link> |
    <router-link to="/TodoMVC">TodoMVC</router-link>

  </div>
  <router-view/>
  <!-- <TeleportExample /> -->
  <!-- <TeleportSample1 /> -->
  <!-- <TeleportVideo /> -->
</template>
<script>
// import TeleportExample from "@/components/teleport/TeleportExample";
// import TeleportSample1 from "@/components/teleport/TeleportSample1";
// import TeleportVideo from "@/components/teleport/TeleportVideo";

export default {
  components: {
    // TeleportExample
    // TeleportSample1
    // TeleportVideo
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

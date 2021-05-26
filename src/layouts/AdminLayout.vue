<template>
  <div class="content">
    <div class="max-width mx-auto">
      <nav class="navbar navbar-light bg-light">
        <div class="navbar-header">
          <a class="navbar-brand" href="#"
            ><img src="http://placehold.it/150x150"
          /></a>
        </div>
        <!-- <div class="collapse">
            <ul class="nav navbar-nav">
              <li><a href="#">Link</a></li>
              <li><a href="#">Link</a></li>
              <li><a href="#">Link</a></li>
            </ul>
            <p class="random-text">Lorem ipsum dolor sit.</p>
        </div> -->
      </nav>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminLayout",
};
</script>

<style>
/* .navbar .navbar-nav {
  display: inline-block;
  float: none;
  vertical-align: top;
}

.navbar .navbar-collapse {
  text-align: center;
} */

.content {
  max-width: 700px;
  margin: auto;
}
</style>
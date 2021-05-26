<template>
  <div>
    <div class="max-width mx-auto content px3">
      <header id="header">
        <nav class="navbar navbar-expand-md navbar-dark">
          <a href="/" class="me-3"
            ><img
              src="../assets/logo_netstax.jpg"
              alt="Logo"
              width="60"
              height="60"
            />
          </a>
          <button
            class="navbar-toggler mt-1"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse flex-column align-items-start ml-lg-2 ml-0"
            id="navbarCollapse"
          >
            <h2 class="navbar-text ml-auto py-0 px-lg-2">Netstax</h2>
            <ul class="navbar-nav mb-auto mt-0 ml-auto">
              <li class="nav-item active">
                <a class="nav-link py-0" href="/about">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link py-0" href="/posts">Posts</a>
              </li>
              <li class="nav-item">
                <a class="nav-link py-0" href="/category">Category</a>
              </li>
              <li class="nav-item">
                <a class="nav-link py-0" href="/search">Search</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <div id="content-wrap">
        <router-view />
      </div>

      <footer id="footer" class="mb-3">
        <div class="row justify-content-between">
          <div class="col-md">
            <p>Copyright © 2021 Netstax</p>
          </div>
          <div class="col-md">
            <nav>
              <ul>
                <li><a href="/about/">About</a></li>
                <li><a href="/posts/">Posts</a></li>
                <li><a href="/category/">Category</a></li>
                <li><a href="/search/">Search</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "PublicLayout",
};
</script>

<style scoped>
h2 {
  font-weight: 800;
}

.content {
  max-width: 48rem;
  margin-top: 64px;
}

.px3 {
  padding-right: 2rem;
  padding-left: 2rem;
}

#header ul li {
  border-right: 1px dotted;
  border-color: #2bbc8a;
  margin-right: 15px;
}

#header ul li:last-child {
  border-right: 0px;

  margin-right: 0;
}

#header ul li a {
  color: #2bbc8a;
  font-size: 0.8rem;
  margin-right: 15px;
  font-weight: 600;
}

#footer div {
  height: 20px;
  vertical-align: middle;
  line-height: 20px;
}

#footer ul {
  text-align: end;
}

#footer div p,
#footer a {
  font-size: 11px;
}

#footer li {
  border-right: 1px solid;
  margin-right: 15px;
  display: inline-block;
}

#footer li a {
  margin-right: 15px;
  text-decoration: none;
}

#footer li:last-child {
  margin-right: 0;
  border-right: 0;
}

#footer li:last-child a {
  margin-right: 0;
  text-decoration: none;
}

@media (max-width: 768px) {
  .col-sm,
  .col-md,
  #footer ul {
    text-align: center;
  }

  #header ul li {
    border-right: 0px dotted;
  }
}
</style>
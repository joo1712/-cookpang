<template>
  <footer class="footer px-4">
    <b-row align-v="center" class="justify-content-lg-between">
      <b-col lg="6">
        <div class="copyright text-center text-lg-left text-muted">
          © {{year}} <a v-b-popover.hover.right="'이미지 예정'" variant="primary" class="font-weight-bold ml-1" target="_blank">Creative Tim_5</a>
        </div>
      </b-col>
      <b-col lg="6">
        <b-nav align="center" class="nav-footer justify-content-lg-end">
          <b-nav-item href="https://www.dju.ac.kr/"  target="_blank" v-b-popover.hover.top="'IT소프트웨어공학과'">
            Daejeon_University
          </b-nav-item>
          <!-- <b-nav-item href="#" target="_blank">
           About Us
          </b-nav-item>
          <b-nav-item href="#" target="_blank">
            Blog
          </b-nav-item>
          <b-nav-item href="#" target="_blank">
            License
          </b-nav-item> -->
        </b-nav>
      </b-col>
    </b-row>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style>

</style>

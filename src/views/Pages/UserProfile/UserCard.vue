<template>
  <b-card no-body class="card-profile" alt="Image placeholder" img-top>
    <b-row class="justify-content-center">
      <b-col lg="3" class="order-lg-2">
        <div class="card-profile-image">
          <a href="#">
            <b-img src="img/theme/team-5.jpg" rounded="circle" />
          </a>
        </div>
      </b-col>
    </b-row>

    <b-card-header class="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
      <div class="d-flex justify-content-between">
        <a href="#" class="btn btn-sm btn-info mr-4">Connect</a>
        <a href="#" class="btn btn-sm btn-default float-right">Message</a>
      </div>
    </b-card-header>

    <b-card-body class="pt-0">
      <b-row>
        <b-col >
          <div class="card-profile-stats d-flex justify-content-center mt-md-5">
            <div>
              <span class="heading">52</span>
              <span class="description">추천</span>
            </div>
            <div>
              <span class="heading">27</span>
              <span class="description">친구</span>
            </div>
            <div>
              <span class="heading">89</span>
              <span class="description">작성글</span>
            </div>
          </div>
        </b-col>
      </b-row>
      <div class="text-center">
        <h5 class="h3">
          Jessica Jones<span class="font-weight-light">, 27</span>
        </h5>
        <div class="h5 font-weight-300">
          <i class="ni location_pin mr-2"></i>Bucharest, Romania
        </div>
        <div class="h5 mt-4">
          <i class="ni business_briefcase-24 mr-2"></i>가입일: 2020.10.16 20:00:00 
        </div>
        <div>
          <i class="ni education_hat mr-2"></i>현재 ??상태 입니다.
        </div>
        <hr class="my-4">
        <p>가입시 소개글 입니다.</p>
        <a href="#">Show more</a>

      </div>
    </b-card-body>
  </b-card>
</template>
<script>
export default {};
</script>
<style></style>

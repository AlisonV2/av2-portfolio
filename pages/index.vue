<template>
    <div class="row" id="#home-row">
      <div class="col-12 col-md-8">
        <h1>
          {{ $t('landing.hi')}}, <br />
          {{ $t('landing.im')}}<span class="name"> Alison,</span> <br />
          {{ $t('landing.webdev')}}
        </h1>
        <h3>{{ $t('landing.subtitle')}}</h3>
        <AppButton>{{ $t('landing.btn')}}</AppButton>
      </div>
      <div class="col-12 col-md-4 home-img-col">
        <img :src="imageUrl"
          alt="HomePage Image"
          class="img-fluid home-img"
        />
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      imageUrl:
        "https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    };
  }
};
</script>

<style lang="scss">
.home-img-col {
  display: none;
}

#home-row {
  align-items: center;
  height: 80vh;
  .home-text {
    text-align: start;
    .home-img {
      border-radius: 15px;
      justify-content: flex-end;
    }
  }
}

.name {
  color: #49bfc7;
}
@media screen and (min-width: 1264px) {
  .home-img-col {
    display: flex;
  }
}
</style>

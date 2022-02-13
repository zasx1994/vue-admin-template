<template>
  <div class="background">
    <div class="loginWrapper">
      <div class="logo">
        <h3>SCanal</h3>
      </div>
      <div class="loginBtn" @click="gotoLogin">
        <div class="loginIcon" />
        <span class="loginText">Sign in with Google</span>
      </div>
    </div>
  </div>
</template>

<script>
import { AuthUrl } from '@/config/config'
export default {
  name: 'Login',
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
    gotoLogin() {
      window.location.replace(AuthUrl)
    }
  }
}
</script>

<style lang="scss" scoped>
.loginWrapper {
  position: absolute;
  left: 50%;
  top: 50%;
  margin-top: -70px;
  margin-left: -160px;
}

.loginBtn {
  height: 50px;
  width: 320px;
  border: 1px solid transparent;
  border-radius: 4px;
  background-color: #4285f4;
  color: #fff;
  transition: background-color 0.218s, border-color 0.218s, box-shadow 0.218s;
  user-select: none;
  -webkit-appearance: none;
  cursor: pointer;
  outline: none;
  overflow: hidden;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
}

.loginBtn:active {
  background-color: #3367d6;
}

.loginBtn:hover {
  box-shadow: 0 0 3px 3px rgba(66, 133, 244, 0.3);
}

.loginIcon {
  float: left;
  width: 48px;
  height: 100%;
  padding: 15px;
  border-radius: 1px;
  background-color: #fff;
}

.loginIcon:after {
  content: '';
  display: block;
  width: 18px;
  height: 18px;
  background: url('../../assets/google-btn.svg') no-repeat;
  background-size: 100% 100%;
}

.loginText {
  font-size: 16px;
  line-height: 48px;
  font-weight: 500;
  letter-spacing: 0.21px;
  margin-left: 6px;
  margin-right: 6px;
  vertical-align: top;
  font-family: Roboto, arial, sans-serif;
}

.background {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-size: cover;
  background-position: center;
}

.logo {
  text-align: center;
  margin-bottom: 15px;
  font-size: 24px;
  font-weight: 500;
}
</style>

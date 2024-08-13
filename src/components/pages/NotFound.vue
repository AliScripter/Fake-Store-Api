<template>
  <div>
    <h1>! گشتیم نبود نگرد نیست</h1>

    <router-link :to="{ name: 'home' }">بیا خونه تا دیر نشده </router-link>

    <router-view></router-view>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
h1 {
  font-family: sans-serif;
  background: -webkit-linear-gradient(left, red, blue);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 72px;
  font-weight: bold;
}

div {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  flex-direction: column;
}

a {
  padding: 16px;
  border-radius: 16px;
  outline: none;
  margin-top: 16px;
  transition: all ease 0.3s;
  background-color: slateblue;
}
a:hover {
  background-color: lightgreen;
}
</style>

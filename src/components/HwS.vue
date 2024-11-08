<template>
  <div class="cont">
  <div class="product-item" :style="{ backgroundColor: user.color }" >
  <img :src="user.urlFlower">
  <div class="product-list" :style="{ backgroundColor: user.color }">
    <h2>{{ user.name }}</h2>
    <h3>{{ user.family }} </h3>
    <p>{{ user.color }}</p>
    <button class="button" @click="deleteUser(index)">Удалить!!</button>
  </div>
</div>
</div>
</template>

<script>
export default {
  props: {
      user: {
          type: Object,
          required: true
      },
      index: {
          type: Number,
          required: true
      },
      deleteUser: {
          type: Function,
          required: true
      }
  }
}
</script>

<style scoped>
* {
   box-sizing: border-box;
}

.product-item {
   width: 300px;
   text-align: center;
   margin: 0 auto;
   border-bottom: 2px solid #F5F5F5;
   background: white;
   font-family: "Open Sans";
   transition: .3s ease-in;
}
.product-item:hover {
   border-bottom: 2px solid #fc5a5a;
}
.product-item img {
   display: block;
   width: 300px;
   height: 300px;
}
.product-list {
   background: #fafafa;
   padding: 15px 0;
}
.product-list h3 {
   font-size: 18px;
   font-weight: 400;
   color: #444444;
   margin: 0 0 10px 0;
}
.price {
   font-size: 16px;
   color: #fc5a5a;
   display: block;
   margin-bottom: 12px;
}
.button {
   text-decoration: none;
   display: inline-block;
   padding: 0 12px;
   background: #cccccc;
   color: white;
   text-transform: uppercase;
   font-size: 12px;
   line-height: 28px;
   transition: .3s ease-in;
}
.product-item:hover .button {
   background: #fc5a5a;
}
</style>

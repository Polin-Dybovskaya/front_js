<!--  
  <script setup>
import HwF from './components/HwF.vue'
</script>

<template> 
<HwF />
</template>

-->
<template>
  <div>
  <input type="text" v-model="nameFlower" placeholder="Name">
  <input type="text" v-model="familyFlower" placeholder="family">
  <input type="text" v-model="urlFlower" placeholder="url">
  <input type="color" v-model="color" placeholder="color">
  <p className="error">{{ error }}</p>
  <button class="button" @click="sendData()">Отправить</button>
  <br>
  <div class="wrapper" >
  <User v-for="(el, index) in users" :key="index" :user="el" :index="index" :deleteUser="deleteUser" />
</div>
</div>
</template>

<script>
import User from './components/HwS.vue'

export default {
  components: { User },
  data() {
      return {
          users: [],
          error: '',
          nameFlower: '',
          familyFlower: '',
          urlFlower: '',
          color: ''
      }
  },
  methods: {
      sendData() {
          if(this.nameFlower == '') {
              this.error = 'Название не введено';
              return;
          } else if(this.color == '') {
              this.error = 'Цвет не введен';
              return;
          } else if(this.familyFlower == '') {
              this.error = 'Семейство не введено';
              return;
          }

          this.error = '';

          this.users.push({
              name: this.nameFlower,
              family: this.familyFlower,
              color: this.color,
              urlFlower:this.urlFlower
          })
      },
      deleteUser(index) {
          this.users.splice(index, 1);
      }
  }
}
</script>

<style scoped>
.wrapper {
display: flex;
flex-flow: row wrap;
justify-content: space-around;
}
input {
  display: block;
  margin-bottom: 10px;
  border-radius: 3px;
  border: 1px solid silver;
  outline: none;
  padding: 10px 15px;
  background: #fafafa;
  color: #333;
}

button {
  border: 0;
  border-radius: 5px;
  outline: none;
  padding: 10px 15px;
  background: #6cd670;
  color: #167f3d;
  font-weight: bold;
  cursor: pointer;
  transition: transform 500ms ease;
}
.button {
   text-decoration: none;
   display: inline-block;
   padding: 0 12px;
   background: #3ad2e3;
   color: white;
   text-transform: uppercase;
   font-size: 12px;
   line-height: 28px;
   transition: .3s ease-in;
}


button:hover {
  transform: translateY(-5px);
}

.user {
  width: 500px;
  margin-top: 20px;
  border: 1px solid silver;
  background: #e3e3e3;
  color: #222;
  padding: 20px;
  border-radius: 5px;
}
</style>


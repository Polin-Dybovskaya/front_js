<template>
  <div id="app">
    <div class="button-container" >
      <button class="button1" @click="currentComponent = 'Component1'">Тест 1</button>
      <button class="button2" @click="currentComponent = 'Component2'">Тест 2</button>
      <button class="button3" @click="currentComponent = 'Component3'">Тест 3</button>
      <button class="button4" @click="currentComponent = 'Component4'">Тест 4</button>
      <button class="button5" @click="currentComponent = 'Component5'">Тест 5</button>

    </div>
    <div class="component-container ">
    <component :is="currentComponent"></component>
  </div>
  </div>
</template>

<script>
import Component1 from './TestsHW/Test1strop.vue';
import Component2 from './TestsHW/Test2stropdif.vue'
import Component4 from './TestsHW/Test4Munsberg.vue';
import Component3 from './TestsHW/Test3cudes.vue';
import Component5 from './TestsHW/Test5memory.vue';


export default {
  components: {
    Component1,
    Component2,
    Component3,
    Component4,
    Component5
   

  },
  data() {
    return {
      components: ['Component1', 'Component2', 'Component3', 'Component4', 'Component5','Result'],
      currentIndex: 0, 
      currentComponent: 'Component1', 
      isTimerActive: false, 
      remainingTime: 10, 
      timerInterval: null, 
    };
  },
  methods: {
    
  },
};
</script>

<style>
.button5 {
            background-color: #f2aa4b; 
            color: black;
            border: none; 
            padding: 15px 13px; 
            text-align: center; 
            text-decoration: none;
            display: inline-block; 
            font-size: 25px;
            margin: 4px 2px; 
            cursor: pointer; 
            border-radius: 8px; 
            transition: background-color 0.3s; 
        }
.button4 {
            background-color: #dfab55; 
            color: black;
            border: none; 
            padding: 15px 13px; 
            text-align: center; 
            text-decoration: none;
            display: inline-block; 
            font-size: 25px;
            margin: 4px 2px; 
            cursor: pointer; 
            border-radius: 8px; 
            transition: background-color 0.3s; 
        }
.button3 {
            background-color: #87b17f; 
            color: black;
            border: none; 
            padding: 15px 13px; 
            text-align: center; 
            text-decoration: none;
            display: inline-block; 
            font-size: 25px;
            margin: 4px 2px; 
            cursor: pointer; 
            border-radius: 8px; 
            transition: background-color 0.3s; 
        }
.button2 {
            background-color: #4ab49c; 
            color: black;
            border: none; 
            padding: 15px 13px; 
            text-align: center; 
            text-decoration: none;
            display: inline-block; 
            font-size: 25px;
            margin: 4px 2px; 
            cursor: pointer; 
            border-radius: 8px; 
            transition: background-color 0.3s; 
        }
.button1 {
            background-color: #08b9bc; 
            color: black;
            border: none; 
            padding: 15px 13px; 
            text-align: center; 
            text-decoration: none;
            display: inline-block; 
            font-size: 25px;
            margin: 4px 2px; 
            cursor: pointer; 
            border-radius: 8px; 
            transition: background-color 0.3s; 
        }

.button-container {
  position: fixed; 
  top: 0; 
  left: 0; 
  right: 0; 

  padding: 10px; 
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); 
  z-index: 1000; 
  display: flex; 
  justify-content: center;
}

.component-container {
  align-items: baseline;
  text-align: center;
}
.fixerr {
  position: fixed; 
  top: 20%; 
  left: 0;
  right: 0;
  padding: 10px 0; 
  z-index: 1000; 
}
</style>
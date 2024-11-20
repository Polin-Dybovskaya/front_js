<template>
  <div id="app">
    <h3>Правильный ответы  {{ right }} : {{ wrong }}  Неправильный ответы</h3>
    <h1>Выберите все  {{ rusrightcolor }} слова </h1>
    <div v-for="(word, id) in words" :key="id" class="word-item">
<span :style="{ color: word.color }">{{ word.word }}</span>
<input type="checkbox" v-model="selectedWords" :value="word.id" />
</div >
<div class='word-item'>
    <button v-if="words.length > 0" class='button' @click="checkSelected">Проверить выбранные слова</button>
    <h2 v-if="resultMessage">{{ resultMessage }}</h2>
    <button v-if="resultMessage" class='button' @click="nextQuiz">Следующий тест</button></div>
  </div>
</template>

<script>
import { BIconCurrencyEuro } from 'bootstrap-vue';

export default {
  data() {
    return {
      colors: [
                    { name: 'red', word: 'красные' },
                    { name: 'blue', word: 'синие' },
                    { name: 'black', word: 'черные' },
                    { name: 'purple', word: 'фиолетовые' },
                    { name: 'green', word: 'зеленые' },
                    { name: 'yellow', word: 'желтые' },
                    {name: 'orange', word: 'оранжевые' },
                    {name: 'pink', word: 'розовые' }
                ],
      allWords: [
        { id: 1, word: 'Белый', color: 'black' },
        { id: 2,word: 'Красный', color: 'pink' },
        { id: 3,word: 'Зеленый', color: 'red' },
        { id: 4,word: 'Черный', color: 'blue' },
        { id: 5,word: 'Желтый', color: 'green' },
        { id: 6,word: 'Синий', color: 'blue' },
        { id: 7,word: 'Фиолетовый', color: 'black' },
        { id: 8,word: 'Оранжевый', color: 'orange' },
        { id: 9,word: 'Синий', color: 'purple' },
        { id: 10,word: 'Фиолетовый', color: 'black'},
        { id: 11,word: 'Зеленый', color: 'purple' },
        { id: 12,word: 'Синий', color: 'pink' },
        { id: 13,word: 'Желтый', color: 'black' },
        { id: 14,word: 'Синий', color: 'green' },
        { id: 15,word: 'Фиолетовый', color: 'purple' },
        { id: 16,word: 'Фиолетовый', color: 'orange' },
        { id: 17,word: 'Голубой', color: 'blue' },
        { id: 18,word: 'Черный', color: 'orange' },
        { id: 19,word: 'Белый', color: 'purple' },
        { id: 20,word: 'Розовый', color: 'pink' },
        { id: 21,word: 'Синий', color: 'yellow' },
        { id: 22,word: 'Красный', color: 'green' },
        { id: 23,word: 'Зеленый', color: 'red' },
        { id: 24,word: 'Синий', color: 'blue' },
        { id: 25,word: 'Белый', color: 'orange' },
        { id: 26,word: 'Синий', color: 'black' },
        { id: 27,word: 'Черный', color: 'black' },
        { id: 28,word: 'Оранжевый', color: 'green' },
        { id: 29,word: 'Синий', color: 'green' },
        { id: 30,word: 'Розовый', color: 'pink' },
        { id: 31, word: 'Синий', color: 'pink' },
        { id: 32,word: 'Красный', color: 'yellow' },
        { id: 33,word: 'Зеленый', color: 'yellow' },
        { id: 34,word: 'Синий', color: 'orange' },
        { id: 35,word: 'Белый', color: 'orange' },
        { id: 36,word: 'Синий', color: 'purple' },
        { id: 37,word: 'Черный', color: 'purple' },
        { id: 38,word: 'Оранжевый', color: 'red' },
        { id: 39,word: 'Синий', color: 'red' },
      ],
      words: [],
      selectedWords: [],
      resultMessage: '',
      rightcolor:'',
      rusrightcolor:'',
      wrong:0,
      right:0,
    };
  },
  created() {
    this.nextQuiz(); 
  },
  methods: {
    getWord(colorName) {
                    const colorObj = this.colors.find(color => color.name === colorName);
                    return colorObj ? colorObj.word : '';
                },
    checkSelected() {
      
      const correctAnswers = this.words
        .filter(word => word.color === this.rightcolor)
        .map(word => word.id);
      console.log(correctAnswers)
    
      const isCorrect = this.selectedWords.length === correctAnswers.length &&
                        this.selectedWords.every(id => correctAnswers.includes(id));
      console.log(isCorrect)
      if (isCorrect) {
        this.resultMessage = 'Вы выбрали правильные слова!';
        this.right+=1
      } else {
        this.resultMessage = 'Вы выбрали неверные слова. Попробуйте снова.';
        this.wrong+=1
      }
    },
    nextQuiz() {
      this.selectedWords = [];
        this.resultMessage = '';
        this.rightcolor='';
        
        let a = this.shuffleArray(this.allWords);
        this.words=a.slice(0, 8);
        this.rightcolor =this.words[Math.floor((Math.random() * 9))].color;  
        this.rusrightcolor= this.getWord(this.rightcolor)
        
    },
    shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        
        const j = Math.floor(Math.random() * (i + 1));
        console.log(i,j);
        [array[i], array[j]] = [array[j], array[i]];
      }
      
      console.log(array)
      return array;
    }
  }
  
};

</script>

<style>
#app {

    align-items: center;
  }
.word-item {

  margin: 10px 0;
  font-size: 23px;
}
.button {
            background-color: #5092dd; 
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

</style>
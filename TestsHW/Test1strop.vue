<template>
  <div id="app" >
    <div class="fixerr">
      <h1>Тест Струпа лёгкий</h1>
    <div class="" v-if="isTimerActive">
      <h2>Оставшееся время: {{ remainingTime }} секунд</h2>
    </div>
    <h3>Правильный ответы  {{ right }} : {{ wrong }}  Неправильный ответы</h3>
    <br>
    <h1>Выберите все  {{ rusrightcolor }} слова </h1>
    <br>
    <div v-for="(word, id) in words" :key="id" class="word-item">
<span :style="{ color: word.color }">{{ word.word }}</span>
<input type="checkbox" v-model="selectedWords" :value="word.id" />
</div >
<div class='word-item'>
    <button v-if="words.length > 0" class='button' @click="checkSelected">Проверить выбранные слова</button>
    <h2 v-if="resultMessage">{{ resultMessage }}</h2>
    <button v-if="resultMessage" class='button' @click="nextQuiz">Следующий тест</button></div>
  </div>
</div>
</template>

<script>


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
                    {name: 'pink', word: 'розовые' },
                    {name: 'brown', word: 'коричневые' },

                ],
      allWords: [
        { id: 1, word: 'Коричневый', color: 'black' },
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
        { id: 15,word: 'Фиолетовый', color: 'brown' },
        { id: 16,word: 'Фиолетовый', color: 'orange' },
        { id: 17,word: 'Голубой', color: 'blue' },
        { id: 18,word: 'Черный', color: 'orange' },
        { id: 19,word: 'Коричневый', color: 'purple' },
        { id: 20,word: 'Розовый', color: 'pink' },
        { id: 21,word: 'Синий', color: 'yellow' },
        { id: 22,word: 'Красный', color: 'brown' },
        { id: 23,word: 'Зеленый', color: 'red' },
        { id: 24,word: 'Синий', color: 'blue' },
        { id: 25,word: 'Коричневый', color: 'orange' },
        { id: 26,word: 'Синий', color: 'brown' },
        { id: 27,word: 'Черный', color: 'black' },
        { id: 28,word: 'Оранжевый', color: 'green' },
        { id: 29,word: 'Синий', color: 'green' },
        { id: 30,word: 'Розовый', color: 'pink' },
        { id: 31,word: 'Синий', color: 'pink' },
        { id: 32,word: 'Красный', color: 'yellow' },
        { id: 33,word: 'Зеленый', color: 'yellow' },
        { id: 34,word: 'Синий', color: 'orange' },
        { id: 35,word: 'Коричневый', color: 'orange' },
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
      isTimerActive: false, 
      remainingTime: 60, 
      timerInterval: null, 
    };
  },
  created() {
    this.showAlert(); 
    this.nextQuiz(); 
  },
  beforeUnmount() {
    clearInterval(this.timerInterval);
  },
  methods: {
    
    showAlert() {
      alert('Тест 1\n Вам будет дано 60 секунд. \n За это время ваша задача найти все слова, у которых цвет текста соответсвует заданному в задании');
      this.startTimer();
    },

      startTimer() {
      this.isTimerActive = true; // Активируем таймер
      this.remainingTime = 60; // Сбрасываем оставшееся время

      // Запускаем интервал обновления таймера
      this.timerInterval = setInterval(() => {
        this.remainingTime--;
        console.log('1 ',this.remainingTime)
        if (this.remainingTime <= 0) {
          clearInterval(this.timerInterval); // Останавливаем интервал
          this.isTimerActive = false; // Деактивируем таймер
          this.res(); // Переключаемся на следующий компонент
        }
      }, 1000); // Обновляем каждую секунду
    },
    res() {
        let ans = 'Тест пройден! \nВы ответили правильно '+this.right+ ' и неправильно '+this.wrong+' раз\nМожете перейти к следующему тесту \nИли пройти тестирование заново без ограничений'
        alert(ans)
        this.wrong=0;
        this.right=0;
      
    },
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
        this.right+=1
        this.nextQuiz();
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
        this.rightcolor =this.words[Math.floor((Math.random() * 7))].color;  
        this.rusrightcolor= this.getWord(this.rightcolor)
        console.log(this.rightcolor,this.rusrightcolor)
        
    },
    shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        
        const j = Math.floor(Math.random() * (i + 1));
        console.log(i,j);
        [array[i], array[j]] = [array[j], array[i]];
      }
      
      console.log(array)
      return array;
    },
    
  }
  
};

</script>

<style>

.word-item {
  font-weight: bold;
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
input[type=checkbox]
{
  size: 2ch;
  transform: scale(2);
  padding: -5px;
  margin: 10px;
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
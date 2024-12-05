

<template>
  <div class="fixerr">
    <div class="" v-if="isTimerActive">
      <h2>Оставшееся время: {{ remainingTime }} секунд</h2>
    </div>
    <br>
    <h1>Тест по методике Мюнстерберга</h1> <h1>Всего набрано {{ allpoints }}</h1>
    <p class="word-item">{{ points }}/{{ maxim }}</p>
    <button class='button' @click="generateText">Создать текст</button>
    <h2 class="word-item" id="fontt">{{ generatedText }}  </h2>
    <input v-model="userInput" class="styled-input" placeholder="Введите слово" />
    <br>
    <button class='button' @click="checkWord">Проверить слово</button>
    <p class="word-item" ></p>
    <h2  class="word-item" v-if="isCorrect !== null">{{ resultMessage }}</h2>
  </div>
</template>

<script>
export default {
  mounted() {
    this.showAlert(); 
  },
  data() {
    return {
      words: ['яблоко', 'компьютер','внимание', 'лампа','котёл', 'самолёт','пилот','саморез','пила','будильник','топор','петух','сила','волна','наушники','кит','селезень','ножницы','панама','груша', 'кот', 'киви'],
      nowords: ['уцчскап', 'цукенипр', 'уцйыаемсв',  'воиагмааг', 'иагагохъ','фыву','цка','дру','волщзгмааг', 'иагохъ','фыву','цукайй','дроу','куа','птх','переперерея','рей','жох','дз','вим','еае','шек','ека','вв'],
      generatedText: '',
      userInput: '',
      isCorrect: null,
      nounsInText:[],
      points:0,
      maxim:0,
      allpoints:0,
      resultMessage: '',
      isTimerActive: false, 
      remainingTime: 60, 
      timerInterval: null,
    };
  },
  beforeUnmount() {
    clearInterval(this.timerInterval); 
  },
  methods: {
       
    showAlert() {
      alert('Тест 4\n Вам будет дано 60 секунд. \n За это время ваша задача найти все слова в тексте и напечатать их');
      this.startTimer();
    },

      startTimer() {
      this.isTimerActive = true; 
      this.remainingTime = 60; 

      
      this.timerInterval = setInterval(() => {
        this.remainingTime--;
        console.log('1 ',this.remainingTime)
        if (this.remainingTime <= 0) {
          clearInterval(this.timerInterval); 
          this.isTimerActive = false; 
          this.res(); 
        }
      }, 1000); 
    },
    res() {
        let ans = 'Тест пройден! \nВы выполнили '+this.points+ 'упражнения за 60 секунд!\nМожете перейти к следующему тесту'
        alert(ans)
        this.points=0;
        
      
    },
    generateText() {
      this.resultMessage=''
      this.points=0
      const randomWords = Array.from({ length: 20 }, () => {
        const isNoun = Math.random() < 0.5; 
        return isNoun
          ? this.words[Math.floor(Math.random() * this.words.length)]
          : this.nowords[Math.floor(Math.random() * this.nowords.length)];
      });
      this.generatedText = randomWords.join('');
      this.uniqueNouns = this.getUnique(randomWords.filter(word => this.words.includes(word)));
      this.maxim= this.uniqueNouns.length
      console.log(this.uniqueNouns)
    },
    getUnique(arr) {
      return arr.filter((el, ind) => ind === arr.indexOf(el));
    },
    
    checkWord() {
      this.isCorrect = this.uniqueNouns.includes(this.userInput);
      
      if (this.isCorrect){
        this.uniqueNouns = this.uniqueNouns.filter(item => item !== this.userInput);
        this.points+=1
        console.log("гг",this.uniqueNouns)
        this.resultMessage = 'Вы нашли слово!';
      }
      if (!this.isCorrect){
        
        this.resultMessage = 'Нет такого слова!';
      }
      if (this.points === this.maxim){
        this.allpoints+=1
        this.generateText()
      }
    },
  },
};

</script>

<style>
#app {

    align-items: baseline;
  }
.word-item {

  margin: 10px 0;
  font-size: 26px;
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
.styled-input {
  padding: 10px;
  border: 2px solid #007bff; 
  border-radius: 5px; 
  font-size: 20px;
  width: 300px; 
  transition: border-color 0.3s; 
}

.styled-input:focus {
  border-color: #0056b3; 
  outline: none;

}
.container {
  display: flex;
  flex-direction: column; 
  align-items: flex-start; 
  padding: 20px; 
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
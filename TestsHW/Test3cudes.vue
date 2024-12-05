<template>
  <div >
    <h1>Тест Струпа на оттенки</h1>
    <div class="" v-if="isTimerActive">
      <h2>Оставшееся время: {{ remainingTime }} секунд</h2>
    </div>
    <h3>Правильный ответы  {{ right }} : {{ wrong }}  Неправильный ответы</h3>
    <br>
    <h1>Найдите куб такого же цвета в массиве </h1>
  <div class="color-test">
    <div class="color-container">
        <div class="target-color" :style="{ backgroundColor: targetColor }"></div>
      </div>
    <h1>Массив: </h1>
    <div class="options">
      <div
        v-for="(color, index) in options"
        :key="index"
        class="color-option"
        :style="{ backgroundColor: color }"
        @click="checkAnswer(color)"
      ></div>
    </div>
    <h2 v-if="resultMessage">{{ resultMessage }}</h2>
  </div>
</div>
</template>

<script>
export default {
  mounted() {
    this.showAlert();
    this.generateColors(); 
  },
  data() {
    return {
      colors: {
        red: ['#ff0f00', '#b20a00', '#c13839', '#742122', '#ff474a','#780712','#c76b74','#9e000f','#f71b31','#ff4557','#de1245'],
        blue: ['#0818A8', '#4682B4', '#87CEEB', '#0F52BA', '#4169E1','#12aede','#4ac7ed','#13647d','#0871c2','#1895f5'],
        green: ['#7CFC00', '#3CB371', '#6B8E23', '#32CD32', '#00FF00','#18f599','#00bf70','#00824c','#13754c','#13752f','#227513','#227513','#707513'],
        yellow: ['#FFFF00', '#FFFF33', '#FFFF66', '#FFFF99', '#FFFFCC','#e4e89e','#fff714','#e6de00','#e6cb00'],
        purple: ['#DDA0DD', '#9370DB', '#BA55D3', '#800080', '#4B0082','#91068f','#91068f','#ab3fa9','#c25dc0','#ac5dc2','#a318c9','#b602e8'],
      },
      targetColor: '',
      options: [],
      right: 0,
      wrong:0,
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
      alert('Тест 3\n Вам будет дано 60 секунд. \n За это время ваша задача найти квадрат в массиве, такого же цвета как в задании');
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
        let ans = 'Тест пройден! \nВы ответили правильно '+this.right+ ' и неправильно '+this.wrong+' раз\nМожете повторить тест без ограничения по времени или перейти на следующий тест'
        alert(ans)
        this.wrong=0;
        this.right=0;
      
    },
    generateColors() {
      this.resultMessage = '';
      const colorKeys = Object.keys(this.colors);
      const randomColorKey = colorKeys[Math.floor(Math.random() * colorKeys.length)];
      this.targetColor = this.colors[randomColorKey][Math.floor(Math.random() * this.colors[randomColorKey].length)];

      
      const allColors = Object.values(this.colors).flat();
      this.options = this.getRandomColors(allColors, this.targetColor, 12);
    },
    getRandomColors(allColors, targetColor, count) {
      const colors = new Set();
      colors.add(targetColor); 

      while (colors.size < count) {
        const randomColor = allColors[Math.floor(Math.random() * allColors.length)];
        colors.add(randomColor);
      }

      return Array.from(colors).sort(() => Math.random() - 0.5); 
    },
    checkAnswer(selectedColor) {
      if (this.isSimilarColor(selectedColor, this.targetColor)) {
        this.right++;
        this.generateColors(); 
      } else {
        this.resultMessage = 'Вы выбрали неверный куб. Попробуйте снова.';
        this.wrong++;
      }
    },
    isSimilarColor(color1, color2) {
      
      return color1 === color2;
    },
  },
  
};
</script>

<style scoped>
.target-color {
  width: 150px;
  height: 150px;
  margin: 20px;
  border: 2px solid #000;
}
.options {
  display: flex;

  flex-wrap: wrap;
}
.color-option {
  width: 80px;
  height: 80px;
  margin: 5px;
  cursor: pointer;
  border: 1px solid #000;
}
.score {
  margin-top: 20px;
  font-size: 20px;
}
.color-container {
  display: flex;
  justify-content: center; 
  align-items: center; 
  margin: 20px 0; 
}
</style>
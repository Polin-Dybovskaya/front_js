<template>
  <div>
    <h1>Совпадения: {{ matchCount }}</h1>
    <div class="rectangles">
      <div
        v-for="(rectangle, index) in rectangles"
        :key="index"
        :style="{
          backgroundColor: rectangle.color,
          color: rectangle.textColor,
          width: '100px',
          height: '100px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '10px',
          cursor: 'pointer'
        }"
        @click="checkMatch(rectangle)"
      >
        {{ rectangle.text }}

       
      </div>
      <button @click="next" class="convert-button">Далее</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      origins:[{ color: 'blue', textColor: 'blue', text: 'Синий' },
        { color: 'purple', textColor: 'purple', text: 'Красный' },
        { color: 'green', textColor: 'yellow', text: 'Желтый' },
        { color: 'yellow', textColor: 'green', text: 'Зеленый' },
        { color: 'purple', textColor: 'black', text: 'Черный' },
        { color: 'white', textColor: 'blue', text: 'Синий' },
        { color: 'blue', textColor: 'purple', text: 'Красный' },
        { color: 'black', textColor: 'yellow', text: 'Фиолетовый' },
        { color: 'yellow', textColor: 'green', text: 'Черный' },
        { color: 'purple', textColor: 'black', text: 'Оранжевый' },
        { color: 'blue', textColor: 'blue', text: 'Белый' },
        { color: 'pink', textColor: 'red', text: 'Красный' },
        { color: 'green', textColor: 'yellow', text: 'Желтый' },
        { color: 'yellow', textColor: 'green', text: 'Зеленый' },
        { color: 'purple', textColor: 'orange', text: 'Оранжевый' },
        { color: 'blue', textColor: 'white', text: 'Синий' },
        { color: 'blue', textColor: 'red', text: 'Красный' },
        { color: 'green', textColor: 'yellow', text: 'Желтый' },
        { color: 'yellow', textColor: 'green', text: 'Зеленый' },
        { color: 'purple', textColor: 'white', text: 'Черный' }],
      matchCount: 0,
      rectangles: [{ color: 'blue', textColor: 'blue', text: 'Синий' },
        { color: 'white', textColor: 'white', text: 'Красный' },
        { color: 'green', textColor: 'yellow', text: 'Желтый' },
        { color: 'yellow', textColor: 'green', text: 'Зеленый' },
        { color: 'purple', textColor: 'black', text: 'Черный' }
        
        // Добавьте больше прямоугольников по желанию
      ],
    };
  },
  methods: {
    checkMatch(rectangle) {
      if (rectangle.color === rectangle.textColor) {
        this.matchCount++;
      }
    },
    next(){
      this.rectangles=[]
      for (let i =this.origins.length-1;i>=0;i--){
        const j =Math.random()*(this.origins.length-i);
        this.rectangles.push(this.origins[j])
        console.log(this.rectangles,j)
      }

    }
  },

};



</script>

<style scoped>
.rectangles {
  display: flex;
  flex-wrap: wrap;
}
</style>

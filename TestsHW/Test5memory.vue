<template>
  <div id="app" class="fixerr">
    <h1>Тест на кратковременную память</h1>
    <div class="" v-if="isTimerActive">
      <h2>Оставшееся время: {{ remainingTime }} секунд</h2>
    </div>
    <h3>Правильный ответы  {{ right }} : {{ wrong }}  Неправильный ответы</h3>
    <div>
      <br>
    <div class="selected-images" v-if="!isMatrixVisible">
      <h2>Запомните эти картинки за 5 секунд:</h2>
      <div v-for="(image, index) in selectedImages" :key="index" class="image">
        <img :src="image" alt="Selected Image" />
      </div>
    </div>
    <div v-if="isMatrixVisible">
    <h2>Выберите такие же картинки:</h2>
    <br>
    <div class="image-grid" >
      
      <div
        v-for="(image, index) in imageGrid"
        :key="index"
        class="grid-item" 
        @click="checkImage(image)"
      >
        <img :src="image" alt="Grid Image" />
      </div>
    </div>
    </div>
    
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      allImages: [
'https://cdn.icon-icons.com/icons2/4188/PNG/96/game_gamepad_casino_play_gaming_sport_controller_console_icon_262407.png',
'https://cdn.icon-icons.com/icons2/4188/PNG/96/battle_game_sword_fight_weapon_gift_token_war_power_icon_262404.png',
'https://cdn.icon-icons.com/icons2/4188/PNG/96/stopwatch_game_limit_watch_sandglass_time_timer_clock_hourglass_icon_262403.png',
'https://cdn.icon-icons.com/icons2/4188/PNG/96/kitchen_food_ham_extra_energy_game_cooking_battery_power_icon_262430.png',
'https://cdn.icon-icons.com/icons2/4188/PNG/96/game_magnifying_glass_tools_search_magnifier_zoom_find_controller_icon_262440.png',
'https://cdn.icon-icons.com/icons2/4188/PNG/96/star_game_money_favorite_rating_award_medal_falling_gold_icon_262455.png',
'https://cdn.icon-icons.com/icons2/4188/PNG/96/controller_sport_video_compass_gamepad_game_sports_console_icon_262420.png',
'https://cdn.icon-icons.com/icons2/4188/PNG/96/symbol_player_action_elements_play_pause_button_game_icon_262421.png',
'https://cdn.icon-icons.com/icons2/4188/PNG/96/game_army_pistol_sword_war_military_gift_weapon_gun_icon_262418.png',
'https://cdn.icon-icons.com/icons2/4188/PNG/96/game_sport_gamble_controller_play_gaming_ball_cube_console_icon_262451.png',
'https://cdn.icon-icons.com/icons2/4188/PNG/96/gear_setting_play_video_sport_controller_console_sports_game_icon_262442.png',
'https://cdn.icon-icons.com/icons2/4188/PNG/96/castle_tower_house_queen_game_king_building_princess_prince_icon_262429.png',
'https://cdn.icon-icons.com/icons2/4188/PNG/96/wood_hammer_stone_forest_consruction_sport_tree_weapon_game_icon_262433.png',
'https://cdn.icon-icons.com/icons2/4188/PNG/96/battery_energy_yellow_thunder_power_electric_lightning_game_icon_262416.png',
'https://cdn.icon-icons.com/icons2/4110/PNG/96/xmas_flower_christmas_decoration_emoji_icon_260230.png', 

'https://cdn.icon-icons.com/icons2/4110/PNG/96/xmas_cookie_emoji_christmas_icon_260220.png',
'https://cdn.icon-icons.com/icons2/4110/PNG/96/xmas_gift_box_present_christmas_emoji_icon_260223.png',
'https://cdn.icon-icons.com/icons2/4110/PNG/96/xmas_crown_christmas_decoration_emoji_icon_260228.png',
'https://cdn.icon-icons.com/icons2/4110/PNG/96/xmas_gingerbread_christmas_emoji_icon_260224.png',
'https://cdn.icon-icons.com/icons2/4110/PNG/96/xmas_christmas_light_emoji_decoration_icon_260232.png',
'https://cdn.icon-icons.com/icons2/4110/PNG/96/xmas_cherry_christmas_decoration_emoji_icon_260233.png',
'https://cdn.icon-icons.com/icons2/4110/PNG/96/xmas_santa_hat_christmas_emoji_icon_260221.png',
'https://cdn.icon-icons.com/icons2/4110/PNG/96/xmas_sock_christmas_decoration_emoji_icon_260226.png',
'https://cdn.icon-icons.com/icons2/4110/PNG/96/xmas_star_christmas_decoration_emoji_icon_260227.png',
'https://cdn.icon-icons.com/icons2/4110/PNG/96/xmas_bell_christmas_decoration_emoji_icon_260231.png',
'https://cdn.icon-icons.com/icons2/4110/PNG/96/xmas_christmas_tree_emoji_icon_260217.png',
'https://cdn.icon-icons.com/icons2/4110/PNG/96/xmas_candle_christmas_decoration_emoji_icon_260225.png',
'https://cdn.icon-icons.com/icons2/4110/PNG/96/xmas_milk_emoji_icon_260219.png',
'https://cdn.icon-icons.com/icons2/4110/PNG/96/xmas_mitten_christmas_glove_emoji_icon_260229.png',
'https://cdn.icon-icons.com/icons2/4110/PNG/96/xmas_cane_emoji_christmas_decoration_icon_260222.png',
'https://cdn.icon-icons.com/icons2/4110/PNG/96/xmas_sphere_christmas_decoration_emoji_icon_260218.png',

'https://cdn.icon-icons.com/icons2/1396/PNG/96/pear_96807.png', 
'https://cdn.icon-icons.com/icons2/1396/PNG/96/tofu_96804.png',
'https://cdn.icon-icons.com/icons2/1396/PNG/96/soybeans_96799.png',
'https://cdn.icon-icons.com/icons2/1396/PNG/96/pepper_96809.png',
'https://cdn.icon-icons.com/icons2/1396/PNG/96/olive_96808.png',
'https://cdn.icon-icons.com/icons2/1396/PNG/96/blueberries_96805.png',
'https://cdn.icon-icons.com/icons2/1396/PNG/96/carrots_96797.png',
'https://cdn.icon-icons.com/icons2/1396/PNG/96/ginger_96794.png',
'https://cdn.icon-icons.com/icons2/1396/PNG/96/onion_96802.png',
'https://cdn.icon-icons.com/icons2/1396/PNG/96/lemon_96803.png',
'https://cdn.icon-icons.com/icons2/1396/PNG/96/greens_96795.png',
'https://cdn.icon-icons.com/icons2/1396/PNG/96/garlic_96798.png',
'https://cdn.icon-icons.com/icons2/1396/PNG/96/bokchoy_96800.png',
'https://cdn.icon-icons.com/icons2/1396/PNG/96/mushroom_96796.png',
'https://cdn.icon-icons.com/icons2/1396/PNG/96/tomato_96806.png',
      ],
      selectedImages: [],
      imageGrid: [],
      foundImages: [],
      message: '',
      
      isMatrixVisible: false,
      right:0,
      wrong:0,
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
      alert('Тест 5\n Вам будет дано 60 секунд. \n Дается 5 секунд чтобы запомнить 3 картинки, их необходимо найти в матрице');
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
        let ans = 'Тест пройден! \nВы ответили правильно '+this.right+ ' и неправильно '+this.wrong+' раз\nВы закончили все тесты!'
        alert(ans)
        this.wrong=0;
        this.right=0;
      
    },
    selectRandomImages() {
      
      let a=this.shuffleArray(this.allImages)
      let matr = a.slice(0, 24);
      this.selectedImages = matr.slice(3, 6);
      this.imageGrid = this.shuffleArray(matr);
      console.log(this.selectedImages,this.imageGrid)

      this.showMatrixAfterDelay();
    },
    showMatrixAfterDelay() {
      setTimeout(() => {
        this.isMatrixVisible = true;
      }, 5000); 
    },
    checkImage(image) {
      if (this.selectedImages.includes(image) && !this.foundImages.includes(image)) {
        this.foundImages.push(image);
        this.right++; 
        
      } else {
        this.wrong++;
      }

      if (this.foundImages.length === this.selectedImages.length) {
        this.isMatrixVisible = false;
        this.foundImages= []
        this.selectRandomImages();
      }
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
  },
  mounted() {
    this.showAlert(); 
    this.selectRandomImages();
  },
};
</script>

<style>
#app {
  align-items: baseline;
  text-align: center;
}
.container {
  display: flex;
  flex-direction: column; 
  align-items: flex-start; 
  padding: 20px; 
}
.image-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
}

.grid-item {
  cursor: pointer;
}

.image {
  display: inline-block;
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

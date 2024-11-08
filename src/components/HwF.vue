<template>
  <div class="d-flex justify-content-center">
    <div class="form-select-lg mb-3">
      <select id="filter" v-model="selectedFilter" @change="sortData">
        <option value="none">None</option>
        <option value="title">By title</option>
        <option value="pages">By pages</option>
        <option value="pub">By publisher</option>
      </select>
    </div>
  </div>
  <section class="wrapper">
    <div class="container-fostrap">
      <div class="content">
        <div class="container">
          <div class="row" id="zone">
            <div v-for="(book, index) in filteredData" :key="index" class="col-xs-12 col-sm-4">
              <div class="card">
                <a class="img-card" href="`https://stephen-king-api.onrender.com/api/book/${book.id}`">
                  <img src="./d.jpg" alt="book.Title" />
                </a>
                <div class="card-content">
                  <h4 class="card-title">{{ book.Title }}</h4>
                  <b>{{ book.Publisher }}</b>
                  <p class="pad">Pages: {{ book.Pages }}</p>
                </div>
                <div class="card-read-more">
                  <a :href="`https://stephen-king-api.onrender.com/api/book/${book.id}`" class="btn btn-link btn-zone oq">
                    <b>Read More</b>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>


export default {
  data() {
    return {
      jsonData: [],
      filteredData: [],
      selectedFilter: "none",
    };
  },
  mounted() {
    this.NoneSort();
  },
  methods: {
    async NoneSort() {
      try {
        const response = await fetch("https://stephen-king-api.onrender.com/api/books");
        const jsonData = await response.json();
        this.jsonData = jsonData.data;
        this.filteredData = this.jsonData;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    async TitleSort() {
      try {
        const response = await fetch("https://stephen-king-api.onrender.com/api/books");
        const jsonData = await response.json();
        this.jsonData = jsonData.data;
        this.filteredData = this.jsonData.sort((a, b) => {
          const nameA = a.Title.toLowerCase();
          const nameB = b.Title.toLowerCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    async PubSort() {
      try {
        const response = await fetch("https://stephen-king-api.onrender.com/api/books");
        const jsonData = await response.json();
        this.jsonData = jsonData.data;
        this.filteredData = this.jsonData.sort((a, b) => {
          const nameA = a.P.toLowerCase();
          const nameB = b.Publisher.toLowerCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    async PagesSort() {
      try {
        const response = await fetch("https://stephen-king-api.onrender.com/api/books");
        const jsonData = await response.json();
        this.jsonData = jsonData.data;
        this.filteredData = this.jsonData.sort((a, b) => a.Pages - b.Pages);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    sortData() {
      if (this.selectedFilter === "title") {
        this.TitleSort();
      } else if (this.selectedFilter === "pages") {
        this.PagesSort();
      } else if (this.selectedFilter === "pub") {
        this.PubSort();
      } else {
        this.NoneSort();
      }
    },
  },
};
</script>
<style scoped>

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 }
 select {
   appearance: none;
   border: 0;
   outline: 0;
   background: none;
   color: inherit;
   box-shadow: none;
   font-size: medium;
   align-content: center;
 }
 select::-ms-expand {
   display: none;
 }

 body{
    font-family: 'Montserrat', sans-serif;
    min-height: 100vh;
    color: #555;
 }
 h2{
    text-align: center;
    margin-top: 50px;
    font-size: 30px;
 }
 .products{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, auto));
    grid-gap: 50px;
    margin: 50px auto;
    max-width: 1640px;
    padding: 20px;
 }
 .product{
    padding: 10px;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
 }
 .product img{
    width: 100%;
    display: block;
 }
 .product .title{
    text-align: center;
    padding-top: 30px;
    padding-bottom: 20px;
    font-weight: 600;
    text-transform: uppercase;
 }
 .product .description{
    padding: 0 20px 20px 20px;
    line-height: 22px;
 }
 .product .price{
    text-align: center;
    font-weight: 600;
    font-size: 28px;
    color:black;
    padding-top: 30px;
    font-family: sans-serif;

 }
 .product .cart{
    text-align: center;
    padding: 15px 0;
    margin-top: 40px;
    background-color: #3e628f;
    color: white;
    font-size: 18px;
    cursor: pointer;
 }
 .product .cart i{
    padding-left: 10px;
 }
 .view-more{
    margin: 0 auto;
    max-width: 1240px;
    padding: 20px;
    text-align: center;
 }
 .view-more button{
    padding: 10px 25px;
 }
 @import url(https://fonts.googleapis.com/css?family=Roboto:400,100,900);

html,
body {
  -moz-box-sizing: border-box;
       box-sizing: border-box;
  height: 100%;
  width: 100%;

  font-weight: 400;
}

.wrapper {
  display: table;
  height: 100%;
  width: 100%;
}
.oq {
  color: #000000 ;/* Цвет текста */
  font-weight: bold;
  -webkit-transition: all 0.5s ease;
          transition: all 0.5s ease;
}

.oq:hover{
  color: #008284;/* Меняем цвет текста */
}
.container-fostrap {
  display: table-cell;
  padding: 1em;
  text-align: center;
  vertical-align: top;
}
.fostrap-logo {
  width: 100px;
  margin-bottom:15px;
  border-radius: 40px;
}
h1.heading {
  color: #fff;
  font-size: 1.15em;
  font-weight: 900;
  margin: 0 0 0.5em;
  color: #505050;
}
@media (min-width: 450px) {
  h1.heading {
    font-size: 3.55em;
  }
}
@media (min-width: 760px) {
  h1.heading {
    font-size: 3.05em;
  }
}
@media (min-width: 900px) {
  h1.heading {
    font-size: 3.25em;
    margin: 0 0 0.3em;
  }
}
.card {
width:400px;
height:400px;
  display: block;
    margin-bottom: 20px;
    line-height: 1.42857143;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12);
    transition: box-shadow .25s;
}
.card:hover {
  box-shadow: 0 8px 17px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
}
.img-card {
  width: 100%;
  height:200px;
  border-top-left-radius:2px;
  border-top-right-radius:2px;
  display:block;
    overflow: hidden;
}
.img-card img{
  width: 100%;
  height: 200px;
  object-fit:cover;
  transition: all .25s ease;
}
.pad{
padding-top:5%;
}
.card-content {
  height:150px;
  padding:15px;
  text-align:left;
}
.card-title {
height:40%;
  margin-top:0px;
  font-weight: 700;
  font-size: 1.65em;
}
.card-title a {
  color: #000;
  text-decoration: none !important;
}
.card-read-more {
  border-top: 1px solid #D4D4D4;
  color:#000000
}
.card-read-more a {
  text-decoration: none !important;
  padding:8px;
  font-weight:600;
  text-transform: uppercase;
  color: #000000 ;/* Цвет текста */

}
</style>
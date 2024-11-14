<template>
    <div>
      <div class="converter-container">
      <h1>Конвертер валюты</h1>
      <br>
      <div class="input-group">
        <label for="amount">Сумма:</label>
        <input type="number" min="0" class="sel" v-model="amount" id="amount" />
      </div>
      <div class="input-group">
        <label for="fromCurrency">Из:</label>
        <select v-model="fromCurrency" class="select" id="fromCurrency">
          <option v-for="(currency, code) in currencies" :key="code" :value="code">{{ code }}</option>
        </select>
      </div>
      <div class="input-group">
        <label for="toCurrency">В:</label>
        <select v-model="toCurrency" class="select" id="toCurrency">
          <option v-for="(currency, code) in currencies" :key="code" :value="code">{{ code }}</option>
        </select>
      </div>
      <button @click="convert" class="convert-button">Конвертировать</button>
    <br>
      <div v-if="result !== null">
        <h2>Результат: {{ result }}</h2>
      </div>
    </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        amount: 1,
        fromCurrency: 'USD',
        toCurrency: 'EUR',
        currencies: {},
        result: null,
      };
    },
    created() {
      this.fetchCurrencies();
    },
    methods: {
      async fetchCurrencies() {
        try {
          const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');
          this.currencies = response.data.bpi;
        } catch (error) {
          console.error('Ошибка при получении данных:', error);
        }
      },
      convert() {
        const fromRate = this.currencies[this.fromCurrency].rate_float;
        const toRate = this.currencies[this.toCurrency].rate_float;
        this.result = (this.amount * toRate / fromRate).toFixed(2);
      },
    },
  };
  </script>
  
  <style scoped>
  .converter-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    border: 2px solid #007bff;
    border-radius: 10px;
    background-color: #f9f9f9;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  .convert-button {
    width: 100%;
    padding: 15px;
    font-size: 1.5em;
    color: white;
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  .input-group {
    margin-bottom: 20px;
  }
  
  label {
    font-size: 1.5em;
    margin-bottom: 5px;
    display: block;
  }
  .select {
    width: 100%;
    padding: 15px;
    font-size: 1.5em;
    border: 2px solid #007bff;
    border-radius: 5px;
  }
  .sel {
    width: 90%;
    padding: 15px;
    font-size: 1.5em;
    border: 2px solid #007bff;
    border-radius: 5px;
  }
  </style>

let http = new XMLHttpRequest();
http.open('get', 'j.json', true);
http.send();
http.onload = function(){
   if(this.readyState == 4 && this.status == 200){
      

      let products = JSON.parse(this.responseText);
      let output = "";
      jsonData=products
      console.log(products)

      if(filter.value == 'title'){
      jsonData=products.sort((a, b) => {
         const nameA = a.card.toUpperCase(); 
         const nameB = b.card.toUpperCase(); 
           if (nameA < nameB) {
             return -1;
           }
           if (nameA > nameB) {
             return 1;
           }

           return 0;
         });
      }

      for(let item of jsonData){
         output += `
            <div class="product">
               <img src="${item.avatar}" alt="${item.avatar}">
               <p class="price">${item.first_name} ${item.last_name}</p>
               <br>
               <span class='title'>${item.card}</span>
               <br>
                <span class="price"> ${item.country}</span>
               <p class="cart">${item.money}<i class="bx bx-cart-alt"></i></p>
            </div>
         `;
      }
      document.querySelector(".products").innerHTML = output;
   }
}
const form = document.querySelector('form');
const itemsContainer = document.querySelector('section#items');
const table = document.querySelector('table#data')

const idSelector = (anId) => {
   return document.querySelector(anId);
}

const loadData = (e) => {
   const lat = document.querySelector('#latVal').value;
   const lon = document.querySelector('#lonVal').value;
   const date = document.querySelector('select#year').value;
   const month = document.querySelector('select#month').value;

   const crimeData = {
      asb: 0,
      bicycleTheft: 0,
      burglray: 0,
      crimalDamageArson: 0,
      drugs: 0,
      otherTheft: 0,
      posOfWeps: 0,
      publicOrder: 0,
      robbery: 0,
      shoplifting: 0,
      vehicleCrime: 0,
      violentCrime: 0,
      otherCrime: 0,
   }

   const url = `https://data.police.uk/api/crimes-street/all-crime?lat=${lat}&lng=${lon}&date=${date}-${month}`;
   console.log(url)

   fetch(url)
      .then(resp => resp.json())
      .then(data => {
         data.forEach((i) => {
            table.classList.add('is-visible');
            switch (i.category) {
               case 'anti-social-behaviour':
                  crimeData.asb++;
                  break;
               case 'bicycle-theft':
                  crimeData.bicycleTheft++;
                  break;
               case 'burglary':
                  crimeData.burglray++;
                  break;
               case 'criminal-damage-arson':
                  crimeData.crimalDamageArson++;
                  break;
               case 'drugs':
                  crimeData.drugs++;
                  break;
               case 'other-theft':
                  crimeData.otherTheft++;
                  break;
               case 'possession-of-weapons':
                  crimeData.posOfWeps++;
                  break;
               case 'public-order':
                  crimeData.publicOrder++;
                  break;
               case 'robbery':
                  crimeData.robbery++;
                  break;
               case 'shoplifting':
                  crimeData.shoplifting++;
                  break;
               case 'vehicle-crime':
                  crimeData.vehicleCrime++;
                  break;
               case 'violent-crime':
                  crimeData.violentCrime++;
                  break;
               case 'other-crime':
                  crimeData.otherCrime++;
                  break;
            }
         })
         idSelector('#asb').textContent = crimeData.asb;
         idSelector('#bicycleTheft').textContent = crimeData.bicycleTheft;
         idSelector('#burglary').textContent = crimeData.burglray;
         idSelector('#arson').textContent = crimeData.crimalDamageArson;
         idSelector('#drugs').textContent = crimeData.drugs;
         idSelector('#otherTheft').textContent = crimeData.otherTheft;
         idSelector('#weps').textContent = crimeData.posOfWeps;
         idSelector('#publicOrder').textContent = crimeData.publicOrder;
         idSelector('#robbery').textContent = crimeData.robbery;
         idSelector('#shoplifting').textContent = crimeData.shoplifting;
         idSelector('#vehicleCrime').textContent = crimeData.vehicleCrime;
         idSelector('#violentCrime').textContent = crimeData.violentCrime;
         idSelector('#otherCrime').textContent = crimeData.otherCrime;
      })
   e.preventDefault();
}


form.addEventListener('submit', loadData);
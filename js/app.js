// Fixed values for now
const url = 'https://data.police.uk/api/crimes-street/all-crime?lat=52.629729&lng=-1.131592&date=2017-01';

fetch(url)
   .then(resp => resp.json())
   .then(data => {
      console.log(data)
   });
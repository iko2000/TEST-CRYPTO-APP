


const bitcoin = document.querySelector('.bitcoin');
const etherium = document.querySelector('.etherium');
const bnb = document.querySelector('.bnb');
const solana = document.querySelector('.solana');
const dogecoin = document.querySelector('.dogecoin');
const xrp = document.querySelector('.xrp');
const polygon = document.querySelector('.polygon');
const cardano = document.querySelector('.cardano');
const tether = document.querySelector('.tether');






console.log("WROKS");

const recieveData = async function () {
  try {
    const res = await fetch(
      "https://data.binance.com/api/v3/ticker/24hr");
      
    console.log(res);
    const data = await res.json();
    console.log(data);
    console.log(data[98].prevClosePrice)

    bnb.textContent = `Price: ${Math.round(data[98].prevClosePrice)} $`
    
    bitcoin.textContent = `Price: ${Math.round(data[11].prevClosePrice)} $`
    etherium.textContent = `Price: ${Math.round(data[12].prevClosePrice)} $`
    cardano.textContent = `Price: ${data[296].prevClosePrice} $`
    dogecoin.textContent = `Price: ${data[560].prevClosePrice} $`
    polygon.textContent = `Price: ${data[499].prevClosePrice} $`
    xrp.textContent = `Price: ${data[306].prevClosePrice} $`
    solana.textContent = `Price: ${Math.round(data[779].prevClosePrice)} $`
    tether.textContent = "Price: 1 $ "
    








  } catch (err) {
    alert(err);
  }
};

recieveData();






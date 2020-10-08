const array = [9, 7, 5, 3, 6, 1, 2, 8, 4, 10];
    const fruits = ["appel", "peer", "aardbei", "mandarijn", "mango"];

    let random = Math.round(Math.random() * (array.length - 1));
    let index = array[random] - 1;
    index = (index <= (fruits.length - 1)) ? index : ((array.length - 1) % index);
    // console.log(array.length);
    // console.log(fruitsIndex);
    // console.log(fruits);
    // console.log(fruits[0]);
    // console.log(fruits[2]);

    // "banaan" wordt toegevoegd aan het einde van de string, en '6' wordt geretourneerd.
    // console.log(fruits.push("banaan"));

    // "banaan" wordt weer verwijderd van de fruits array.
    // console.log(fruits.pop());

    // "appel" wordt verwijderd van de fruits array en geretourneerd.
    // console.log(fruits.shift());

    // "[peer", "aardbei"] een oppervlakkige deel wordt gekopieerd en geretourneerd in een nieuwe array van de fruits array. 
    // console.log(fruits.slice(0, 2));

    // console.log(fruits.splice(0, 0, 'kiwi'));
    // console.log(fruits);
    // console.log(fruits.splice(0, 3, 'rambutan'));
    // console.log(fruits);

    // de array wordt op alfabetische volgorde gesorteerd, echter kan sort het ook numeriek sorteren.
    // console.log(fruits.sort());

    // het retourneerd het getal 5 dit keer, omdat de array vijf elementen bevat. als de andere console.logs niet zijn gecommenteerd komt er een ander getal uit.
    // console.log(fruits.length);

    // de parameters houden het volgende in (index, aantal dat verwijderd dient te worden vanaf de aangegeven index, het element ter plaatsing ), "peer" wordt geretourneerd in de console
    // console.log(fruits.splice(1, 1, "sinaasappel"));

    // De onderstaande functie switched twee array items die naast elkaar zijn, de eerste item wordt gevonden aan de hand van zijn index en wordt bewaard in een variable, vervolgens wordt met de splice() dezelfde index
    // herbruikt als start punt, vanaf die startpunt wordt er 1 item verwijderd, bij de volgende regel wordt met de splice() method de variable op index + 1 geplaatst.
    function switchFruit(arr, i) {
      const fruit = arr[i];
      fruits.splice(i, 1);
      fruits.splice((i + 1), 0, fruit);
      return arr;
    }

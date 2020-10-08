const array = [9, 7, 5, 3, 6, 1, 2, 8, 4, 10];
    const fruits = ["appel", "peer", "aarbei", "mandarijn", "mango"];

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
    console.log(fruits.sort());
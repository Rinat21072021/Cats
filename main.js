

let cat1 = document.getElementById('cat1')
let cat2 = document.getElementById('cat2')

class Cat {
    constructor(name, age, info) {
        this.name = name;
        this.age = age;
        this.satiety = 100;
        this.hp = 100;
        this.info = info;

    }

    sayMay() {
        console.log(`May I am ${name}`)
    }

    getHangry(cat) {
        if (cat.satiety === 0) {
            cat.hp--
        } else {
            cat.satiety--
        }
        cat.info.innerHTML = `
        Имя: ${cat.name}  <br>
        Возрост: ${cat.age} <br>
        Голод: ${cat.satiety} <br>
        Здоровье: ${cat.hp} <br> <hr>
        `
    }
}

let barsiks = new Cat('Барс', 2, cat1)
let murz = new Cat('Мурзик', 15, cat2)

setInterval(barsiks.getHangry, 1500, barsiks)
setInterval(murz.getHangry, 1500, murz)
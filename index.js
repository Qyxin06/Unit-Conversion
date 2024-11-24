
const convert = document.getElementById("btn")
const input = document.getElementById("input")
const lengthEl = document.getElementById("length")
const voluemEl = document.getElementById("volume")
const massEl = document.getElementById("mass")
const unit = [lengthEl, voluemEl, massEl]
const unit1 = ["meters", "liters", "kilos"]
const unit2 = ["feet", "gallons" ,"pounds"]
const rate = [3.281, 0.264, 2.204]

convert.addEventListener ("click",function(){
    clear()
    conversion ()
})

function clear() {
    for (let i = 0; i < unit.length; i++) {
      const h3El = unit[i].querySelectorAll("h3")
      h3El.forEach(h3 => h3.remove())
    }

}

function conversion() {
    for(let i = 0; i < rate.length; i ++) {
        let result1 = rate[i] * parseFloat(input.value)//将输入值转换为浮点数
        let sentence1 = `${input.value} ${unit1[i]} = ${result1.toFixed(2)} ${unit2[i]} | `
        unit[i].innerHTML += `<h3>${sentence1}</h3>`
    
        let result2 = parseFloat(input.value) / rate[i] //将输入值转换为浮点数
        let sentence2 = `${input.value} ${unit2[i]} = ${result2.toFixed(2)} ${unit1[i]} `
        unit[i].innerHTML += `<h3>${sentence2}</h3>`
    
    }
}



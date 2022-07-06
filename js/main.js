alert("Aca estan los desafios de las clases 3 y 4!!")

for(i = prompt("Desafio clase 3 - Ingrese un numero para cuenta atras:"); i>=0 ;i--){
    if (i>=1){
        alert(i)
    } else {
        alert("Listo!")
    }    
}

const avgAge = (a,b,c,d) => ((a+b+c+d)/4)

alert("Desafio clase 4 - Ingrese edades para calcular el promedio:")
let ageA = parseInt(prompt("Edad persona A"))
let ageB = parseInt(prompt("Edad persona B"))
let ageC = parseInt(prompt("Edad persona C"))
let ageD = parseInt(prompt("Edad persona D"))

let avg = avgAge(ageA, ageB, ageC, ageD).toString()

alert("El promedio de edad es "+avg)

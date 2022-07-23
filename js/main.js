var KoderList = [
    [
        "Fernanda",
        "Palacios Vera"
    ],
    [
        "Jorge",
        "Ochoa"
    ],
    [
        "Naomi",
        "puertos"
    ],
    [
        "Rurick",
        "maqueo Poissot"
    ]
]

/*
-crear un nuevo array que tenga los nombres completos de todos los KoderList 
*/
console.log(KoderList)

const createdNewArray = () => {
    var newArray = []
    for (i=0;i<KoderList.length;i++){
        newArray.push(KoderList[i].join(" "))
    }
    return newArray
}

var joindedNames = createdNewArray()

console.log(joindedNames)

/*
-Ingresar un nombre
-Validar si existe algun 
koder cuyo primer nombre coincida con el nombre escrito
*/

const checkName = name => {

for(i=0;i<joindedNames.length;i++){

console.log(joindedNames.length)

    let firstName = joindedNames[i].split(" ")[0]
    console.log(firstName)

    firstName === name && console.log("true")

    }
}

//checkName("Fernanda")
checkName("Jorge")
//checkName("Naomi")
//checkName("Rurick")

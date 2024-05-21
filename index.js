const heroName = "Midnight";
let heroExperience = 9000;
let heroLevel;

if (heroExperience <= 1000) {
    heroLevel = "Ferro";
} else if (1001 <= heroExperience <= 2000) {
    heroLevel = "Bronze";
} else if (2001 <= heroExperience <= 5000) {
    heroLevel = "Prata";
} else if (5001 <= heroExperience <= 7000) {
    heroLevel = "Ouro";
} else if (7001 <= heroExperience <= 8000) {
    heroLevel = "Platina";
} else if (8001 <= heroExperience <= 9000) {
    heroLevel = "Ascendente";
} else if (9001 <= heroExperience <= 10000) {
    heroLevel = "Imortal";
} else if (heroExperience >= 10001) {
    heroLevel = "Radiante";
}

console.log("O Herói de nome " + heroName + " está no nível de " + heroLevel)
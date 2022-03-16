    var edad1C1 = 0;
    var edad2C1 = 0;
    var edad3C1 = 0;

    var medioTC1 = 0;
    var medioRC1 = 0;
    var medioIC1 = 0;

    var generoMC1= 0;
    var generoFC1 = 0;
    var votesC1; 

    var edad1C2 = 0;
    var edad2C2 = 0;
    var edad3C2 = 0;

    var medioTC2 = 0;
    var medioRC2 = 0;
    var medioIC2 = 0;

    var generoMC2= 0;
    var generoFC2 = 0;
    var votesC2;  

function countC1(){
    votesC1 = document.getElementById("votosC1").innerHTML;

    var edad;
    edad = document.getElementById("edadC1").value;
    var genero;
    genero = document.getElementById("generoC1").value;
    var medio; 
    medio = document.getElementById("medioC1").value;
    

    votesC1 = +votesC1 + 1;

    if (edad == "18-34"){
        edad1C1 = edad1C1+1;
    }
    if (edad == "35-55"){
        edad2C1 = edad2C1+1;
    }
    if (edad == "55 o Mas"){
        edad3C1 = edad3C1+1;
    }

    if (medio == "Television"){
        medioTC1= medioTC1+1;
    }
    if (medio == "Radio"){
        medioRC1= medioRC1+1;
    }
    if (medio == "Internet"){
        medioIC1 = medioIC1+1;
    }

    if (genero == "Masculino"){
        generoMC1= generoMC1+1;
    }
    if (genero == "Femenino"){
        generoFC1 = generoFC1+1;
    }

    document.getElementById("votosC1").innerHTML = votesC1;
    porcentajes();



}

function countC2(){
    votesC2 = document.getElementById("votosC2").innerHTML;

    var edad;
    edad = document.getElementById("edadC2").value;
    var genero;
    genero = document.getElementById("generoC2").value;
    var medio; 
    medio = document.getElementById("medioC2").value;
    

    votesC2 = +votesC2 + 1;

    if (edad == "18-34"){
        edad1C2 = edad1C2+1;
    }
    if (edad == "35-55"){
        edad2C2 = edad2C2+1;
    }
    if (edad == "55 o Mas"){
        edad3C2 = edad3C2+1;
    }

    if (medio == "Television"){
        medioTC1= medioTC2+1;
    }
    if (medio == "Radio"){
        medioRC1= medioRC2+1;
    }
    if (medio == "Internet"){
        medioIC1 = medioIC1+1;
    }

    if (genero == "Masculino"){
        generoMC2= generoMC2+1;
    }
    if (genero == "Femenino"){
        generoFC2 = generoFC2+1;
    }

    document.getElementById("votosC2").innerHTML = votesC2;
    porcentajes();

}

function porcentajes(){
    var vC1 = document.getElementById("votosC1").innerHTML;
    var vC2 = document.getElementById("votosC2").innerHTML;

    var pC1 = (+vC1)/(+vC1 + +vC2)*100;
    var pC2 = (+vC2)/(+vC1 + +vC2)*100;

    pC1 = Math.round(pC1);
    pC2 = Math.round(pC2);

    document.getElementById("porcentajeC1").innerHTML = pC1 + "%";
    document.getElementById("porcentajeC2").innerHTML = pC2 + "%";

}

function stats(){
    document.getElementById("vH1").innerHTML= "Votos Hombres: " + generoMC1;
    document.getElementById("vM1").innerHTML= "Votos Mujeres: " + generoFC1;
}
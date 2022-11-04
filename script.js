

function osszeadas(){
    var szamA = document.getElementById("szamA").value;
    var szamB = document.getElementById("szamB").value;

    var eredmeny = parseFloat(szamA) + parseFloat(szamB);
    document.getElementById("out").innerHTML = "Eredmény: " + eredmeny;
}

function kivonas(){
    var szamA = document.getElementById("szamA").value;
    var szamB = document.getElementById("szamB").value;

    var eredmeny = parseFloat(szamA) - parseFloat(szamB);
    document.getElementById("out").innerHTML = "Eredmény: " + eredmeny;
}

function szorzas(){
    var szamA = document.getElementById("szamA").value;
    var szamB = document.getElementById("szamB").value;

    var eredmeny = parseFloat(szamA) * parseFloat(szamB);
    document.getElementById("out").innerHTML = "Eredmény: " + eredmeny;
}

function osztas(){
    var szamA = document.getElementById("szamA").value;
    var szamB = document.getElementById("szamB").value;

    var eredmeny = parseFloat(szamA) / parseFloat(szamB);
    document.getElementById("out").innerHTML = "Eredmény: " + eredmeny;
}
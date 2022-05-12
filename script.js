let zbiorwyrazow = ["DOMEK", "TARTA", "WIARA", "WARTA", "ZAMEK", "KARTA", "BRAMA", "IGLOO", "KOMIN", "TARKA"];
let wiersz = zbiorwyrazow[Math.floor(Math.random() * 10)];
let linijka = 1;
$("#haslo").text(wiersz);
$("[id=first]").val(wiersz[0]);
let drugi = false;
let trzeci = false;
let czwarty =false;
let piaty = false;

$("#fb").on("click", function () {
    if (linijka == 1)

    {
        if ($("#firsttwo").val().toUpperCase() == wiersz[1]) {
            $("#firsttwo").css("color", "green")
            $("#firsttwo").attr("disabled", "true")
            $("#secondtwo").val($("#firsttwo").val())
            $("#secondtwo").prop("disabled", "true")
            $("#thirdtwo").val($("#firsttwo").val())
            $("#thirdtwo").prop("disabled", "true")
            $("#fourthtwo").val($("#firsttwo").val())
            $("#fourthtwo").prop("disabled", "true")
            $("#fivethtwo").val($("#firsttwo").val())
            $("#fivethtwo").prop("disabled", "true")
            drugi = true
        } else
            $("#firsttwo").css("color", "red")
        $("#firsttwo").prop("disabled", "true")


        if ($("#firstthree").val().toUpperCase() == wiersz[2]) {
            $("#firstthree").css("color", "green")
            $("#firstthree").prop("disabled", "true")
            $("#secondthree").val($("#firstthree").val())
            $("#secondthree").prop("disabled", "true")
            $("#thirdthree").val($("#firstthree").val())
            $("#thirdthree").prop("disabled", "true")
            $("#fourththree").val($("#firstthree").val())
            $("#fourththree").prop("disabled", "true")
            $("#fiveththree").val($("#firstthree").val())
            $("#fiveththree").prop("disabled", "true")
            trzeci = true;
        } else
            $("#firstthree").css("color", "red")
        $("#firstthree").prop("disabled", "true")

        if ($("#firstfour").val().toUpperCase() == wiersz[3]) {
            $("#firstfour").css("color", "green")
            $("#fiveththree").val($("#firstfour").val())
            $("#firstfour").prop("disabled", "true")
            $("#secondfour").val($("#firstfour").val())
            $("#secondfour").prop("disabled", "true")
            $("#thirdfour").prop("disabled", "true")
            $("#thirdfour").val($("#firstfour").val())
            $("#fourthfour").prop("disabled", "true")
            $("#fourthfour").val($("#firstfour").val())
            $("#fivethfour").prop("disabled", "true")
            $("#fivethfour").val($("#firstfour").val())
            czwarty = true
        } else
            $("#firstfour").css("color", "red")
            $("#firstfour").prop("disabled", "true")
        

        if ($("#firstfive").val().toUpperCase() == wiersz[4]) {
            $("#firstfive").css("color", "green")
            $("#firstfive").prop("disabled", "true")
            $("#secondfive").val($("#firstfive").val())
            $("#secondfive").prop("disabled", "true")
            $("#thirdfive").val($("#firstfive").val())
            $("#thirdfive").prop("disabled", "true")
            $("#fourthfive").val($("#firstfive").val())
            $("#fourthfive").prop("disabled", "true")
            $("#fivethfive").val($("#firstfive").val())
            $("#fivethfive").prop("disabled", "true")
            piaty = true
        } else
            $("#firstfive").css("color", "red")
        $("#firstfive").prop("disabled", "true")
        linijka = 2;
    }
   
    if(drugi && trzeci && czwarty && piaty){
        alert("Wygrałes")
        location.reload()
        $("input").val("") 
    }
    
});

$("#sb").on("click", function () {
    if (linijka == 2) {
        if ($("#secondtwo").val().toUpperCase() == wiersz[1]) {
            $("#secondtwo").css("color", "green")
            $("#secondtwo").prop("disabled", "true")
            $("#thirdtwo").val($("#secondtwo").val())
            $("#thirdtwo").prop("disabled", "true")
            $("#fourthtwo").val($("#secondtwo").val())
            $("#fourthtwo").prop("disabled", "true")
            $("#fivethtwo").val($("#secondtwo").val())
            $("#fivethtwo").prop("disabled", "true")
            drugi = true
        } else
            $("#secondtwo").css("color", "red")
        $("#secondtwo").prop("disabled", "true")



        if ($("#secondthree").val().toUpperCase() == wiersz[2]) {
            $("#secondthree").css("color", "green")
            $("#secondthree").prop("disabled", "true")
            $("#thirdthree").val($("#secondthree").val())
            $("#thirdthree").prop("disabled", "true")
            $("#fourththree").val($("#secondthree").val())
            $("#fourththree").prop("disabled", "true")
            $("#fiveththree").val($("#secondthree").val())
            $("#fiveththree").prop("disabled", "true")
            trzeci = true
        } else
            $("#secondthree").css("color", "red")
        $("#secondthree").prop("disabled", "true")

        if ($("#secondfour").val().toUpperCase() == wiersz[3]) {
            $("#secondfour").css("color", "green")
            $("#secondfour").prop("disabled", "true")
            $("#thirdfour").val($("#secondfour").val())
            $("#thirdfour").prop("disabled", "true")
            $("#fourthfour").val($("#secondfour").val())
            $("#fourthfour").prop("disabled", "true")
            $("#fivethfour").val($("#secondfour").val())
            $("#fivethfour").prop("disabled", "true")


            czwarty= true
        } else
            $("#secondfour").css("color", "red")
        $("#secondfour").prop("disabled", "true")


        if ($("#secondfive").val().toUpperCase() == wiersz[4]) {
            $("#secondfive").css("color", "green")
            $("#secondfive").prop("disabled", "true")
            $("#thirdfive").val($("#secondfive").val())
            $("#thirdfive").prop("disabled", "true")
            $("#fourthfive").val($("#secondfive").val())
            $("#fourthfive").prop("disabled", "true")
            $("#fivethfive").val($("#secondfive").val())
            $("#fivethfive").prop("disabled", "true")
        piaty = true
        } else
            $("#secondfive").css("color", "red")
        $("#secondfive").prop("disabled", "true")
        linijka = 3

    }
    if(drugi && trzeci && czwarty && piaty){
        alert("Wygrałes")
        location.reload()
        $("input").val(" ") 
    }
});
$("#tb").on("click", function () {

    if (linijka == 3)

    {
        if ($("#thirdtwo").val().toUpperCase() == wiersz[1]) {
            $("#thirdtwo").css("color", "green")
            $("#thirdtwo").prop("disabled", "true")
            $("#fourthtwo").val($("#thirdtwo").val())
            $("#fourthtwo").prop("disabled", "true")
            $("#fivethtwo").val($("#thirdtwo").val())
            $("#fivethtwo").prop("disabled", "true")
            drugi = true

        } else
            $("#thirdtwo").css("color", "red")
        $("#thirdtwo").prop("disabled", "true")


        if ($("#thirdthree").val().toUpperCase() == wiersz[2]) {
            $("#thirdthree").css("color", "green")
            $("#thirdthree").prop("disabled", "true")

            $("#fourththree").val($("#thirdthree").val())
            $("#fourththree").prop("disabled", "true")
            $("#fiveththree").val($("#thirdthree").val())
            $("#fiveththree").prop("disabled", "true")
            trzeci = true
        } else
            $("#thirdthree").css("color", "red")
        $("#thirdthree").prop("disabled", "true")

        if ($("#thirdfour").val().toUpperCase() == wiersz[3]) {
            $("#thirdfour").css("color", "green")
            $("#thirdfour").prop("disabled", "true")

            $("#fourthfour").val($("#thirdfour").val())
            $("#fourthfour").prop("disabled", "true")
            $("#fivethfour").val($("#thirdfour").val())
            $("#fivethfour").prop("disabled", "true")
            czwarty = true
        } else
            $("#thirdfour").css("color", "red")
        $("#thirdfour").prop("disabled", "true")


        if ($("#thirdfive").val().toUpperCase() == wiersz[4]) {
            $("#thirdfive").css("color", "green")
            $("#thirdfive").prop("disabled", "true")

            $("#fourthfive").val($("#thirdfive").val())
            $("#fourthfive").prop("disabled", "true")
            $("#fivethfive").val($("#thirdfive").val())
            $("#fivethfive").prop("disabled", "true")
            piaty = true
        } else
            $("#thirdfive").css("color", "red")
        $("#thirdfive").prop("disabled", "true")

        linijka = 4;
    }
    if(drugi && trzeci && czwarty && piaty){
        alert("Wygrałes")
        location.reload()
        $("input").val(" ") 
    }
});
$("#fourb").on("click", function () {

    if (linijka == 4)

    {
        if ($("#fourthtwo").val().toUpperCase() == wiersz[1]) {
            $("#fourthtwo").css("color", "green")
            $("#fourthtwo").prop("disabled", "true")
            $("#fivethtwo").val($("#fourthtwo").val())
            $("#fivethtwo").prop("disabled", "true")
            drugi = true

        } else
            $("#fourthtwo").css("color", "red")
        $("#fourthtwo").prop("disabled", "true")


        if ($("#fourththree").val().toUpperCase() == wiersz[2]) {
            $("#fourththree").css("color", "green")
            $("#fourththree").prop("disabled", "true")

            $("#fiveththree").val($("#fourththree").val())
            $("#fiveththree").prop("disabled", "true")
            trzeci = true
        } else
            $("#fourththree").css("color", "red")
        $("#fourththree").prop("disabled", "true")

        if ($("#fourthfour").val().toUpperCase() == wiersz[3]) {
            $("#fourthfour").css("color", "green")
            $("#fourthfour").prop("disabled", "true")

            $("#fivethfour").val($("#fourthfour").val())
            $("#fivethfour").prop("disabled", "true")
            czwarty = true
        } else
            $("#fourthfour").css("color", "red")
        $("#fourthfour").prop("disabled", "true")


        if ($("#fourthfive").val().toUpperCase() == wiersz[4]) {
            $("#fourthfive").css("color", "green")
            $("#fourthfive").prop("disabled", "true")
            $("#fivethfive").val($("#fourthfive").val())
            $("#fivethfive").prop("disabled", "true")
            piaty = true
        } else
            $("#fivethfive").css("color", "red")
        $("#fivethfive").prop("disabled", "true")
        linijka = 5;
    }
    if(drugi && trzeci && czwarty && piaty){
        alert("Wygrałes")
        location.reload()
        $("input").val(" ") 
    }
});
$("#fiveb").on("click", function () {

    if (linijka == 5)

    {
        if ($("#fivethtwo").val().toUpperCase() == wiersz[1]) {
            $("#fivethtwo").css("color", "green")
            $("#fivethtwo").prop("disabled", "true")
            drugi = true
        } else
            $("#fivethtwo").css("color", "red")
        $("#fivethtwo").prop("disabled", "true")

        if ($("#fiveththree").val().toUpperCase() == wiersz[2]) {
            $("#fiveththree").css("color", "green")
            $("#fiveththree").prop("disabled", "true")
            trzeci = true
        } else
            $("#fiveththree").css("color", "red")
        $("#fiveththree").prop("disabled", "true")

        if ($("#fivethfour").val().toUpperCase() == wiersz[3]) {
            $("#fivethfour").css("color", "green")
            $("#fivethfour").prop("disabled", "true")
            czwarty = true
        } else
            $("#fivethfour").css("color", "red")
        $("#fivethfour").prop("disabled", "true")


        if ($("#fivethfive").val().toUpperCase() == wiersz[4]) {
            $("#fivethfive").css("color", "green")
            $("#fivethfive").prop("disabled", "true")
            piaty = true
        } else
            $("#fivethfive").css("color", "red")
        $("#fivethfive").prop("disabled", "true")

        linijka = 5;

    }
    if(drugi && trzeci && czwarty && piaty){
        alert("Wygrałes")
        location.reload()
        $("input").val(" ") 
    }
    else{
        alert("Przegrałeś")
        location.reload()
        $("input").val(" ") 
    }
    //przegrales, sleep i od nowa
})
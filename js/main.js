let students = [...document.querySelectorAll(".student")]

students.map((el, i) => {
    let n1 = document.querySelectorAll(".info_n1")
    let n2 = document.querySelectorAll(".info_n2")
    let n3 = document.querySelectorAll(".info_n3")
    let n4 = document.querySelectorAll(".info_n4")
    let final_media = document.querySelectorAll(".final_media")
    let final_result = document.querySelectorAll(".resultado_final")
    let calcular = document.querySelectorAll(".calculate")



    el.addEventListener("click", () => {


        for (i = 0; i < n1.length; i++) {

            final_media[i].innerHTML = (parseInt(n1[i].innerHTML) + parseInt(n2[i].innerHTML) + parseInt(n3[i].innerHTML) + parseInt(n4[i].innerHTML)) / 4;

        }

        for (i = 0; i < final_result.length; i++)

            if (final_media[i].innerHTML >= 6) {
                final_result[i].innerHTML = "Approv"
            } else {
                final_result[i].innerHTML = "disap"
            }

    })
})


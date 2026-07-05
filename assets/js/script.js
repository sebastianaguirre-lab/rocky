$(document).ready(function () {
    var corredores = [
        {
            nombre: "Sebastian Aguirre",
            categoria: "Elite",
            especialidad: "Crono / Ruta",
            division: "Elite",
            foto: "assets/img/card1.jpg",
            bio: "Corredor de potencia sostenida, enfocado en pruebas de ruta, contrarreloj y trabajo tactico para el equipo.",
            palmares: ["Subaru Farellones", "Campeonato Nacional por Equipos"]
        },
        {
            nombre: "Raul Urbina",
            categoria: "Ruta",
            especialidad: "Fondo / Liderazgo",
            division: "Master",
            foto: "assets/img/card2.jpg",
            bio: "Impulsor del proyecto Cycling Rocky, con experiencia en competencias nacionales y trabajo de desarrollo deportivo.",
            palmares: ["Participacion en calendario nacional", "Desarrollo de nuevos ciclistas", "Capitan de ruta"]
        },
        {
            nombre: "Joel Pena",
            categoria: "Escalada",
            especialidad: "Montana / Resistencia",
            division: "Master",
            foto: "assets/img/card3.jpg",
            bio: "Perfil escalador, constante en entrenamientos largos y fuerte cuando la ruta empieza a inclinarse.",
            palmares: ["Top 10 desafio cordillera", "Podio categoria master", "Regularidad temporada 2026"]
        }
    ];

    var corredorActual = 0;

    function actualizarCorredor(indice) {
        var corredor = corredores[indice];
        $("#profilePhoto").attr("src", corredor.foto).attr("alt", "Foto de " + corredor.nombre);
        $("#profileCategory").text(corredor.categoria);
        $("#profileName").text(corredor.nombre);
        $("#profileSpecialty").text(corredor.especialidad);
        $("#profileDivision").text(corredor.division);
        $("#profileBio").text(corredor.bio);

        var htmlPalmares = corredor.palmares.map(function (logro) {
            return '<li><i class="fa-solid fa-medal"></i> ' + logro + "</li>";
        }).join("");

        $("#profilePalmares").html(htmlPalmares);
    }

    actualizarCorredor(corredorActual);

    $(".navbar a[href^='#'], a.btn[href^='#']").click(function (event) {
        var destino = $(this).attr("href");
        if ($(destino).length) {
            event.preventDefault();
            $("html, body").animate({ scrollTop: $(destino).offset().top - 72 }, 600);
            $(".navbar-collapse").collapse("hide");
        }
    });

    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 80) {
            $("#navbar").addClass("scrolled");
        } else {
            $("#navbar").removeClass("scrolled");
        }
    });

    $("#nextRider").on("click", function () {
        corredorActual = (corredorActual + 1) % corredores.length;
        actualizarCorredor(corredorActual);
    });

    $("#formularioContacto").submit(function (event) {
        event.preventDefault();
        alert("Mensaje enviado correctamente.");
        this.reset();
    });
});

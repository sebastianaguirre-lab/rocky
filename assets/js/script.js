$(document).ready(function () {
    var fallbackPhoto = "assets/img/Imagen3.png";
    var corredores = [
        {
            id: "deyvid-perafan-tabares",
            nombre: "Deyvid Perafan Tabares",
            categoria: "Master A",
            especialidad: "Sprint",
            resumen: "Gregario de lectura rápida y potencia para definir al sprint.",
            bio: "Excelente gregario. Leo las carreras y utilizo la fuerza a mi favor.",
            palmares: "3 lugar departamentales de ciclismo Cali, Colombia.",
            foto: "https://drive.google.com/open?id=1kKN5TL4GhcGn8cnetTdceee-sCN8oXJz"
        },
        {
            id: "fernando-pautazzo",
            nombre: "Fernando Pautazzo",
            categoria: "Master B",
            especialidad: "Sprint-gregario",
            resumen: "Sprinter y gregario enfocado en apoyar al líder del equipo.",
            bio: "Principal objetivo enfocado en ayudar al líder del equipo para poder llevarlo a lograr los objetivos establecidos. Perfil de sprinter, medio fondo y crono.",
            palmares: "Base de ciclismo infantil juvenil en Argentina, sólida base en pista y circuitos planos\nEn categoría infantil y juvenil, varios primeros puestos en carreras de pista y circuitos urbanos\n7mo puesto en categoría Master B2 en GF7Lagos 2023\n5to puesto campeonato 2018 Master A en Proam\nPrimer lugar en carreras de 1 día organizadas por Proam, Canadela y Club de la Ligua",
            foto: "https://drive.google.com/open?id=1FVPbaBFu0y83yJC-ithK_jDGNXP4SHP7"
        },
        {
            id: "diego-andres-ramirez-paez",
            nombre: "Diego Andres Ramírez Páez",
            categoria: "Elite",
            especialidad: "Crono, fuga",
            resumen: "Rodador fuerte para sostener ritmo, crono y movimientos de fuga.",
            bio: "Fuerte en terreno llano y con posibilidades en la subida. Mantiene ritmos y ayuda en terrenos llanos.",
            palmares: "3 lugar crono laboral Canadela 2019 categoría TC\nGanador duplax mixtas 2026\n205 gran fondo Curacaví",
            foto: "https://drive.google.com/open?id=1RuKyeJKQXgDDXXvpK2PWrv4ymjIu8INE"
        },
        {
            id: "bastian-real",
            nombre: "Bastián Real",
            categoria: "Máster A",
            especialidad: "Todo terreno",
            resumen: "Ciclista constante, versátil y orientado a superar desafíos.",
            bio: "Ciclista entusiasta, constante y en búsqueda de desafíos que pongan a prueba sus condiciones físicas y mentales, llevándolo a superarse día a día.",
            palmares: "Corredor enfocado en pruebas de ruta",
            foto: "https://drive.google.com/open?id=14qbbMl1hwQ68sfDBolBEIQUun4tcKLDJ"
        },
        {
            id: "juan-luis-perez-farfan",
            nombre: "Juan Luis Perez Farfan",
            categoria: "Master",
            especialidad: "Fuga",
            resumen: "Lector de carrera y oportunista cuando aparece la fuga correcta.",
            bio: "Corredor director de la competencia, lector de rivales y oportunista en las fugas. Donde el aire no cabe en el pecho y las piernas no pueden más, las mías se activan para generar la diferencia.",
            palmares: "5to lugar Giro Laboral AMCLA 2000\n4to lugar 2do semestre Canadela 2008\n2do lugar circuito La Pampilla 2016\n3er lugar Ranking anual Adultos B Proam\n5to lugar Ranking anual Master Canadela 2024\n5to lugar Ranking anual Master Canadela 2026",
            foto: "https://drive.google.com/open?id=1S98kSuCRn_odTZmZ47VdvVwtgXQ95Pdq"
        },
        {
            id: "ruben-silva",
            nombre: "Ruben Silva",
            categoria: "Adultos A",
            especialidad: "Fuga",
            resumen: "Rodador combativo, cómodo en el llano y motivado por la fuga.",
            bio: "Ciclista de perfil rodador y espíritu combativo. Especialista en mantener ritmos altos y rodar rápido en terreno llano. Aunque las grandes cuestas no son su fuerte, sube a un ritmo sólido y constante. Su mayor motivación es la adrenalina de las fugas y desafiar al pelotón.",
            palmares: "En construcción. El día que una fuga corone con éxito, esta sección se actualiza.",
            foto: "https://drive.google.com/open?id=1Tx6IDjXoHmmaJVQ-lzs6QxorUWY0eHXI"
        },
        {
            id: "marcelo-antonio-vallejos-vergara",
            nombre: "Marcelo Antonio Vallejos Vergara",
            categoria: "Máster B",
            especialidad: "Fuga, escalada",
            resumen: "Corredor experimentado, perseverante y fuerte en resistencia.",
            bio: "Corredor con bastante experiencia en ciclismo de ruta, buena lectura de carrera y especial desempeño en carreras de resistencia. Descripción en una palabra: perseverancia.",
            palmares: "",
            foto: "https://drive.google.com/open?id=1xgDBd5sgYnwe0FbRHUiRuRrG4YTCYg0e"
        },
        {
            id: "matias-ignacio-toro-castillo",
            nombre: "Matias Ignacio Toro Castillo",
            categoria: "Adulto A",
            especialidad: "Ruta",
            resumen: "Rodador constante con enfoque de apoyo al equipo.",
            bio: "Corredor constante con participación anual en el campeonato Canadela, rodador con enfoque de apoyo al equipo.",
            palmares: "",
            foto: "https://drive.google.com/open?id=1op5vjALBCpUpFd4-9RB6SP-3eb777O5s"
        },
        {
            id: "hans-arnoldo-ortega-alvarado",
            nombre: "Hans Arnoldo Ortega Alvarado",
            categoria: "Elite",
            especialidad: "Sprint y fuga",
            resumen: "Sprinter de fuga con recorrido competitivo desde 2014.",
            bio: "Comienzo de carrera ciclista en el año 2014. Aprendizaje en solitario después de un año. En 2015 se integró a un equipo amateur llamado Pawertap, compitiendo en ranking Canadela. En 2017 cambió a Team Central Bike hasta 2018. Luego pasó a categoría élite, con participaciones intermitentes en carreras amateur laborales de Canadela, siempre dentro de los primeros 15 corredores. En 2025 se incorporó al equipo Team Rocky.",
            palmares: "2016 debutante: 1ro en una de las 4 etapas fondo Noviciado Alto 3 días Vargas\n2016 debutante: 2do etapa Haras de Pirque ranking\n2016 debutante: 2do etapa Noviciado Alto ranking\n2025: 7mo etapa El Toyo ranking Canadela\n2025: 1ro meta volante etapa Lo Prado ranking Canadela\n2026: 3er etapa Monumento Til Til",
            foto: "https://drive.google.com/open?id=1UvYTEN447oiMR-02aN0ZtzahyqUxAy9l"
        },
        {
            id: "camilo-ernesto-reyes-jana",
            nombre: "Camilo Ernesto Reyes Jaña",
            categoria: "Master A",
            especialidad: "Plano",
            resumen: "Corredor de terreno plano, atento para cortar fugas.",
            bio: "Cortador de fugas.",
            palmares: "",
            foto: "https://drive.google.com/open?id=1FPvatLpNl7mqRzS_2hE8KpvR7DA-o8AZ"
        }
    ];

    function escapeHtml(text) {
        return String(text || "").replace(/[&<>'"]/g, function (char) {
            return {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                "'": "&#39;",
                "\"": "&quot;"
            }[char];
        });
    }

    function obtenerDriveId(url) {
        var match = String(url || "").match(/[?&]id=([^&]+)/);
        return match ? match[1] : "";
    }

    function obtenerFoto(url) {
        var driveId = obtenerDriveId(url);
        return driveId ? "https://drive.google.com/thumbnail?id=" + driveId + "&sz=w1000" : fallbackPhoto;
    }

    function obtenerPalmares(corredor) {
        var logros = String(corredor.palmares || "").split(/\n+/).map(function (logro) {
            return logro.trim();
        }).filter(Boolean);

        if (!logros.length) {
            logros = ["Información deportiva en actualización."];
        }

        return logros;
    }

    function renderizarCorredores() {
        var html = corredores.map(function (corredor) {
            return '<div class="col-md-6 col-xl-3">' +
                '<article class="rider-card">' +
                    '<img src="' + escapeHtml(obtenerFoto(corredor.foto)) + '" alt="' + escapeHtml(corredor.nombre) + '" onerror="this.onerror=null;this.src=\'' + fallbackPhoto + '\';">' +
                    '<div class="rider-card-body">' +
                        '<span>' + escapeHtml(corredor.categoria) + ' / ' + escapeHtml(corredor.especialidad) + '</span>' +
                        '<h3>' + escapeHtml(corredor.nombre) + '</h3>' +
                        '<p>' + escapeHtml(corredor.resumen) + '</p>' +
                        '<button class="btn btn-rider-more" type="button" data-rider="' + escapeHtml(corredor.id) + '">Leer mas <i class="fa-solid fa-arrow-up-right-from-square ms-2"></i></button>' +
                    '</div>' +
                '</article>' +
            '</div>';
        }).join("");

        $("#ridersGrid").html(html);
    }

    function actualizarCorredor(corredor) {
        $("#profilePhoto").off("error").on("error", function () { this.src = fallbackPhoto; }).attr("src", obtenerFoto(corredor.foto)).attr("alt", "Foto de " + corredor.nombre);
        $("#profileCategory").text(corredor.categoria);
        $("#riderModalTitle").text(corredor.nombre);
        $("#profileSpecialty").text(corredor.especialidad);
        $("#profileDivision").text(corredor.categoria);
        $("#profileBio").text(corredor.bio);

        var htmlPalmares = obtenerPalmares(corredor).map(function (logro) {
            return '<li><i class="fa-solid fa-medal"></i> ' + escapeHtml(logro) + "</li>";
        }).join("");

        $("#profilePalmares").html(htmlPalmares);
    }

    renderizarCorredores();

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

    $(document).on("click", ".btn-rider-more", function () {
        var riderId = $(this).data("rider");
        var corredor = corredores.find(function (item) {
            return item.id === riderId;
        });

        if (!corredor) {
            return;
        }

        actualizarCorredor(corredor);
        bootstrap.Modal.getOrCreateInstance(document.getElementById("riderModal")).show();
    });

    $("#formularioContacto").submit(function (event) {
        event.preventDefault();
        alert("Mensaje enviado correctamente.");
        this.reset();
    });
});
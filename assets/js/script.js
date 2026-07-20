$(document).ready(function () {
    var fallbackPhoto = "assets/img/Imagen3.png";
    var corredores = [
        {
            id: "deyvid-perafan-tabares",
            nombre: "Deyvid Perafán",
            categoria: "Máster A",
            especialidad: "Sprint",
            resumen: "Gregario de lectura rápida y potencia para definir al sprint.",
            bio: "Excelente gregario. \"Leo las carreras y utilizo la fuerza a mi favor.\"",
            palmares: "3.er lugar departamentales de ciclismo Cali, Colombia.",
            foto: "assets/img/deyvid.jpg"
        },
        {
            id: "fernando-pautazzo",
            nombre: "Fernando Pautazzo",
            categoria: "Máster B",
            especialidad: "Sprint-gregario",
            resumen: "Sprinter y gregario enfocado en apoyar al líder del equipo.",
            bio: "Principal objetivo enfocado en ayudar al líder del equipo para poder llevarlo a lograr los objetivos establecidos.\nPerfil de sprinter, medio fondo y crono.\nBase de ciclismo infantil juvenil en Argentina, sólida base en pista y circuitos planos.",
            palmares: "En categoría infantil y juvenil, varios primeros puestos en carreras de pista y circuitos urbanos\n7.º puesto en categoría Máster B2 en GF7Lagos 2023\n5.º puesto campeonato 2018 Máster A en Proam\nPrimer lugar en carreras de 1 día organizadas por Proam, Canadela y Club de la Ligua",
            foto: "assets/img/fernando.jpeg"
        },
        {
            id: "diego-andres-ramirez-paez",
            nombre: "Diego Ramírez",
            categoria: "Elite",
            especialidad: "Crono, fuga",
            resumen: "Rodador fuerte para sostener ritmo, crono y movimientos de fuga.",
            bio: "Fuerte en terreno llano y con posibilidades en la subida. Mantiene ritmos y ayuda en terrenos llanos.",
            palmares: "3.er lugar crono laboral Canadela 2019 categoría TC\nGanador duplax mixtas 2026, 205 gran fondo Curacaví",
            foto: "assets/img/diego.jpeg"
        },
        {
            id: "bastian-real",
            nombre: "Bastián Real",
            categoria: "Máster A",
            especialidad: "Todo terreno",
            resumen: "Ciclista constante, versátil y orientado a superar desafíos.",
            bio: "Ciclista entusiasta, constante y en búsqueda de desafíos que pongan a prueba sus condiciones físicas y mentales, llevándolo a superarse día a día.",
            palmares: "",
            foto: "assets/img/bastian.jpg"
        },
        {
            id: "juan-luis-perez-farfan",
            nombre: "Juan Luis Pérez",
            categoria: "Máster",
            especialidad: "Fuga",
            resumen: "Lector de carrera y oportunista cuando aparece la fuga correcta.",
            bio: "Corredor director de la competencia, lector de rivales y oportunista en las fugas. \"Donde el aire no cabe en el pecho y las piernas no pueden más, las mías se activan para generar la diferencia.\"",
            palmares: "5.º lugar Giro Laboral AMCLA 2000\n4.º lugar 2.º semestre Canadela 2008\n2.º lugar circuito La Pampilla 2016\n3.er lugar Ranking anual Adultos B Proam\n5.º lugar Ranking anual Máster Canadela 2024\n5.º lugar Ranking anual Máster Canadela 2026",
            foto: "assets/img/juanluis.png"
        },
        {
            id: "ruben-silva",
            nombre: "Rubén Silva",
            categoria: "Elite",
            especialidad: "Fuga",
            resumen: "Rodador combativo, cómodo en el llano y motivado por la fuga.",
            bio: "Ciclista de perfil rodador y espíritu combativo. Especialista en mantener ritmos altos y rodar rápido en terreno llano. Aunque las grandes cuestas no son su fuerte, sube a un ritmo sólido y constante. Su mayor motivación es la adrenalina de las fugas y desafiar al pelotón.",
            palmares: "",
            foto: "assets/img/ruben.jpg"
        },
        {
            id: "marcelo-antonio-vallejos-vergara",
            nombre: "Marcelo Vallejos",
            categoria: "Máster B",
            especialidad: "Fuga, escalada",
            resumen: "Corredor experimentado, perseverante y fuerte en resistencia.",
            bio: "Corredor con bastante experiencia en ciclismo de ruta, buena lectura de carrera y especial desempeño en carreras de resistencia. Descripción en una palabra: PERSEVERANCIA.",
            palmares: "",
            foto: "assets/img/marcelo.jpg"
        },
        {
            id: "matias-ignacio-toro-castillo",
            nombre: "Matías Toro",
            categoria: "Adulto A",
            especialidad: "Ruta",
            resumen: "Rodador constante con enfoque de apoyo al equipo.",
            bio: "Corredor constante con participación anual en el campeonato Canadela, rodador con enfoque de apoyo al equipo.",
            palmares: "",
            foto: "assets/img/matias.jpeg"
        },
        {
            id: "hans-arnoldo-ortega-alvarado",
            nombre: "Hans Ortega",
            categoria: "Elite",
            especialidad: "Sprint y fuga",
            resumen: "Sprint y fuga con recorrido competitivo desde 2014.",
            bio: "Comienzo de carrera ciclista en el año 2014. Aprendizaje en solitario después de un año. En 2015 se integró a un equipo amateur llamado Pawertap, compitiendo en ranking Canadela. En 2017 cambió a Team Central Bike hasta 2018. Luego pasó a categoría élite, con participaciones intermitentes en carreras amateur laborales de Canadela, siempre dentro de los primeros 15 corredores. En 2025 se incorporó al equipo Team Rocky.",
            palmares: "2016 debutante: 1.º en una de las 4 etapas fondo Noviciado Alto 3 días Vargas\n2016 debutante: 2.º etapa Haras de Pirque ranking\n2016 debutante: 2.º etapa Noviciado Alto ranking\n2025: 7.º etapa El Toyo ranking Canadela\n2025: 1.º meta volante etapa Lo Prado ranking Canadela\n2026: 3.er etapa Monumento Til Til",
            foto: "assets/img/hans.jpeg"
        },
        {
            id: "camilo-ernesto-reyes-jana",
            nombre: "Camilo Reyes",
            categoria: "Máster A",
            especialidad: "Plano",
            resumen: "Cortador de fugas.",
            bio: "Corredor de terreno plano, atento para cortar fugas.",
            palmares: "",
            foto: "assets/img/camilo.png"
        },
        {
            id: "theo-mora",
            nombre: "José Mora",
            categoria: "Máster",
            especialidad: "Polivalente",
            resumen: "Corredor experimentado y polivalente.",
            bio: "3 años contratado por compañía CTC profesional del 90 al 93, como gregario, junto con Marcelo Agüero, Carlos Neira, Dino Aquea, Víctor Garrido (líder), Fernando Vera, Pedro Verna, Omar Contreras (actual DT de la selección nacional argentina).",
            palmares: "Campeón nacional de pista en prueba Puntuación, categoría intermedia.\nCampeón metropolitano de Puntuación, en categoría intermedia.\nGanador Playa Ancha, Valparaíso en Junior.\nCampeón de Puntuación, Persecución Individual y Persecución por Equipos en categoría junior.\nCampeón Nacional de Ruta  en Chillán 4x70, con 18 años.\nCampeón Nacional de Pista en prueba de Puntuación y 2.º en prueba Australiana.",
            foto: "assets/img/TheoMora.jpeg"
        },
        {
            id: "sebastian-aguirre",
            nombre: "Sebastián Aguirre",
            categoria: "Elite",
            especialidad: "Escalador",
            resumen: "Corredor de escaladas y fugas",
            bio: "Perfil de escalada, trabajo en velódromo y apoyo táctico en tramos decisivos. Enfocado en la escalada, pero preparado para todo tipo de terreno, ",
            palmares: "1er lugar BCI Subaru Farellones 2024.\n 2.º lugar Campeonato Nacional 2024, prueba Persecución por Equipos.\n5.º lugar Ranking Anual Canadela 2025",
            foto: "assets/img/sebastian.jpeg"
        },
        {
            id: "rocky",
            nombre: "Rocky",
            categoria: "Máster",
            especialidad: "Líder",
            resumen: "Líder del equipo",
            bio: "Impulsor y líder de este proyecto",
            palmares: "2 veces Campeón Nacional Máster de Patín Carrera.\nCampeón por equipos en GF Valle del Elqui 2022, 2.º lugar Máster A y 3.º de la general.\n2.º lugar Clásica Andacollo 2025\nGanadores del Ranking Anual por Equipos Canadela 2024 y 2025, categoría Máster A.\n2.º en Vuelta Maule Centro 2024 y 3.º en 2025, en Clasificación por Equipos\nCampeones Ranking por Equipos Coltauco 2025.",
            foto: "assets/img/ruben.jpg"
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
        var texto = String(url || "");
        var match = texto.match(/[?&]id=([^&]+)/) || texto.match(/\/d\/([^/]+)/);
        return match ? match[1] : "";
    }

    function obtenerFoto(foto) {
        var ruta = String(foto || "").trim();

        if (!ruta) {
            return fallbackPhoto;
        }

        if (/drive\.google\.com|docs\.google\.com/.test(ruta)) {
            var driveId = obtenerDriveId(ruta);
            return driveId ? "https://drive.google.com/thumbnail?id=" + driveId + "&sz=w1000" : fallbackPhoto;
        }

        return ruta;
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

    function normalizarId(texto) {
        return String(texto || "").trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    }

    function obtenerCardsPorSlide() {
        if (window.matchMedia("(max-width: 575px)").matches) {
            return 1;
        }

        if (window.matchMedia("(max-width: 991px)").matches) {
            return 2;
        }

        return 4;
    }

    function crearFichaCorredor(corredor) {
        return '<div class="rider-carousel-card">' +
            '<article class="rider-card">' +
                '<img src="' + escapeHtml(obtenerFoto(corredor.foto)) + '" alt="' + escapeHtml(corredor.nombre) + '" onerror="this.onerror=null;this.src=\'' + fallbackPhoto + '\';">' +
                '<div class="rider-card-body">' +
                    '<span>' + escapeHtml(corredor.categoria) + ' / ' + escapeHtml(corredor.especialidad) + '</span>' +
                    '<h3>' + escapeHtml(corredor.nombre) + '</h3>' +
                    '<p>' + escapeHtml(corredor.resumen) + '</p>' +
                    '<button class="btn btn-rider-more" type="button" data-rider="' + escapeHtml(normalizarId(corredor.id)) + '">Leer más <i class="fa-solid fa-arrow-up-right-from-square ms-2"></i></button>' +
                '</div>' +
            '</article>' +
        '</div>';
    }

    function renderizarCorredores() {
        var cardsPorSlide = obtenerCardsPorSlide();
        var slides = [];

        for (var i = 0; i < corredores.length; i += cardsPorSlide) {
            slides.push(corredores.slice(i, i + cardsPorSlide));
        }

        var htmlSlides = slides.map(function (grupo, indice) {
            return '<div class="carousel-item' + (indice === 0 ? ' active' : '') + '">' +
                '<div class="rider-carousel-track">' +
                    grupo.map(crearFichaCorredor).join("") +
                '</div>' +
            '</div>';
        }).join("");

        var htmlIndicadores = slides.map(function (_, indice) {
            return '<button type="button" data-bs-target="#ridersCarousel" data-bs-slide-to="' + indice + '"' +
                (indice === 0 ? ' class="active" aria-current="true"' : '') +
                ' aria-label="Grupo de corredores ' + (indice + 1) + '"></button>';
        }).join("");

        var carousel = document.getElementById("ridersCarousel");
        var instancia = bootstrap.Carousel.getInstance(carousel);
        if (instancia) {
            instancia.dispose();
        }

        $("#ridersCarouselInner").html(htmlSlides);
        $("#ridersCarouselIndicators").html(htmlIndicadores);
        bootstrap.Carousel.getOrCreateInstance(carousel, { interval: false, touch: true, wrap: true });
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

    var resizeTimer;
    $(window).on("resize", function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(renderizarCorredores, 180);
    });

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
        var riderId = normalizarId($(this).data("rider"));
        var corredor = corredores.find(function (item) {
            return normalizarId(item.id) === riderId;
        });

        if (!corredor) {
            return;
        }

        actualizarCorredor(corredor);
        bootstrap.Modal.getOrCreateInstance(document.getElementById("riderModal")).show();
    });

    $("#formularioContacto").submit(async function (event) {
        event.preventDefault();

        var form = this;
        var $form = $(form);
        var $button = $form.find("button[type='submit']");
        var $status = $("#formStatus");
        var originalButtonHtml = $button.html();

        $button.prop("disabled", true).html('Enviando <i class="fa-solid fa-spinner fa-spin ms-2"></i>');
        $status.removeClass("is-success is-error").text("Enviando mensaje...");

        try {
            var response = await fetch(form.action, {
                method: form.method,
                body: new FormData(form)
            });
            var result = await response.json();

            if (result.success) {
                $status.addClass("is-success").text("Mensaje enviado correctamente. Te responderemos pronto.");
                form.reset();
            } else {
                throw new Error(result.message || "No se pudo enviar el mensaje.");
            }
        } catch (error) {
            $status.addClass("is-error").text("No se pudo enviar el mensaje. Intenta nuevamente o escríbenos por WhatsApp.");
        } finally {
            $button.prop("disabled", false).html(originalButtonHtml);
        }
    });
});

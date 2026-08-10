$(document).ready(function () {
    var fallbackPhoto = "assets/img/Imagen3.png";
  
    var resultados = [{
        position: "3° lugar", race: "Giro del Maipo", date: "9 de agosto de 2026",
        image: "assets/img/Podio_2026-08-09.jpg",
        description: "Joel Peña consiguió el 3° lugar en el Giro del Maipo, sumando un nuevo podio durante la temporada 2026.",
        externalUrl: ""
    }];

    var corredores = [
        {   id: "theo-mora",
            nombre: "José Mora",
            categoria: "Máster",
            especialidad: "Polivalente",
            resumen: "Corredor experimentado y polivalente.",
            bio: "3 años contratado por compañía CTC profesional del 90 al 93, como gregario, junto con Marcelo Agüero, Carlos Neira, Dino Aquea, Víctor Garrido (líder), Fernando Vera, Pedro Verna, Omar Contreras (actual DT de la selección nacional argentina).",
            palmares: "Campeón nacional de pista en prueba Puntuación, categoría intermedia.\nCampeón metropolitano de Puntuación, en categoría intermedia.\nGanador Playa Ancha, Valparaíso en Junior.\nCampeón de Puntuación, Persecución Individual y Persecución por Equipos en categoría junior.\nCampeón Nacional de Ruta  en Chillán 4x70, con 18 años.\nCampeón Nacional de Pista en prueba de Puntuación y 2º en prueba Australiana.",
            foto: "assets/img/TheoMora.jpeg"
        },
        {   id: "tony-linares",
            nombre: "Tony Linares",
            categoria: "Máster B",
            especialidad: "Escalada y vueltas por etapas",
            resumen: "Exseleccionado venezolano con una extensa trayectoria profesional y múltiples títulos nacionales.",
            bio: "Inició su carrera competitiva a los 13 años en Venezuela, desarrollando una destacada trayectoria como ciclista profesional. Representó a su país en competencias internacionales y, desde su llegada a Chile, ha continuado sumando triunfos en las principales competencias máster.\nParticipante en 9 Vueltas a Venezuela y en la Vuelta al Táchira\nCorredor profesional en España e Italia, incluyendo Giro del Veneto (2003)",
            palmares: "Campeón Nacional Élite de Venezuela (2003)\n3º lugar Juegos Centroamericanos (2001)\n3º lugar Campeonato Sudamericano (2002)\n3 veces Campeón Nacional Máster de Venezuela\n1º lugar Vuelta Élite Chillán Máster B (2021)\n2º lugar General Vuelta Máster Chillán (2021)\n1º lugar Clásica Andacollo (2022)\nCampeón Ranking Coltauco (2025)\nCampeón Ranking Canadela (2025)",
            foto: "assets/img/tony.jpeg"
        },
        {   id: "juan-jose",
            nombre: "Juan José Cuevas",
            categoria: "Elite",
            especialidad: "Fuga y escalada",
            resumen: "Corredor colombiano con experiencia en MTB y ruta, ganador de etapas y campeón en competencias nacionales.",
            bio: "Inició su carrera deportiva en 2013 en mountain bike. Tras destacar en categorías menores, continuó su desarrollo competitivo hasta debutar como corredor profesional, participando en las principales pruebas nacionales de Colombia tanto en MTB como en ruta.",
            palmares: "5º del ranking nacional categoría 11-12 años (2014)\n3º lugar Copa Carnavales (2014)\n2º lugar Copa de la Costa (2014)\n2º lugar Barrancabermeja (2014)\nGanador de etapa en el calendario nacional colombiano (2022)\n3º lugar Vuelta al Magdalena MTB (2022)\nCampeón Vuelta al Magdalena MTB (2023)\nGanador de la última etapa de la Vuelta al Magdalena Ruta (2024)",
            foto: "assets/img/juanjose.jpeg"
        },
        {   id: "sebastian-aguirre",
            nombre: "Sebastián Aguirre",
            categoria: "Elite",
            especialidad: "Escalador",
            resumen: "Corredor de escaladas y fugas",
            bio: "Perfil de escalada, trabajo en velódromo y apoyo táctico en tramos decisivos. Enfocado en la escalada, pero preparado para todo tipo de terreno, ",
            palmares: "1er lugar BCI Subaru Farellones 2024.\n 2.º lugar Campeonato Nacional 2024, prueba Persecución por Equipos.\n5.º lugar Ranking Anual Canadela 2025",
            foto: "assets/img/sebastian.jpeg"
        },
        {   id: "rocky",
            nombre: "Raúl \"Rocky\" Urbina",
            categoria: "Máster",
            especialidad: "Líder",
            resumen: "Líder del equipo",
            bio: "Impulsor y líder de este proyecto",
            palmares: "2 veces Campeón Nacional Máster de Patín Carrera.\nCampeón por equipos en GF Valle del Elqui 2022, 2º lugar Máster A y 3º de la general.\n2º lugar Clásica Andacollo 2025\nGanadores del Ranking Anual por Equipos Canadela 2024 y 2025, categoría Máster A.\n2º en Vuelta Maule Centro 2024 y 3º en 2025, en Clasificación por Equipos\nCampeones Ranking por Equipos Coltauco 2025.",
            foto: "assets/img/iniciativa.jpeg"
        },     
        {   id: "diego-andres-ramirez-paez",
            nombre: "Diego Ramírez",
            categoria: "Elite",
            especialidad: "Crono, fuga",
            resumen: "Rodador fuerte para sostener ritmo, crono y movimientos de fuga.",
            bio: "Fuerte en terreno llano y con posibilidades en la subida. Mantiene ritmos y ayuda en terrenos llanos.",
            palmares: "3º lugar crono laboral Canadela 2019 categoría TC\nGanador duplax mixtas 2026, 205 gran fondo Curacaví",
            foto: "assets/img/diego.jpeg"
        },
        {   id: "juan-luis-perez-farfan",
            nombre: "Juan Luis Pérez",
            categoria: "Máster",
            especialidad: "Fuga",
            resumen: "Lector de carrera y oportunista cuando aparece la fuga correcta.",
            bio: "Corredor director de la competencia, lector de rivales y oportunista en las fugas. \"Donde el aire no cabe en el pecho y las piernas no pueden más, las mías se activan para generar la diferencia.\"",
            palmares: "5º lugar Giro Laboral AMCLA 2000\n4º lugar 2º semestre Canadela 2008\n2º lugar circuito La Pampilla 2016\n3º lugar Ranking anual Adultos B Proam\n5º lugar Ranking anual Máster Canadela 2024\n5º lugar Ranking anual Máster Canadela 2026",
            foto: "assets/img/juanluis.png"
        },
        {   id: "joel",
            nombre: "Joel Peña",
            categoria: "Máster A",
            especialidad: "Ruta y crono",
            resumen: "Corredor competitivo con destacadas actuaciones en pruebas por etapas, contrarreloj y ranking anual.",
            bio: "Especialista en carreras de ruta y contrarreloj, con resultados destacados en competencias por etapas y una trayectoria constante entre los mejores corredores de la categoría Máster.",
            palmares: "Campeón del Ranking Canadela Máster A (2025)\nGanador de múltiples etapas del Ranking Canadela (2025)\nCampeón Nacional de Contrarreloj Canadela (2024)\n3º lugar Campeonato Nacional Máster Federado (2024)\n2º lugar General Vuelta Río Claro (2023)\n2º lugar etapa Vilches, Vuelta Maule Centro\n3º lugar General Vuelta Chillán",
            foto: "assets/img/joel.jpeg"
        },
        /*
        {   id: "ruben-silva",
            nombre: "Rubén Silva",
            categoria: "Elite",
            especialidad: "Fuga",
            resumen: "Rodador combativo, cómodo en el llano y motivado por la fuga.",
            bio: "Ciclista de perfil rodador y espíritu combativo. Especialista en mantener ritmos altos y rodar rápido en terreno llano. Aunque las grandes cuestas no son su fuerte, sube a un ritmo sólido y constante. Su mayor motivación es la adrenalina de las fugas y desafiar al pelotón.",
            palmares: "",
            foto: "assets/img/ruben.jpg"
        },
        */
        {   id: "marcelo-antonio-vallejos-vergara",
            nombre: "Marcelo Vallejos",
            categoria: "Máster B",
            especialidad: "Fuga, escalada",
            resumen: "Corredor experimentado, perseverante y fuerte en resistencia.",
            bio: "Corredor con bastante experiencia en ciclismo de ruta, buena lectura de carrera y especial desempeño en carreras de resistencia. Descripción en una palabra: PERSEVERANCIA.",
            palmares: "",
            foto: "assets/img/marcelo.jpg"
        },
        {   id: "matias-ignacio-toro-castillo",
            nombre: "Matías Toro",
            categoria: "Adulto A",
            especialidad: "Ruta",
            resumen: "Rodador constante con enfoque de apoyo al equipo.",
            bio: "Corredor constante con participación anual en el campeonato Canadela, rodador con enfoque de apoyo al equipo.",
            palmares: "",
            foto: "assets/img/matias.jpeg"
        },
        {   id: "hans-arnoldo-ortega-alvarado",
            nombre: "Hans Ortega",
            categoria: "Elite",
            especialidad: "Sprint y fuga",
            resumen: "Sprint y fuga con recorrido competitivo desde 2014.",
            bio: "Comienzo de carrera ciclista en el año 2014. Aprendizaje en solitario después de un año. En 2015 se integró a un equipo amateur llamado Pawertap, compitiendo en ranking Canadela. En 2017 cambió a Team Central Bike hasta 2018. Luego pasó a categoría élite, con participaciones intermitentes en carreras amateur laborales de Canadela, siempre dentro de los primeros 15 corredores. En 2025 se incorporó al equipo Team Rocky.",
            palmares: "2025: 1º en meta volante etapa Lo Prado ranking Canadela\n2026: 3º en etapa Monumento Til Til",
            foto: "assets/img/hans.jpeg"
        },
        {   id: "bastian-real",
            nombre: "Bastián Real",
            categoria: "Máster A",
            especialidad: "Todo terreno",
            resumen: "Ciclista constante, versátil y orientado a superar desafíos.",
            bio: "Ciclista entusiasta, constante y en búsqueda de desafíos que pongan a prueba sus condiciones físicas y mentales, llevándolo a superarse día a día.",
            palmares: "",
            foto: "assets/img/bastian.jpg"
        },
        {   id: "fernando-pautazzo",
            nombre: "Fernando Pautazzo",
            categoria: "Máster B",
            especialidad: "Sprint-gregario",
            resumen: "Sprinter y gregario enfocado en apoyar al líder del equipo.",
            bio: "Principal objetivo enfocado en ayudar al líder del equipo para poder llevarlo a lograr los objetivos establecidos.\nPerfil de sprinter, medio fondo y crono.\nBase de ciclismo infantil juvenil en Argentina, sólida base en pista y circuitos planos.",
            palmares: "En categoría infantil y juvenil, varios primeros puestos en carreras de pista y circuitos urbanos\n7º puesto en categoría Máster B2 en GF7Lagos 2023\n5º puesto campeonato 2018 Máster A en Proam\nPrimer lugar en carreras de 1 día organizadas por Proam, Canadela y Club de la Ligua",
            foto: "assets/img/fernando.jpeg"
        },   
        {   id: "deyvid-perafan-tabares",
            nombre: "Deyvid Perafán",
            categoria: "Máster A",
            especialidad: "Sprint",
            resumen: "Gregario de lectura rápida y potencia para definir al sprint.",
            bio: "Excelente gregario. \"Leo las carreras y utilizo la fuerza a mi favor.\"",
            palmares: "3º lugar departamentales de ciclismo Cali, Colombia.",
            foto: "assets/img/deyvid.jpg"
        },
        {   id: "camilo-ernesto-reyes-jana",
            nombre: "Camilo Reyes",
            categoria: "Máster A",
            especialidad: "Plano",
            resumen: "Cortador de fugas.",
            bio: "Corredor de terreno plano, atento para cortar fugas.",
            palmares: "",
            foto: "assets/img/camilo.png"
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

    var pressCarousel = document.getElementById("pressCarousel");
    var existingPressCarousel = bootstrap.Carousel.getInstance(pressCarousel);
    if (existingPressCarousel) {
        existingPressCarousel.dispose();
    }
    var pressCarouselInstance = new bootstrap.Carousel(pressCarousel, {
        interval: false,
        touch: false,
        wrap: true
    });
    var pressTouchStartX = 0;
    var pressTouchStartY = 0;

    pressCarousel.addEventListener("touchstart", function (event) {
        pressTouchStartX = event.touches[0].clientX;
        pressTouchStartY = event.touches[0].clientY;
    }, { passive: true });

    pressCarousel.addEventListener("touchend", function (event) {
        var deltaX = event.changedTouches[0].clientX - pressTouchStartX;
        var deltaY = event.changedTouches[0].clientY - pressTouchStartY;

        if (window.matchMedia("(max-width: 576px)").matches && Math.abs(deltaX) >= 20 && Math.abs(deltaX) > Math.abs(deltaY)) {
            deltaX > 0 ? pressCarouselInstance.prev() : pressCarouselInstance.next();
        }
    }, { passive: true });

    var participateGrid = document.querySelector(".participate-grid");
    var participateCards = participateGrid ? Array.from(participateGrid.querySelectorAll(".participate-card")) : [];
    var participateDots = Array.from(document.querySelectorAll("[data-participate-slide]"));
    var participateIndex = 0;
    function updateParticipateCarousel(index, shouldScroll) {
        if (!participateCards.length) return;
        participateIndex = Math.max(0, Math.min(index, participateCards.length - 1));
        participateDots.forEach(function (dot, i) { var active = i === participateIndex; dot.classList.toggle("active", active); dot.setAttribute("aria-selected", active ? "true" : "false"); });
        if (shouldScroll) participateCards[participateIndex].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
    $(".participate-prev").on("click", function () { updateParticipateCarousel(participateIndex - 1, true); });
    $(".participate-next").on("click", function () { updateParticipateCarousel(participateIndex + 1, true); });
    $("[data-participate-slide]").on("click", function () { updateParticipateCarousel(Number($(this).data("participate-slide")), true); });
    if (participateGrid && "IntersectionObserver" in window) {
        var participateObserver = new IntersectionObserver(function (entries) { entries.forEach(function (entry) { if (entry.isIntersecting && entry.intersectionRatio >= 0.65) updateParticipateCarousel(participateCards.indexOf(entry.target), false); }); }, { root: participateGrid, threshold: 0.65 });
        participateCards.forEach(function (card) { participateObserver.observe(card); });
    }
    var resizeTimer;
    $(window).on("resize", function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(renderizarCorredores, 180);
    });

    $(".navbar a[href^='#'], a.btn[href^='#']").click(function (event) {
        var destino = $(this).attr("href");
        if ($(destino).length) {
            event.preventDefault();
            var alturaNavbar = $("#navbar").outerHeight() || 72;
            var posicionDestino = Math.max(0, $(destino).offset().top - alturaNavbar);

            $("html, body").stop().animate({ scrollTop: posicionDestino }, 600);
            $(".navbar-collapse").collapse("hide");
        }
    });

    var $navLinks = $("#menuPrincipal .nav-link[href^='#']");
    var seccionesNavegables = $navLinks.map(function () {
        return document.querySelector(this.getAttribute("href"));
    }).get().filter(Boolean);

    function actualizarNavegacion() {
        var scrollTop = $(window).scrollTop();
        var alturaNavbar = $("#navbar").outerHeight() || 72;
        var puntoLectura = scrollTop + alturaNavbar + Math.min(160, window.innerHeight * 0.22);
        var idActivo = seccionesNavegables.length ? seccionesNavegables[0].id : "";
        var llegoAlFinal = window.innerHeight + scrollTop >= document.documentElement.scrollHeight - 4;

        if (llegoAlFinal && seccionesNavegables.length) {
            idActivo = seccionesNavegables[seccionesNavegables.length - 1].id;
        } else {
            seccionesNavegables.forEach(function (seccion) {
                if (seccion.offsetTop <= puntoLectura) {
                    idActivo = seccion.id;
                }
            });
        }

        $navLinks.each(function () {
            var estaActivo = this.getAttribute("href") === "#" + idActivo;
            $(this).toggleClass("active", estaActivo);

            if (estaActivo) {
                this.setAttribute("aria-current", "page");
            } else {
                this.removeAttribute("aria-current");
            }
        });

        if (scrollTop > 80) {
            $("#navbar").addClass("scrolled");
        } else {
            $("#navbar").removeClass("scrolled");
        }
    }

    function renderResultados() {
        var $track = $("#resultsTrack");
        resultados.forEach(function (resultado, index) {
            var $card = $("<article>", { class: "result-card" });
            $("<img>", { src: resultado.image, alt: "Podio de Team Rocky en " + resultado.race, loading: "lazy" }).appendTo($card);
            var $body = $("<div>", { class: "result-card-body" }).appendTo($card);
            $("<p>", { class: "result-position", text: resultado.position }).appendTo($body);
            $("<h4>", { text: resultado.race }).appendTo($body);
            $("<p>", { class: "result-date", text: resultado.date }).appendTo($body);
            $("<button>", { class: "btn btn-principal result-more", type: "button", text: "Leer más", "data-result-index": index, "aria-label": "Leer más sobre " + resultado.race }).appendTo($body);
            $track.append($card);
        });
        $("#resultsCarouselControls").prop("hidden", resultados.length <= 1);
    }
    renderResultados();
    $(document).on("click", ".result-more", function () {
        var resultado = resultados[Number($(this).data("result-index"))];
        if (!resultado) return;
        $("#resultModalTitle").text(resultado.race); $("#resultModalDate").text(resultado.date);
        $("#resultModalPosition").text(resultado.position); $("#resultModalDescription").text(resultado.description);
        $("#resultModalLink").toggle(Boolean(resultado.externalUrl)).attr("href", resultado.externalUrl || "#");
        bootstrap.Modal.getOrCreateInstance(document.getElementById("resultModal")).show();
    });
    $("#resultsPrev, #resultsNext").on("click", function () {
        var card = document.querySelector(".result-card");
        document.getElementById("resultsTrack").scrollBy({ left: (this.id === "resultsPrev" ? -1 : 1) * ((card ? card.offsetWidth : 280) + 20), behavior: "smooth" });
    });

    $(window).on("scroll resize", actualizarNavegacion);
    actualizarNavegacion();

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

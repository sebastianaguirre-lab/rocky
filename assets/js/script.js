$(document).ready(function () {
    var fallbackPhoto = "assets/img/Imagen3.png";
  
    var resultados = [{
        position: "3° lugar", race: "Giro del Maipo", date: "9 de agosto de 2026",
        image: "assets/img/Podio_2026-08-09.jpg",
        description: "Joel Peña consiguió el 3° lugar en el Giro del Maipo, sumando un nuevo podio durante la temporada 2026.",
        externalUrl: ""
    }];

    var corredores = [
        {
            id: "joaquin-rojas",
            nombre: "Joaquín Rojas",
            categoria: "Junior",
            especialidad: "Ruta",
            resumen: "Ciclista junior y representante de la nueva generación del Team Rocky.",
            bio: "Integrante del Team Rocky en categoría Junior, Joaquín representa al equipo en competencias de ciclismo de ruta, adquiriendo experiencia y fortaleciendo su desarrollo deportivo en una etapa clave de su formación.",
            palmares: "En desarrollo.",
            foto: "assets/img/joaquin.jpg"
        },
        {
            id: "paula-viertel",
            nombre: "Paula Viertel",
            categoria: "Máster",
            especialidad: "Ruta",
            resumen: "Ciclista máster del Team Rocky y campeona nacional en 2026.",
            bio: "Integrante del Team Rocky en categoría Máster, Paula compite en pruebas de ciclismo de ruta y representa los colores del equipo en el calendario nacional.",
            palmares: "Campeona nacional máster (2026).",
            foto: "assets/img/Paula.jpeg"
        },
        {
            id: "theo-mora",
            nombre: "José Mora",
            categoria: "Máster",
            especialidad: "Polivalente",
            resumen: "Corredor experimentado y polivalente, con trayectoria en el ciclismo profesional.",
            bio: "Entre 1990 y 1993 compitió profesionalmente para la compañía CTC, desempeñándose como gregario junto con Marcelo Agüero, Carlos Neira, Dino Aquea, Víctor Garrido, Fernando Vera, Pedro Verna y Omar Contreras, actual director técnico de la selección argentina.",
            palmares: "Campeón nacional de pista en la prueba de puntuación, categoría Intermedia.\nCampeón metropolitano de puntuación, categoría Intermedia.\nGanador en Playa Ancha, Valparaíso, categoría Junior.\nCampeón de puntuación, persecución individual y persecución por equipos, categoría Junior.\nCampeón nacional de ruta en Chillán 4x70, a los 18 años.\nCampeón nacional de pista en la prueba de puntuación y 2.º lugar en la prueba australiana.",
            foto: "assets/img/TheoMora.jpeg"
        },
        {
            id: "tony-linares",
            nombre: "Tony Linares",
            categoria: "Máster B",
            especialidad: "Escalada y pruebas por etapas",
            resumen: "Exseleccionado venezolano con una extensa trayectoria profesional y múltiples títulos nacionales.",
            bio: "Inició su carrera competitiva a los 13 años en Venezuela y desarrolló una destacada trayectoria como ciclista profesional. Representó a su país en competencias internacionales y, desde su llegada a Chile, ha continuado sumando triunfos en destacadas pruebas de categoría Máster. Participó en nueve ediciones de la Vuelta a Venezuela y en la Vuelta al Táchira, además de competir profesionalmente en España e Italia, incluyendo el Giro del Veneto de 2003.",
            palmares: "Campeón nacional élite de Venezuela (2003).\n3.er lugar en los Juegos Centroamericanos (2001).\n3.er lugar en el Campeonato Sudamericano (2002).\nTres veces campeón nacional máster de Venezuela.\n1.er lugar en la Vuelta Élite Chillán, categoría Máster B (2021).\n2.º lugar en la clasificación general de la Vuelta Máster Chillán (2021).\n1.er lugar en la Clásica Andacollo (2022).\nCampeón del Ranking Coltauco (2025).\nCampeón del Ranking Canadela (2025).",
            foto: "assets/img/tony.jpeg"
        },
        {
            id: "juan-jose",
            nombre: "Juan José Cuevas",
            categoria: "Élite",
            especialidad: "Fuga y escalada",
            resumen: "Corredor colombiano con experiencia en MTB y ruta, ganador de etapas y campeón en competencias nacionales.",
            bio: "Inició su carrera deportiva en 2013 en mountain bike. Tras destacar en categorías menores, continuó su desarrollo competitivo hasta debutar como corredor profesional y participar en las principales pruebas nacionales de Colombia, tanto en MTB como en ruta.",
            palmares: "5.º lugar del ranking nacional, categoría 11-12 años (2014).\n3.er lugar en la Copa Carnavales (2014).\n2.º lugar en la Copa de la Costa (2014).\n2.º lugar en Barrancabermeja (2014).\nGanador de etapa en el calendario nacional colombiano (2022).\n3.er lugar en la Vuelta al Magdalena MTB (2022).\nCampeón de la Vuelta al Magdalena MTB (2023).\nGanador de la última etapa de la Vuelta al Magdalena de Ruta (2024).",
            foto: "assets/img/juanjose.jpeg"
        },
        {
            id: "sebastian-aguirre",
            nombre: "Sebastián Aguirre",
            categoria: "Élite",
            especialidad: "Escalada y fuga",
            resumen: "Escalador con capacidad para participar en fugas y apoyar tácticamente al equipo.",
            bio: "Corredor de perfil escalador, con experiencia de trabajo en velódromo y capacidad para brindar apoyo táctico en los tramos decisivos. Aunque su principal fortaleza es la escalada, está preparado para competir en distintos tipos de terreno.",
            palmares: "1.er lugar en BCI Subaru Farellones (2024).\n2.º lugar en el Campeonato Nacional, prueba de persecución por equipos (2024).\n5.º lugar en el Ranking Anual Canadela (2025).",
            foto: "assets/img/sebastian.jpeg"
        },
        {
            id: "diego-andres-ramirez-paez",
            nombre: "Diego Ramírez",
            categoria: "Élite",
            especialidad: "Contrarreloj y fuga",
            resumen: "Rodador potente, capaz de sostener ritmos elevados y participar en movimientos de fuga.",
            bio: "Corredor fuerte en terreno llano, con capacidad para mantener ritmos elevados y aportar al equipo en pruebas contrarreloj. También cuenta con buenas condiciones para desenvolverse en ascensos.",
            palmares: "3.er lugar en la contrarreloj laboral Canadela, categoría TC (2019).\nGanador de duplas mixtas en el Gran Fondo Curacaví 205K (2026).",
            foto: "assets/img/diego.jpeg"
        },
        {
            id: "rocky",
            nombre: "Raúl \"Rocky\" Urbina",
            categoria: "Máster",
            especialidad: "Liderazgo",
            resumen: "Fundador y líder del Team Rocky, con una destacada trayectoria deportiva.",
            bio: "Impulsor y líder del Team Rocky, proyecto que promueve el rendimiento deportivo, el trabajo en equipo y la formación de una comunidad unida por el ciclismo.",
            palmares: "Dos veces campeón nacional máster de patín carrera.\nCampeón por equipos en el Gran Fondo Valle del Elqui (2022), con un 2.º lugar en Máster A y un 3.er lugar en la clasificación general.\n2.º lugar en la Clásica Andacollo (2025).\nCampeón del Ranking Anual por Equipos Canadela, categoría Máster A (2024 y 2025).\n2.º lugar por equipos en la Vuelta Maule Centro (2024) y 3.er lugar (2025).\nCampeón del Ranking por Equipos Coltauco (2025).",
            foto: "assets/img/rocky.jpeg"
        },
        {
            id: "juan-luis-perez-farfan",
            nombre: "Juan Luis Pérez",
            categoria: "Máster",
            especialidad: "Fuga",
            resumen: "Corredor con buena lectura de carrera y capacidad para aprovechar las fugas decisivas.",
            bio: "Corredor con capacidad para interpretar el desarrollo de la competencia, leer a sus rivales y aprovechar las oportunidades de fuga. Su filosofía es: \"Donde el aire no cabe en el pecho y las piernas no pueden más, las mías se activan para generar la diferencia\".",
            palmares: "5.º lugar en el Giro Laboral AMCLA (2000).\n4.º lugar en el segundo semestre Canadela (2008).\n2.º lugar en el Circuito La Pampilla (2016).\n3.er lugar en el Ranking Anual Adultos B Proam.\n5.º lugar en el Ranking Anual Máster Canadela (2024).\n5.º lugar en el Ranking Anual Máster Canadela (2026).",
            foto: "assets/img/juanluis.png"
        },
        {
            id: "joel",
            nombre: "Joel Peña",
            categoria: "Máster A",
            especialidad: "Ruta y contrarreloj",
            resumen: "Corredor competitivo con destacadas actuaciones en pruebas por etapas, contrarreloj y rankings anuales.",
            bio: "Especialista en pruebas de ruta y contrarreloj, con resultados destacados en competencias por etapas y una trayectoria constante entre los mejores corredores de la categoría Máster.",
            palmares: "Campeón del Ranking Canadela Máster A (2025).\nGanador de múltiples etapas del Ranking Canadela (2025).\nCampeón nacional de contrarreloj Canadela (2024).\n3.er lugar en el Campeonato Nacional Máster Federado (2024).\n2.º lugar en la clasificación general de la Vuelta Río Claro (2023).\n2.º lugar en la etapa de Vilches de la Vuelta Maule Centro.\n3.er lugar en la clasificación general de la Vuelta a Chillán.",
            foto: "assets/img/joel.jpeg"
        },
        {
            id: "marcelo-antonio-vallejos-vergara",
            nombre: "Marcelo Vallejos",
            categoria: "Máster B",
            especialidad: "Fuga y escalada",
            resumen: "Corredor experimentado, perseverante y con buen desempeño en pruebas de resistencia.",
            bio: "Corredor con amplia experiencia en ciclismo de ruta, buena lectura de carrera y un destacado desempeño en pruebas de resistencia. La perseverancia es el principio que mejor define su manera de competir.",
            palmares: "",
            foto: "assets/img/marcelo.jpg"
        },
        {
            id: "matias-ignacio-toro-castillo",
            nombre: "Matías Toro",
            categoria: "Adulto A",
            especialidad: "Ruta",
            resumen: "Rodador constante, orientado al trabajo colectivo y al apoyo del equipo.",
            bio: "Corredor constante, con participación anual en el campeonato Canadela. Su perfil de rodador y su disposición para el trabajo colectivo le permiten desempeñar un importante papel de apoyo dentro del equipo.",
            palmares: "",
            foto: "assets/img/matias.jpeg"
        },
        {
            id: "hans-arnoldo-ortega-alvarado",
            nombre: "Hans Ortega",
            categoria: "Élite",
            especialidad: "Sprint y fuga",
            resumen: "Corredor con experiencia competitiva, especializado en el sprint y las fugas.",
            bio: "Inició su trayectoria ciclista en 2014 y, tras un primer año de aprendizaje independiente, se incorporó en 2015 al equipo amateur Pawertap para competir en el Ranking Canadela. Entre 2017 y 2018 integró el Team Central Bike. Posteriormente ascendió a la categoría Élite y participó de forma intermitente en competencias amateur laborales de Canadela, manteniéndose habitualmente entre los primeros quince corredores. En 2025 se incorporó al Team Rocky.",
            palmares: "1.er lugar en la meta volante de la etapa Lo Prado del Ranking Canadela (2025).\n3.er lugar en la etapa Monumento Til Til (2026).",
            foto: "assets/img/hans.jpeg"
        },
        {
            id: "bastian-real",
            nombre: "Bastián Real",
            categoria: "Máster A",
            especialidad: "Todoterreno",
            resumen: "Ciclista constante y versátil, orientado a la superación de nuevos desafíos.",
            bio: "Ciclista entusiasta y constante, siempre en búsqueda de desafíos que pongan a prueba sus capacidades físicas y mentales y le permitan superarse día a día.",
            palmares: "",
            foto: "assets/img/bastian.jpg"
        },
        {
            id: "fernando-pautazzo",
            nombre: "Fernando Pautazzo",
            categoria: "Máster B",
            especialidad: "Sprint y trabajo de gregario",
            resumen: "Sprinter y gregario, especializado en apoyar al líder y contribuir a los objetivos del equipo.",
            bio: "Corredor orientado principalmente al trabajo de gregario y al apoyo del líder para alcanzar los objetivos del equipo. Cuenta con condiciones para el sprint, el medio fondo y la contrarreloj, además de una sólida formación en ciclismo infantil y juvenil, adquirida en pistas y circuitos planos de Argentina.",
            palmares: "Diversos primeros lugares en pruebas de pista y circuitos urbanos durante las categorías Infantil y Juvenil.\n7.º lugar en la categoría Máster B2 del Gran Fondo Siete Lagos (2023).\n5.º lugar en el campeonato Máster A Proam (2018).\nPrimeros lugares en pruebas de un día organizadas por Proam, Canadela y el Club de La Ligua.",
            foto: "assets/img/fernando.jpeg"
        },
        {
            id: "deyvid-perafan-tabares",
            nombre: "Deyvid Perafán",
            categoria: "Máster A",
            especialidad: "Sprint",
            resumen: "Gregario con buena lectura de carrera y potencia para definir al sprint.",
            bio: "Gregario con capacidad para interpretar rápidamente el desarrollo de la competencia y utilizar su potencia de manera estratégica. Su filosofía es: \"Leo las carreras y utilizo la fuerza a mi favor\".",
            palmares: "3.er lugar en los Departamentales de Ciclismo de Cali, Colombia.",
            foto: "assets/img/deyvid.jpg"
        },
        {
            id: "camilo-ernesto-reyes-jana",
            nombre: "Camilo Reyes",
            categoria: "Máster A",
            especialidad: "Terreno plano",
            resumen: "Rodador atento y especializado en neutralizar los intentos de fuga.",
            bio: "Corredor especializado en terreno plano, atento al desarrollo de la competencia y preparado para neutralizar los intentos de fuga.",
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

$("document").ready(inicio_home);

function inicio_home() {

    $("#form_login").on("submit", form_send);
    $("#form_register").on("submit", form_send);

    $("#form_register_cliente").on("submit", form_send);
    $("#form_register_tecnico").on("submit", form_send);

    $("#cerrar_sesion").on("click", cerrar_sesion);
    llenar_ul();

    elegir_tecnico()
}

function llenar_ul() {
    let data = [];
    data['electricistas'] = ["Toma sin energía", "Bajas en la luz", "Revisión corto", "Instalar lámpara de techo", "Revisión lámparas", "Cambio citofono", "otros"]
    data['plomeros'] = ["Eliminar olor a cañería", "Filtración", "Arreglo grifo cocina", "Revisión plomería general y humedad", "Instalación lavaplatos", "Motobomba", "otros"]
    data['electrodomesticos'] = ["Lavadora no centrifuga", "Nevera no enfria", "Cambio perillas estufa", "Nevera hace ruido", "Lavadora no llena agua", "Instalacion punto de gas", "otros"]


    $.each(data['electricistas'], (i, o) => {
        $(".cards_electricista").append("<div class='col-lg-6'> <div class='tab-content form-group' style='margin-top: 20px'>"
            + "<div class='tab-pane container active' id='home'>"
            + "<div class='card'> <div class='card-body'>"
            + "<h4 class='card-title'>" + o + "</h4>"
            + "<a href='select_tecnico.html' class='card-link'>Ver tecnico <i class='fa fa-arrow-right'></i> </a>"
            + "</div> </div> </div>"
        );
    });

    $.each(data['plomeros'], (i, o) => {
        $(".cards_fontanero").append("<div class='tab-content form-group col-md-6' style='margin-top: 20px'>"
            + "<div class='tab-pane container active' id='home'>"
            + "<div class='card'> <div class='card-body'>"
            + "<h4 class='card-title'>" + o + "</h4>"
            + "<a href='select_tecnico.html' class='card-link'>Ver tecnico <i class='fa fa-arrow-right'></i> </a>"
            + "</div> </div>"
        );
    });

    $.each(data['electrodomesticos'], (i, o) => {
        $(".cards_electrodomesticos").append("<div class='tab-content form-group col-md-6' style='margin-top: 20px'>"
            + "<div class='tab-pane container active' id='home'>"
            + "<div class='card'> <div class='card-body'>"
            + "<h4 class='card-title'>" + o + "</h4>"
            + "<a href='select_tecnico.html' class='card-link'>Ver tecnico <i class='fa fa-arrow-right'></i> </a>"
            + "</div> </div>"
        );
    });
}

function form_send(e) {
    e.preventDefault();
    //localStorage.setItem('acceso', "accesos");
    location.href = "home/index.html";
}

function cerrar_sesion() {
    //localStorage.clear();
    setTimeout(function () {
        location.href = "../index.html";
    }, 1000);
}

function elegir_tecnico(){
    let data = [
        {"nombre": "Andres Lopez", "especialidad": "", "direccion": "bogota", "imagen": "../img/avatar/avataaars.svg"},
        {"nombre": "Jhonatan Becerra", "especialidad": "", "direccion": "bogota", "imagen": "../img/avatar/avataaars.svg"},
        {"nombre": "Daniel Madrid", "especialidad": "", "direccion": "bogota", "imagen": "../img/avatar/avataaars.svg"}
    ]

    $.each(data, (i, o) => {

        $(".cards_tecnicos").append("<div class='col-lg-12'> <div class='tab-content form-group' style='margin-top: 20px'>"
            + "<div class='tab-pane container active' id='home'> <a href='enviar_solicitud.html' class='nav-link'>"
            + "<h5>Tecnico <i class='fa fa-hand-o-down'></i></h5> <div class='card'>  <img class='card-img-top' src='"+data[i].imagen+"' alt='Card image' style='width: 200px; margin: auto;'> <div class='card-body'>"
            + "<h3 class='card-title'> Nombre: " + data[i].nombre + "</h3>"
            + "<h4 class='card-title'> Especialidad: " + data[i].especialidad + "</h4>"
            + "<h4 class='card-title'> Direccion: " + data[i].direccion + "</h4>"
            + "</div> </div> </a> </div>"
        );
    });
}

function iniciarMap() {
    let coordenadas = {lat:-34.686408, lng:-58.6561523};
    let map = new google.maps.Map(document.getElementById("map"), {
        zoom: 100,
        center: coordenadas
    });
}
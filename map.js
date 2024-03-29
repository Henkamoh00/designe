// انشاء كائن الخريطة
var map = L.map('map').setView([33.371025, 6.852256], 15);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: ''
}).addTo(map);

// انشاء كائن العلامة لتحديد حضيرة البلدية
var park = L.marker([33.358905313975995, 6.838954175207063]).addTo(map);
park.bindPopup('حضيرة البلدية.');
park.openPopup();

// جلب كائن جايسون يحمل معلومات الاحداثيات من ملف
fetch('markers.json')
    .then(response => response.json())
    .then(data => {

        var marker1 = L.marker([data[0].lat, data[0].lng]).addTo(map);
        var marker2 = L.marker([data[1].lat, data[1].lng]).addTo(map);
        var marker3 = L.marker([data[2].lat, data[2].lng]).addTo(map);
        var marker4 = L.marker([data[3].lat, data[3].lng]).addTo(map);
        var marker5 = L.marker([data[4].lat, data[4].lng]).addTo(map);
        var marker6 = L.marker([data[5].lat, data[5].lng]).addTo(map);
        var marker7 = L.marker([data[6].lat, data[6].lng]).addTo(map);
        var marker8 = L.marker([data[7].lat, data[7].lng]).addTo(map);
        var marker9 = L.marker([data[8].lat, data[8].lng]).addTo(map);
        var marker10 = L.marker([data[9].lat, data[9].lng]).addTo(map);
        var marker11 = L.marker([data[10].lat, data[10].lng]).addTo(map);
        var marker12 = L.marker([data[11].lat, data[11].lng]).addTo(map);
        var marker13 = L.marker([data[12].lat, data[12].lng]).addTo(map);
        var marker14 = L.marker([data[13].lat, data[13].lng]).addTo(map);
        var marker15 = L.marker([data[14].lat, data[14].lng]).addTo(map);
        var marker16 = L.marker([data[15].lat, data[15].lng]).addTo(map);
        var marker17 = L.marker([data[16].lat, data[16].lng]).addTo(map);
        var marker18 = L.marker([data[17].lat, data[17].lng]).addTo(map);
        var marker19 = L.marker([data[18].lat, data[18].lng]).addTo(map);
        var marker20 = L.marker([data[19].lat, data[19].lng]).addTo(map);
    })
    .catch(error => {
        console.error('حدث خطأ أثناء جلب البيانات:', error);
    });


var point = 0;
var line =
    [
        [33.358215, 6.839202],
        [33.358252, 6.839243],
        [33.358318, 6.839319],
        [33.358402, 6.839425],
        [33.358545, 6.839584],
        [33.358702, 6.839805],
        [33.359006, 6.840213],
        [33.359193, 6.840497],
        [33.359505, 6.840840],
        [33.359730, 6.841124],
        [33.359942, 6.841453],
        [33.360166, 6.841692],
        [33.360378, 6.841961],
        [33.360566, 6.842215],
        [33.360952, 6.842708],
        [33.361327, 6.843216],
        [33.361639, 6.843559],
        [33.361926, 6.843933],
        [33.362275, 6.844336],
        [33.362500, 6.844635],
        [33.362749, 6.844964],
        [33.363148, 6.845442],
        [33.363473, 6.845875],
        [33.363722, 6.846203],
        [33.363972, 6.846562],
        [33.364346, 6.847025],
        [33.364621, 6.847428],
        [33.364920, 6.847802],
        [33.365157, 6.848205],
        [33.365382, 6.848474],
        [33.365719, 6.848982],
        [33.365993, 6.849371],
        [33.366193, 6.849625],
        [33.366580, 6.850237],
        [33.366817, 6.850625],
        [33.367054, 6.850954],
        [33.367303, 6.851357],
        [33.367278, 6.852060],
        [33.367066, 6.852553],
        [33.366804, 6.853031],
        [33.366442, 6.853673],
        [33.365946, 6.854644],
        [33.365628, 6.855168]
    ];


// ايقونة الشاحنة
var iconVar = L.icon({
    iconUrl: "Untitled1.png",
    iconSize: [35, 25]
})
var truck = L.marker([33.358905313975995, 6.838954175207063], { icon: iconVar }).addTo(map);

setInterval(function () {
    if (point < line.length - 1) {
        // var lat = marker.getLatLng().lat + 0.00009;
        // var lng = marker.getLatLng().lng + 0.00009;
        point++;
        var lat = line[point][0]
        var lng = line[point][1]
        truck.setLatLng([lat, lng]).update();
    }
    else {
        point = 0;
    }
}, 1000);

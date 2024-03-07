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



var iconVar = L.icon({
    iconUrl: "data:image/jpeg;base64,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",
    iconSize: [35, 25]
})
var truck = L.marker([33.358905313975995, 6.838954175207063], {icon:iconVar}).addTo(map);

setInterval(function () {
        if (point < line.length - 1) {
        // var lat = marker.getLatLng().lat + 0.00009;
        // var lng = marker.getLatLng().lng + 0.00009;
        point++;
        var lat = line[point][0]
        var lng = line[point][1]
        truck.setLatLng([lat, lng]).update();
    }
    else{
        point = 0;
    }
    }, 1000);

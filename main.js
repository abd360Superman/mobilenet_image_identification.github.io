Webcam.set({
    width: 310,
    height: 300,
    image_format: 'png',
    png_quality: 90,

    constraints: {
        facingMode: 'environment'
    }
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function snapshot_le() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version: ', ml5.version);

classifier = ml5.imageClassifier('MobileNet', model_load_hogaya);

function model_load_hogaya() {
    console.log('Model Loaded!');
}

function identify_maar() {
    img = document.getElementById("captured_image");
    classifier.classify(img, results_milgaya);
}

function results_milgaya(error, results) {
    if(error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById('object_name').innerHTML = results[0].label;
    }
}
function setup(){
    canvas=createCanvas(350,350);
    canvas.center();
    canvas.position(300,200);
    video=createCapture(VIDEO);
    video.hide();
    classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/79zRzqPU5/model.json',modelloaded)
}
function modelloaded(){
    console.log('modelloaded')
}
function draw(){
image(video,0,0,300,300)
classifier.classify(video,gotresult)
}
function gotresult(error,results){
if(error){
    console.error(error)
}else{
    console.log(results)
    document.getElementById("result_object_name").innerHTML=results[0].label
    document.getElementById("result_object_accuracy").innerHTML=results[0].confidence.toFixed(2)

}
}
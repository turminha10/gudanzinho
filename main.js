var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 


camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});



function speak(){

    
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speak_data = "Tirando sua selfie nos próximos 5 segundos";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);


}


setTimeout(function()
{
    img_id = "selfie 1";
    take_snapshot();
    speak_data = "tirando sua selfie em 5 segundos";
     var utterThis = SpeechSynthesisUtterance(speak_data);
     synth.speak(utterThis);
}, 5000 );


function take_snapshot ()
{
    console.log(img_id)

    Webcam.snap(function(data_uri)  {
        
        if(img_id=="selfie 1"){
            document.getElementById("result1").innerHTML = '<img id="selfie 1  src="'+data_uri+'"/>';
        }
        if(img_id=="selfie 2"){
            document.getElementById("result2").innerHTML = '<img id="selfie 2  src="'+data_uri+'"/>';
        }
        if(img_id=="selfie 3"){
            document.getElementById("result3").innerHTML = '<img id="selfie 3  src="'+data_uri+'"/>';
        }
    });
}
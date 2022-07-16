var speechRecognition = window.webitSpeechRecognition

var recognition = new speechRecognition()

var textbox = $("#textbox")

var instruction = $("#instruction")

var content = ''

recognition.continuous = true

// recognittion i9s started

recognition.onstart = function (){
    instruction.text("voice Recognition is on")
}

recognition.onspeechend = function () {
    instruction.text("No Activity")
}

recognition.onerror = function (){
    instruction.text("try again")
}

recognition.onresult = function (event) {
     var current = event.resultIndex;

     var transcript = event.results[current][0].transcript
   
     content += transcript

     textbox.val(content)
}

$(#start-btn).click(function(event) {
       if(content.length){
         content += ''
     }
     
     recognition.start()
})
   

textbox.on('input', function() {
    content = $(this).val()

})

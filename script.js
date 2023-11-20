

function Trans(){
        // alert("called")
        var sourceText = document.getElementById("sourceText").value
        var sourceLang = 'en';
        var targetLang = 'hi';
        console.log(sourceText);
        
        var url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl="+ sourceLang + "&tl=" + targetLang + "&dt=t&q=" + encodeURI(sourceText);
        //console.log(url);
        
        $.getJSON(url, function(data) {
           document.getElementById("resultText").value = data[0][0][0]
            
          });
      
      
}
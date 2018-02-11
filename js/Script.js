var imagenes = [1,2,3,4,5];
    $("#botonderecha").click(function(){
      for (var i = 0; i < imagenes.length; i++) {
        if(imagenes[i]==15){
          imagenes[i]=1;
        }else{
          imagenes[i]++;
        }
      }
      $("#imagen1").html("<img src="+"./src/back"+imagenes[0]+".jpg"+" alt="+"Prueba"+">");
      $("#imagen2").html("<img src="+"./src/back"+imagenes[1]+".jpg"+" alt="+"Prueba"+">");
      $("#imagen3").html("<img src="+"./src/back"+imagenes[2]+".jpg"+" alt="+"Prueba"+">");
      $("#imagen4").html("<img src="+"./src/back"+imagenes[3]+".jpg"+" alt="+"Prueba"+">");
      $("#imagen5").html("<img src="+"./src/back"+imagenes[4]+".jpg"+" alt="+"Prueba"+">");
      $("#parteinferior").html("<img src="+"./src/back"+imagenes[2]+".jpg"+" alt="+"Prueba"+">");
    });

    $("#botonizquierda").click(function(){
        for (var i = 0; i < imagenes.length; i++) {
          if(imagenes[i]==1){
            imagenes[i]=15;
          }else{
            imagenes[i]--;
          }
        }
      $("#imagen1").html("<img src="+"./src/back"+imagenes[0]+".jpg"+" alt="+"Prueba"+">");
      $("#imagen2").html("<img src="+"./src/back"+imagenes[1]+".jpg"+" alt="+"Prueba"+">");
      $("#imagen3").html("<img src="+"./src/back"+imagenes[2]+".jpg"+" alt="+"Prueba"+">");
      $("#imagen4").html("<img src="+"./src/back"+imagenes[3]+".jpg"+" alt="+"Prueba"+">");
      $("#imagen5").html("<img src="+"./src/back"+imagenes[4]+".jpg"+" alt="+"Prueba"+">");
      $("#parteinferior").html("<img src="+"./src/back"+imagenes[2]+".jpg"+" alt="+"Prueba"+">");
    });

    $("#imagen5").click(function(){
        var j = 0;
        while (j<2) {
          for (var i = 0; i < imagenes.length; i++) {
            if(imagenes[i]==15){
              imagenes[i]=1;
            }else{
              imagenes[i]++;
            }
          }
          j++;
        }
      $("#imagen1").html("<img src="+"./src/back"+imagenes[0]+".jpg"+" alt="+"Prueba"+">");
      $("#imagen2").html("<img src="+"./src/back"+imagenes[1]+".jpg"+" alt="+"Prueba"+">");
      $("#imagen3").html("<img src="+"./src/back"+imagenes[2]+".jpg"+" alt="+"Prueba"+">");
      $("#imagen4").html("<img src="+"./src/back"+imagenes[3]+".jpg"+" alt="+"Prueba"+">");
      $("#imagen5").html("<img src="+"./src/back"+imagenes[4]+".jpg"+" alt="+"Prueba"+">");
      $("#parteinferior").html("<img src="+"./src/back"+imagenes[2]+".jpg"+" alt="+"Prueba"+">");
    });
    $("#imagen4").click(function(){
          for (var i = 0; i < imagenes.length; i++) {
            if(imagenes[i]==15){
              imagenes[i]=1;
            }else{
              imagenes[i]++;
            }
          }
      $("#imagen1").html("<img src="+"./src/back"+imagenes[0]+".jpg"+" alt="+"Prueba"+">");
      $("#imagen2").html("<img src="+"./src/back"+imagenes[1]+".jpg"+" alt="+"Prueba"+">");
      $("#imagen3").html("<img src="+"./src/back"+imagenes[2]+".jpg"+" alt="+"Prueba"+">");
      $("#imagen4").html("<img src="+"./src/back"+imagenes[3]+".jpg"+" alt="+"Prueba"+">");
      $("#imagen5").html("<img src="+"./src/back"+imagenes[4]+".jpg"+" alt="+"Prueba"+">");
      $("#parteinferior").html("<img src="+"./src/back"+imagenes[2]+".jpg"+" alt="+"Prueba"+">");
    });
    $("#imagen1").click(function(){
        var j = 0;
        while (j<2) {
          for (var i = 0; i < imagenes.length; i++) {
            if(imagenes[i]==1){
              imagenes[i]=15;
            }else{
              imagenes[i]--;
            }
          }
          j++;
        }
      $("#imagen1").html("<img src="+"./src/back"+imagenes[0]+".jpg"+" alt="+"Prueba"+">");
      $("#imagen2").html("<img src="+"./src/back"+imagenes[1]+".jpg"+" alt="+"Prueba"+">");
      $("#imagen3").html("<img src="+"./src/back"+imagenes[2]+".jpg"+" alt="+"Prueba"+">");
      $("#imagen4").html("<img src="+"./src/back"+imagenes[3]+".jpg"+" alt="+"Prueba"+">");
      $("#imagen5").html("<img src="+"./src/back"+imagenes[4]+".jpg"+" alt="+"Prueba"+">");
      $("#parteinferior").html("<img src="+"./src/back"+imagenes[2]+".jpg"+" alt="+"Prueba"+">");
    });
    $("#imagen2").click(function(){
      for (var i = 0; i < imagenes.length; i++) {
        if(imagenes[i]==1){
          imagenes[i]=15;
        }else{
          imagenes[i]--;
        }
      }
      $("#imagen1").html("<img src="+"./src/back"+imagenes[0]+".jpg"+" alt="+"Prueba"+">");
      $("#imagen2").html("<img src="+"./src/back"+imagenes[1]+".jpg"+" alt="+"Prueba"+">");
      $("#imagen3").html("<img src="+"./src/back"+imagenes[2]+".jpg"+" alt="+"Prueba"+">");
      $("#imagen4").html("<img src="+"./src/back"+imagenes[3]+".jpg"+" alt="+"Prueba"+">");
      $("#imagen5").html("<img src="+"./src/back"+imagenes[4]+".jpg"+" alt="+"Prueba"+">");
      $("#parteinferior").html("<img src="+"./src/back"+imagenes[2]+".jpg"+" alt="+"Prueba"+">");
    });

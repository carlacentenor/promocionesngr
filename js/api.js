function aceptar(){
    if ($('#flexCheckDefault').prop('checked')) {
      document.getElementById("envioData").disabled = false;
    }else{
      document.getElementById("envioData").disabled = true;
    }
  }
  
  function validateRequired(camp){
    if(camp === ""){    
      return true;
    }
    return false;
  }
  
  function validateNumber(camp){
    if(isNaN(camp)){    
      return true;
    }
    return false;
  }
  
  function validateName(camp){
    if(validateRequired(camp)){
        $('#msgName').html('Dato obligatorio');
        return false;
    }
    $('#msgName').html('');
    return true;  
  }
  
  function validateEmail(camp){
    if(validateRequired(camp)){
        $('#msgEmail').html('Dato obligatorio');
        return false;
    }
  
    let expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!expr.test(camp)){      
         $('#msgEmail').html('El email ingresado no es válido');
        return false;
    }
    $('#msgEmail').html('');
    return true;
  }
  
  function validatePhone(camp){
    if(validateRequired(camp)){
      $('#msgPhone').html('Dato obligatorio');
      return false;
    }
  
    if(validateNumber(camp)){
      $('#msgPhone').html('Dato no numérico');
      return false;
    }
  
    if(camp.length < 9){
      $('#msgPhone').html('Formato de telefono erroneo');
      return false;
    }
  
    $('#msgPhone').html('');
    return true;
  
  }
  
  function validateDni(camp){
    if(validateRequired(camp)){
      $('#msgDni').html('Dato obligatorio');
      return false;
    }
  
    if(validateNumber(camp)){
      $('#msgDni').html('Dato no numérico');
      return false;
    }
  
    if(camp.length != 8){
      $('#msgDni').html('Formato de dni erroneo');
      return false;
    }
  
    $('#msgDni').html('');
    return true;
  
  }
  
  function sendData(){
  
  var body={
      'name': $('#name').val() ,
      'email': $('#email').val(),
      'phone': $('#phone').val(),
      'dni': $('#dni').val()
  };
  
  if(validateName(body.name) && validateEmail(body.email) && validatePhone(body.phone) && validateDni(body.dni)){
  //console.log(body);
  $.ajax({
    url: "https://pw66s5uvcg.execute-api.us-east-1.amazonaws.com/test/ngrclient",
    //jsonp: "callback",
    type: "POST",
    data: JSON.stringify(body),
    async: false,
    contentType: "application/json",
    dataType: 'json',
    /*beforeSend: function(request) {
      request.setRequestHeader("Access-Control-Allow-Origin", '*');
    },*/
    success: function (data) {

        $("#confirmation").modal()
        //callback(data);
        console.log(JSON.stringify(data));
        //console.log(data);
    }
    });
  }
  }
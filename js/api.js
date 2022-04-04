function cerrar(){
  //console.log("Llegas")
  limpiar();
  $('#confirmation').modal('hide');
  $('#error').modal('hide');
}


function limpiar(){
  $('#name').val('');
  $('#email').val('');
  $('#phone').val('');
  $('#dni').val('');

  document.getElementById("envioData").disabled = true;
  $( "#flexCheckDefault" ).prop( "checked", false );
}

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
    }else{
        $('#msgName').html('');
        return true; 
    }
     
  }
  
  function validateEmail(camp){
    if(validateRequired(camp)){
        $('#msgEmail').html('Dato obligatorio');
        return false;
    }else{
        let expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!expr.test(camp)){      
            $('#msgEmail').html('El email ingresado no es válido');
            return false;
        }else{
          $('#msgEmail').html('');
          return true;
        }
    }
  
   
    
  }
  
  function validatePhone(camp){
    if(validateRequired(camp)){
      $('#msgPhone').html('Dato obligatorio');
      return false;
    }else{
        if(validateNumber(camp)){
          $('#msgPhone').html('El celular solo puede contener números');
          return false;
        }
      
        if(camp.length < 9){
          $('#msgPhone').html('Revisa el número, faltan algunos digitos');
          return false;
        }
      
        $('#msgPhone').html('');
        return true;
    }
  
    
  
  }
  
  function validateDni(camp){
    if(validateRequired(camp)){
      $('#msgDni').html('Dato obligatorio');
      return false;
    }else{
          if(validateNumber(camp)){
            $('#msgDni').html('El DNI solo puede contener números');
            return false;
          }
        
          if(camp.length != 8){
            $('#msgDni').html('Revisa el número, faltan algunos digitos');
            return false;
          }
        
          $('#msgDni').html('');
          return true;

    }
  
  
  
  }
  
  function sendData(){   
  
    document.getElementById("envioData").disabled = true;
  
  var body={
      'name': $('#name').val() ,
      'email': $('#email').val(),
      'phone': $('#phone').val(),
      'dni': $('#dni').val()
  };

  validateName(body.name);
  validateEmail(body.email);
  validatePhone(body.phone);
  validateDni(body.dni);
  
  if(validateName(body.name) && validateEmail(body.email) && validatePhone(body.phone) && validateDni(body.dni)){
    $('#loading').modal('show');
    try {
      //$('#error').modal('show');
      setTimeout(function(){ 
      
        $.ajax({
          url: "https://pw66s5uvcg.execute-api.us-east-1.amazonaws.com/test/ngrclientssss",
          //jsonp: "callback",
          type: "POST",
          data: JSON.stringify(body),
          async: false,
          contentType: "application/json",
          dataType: 'json',
          beforeSend: function() {
            // setting a timeout
            /*$(placeholder).addClass('loading');
            i++;*/
            //document.getElementById("envioData").disabled = false;
            //$("#product_id").html('<option> Loading ...</option>');
            //$('#loading').modal('show');
            $('#loading').modal('hide');
            $("#envioData").prop('disabled', true); // disable button
      
            
          },  
          success: function (data) {
              
              $('#confirmation').modal('show');
              //callback(data);
              console.log(JSON.stringify(data));
              //console.log(data);
          },
          error: function(data) { // if error occured
            //$('#loading').modal('hide');
            $('#error').modal('show');
            document.getElementById("envioData").disabled = false;
            return false;
          }
          });
      
      }, 1000);
      
    } catch (error) {
      //$('#error').modal('show');
      $('#error').modal('show');
      document.getElementById("envioData").disabled = false;
      return false;
      
    }
  
  
  }else{
    $('#loading').modal('hide');
    document.getElementById("envioData").disabled = false;
    return false;
  }
  }
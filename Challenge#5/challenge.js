function fnGenerator ( ) {
  for(i=0; i<500; i++) {
    var number = Math.round((((Math.pow((1+Math.sqrt(5)),i))-(Math.pow((1-Math.sqrt(5)),i)))/(Math.pow(2,i)*Math.sqrt(5))))
    if (number<=500 && number>0) {
    console.log(number);
    }
  }
}

fnGenerator();
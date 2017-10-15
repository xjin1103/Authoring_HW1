//This os new and improved way
(function(){
  var theImages = document.queryselectorAll('.image-holder'),
      theHeading = document.queryselector('.heading'),
      theSubhead = document.queryselector('.main-copy h2'),
      theSeasonText = document.queryselector('.main-copy p'),
      appliedClass;

      function changeElements(){
        //make sure event handling is working
        debugger;
      }

      theImages.forEach(function(element, index){
        //loop through the images and add event handling ti each one
        element.addEventListener('click', changeElements, false)
      });
})();

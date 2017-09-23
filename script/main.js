
//This os new and improved way
(function(){
  var theImages = document.querySelectorAll('.image-holder'),
      theHeading = document.querySelector('.heading'),
      theSubhead = document.querySelector('.main-copy h2'),
      theSeasonText = document.querySelector('.main-copy p'),
      appliedClass;

      function changeElements(){
        //make sure event handling is working
        let objectIndex = dynamicContent[this.id];
        let subImages = document.querySelector('.subImagesContainer');

        //remove old subImages
        while(subImages.firstChild){
          subImages.removeChild(subImages.firstChild);
        }

        //add some images at the bottom of the page
        objectIndex.images.forEach(function(image, index){
          //creat a new image element
          let newSubImg = document.createElement('img');
          newSubImg.classList.add('thumb');
          newSubImg.src = "images/" + objectIndex.images[index];

          subImages.appendChild(newSubImg);
        });

        //remove the lastcss class applied
        theSubhead.classList.remove(appliedClass);
        theHeading.classList.remove(appliedClass);

        //change the colour of the text element
        theSubhead.classList.add(this.id);
        theHeading.classList.add(this.id);

        //change the content of the page
        //firstChild.nodeValue is the same as innerHTML (kind of)
        theSubhead.firstChild.nodeValue = objectIndex.headline;
        theSeasonText.firstChild.nodeValue = objectIndex.text;

        appliedClass = this.id;

      }

      theImages.forEach(function(element, index){
        //loop through the images and add event handling ti each one
        element.addEventListener('click', changeElements, false)
      });

      theSubhead.firstChild.nodeValue = dynamicContent['spring'].headline;
      theSeasonText.firstChild.nodeValue = dynamicContent['spring'].text;
      theHeading.classlist.add('spring');

})();

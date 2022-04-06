//GLOBAL VARIABLES
var maximages = 5;




function showbig(pic) {
    //Write to image with "bigpic" the src of the clicked pic
    document.getElementById("bigpic").src = pic;
}


function calcslide(x) {

    var currentimage = document.getElementById('bigpic').src;
    var extension = '.png';

    var z = '0' + x; 
    
    
    var dotat = currentimage.indexOf(extension); //index of extension to cut string

    var imagespath = currentimage.substr(0, dotat-2) + z + '.png';

    

    var stringnumber = currentimage.substr(dotat - 2, 2);
    console.log(imagespath);
   // var picindex =picsrc.indexOf(".png");

   //console.log("this is the number of the current image" + stringnumber);
    var nextpic = parseInt(stringnumber) + x;

    
    
    if (nextpic < 1 ) {

        nextpic = maximages;
    }

    if (nextpic > maximages)
    {
        nextpic = 1;
    }

    

    var twodigitnum = '0' + nextpic;

    //console.log(twodigitnum);
    //console.log(twodigitnum); //remove 2 position from the end of the string
    //Create new file name from two-digit number string.
    var showimg = imagespath.substr(0, dotat -2) + twodigitnum + extension;
    
    showbig(showimg);

}


// var Qus1,Qus2,Qus3;
// var count=0;
// var answer = prompt("are you ready to test who mauch you know about barcelona ? \n please enter yes or no !");

// if (answer === 'yes')
// {
//   Qus1=prompt("Q1) Who is the holder of the number 10 in the Barcelona team?");

//   Qus2=prompt('What colors are the main Barcelona shirt?');
  
//   Qus3=prompt('What is the stadium of the Barcelona team?');

// }
// else if (answer ==='no')
// {
//   document.write('<h2>'+'LOOOOOOSSSEEEEERRRR'+'</h2>');
// }
// else
// {
//   alert('you dont enter a valid value')
// }
<<<<<<< HEAD


// if (Qus1==='messi')
// {
//   count=1;
// }

// if(Qus2==='red and blue')
// {
//   count+=1;
// }

// if (Qus3==='campno')
// {
//   count+=1;
// }
=======
>>>>>>> f8a5b04490a94dc1ddfda62adf7e224b69ae74e3

// console.log(count);

<<<<<<< HEAD
// if(answer==='yes')
// {
//   document.write('<img src="https://media0.giphy.com/media/26xBPeMW9T3PT6Bu8/giphy.gif">')
//   document.write('<h1>'+'Your great for trying to answer '+'</h1>');

//   document.write('<h1>'+'your score is :'+count+'/3'+'</h1>')
// }


var numOfLogoImages;
var baraLogo=prompt("First of all you must see the Logo of barcelona football team , sorry (-_-) !! \n enter yes to continue");

var user = function ()
{
while (baraLogo != 'yes' || baraLogo !='Yes')
{
  baraLogo= prompt("are you kidding me !!\n Enter yes or close the browser (*^*)");
}

if (baraLogo==='yes')
{
  numOfLogoImages = prompt('how many barcelona log image do you want to see ??');

  while(numOfLogoImages==0)
  {
    numOfLogoImages = prompt('are you kidding me agin !!\n reinter the valid number !');
  }
}

}

user();

function showImages()
{
for(var i=0 ; i<numOfLogoImages; i++)
{
  document.write('<img id="barcaLogo" src="https://i.pinimg.com/originals/fc/0b/14/fc0b14754d117d00150ca31ec33671d0.gif">');
  document.write('<lable for="img">'+(i+1)+'</lable>');

}
document.write('<br><br><h3> the number of barcelona logo image is :'+numOfLogoImages+'</h3>');
}

showImages();
=======
// if (Qus1==='messi')
// {
//   count=1;
// }

// if(Qus2==='red and blue')
// {
//   count+=1;
// }

// if (Qus3==='campno')
// {
//   count+=1;
// }

// console.log(count);

// if(answer==='yes')
// {
//   document.write('<img src="https://media0.giphy.com/media/26xBPeMW9T3PT6Bu8/giphy.gif">')
//   document.write('<h1>'+'Your great for trying to answer '+'</h1>');

//   document.write('<h1>'+'your score is :'+count+'/3'+'</h1>')
// }

var numOfLogoImages;
var baraLogo=prompt("First of all you must see the Logo of barcelona football team , sorry (-_-) !! \n enter yes to continue");

while (baraLogo !== 'yes' && baraLogo !=='Yes')
{
  baraLogo= prompt("are you kidding me !!\n Enter yes or close the browser (*^*)");
}

if (baraLogo==='yes')
{
  numOfLogoImages = prompt('how many barcelona log image do you want to see ??');

  while(numOfLogoImages==0)
  {
    numOfLogoImages = prompt('are you kidding me agin !!\n reinter the valid number !');
  }
}

for(var i=0 ; i<numOfLogoImages; i++)
{
  document.write('<img src="https://i.pinimg.com/originals/fc/0b/14/fc0b14754d117d00150ca31ec33671d0.gif">');
  document.write('<lable for="img">'+(i+1)+'</lable>');

}
document.write('<br><br><h3> the number of barcelona logo image is :'+numOfLogoImages+'</h3>');
>>>>>>> f8a5b04490a94dc1ddfda62adf7e224b69ae74e3

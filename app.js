var Qus1,Qus2,Qus3;
var count=0;
var answer = prompt("are you ready to test who mauch you know about barcelona ? \n please enter yes or no !");

if (answer === 'yes')
{
  Qus1=prompt("Q1) Who is the holder of the number 10 in the Barcelona team?");

  Qus2=prompt('What colors are the main Barcelona shirt?');
  
  Qus3=prompt('What is the stadium of the Barcelona team?');

}
else if (answer ==='no')
{
  document.write('<h2>'+'LOOOOOOSSSEEEEERRRR'+'</h2>');
}
else
{
  alert('you dont enter a valid value')
}


if (Qus1==='messi')
{
  count=1;
}

if(Qus2==='red and blue')
{
  count+=1;
}

if (Qus3==='campno')
{
  count+=1;
}

console.log(count);

if(answer==='yes')
{
  document.write('<img src="https://media0.giphy.com/media/26xBPeMW9T3PT6Bu8/giphy.gif">')
  document.write('<h1>'+'Your great for trying to answer '+'</h1>');

  document.write('<h1>'+'your score is :'+count+'/3'+'</h1>')
}

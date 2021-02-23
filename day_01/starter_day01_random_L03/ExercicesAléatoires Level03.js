var MOI=prompt("entrer un mois qulconque");


var moi=MOI.toLowerCase();

if(moi=="janvier"||moi=="mars"||moi=="mai"||moi=="juillet"||moi=="aout"||moi=="octobre"||moi=="decembre")
{

   console.log(MOI+"a 31 jours");
}
else if(moi=="fevrier")
{
   console.log(MOI+"a 28 ou 29 jours");
}

else
{
   console.log(MOI+"a 30 jours");
}

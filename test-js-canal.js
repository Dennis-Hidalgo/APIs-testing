$(eval 
ca="";
no=`$(querystring)`.toLowerCase();
let li=[
["MILANESA","Kukitow"],
["PATO","Zlatar"],
["MATI","Darkoz"],
["BETO","Goncho"],
["Ivy (la LOCA)","Ghatta"],
["GARCÍA","Tanizen"],
["FASOLA","Guishorro"],
["YAYA","PauliGtv"],
["CHISPA","rengarsitoo"],
["Chimenea","bruunito_"],
["Vero","LaPinky"],
["Trapito","Pibewasabi"]
];
function en(){
for(let i=0;i<li.length;i++){
if(li[i][0]===no){
ca=li[i][1];
}
};
return ca;
};
en()
)

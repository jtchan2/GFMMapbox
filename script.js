//const apiKey= 'pk.eyJ1IjoianRjaGFuMiIsImEiOiJja3JiMG43d2YycmJqMnduM3dpZDRsaDVvIn0.t9Ee4j9LDlMFT29ZEqdjTA';

var mymap = L.map('map').setView([37.34440709194835, -121.88319727311614], 13);

var defM=L.tileLayer('https://api.mapbox.com/styles/v1/team16ms2021/ckrftuygu4ru317orvcjvq7sl/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidGVhbTE2bXMyMDIxIiwiYSI6ImNrcjE4bWx4cDF6ajUzMWwzcXpza3dodWEifQ.1g8c2T3uGHs844vSs6OhhA',{
    attribution: 'Map data &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
}).addTo(mymap);
//https://api.mapbox.com/styles/v1/team16ms2021/ckrftuygu4ru317orvcjvq7sl/tiles/256/%7bz%7d/%7bx%7d/%7by%7d@2x?access_token=pk.eyJ1IjoidGVhbTE2bXMyMDIxIiwiYSI6ImNrcjE4bWx4cDF6ajUzMWwzcXpza3dodWEifQ.1g8c2T3uGHs844vSs6OhhA

//marker Item
var marker= L.marker([37.81906728454821, -122.28751380473334]).addTo(mymap);
let template=`
<h1>Help Bring Kaitlyn Home!</h1>
<a href= "https://www.gofundme.com/f/v8jjk4-help-bring-kaitlyn-home?qid=f67e8dfe4486c41a507053472823ffd9">Go Fundme Link</a>
`
marker.bindPopup(template);

//Second Marker
var marker2= L.marker([41.18764923759713, -73.28275765926125]).addTo(mymap);
let template2=`
<h1>John Meadows "Mountain Dog" Memorial Fund</h1>
<a href= "https://www.gofundme.com/f/john-meadows-mountain-dog-memorial-fund?qid=f67e8dfe4486c41a507053472823ffd9">Go Fundme Link</a>
`
marker2.bindPopup(template2);
//circle feature

//varaibles which containt groups of markers
//can put more markes by doing L.layergroup([marker, marker, marker]);
//=====================ANIMAL GROUP====================================
var animal1=L.marker([38.744751,-94.825546]).addTo(mymap);
let templateA1=`
<h1>SunFlower Suites in Loving Memory of David Hosch</h1>
<p></p>
<a href="https://www.gofundme.com/f/oz-pound-sunflower-kennels?qid=25b88dc8537e0189d0a8050cc9b245d8">Go Fundme Link</a>
`
animal1.bindPopup(templateA1);
var animal2=L.marker([46.661812,-122.96431]).addTo(mymap);
let templateA2=`
<h1>Let’s Help Vicky With Her Roof</h1>
<p></p>
<a href="https://www.gofundme.com/f/lets-help-vicky-with-her-roof?qid=25b88dc8537e0189d0a8050cc9b245d8">Go Fundme Link</a>
`
animal2.bindPopup(template2);
var animal3=L.marker([42.200531,-71.427887]).addTo(mymap);
let templateA3=`
<h1>Help Olive</h1>
<a href="https://www.gofundme.com/f/lets-help-vicky-with-her-roof?qid=25b88dc8537e0189d0a8050cc9b245d8">Go Fundme Link</a>
`
animal3.bindPopup(templateA3);
var animal4=L.marker([35.540699,-79.774559]).addTo(mymap);
let templateA4=`
<h1>Rowdy's Medical Care Fundraiser</h1>
<p></p>
<a href="https://www.gofundme.com/f/rowdys-medical-care-fundraiser?qid=25b88dc8537e0189d0a8050cc9b245d8">Go Fundme Link</a>
`
animal4.bindPopup(templateA4);
var animal5=L.marker([41.4478022248414,-74.4280072589299]).addTo(mymap);
let templateA5=`
<h1>Help Mr Feeny get life saving surgery!</h1>
<p></p>
<a href="https://www.gofundme.com/f/help-mr-feeny-get-life-saving-surgery?qid=25b88dc8537e0189d0a8050cc9b245d8">Go Fundme Link</a>
`
animal5.bindPopup(templateA5);
var animal6=L.marker([40.2878932574281,-75.2099454271608]).addTo(mymap);
let templateA6=`
<h1>Help with Novas medical expenses</h1>
<p></p>
<a href="https://www.gofundme.com/f/7b5kd-help-save-novas-life?qid=25b88dc8537e0189d0a8050cc9b245d8">Go Fundme Link</a>
`
animal6.bindPopup(templateA6);
var animal7=L.marker([39.9834756999088,-75.1619819948171]).addTo(mymap);
let templateA7=`
<h1>Gibson’s Recovery Fund</h1>
<p></p>
<a href="https://www.gofundme.com/f/gibsons-recovery-fund?qid=25b88dc8537e0189d0a8050cc9b245d8">Go Fundme Link</a>
`
animal7.bindPopup(templateA7);
var animal8=L.marker([35.1194063786322,-106.64970917814]).addTo(mymap);
let templateA8=`
<h1>Help save Sasha’s life</h1>
<p></p>
<a href="https://www.gofundme.com/f/u2dd5-help-save-sashas-life?qid=25b88dc8537e0189d0a8050cc9b245d8">Go Fundme Link</a>
`
animal8.bindPopup(templateA8);
var animal9=L.marker([44.8143063044866,-68.7738751661494]).addTo(mymap);
let templateA9=`
<h1>New Tourette's Service Dog For Carol</h1>
<p></p>
<a href="https://www.gofundme.com/f/new-tourettes-service-dog-for-carol?qid=25b88dc8537e0189d0a8050cc9b245d8">Go Fundme Link</a>
`
animal9.bindPopup(templateA9);
var animal10=L.marker([40.6754338520302,-73.9446563131815]).addTo(mymap);
let templateA10=`
<h1>Chickie's Gotcha Day - Help the Hen House Dogs</h1>
<p></p>
<a href="https://www.gofundme.com/f/help-the-hen-house-dogs?qid=25b88dc8537e0189d0a8050cc9b245d8">Go Fundme Link</a>
`
animal10.bindPopup(templateA10);
var animal11=L.marker([45.640046545531,-89.4158031085161]).addTo(mymap);
let templateA11=`
<h1>Noli needs help</h1>
<p></p>
<a href="https://www.gofundme.com/f/noli-needs-help?qid=25b88dc8537e0189d0a8050cc9b245d8">Go Fundme Link</a>
`
animal11.bindPopup(templateA11);
var animal12=L.marker([44.0431247854571,-123.106072998069]).addTo(mymap);
let templateA12=`
<h1>Buckbeak’s Emergency Surgery</h1>
<p></p>
<a href="https://www.gofundme.com/f/buckbeaks-emergency-surgery?qid=25b88dc8537e0189d0a8050cc9b245d8">Go Fundme Link</a>
`
animal12.bindPopup(templateA12);
//*********************************************************************** */

//==========================Emergency===========================================
var em1= L.marker([34.541851,-112.468712]).addTo(mymap);
let tmp1=`
<h1>The Stupey family</h1>
<p></p>
<a href="https://www.gofundme.com/f/the-stupey-family?qid=5a2e547fc6da8946c6b1b539127757e9">Go Fundme link</a>
`
em1.bindPopup(tmp1);
var em2= L.marker([47.25308,-122.44153]).addTo(mymap);
let tmp2=`
<h1>Help Little Hank</h1>
<p></p>
<a href="https://www.gofundme.com/f/help-little-hank?qid=5a2e547fc6da8946c6b1b539127757e9">Go Fundme link</a>
`
em2.bindPopup(tmp2);
var em3= L.marker([41.01183,-76.84637]).addTo(mymap);
let tmp3=`
<h1>Landyn's Love</h1>
<p></p>
<a href="https://www.gofundme.com/f/landyns-love?qid=5a2e547fc6da8946c6b1b539127757e9">Go Fundme link</a>
`
em3.bindPopup(tmp3);
var em4= L.marker([39.7455801134331,-75.5485127351219]).addTo(mymap);
let tmp4=`
<h1>Colin Brady Funeral</h1>
<p></p>
<a href="https://www.gofundme.com/f/2fsicekgnc?qid=5a2e547fc6da8946c6b1b539127757e9">Go Fundme link</a>
`
em4.bindPopup(tmp4);
var em5= L.marker([36.3291887114146,-119.299488668057]).addTo(mymap);
let tmp5=`
<h1>Help Grandpa Don Save His Home</h1>
<p></p>
<a href="https://www.gofundme.com/f/help-grandpa-don-build-a-new-roof?qid=5a2e547fc6da8946c6b1b539127757e9">Go Fundme link</a>
`
em5.bindPopup(tmp5);
var em6= L.marker([47.6087769992714,-122.337264113211]).addTo(mymap);
let tmp6=`
<h1>Save Moneer and his wife from the Taliban</h1>
<p></p>
<a href="https://www.gofundme.com/f/save-an-afghan-interpreter-help-moneer?qid=5a2e547fc6da8946c6b1b539127757e9">Go Fundme link</a>
`
em6.bindPopup(tmp6);
var em7= L.marker([47.5414158796611,-122.037297280419]).addTo(mymap);
let tmp7=`
<h1>Fundraiser for Nihar's pregnant wife and family</h1>
<p></p>
<a href="https://www.gofundme.com/f/fundraiser-for-nihars-pregnant-wife-and-family?qid=ae28b3d784f4fdf361cecb0ddd925860">Go Fundme link</a>
`
em7.bindPopup(tmp7);
var em8= L.marker([31.151387580692,-81.4835297293284]).addTo(mymap);
let tmp8=`
<h1>Usung Hero Loses everything in house fire</h1>
<p></p>
<a href="https://www.gofundme.com/f/unsung-hero-loses-everything-in-house-fire">Go Fundme link</a>
`
em8.bindPopup(tmp8);
var em9= L.marker([33.6122181449584,-111.730806710535]).addTo(mymap);
let tmp9=`
<h1>Help for Naseer's Family</h1>
<p></p>
<a href="https://www.gofundme.com/f/HelpNaseerFamily?qid=ae28b3d784f4fdf361cecb0ddd925860">Go Fundme link</a>
`
em9.bindPopup(tmp9);
var em10= L.marker([40.735960919402,-74.172614453256]).addTo(mymap);
let tmp10=`
<h1>Help me defend myself against a Karen</h1>
<p></p>
<a href="https://www.gofundme.com/f/help-me-defend-myself-against-karen?qid=ae28b3d784f4fdf361cecb0ddd925860">Go Fundme link</a>
`
em10.bindPopup(tmp10);
//********************************************************************** */
//==============================FEmergency===============================
var fm1=L.marker([38.9536555620952,-94.7337218360147]).addTo(mymap);
let tempf1=`
<h1>Hayward Family Fund</h1>
<p></p>
<a href="https://www.gofundme.com/f/wyupa-hayward-family-fund?qid=80327241564ba2cc961805695a66c89b">Go Fundme link</a>
`
fm1.bindPopup(tempf1);

var fm2= L.marker([28.5580310558787,-81.8494597632477]).addTo(mymap);
let tempf2=`
<h1>In The Aftermath of Unexpected Death</h1>
<p></p>
<a href="https://www.gofundme.com/f/in-the-aftermath-of-unexpected-death?qid=80327241564ba2cc961805695a66c89b">Go Fundme link</a>
`
fm2.bindPopup(tempf2);
var fm3= L.marker([37.8043430333499,-122.271201662939]).addTo(mymap);
let tempf3=`
<h1>Brown trans & Queer Orchid House Fire Relif Fund</h1>
<p></p>
<a href="https://www.gofundme.com/f/brown-trans-queer-orchid-house-fire-relief-fund?qid=80327241564ba2cc961805695a66c89b">Go Fundme link</a>
`
fm3.bindPopup(tempf3);
var fm4= L.marker([40.0380982133197,-76.3041380408992]).addTo(mymap);
let tempf4=`
<h1>Help Weber Family After Their Lost</h1>
<p></p>
<a href="https://www.gofundme.com/f/help-weber-family-after-their-loss?qid=80327241564ba2cc961805695a66c89b">Go Fundme link</a>
`
fm4.bindPopup(tempf4);

var fm5= L.marker([41.6994403194215,-73.9263220927234]).addTo(mymap);
let tempf5=`
<h1>Andrea has Stage 4 cancer in Her Stomach</h1>
<p></p>
<a href="https://www.gofundme.com/f/mrs-rivera-stomach-cancer-fund?qid=80327241564ba2cc961805695a66c89b">Go Fundme link</a>
`
fm5.bindPopup(tempf5);

var fm6= L.marker([34.2807812182739,-119.295030020736]).addTo(mymap);
let tempf6=`
<h1>Help move Joy Out of Homelessness</h1>
<p></p>
<a href="https://www.gofundme.com/f/help-joy-out-of-homelessness?qid=80327241564ba2cc961805695a66c89b">Go Fundme link</a>
`
fm6.bindPopup(tempf6);

var fm7= L.marker([34.0049586298608,-84.1467071602328]).addTo(mymap);
let tempf7=`
<h1>In Memory of HyunJungKim to Support my Brother and I</h1>
<p></p>
<a href="https://www.gofundme.com/f/in-memory-of-hyunjungkim-to-support-my-brother-i?qid=935d3d46f3283147048e237ec582df57">Go Fundme link</a>
`
fm7.bindPopup(tempf7);

var fm8= L.marker([40.5186629155538,-80.166770334814]).addTo(mymap);
let tempf8=`
<h1>Get Sara Rollin' Again</h1>
<p></p>
<a href="https://www.gofundme.com/f/get-sara-rollin-again?qid=935d3d46f3283147048e237ec582df57">Go Fundme link</a>
`
fm8.bindPopup(tempf8);

var fm9= L.marker([35.91724015447,-82.3007881408501]).addTo(mymap);
let tempf9=`
<h1>Edward Family Help</h1>
<p></p>
<a href="https://www.gofundme.com/f/edwards-family-help?qid=935d3d46f3283147048e237ec582df57">Go Fundme link</a>
`
fm9.bindPopup(tempf9);

var fm10= L.marker([47.6078511331494,-122.331771187709]).addTo(mymap);
let tempf10=`
<h1>Duckworth Recovery Fund</h1>
<p></p>
<a href="https://www.gofundme.com/f/duckworth-recovery-fund?qid=935d3d46f3283147048e237ec582df57">Go fundme link</a>
`
fm10.bindPopup(tempf10);

//********************************************************************* */
//===============================MEDICAL=================================
var md1= L.marker([40.017210075232626,-79.5903627900943]).addTo(mymap);
let tempM1=`
<h1>Please Help Us Save Rebecca</h1>
<p></p>
<a href="https://www.gofundme.com/f/please-help-us-save-rebecca?qid=27cbb1ced6d6e832d6baacd1946e935f">Go Fundme link</a>
`
md1.bindPopup(tempM1);
var md2= L.marker([33.747457284844,-84.3943036909083]).addTo(mymap);
let tempM2=`
<h1>Fight for Josh</h1>
<p></p>
<a href="https://www.gofundme.com/f/94qbw-fight-for-josh?qid=27cbb1ced6d6e832d6baacd1946e935f">Go Fundme link</a>
`
md2.bindPopup(tempM2);
var md3= L.marker([40.7015321432207,-74.3211857763324]).addTo(mymap);
let tempM3=`
<h1>Support Dexter Kennedy's Recovery</h1>
<p></p>
<a href="https://www.gofundme.com/f/support-dexter-kennedys-recovery?qid=27cbb1ced6d6e832d6baacd1946e935f">Go Fundme link</a>
`
md3.bindPopup(tempM3);
var md4= L.marker([42.2335078412986,-84.327107536339]).addTo(mymap);
let tempM4=`
<h1>Donations for Michigan Center Tragedy</h1>
<p></p>
<a href="https://www.gofundme.com/f/mc-tragedy-07-2021?qid=27cbb1ced6d6e832d6baacd1946e935f">Go Fundme link</a>
`
md4.bindPopup(tempM4);

var md5= L.marker([38.0288081384526,-78.4766751564597]).addTo(mymap);
let tempM5=`
<h1>Help Q</h1>
<p></p>
<a href="https://www.gofundme.com/f/eqxgpq-help-q?qid=27cbb1ced6d6e832d6baacd1946e935f">Go Fundme link</a>
`
md5.bindPopup(tempM5);

var md6= L.marker([40.8658492792655,-74.4163854510707]).addTo(mymap);
let tempM6=`
<h1>Fight for Nicole</h1>
<p></p>
<a href="https://www.gofundme.com/f/6usscx-fight-for-nicole?qid=27cbb1ced6d6e832d6baacd1946e935f">Go Fundme link</a>
`
md6.bindPopup(tempM6);
var md7= L.marker([38.7309054105143,-120.79758914255]).addTo(mymap);
let tempM7=`
<h1>Gatica Family Relief Fund</h1>
<p></p>
<a href="https://www.gofundme.com/f/gatica-family-relief-fund?qid=e03edf0891466f5360bc7cecc0247378">Go Fundme link</a>
`
md7.bindPopup(tempM7);
var md8= L.marker([40.6159714249292,-74.7705046434912]).addTo(mymap);
let tempM8=`
<h1>Support For Lane, Carlee & Cody Silverman</h1>
<p></p>
<a href="https://www.gofundme.com/f/support-for-lane-carlee-cody-silverman?qid=e03edf0891466f5360bc7cecc0247378">Go Fundme link</a>
`
md8.bindPopup(tempM8);
var md9= L.marker([33.6756923032668,-94.1311719842413]).addTo(mymap);
let tempM9=`
<h1>Help Support Sherry Gentry Kidd</h1>
<p></p>
<a href="https://www.gofundme.com/f/help-support-sherry-gentry-kidd?qid=e03edf0891466f5360bc7cecc0247378">Go Fundme link</a>
`
md9.bindPopup(tempM9);
var md10= L.marker([37.3361721677543,-121.886417848016]).addTo(mymap);
let tempM10=`
<h1>Help Bring Sharon's (Nahsha) Joy Back</h1>
<p></p>
<a href="https://www.gofundme.com/f/come-bring-back-joy-to-sharon?qid=e03edf0891466f5360bc7cecc0247378">Go Fundme link</a>
`
md10.bindPopup(tempM10);
//************************************************************************** */
//========================================Memorial============================
var mem1=L.marker([41.995894,-70.729098]).addTo(mymap);
let tme1=`
<h1>Love for the Hackett Family</h1>
<p></p>
<a href="https://www.gofundme.com/f/love-for-the-hackett-family?qid=05147bead028854915538ee6b9efc849">Go Fundme link</a>
`
mem1.bindPopup(tme1);

var mem2= L.marker([40.4445432737447,-79.9868540764742]).addTo(mymap);
let tme2=`
<h1>Unexpected death of Lee Weber</h1>
<p></p>
<a href="https://www.gofundme.com/f/unexpected-death-of-husband-and-father-lee-weber?qid=05147bead028854915538ee6b9efc849">Go Fundme link</a>
`
mem2.bindPopup(tme2);

var mem3= L.marker([44.9762617980185,-93.2652570250731]).addTo(mymap);
let tme3=`
<h1>James Stanback</h1>
<p></p>
<a href="https://www.gofundme.com/f/james-stanback?qid=05147bead028854915538ee6b9efc849">Go Fundme link</a>
`
mem3.bindPopup(tme3);

var mem4= L.marker([40.8519690439107,-72.7965927093582]).addTo(mymap);
let tme4=`
<h1>Funeral and medical expenses for Giusto Family</h1>
<p></p>
<a href="https://www.gofundme.com/f/funeral-and-medical-expenses-for-giusto-family?qid=05147bead028854915538ee6b9efc849">Go Fundme link</a>
`
mem4.bindPopup(tme4);

var mem5= L.marker([37.0106696537081,-121.584736938998]).addTo(mymap);
let tme5=`
<h1>Funeral Expenses for Ashley Torres</h1>
<p></p>
<a href="https://www.gofundme.com/f/funeral-and-medical-expenses-for-giusto-family?qid=05147bead028854915538ee6b9efc849">Go Fundme link</a>
`
mem5.bindPopup(tme5);

var mem6= L.marker([33.5457745281285,-112.186634194492]).addTo(mymap);
let tme6=`
<h1>Gabrianna’s Funeral Expenses</h1>
<p></p>
<a href="https://www.gofundme.com/f/gabriannas-funeral-expenses?qid=05147bead028854915538ee6b9efc849">Go Fundme link</a>
`
mem6.bindPopup(tme6);
//************************************************************************** */
//=====================================NonProfit==============================
var np1=L.marker([37.2882746702904,-121.949058870667]).addTo(mymap);
let tmnp1=`
<h1>Amhara Emergency Fund</h1>
<p></p>
<a href="https://www.gofundme.com/f/amhara-emergency-fund?qid=de52b5cd3c5c8d681006662060e4dc73">Go Fundme link</a>
`
np1.bindPopup(tmnp1);

var np2=L.marker([34.0668163678648,-118.325251460805]).addTo(mymap);
let tmnp2=`
<h1>Rare Impact Fund</h1>
<p></p>
<a href="https://www.gofundme.com/f/RareImpactFund?qid=de52b5cd3c5c8d681006662060e4dc73">Go Fundme link</a>
`
np2.bindPopup(tmnp2);

var np3=L.marker([34.2263015863672,-119.045040444262]).addTo(mymap);
let tmnp3=`
<h1>Fundraiser to benefit Zack Gregson</h1>
<p></p>
<a href="https://www.gofundme.com/f/fundraiser-for-zach-gregson?qid=de52b5cd3c5c8d681006662060e4dc73">Go Fundme link</a>
`
np3.bindPopup(tmnp3);

var np4=L.marker([34.0668163678648,-118.325251460805]).addTo(mymap);
let tmnp4=`
<h1>The Walk From LA to NYC for Autism</h1>
<p></p>
<a href="https://www.gofundme.com/f/9v8cx-the-walk-from-la-to-nyc-for-autism?qid=de52b5cd3c5c8d681006662060e4dc73">Go Fundme link</a>
`
np4.bindPopup(tmnp4);

var np5=L.marker([34.3968103180999,-118.536519132118]).addTo(mymap);
let tmnp5=`
<h1>Please Save Damian</h1>
<p></p>
<a href="https://www.gofundme.com/f/please-save-damian?qid=de52b5cd3c5c8d681006662060e4dc73">Go Fundme link</a>
`
np5.bindPopup(tmnp5);

var np6=L.marker([38.0433898151148,-84.5017861114382]).addTo(mymap);
let tmnp6=`
<h1>A Devastating Fire Destroyed our Rink & Equipment</h1>
<p></p>
<a href="https://www.gofundme.com/f/a-devastating-fire-destroyed-our-rink--equipment?qid=de52b5cd3c5c8d681006662060e4dc73">Go Fundme link</a>
`
np6.bindPopup(tmnp6);

var np7=L.marker([33.1465084116056,-96.814067328564]).addTo(mymap);
let tmnp7=`
<h1>The Randy Luper Family - Dallas Fire Dept</h1>
<p></p>
<a href="https://www.gofundme.com/f/the-randy-luper-family-dallas-fire-dept?qid=de52b5cd3c5c8d681006662060e4dc73">Go Fundme link</a>
`
np7.bindPopup(tmnp7);

var np8=L.marker([41.8740522027873,-87.6296620114676]).addTo(mymap);
let tmnp8=`
<h1>Guerin Prep Remembered Fundraiser-Save the Mosaic!</h1>
<p></p>
<a href="https://www.gofundme.com/f/guerin-prep-remembered-fundraisersave-the-mosaic?qid=de52b5cd3c5c8d681006662060e4dc73">Go Fundme link</a>
`
np8.bindPopup(tmnp8);

var np9=L.marker([34.0668163678648,-118.325251460805]).addTo(mymap);
let tmnp9=`
<h1>The Walk from LA to NYC for Mental Health</h1>
<p></p>
<a href="https://www.gofundme.com/f/the-walk-from-la-to-nyc-mental-health?qid=de52b5cd3c5c8d681006662060e4dc73">Go Fundme link</a>
`
np9.bindPopup(tmnp9);

var np10=L.marker([40.7196470206549,-74.0656431435704]).addTo(mymap);
let tmnp10=`
<h1>Memorial Fund for P.O. Morton Otundo</h1>
<p></p>
<a href="https://www.gofundme.com/f/memorial-fund-for-po-morton-otundo?qid=de52b5cd3c5c8d681006662060e4dc73">Go Fundme link</a>
`
np10.bindPopup(tmnp10);

var np11=L.marker([36.2611685858542,-115.150937806122]).addTo(mymap);
let tmnp11=`
<h1>Support SMSgt Tom Young and Family</h1>
<p></p>
<a href="https://www.gofundme.com/f/support-smsgt-young-and-family?qid=de52b5cd3c5c8d681006662060e4dc73">Go Fundme link</a>
`
np11.bindPopup(tmnp10);

var np12=L.marker([40.7171835774296,-73.8466210027068]).addTo(mymap);
let tmnp12=`
<h1>Help OLM Replace Vandalized Statues of Mary</h1>
<p></p>
<a href="https://www.gofundme.com/f/help-olm-replace-vandalized-statues-of-mary?qid=de52b5cd3c5c8d681006662060e4dc73">Go Fundme link</a>
`
np12.bindPopup(tmnp12);
//************************************************************************** */
var animals= L.layerGroup([animal1,animal2,animal3,animal4,animal5,animal6,animal7,animal8,animal9,animal10,animal11,animal12]);
var Emergency= L.layerGroup([em1,em2,em3,em4,em5,em6,em7,em8,em9,em10,marker]);
var fEmergency=L.layerGroup([fm1,fm2,fm3,fm4,fm5,fm6,fm7,fm8,fm9,fm10]);
var medical=L.layerGroup([md1,md2,md3,md4,md5,md6,md7,md8,md9,md10]);
var memorial=L.layerGroup([mem1,mem2,mem3,mem4,mem5,mem6,marker2]);
var nonprofit=L.layerGroup([np1,np2,np3,np4,np5,np6,np7,np8,np9,np10,np11,np12]);
//layer control
var baseLayers = {
    "Default Map": defM,
};

var overlays = {
    "Animal Aid": animals,
    "Emergency": Emergency,
    "Financial Emergency":fEmergency,
    "Medical":medical,
    "Memorial":memorial,
    "Non Profit":nonprofit,
};
L.control.layers(baseLayers, overlays).addTo(mymap);

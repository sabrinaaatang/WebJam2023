// require("dotenv").config();

// const mapsKey = process.env.GOOGLE_MAPS_API_KEY;

var map = L.map("map").setView([33.6467, -117.8399], 13.5);

var tiles = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 25,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);


var paloVerde = L.polygon([
  [33.64333608647028, -117.83561305919768],
  [33.64311829832835, -117.83492628861833],
  [33.642997718881475, -117.83408407500728],
  [33.642845877856296, -117.83324722581418],
  [33.64283347714768, -117.83324746533697],
  [33.64233754691256, -117.8315218117879],
  [33.64188884566993, -117.83008455516381],
  [33.64100718027652, -117.8303871355057],
  [33.64026861441745, -117.8303171410727],
  [33.639874882493956, -117.83043867923664],
  [33.640656937657106, -117.83228610561906],
  [33.64103232161243, -117.83348223592095],
  [33.64104274892116, -117.83350728577018],
  [33.64068300604974, -117.83383919631372],
  [33.64144941299507, -117.83501653926868],
  [33.642721529177216, -117.83628781911828],
  [33.64302912821909, -117.83586823414329]
]).addTo(map);

var mesaCourt = L.polygon([
  [33.65150077079017, -117.84608822018754],
  [33.6521259339639, -117.8462706103894],
  [33.652197380894634, -117.84588437231487],
  [33.65268137775683, -117.84605086493914],
  [33.65303617534847, -117.84561246380723],
  [33.65311189307567, -117.845145915523],
  [33.65370505832192, -117.84507082001515],
  [33.653797872869816, -117.84408197239387],
  [33.65342025677481, -117.84356552766857],
  [33.652920338827506, -117.8431131511235],
  [33.65278399706517, -117.84331594060923],
  [33.652553514071, -117.84310925132573],
  [33.651555468530724, -117.84284175406106],
  [33.650628830602194, -117.8430371774017],
  [33.650057477037954, -117.84337645981046],
  [33.65011013698967, -117.84394437228674],
  [33.65027536179653, -117.84413212690632],
  [33.65077996532429, -117.8444271698799],
  [33.6510478951986, -117.84460956008176],
  [33.65089160287328, -117.84501725582709],
  [33.6508354135671, -117.8455692822876]
]).addTo(map);

var middleEarth = L.polygon([
  [33.6458707831479, -117.83946923328607],
  [33.64584533912776, -117.83923236079805],
  [33.64583897812155, -117.83870512848601],
  [33.64571811891431, -117.83825430665398],
  [33.64560998158503, -117.83785697215797],
  [33.64559089851284, -117.83763538176592],
  [33.645400067558136, -117.83716163678992],
  [33.64534917923209, -117.8367184560059],
  [33.644884821867485, -117.83662676342988],
  [33.64489118294418, -117.83608424902185],
  [33.64478940566044, -117.8355340935658],
  [33.64398790534617, -117.83568691452582],
  [33.64347265120389, -117.83622942893385],
  [33.64344720647501, -117.83713107259791],
  [33.64417237830179, -117.83829251189397],
  [33.645082015026915, -117.83928584813403],
  [33.64526648563813, -117.83966790053405]
]).addTo(map);

var arroyoVista = L.polygon([
  [33.64700255761759, -117.82926928451585],
  [33.647148137951156, -117.82886771199979],
  [33.647466257082506, -117.82834955391455],
  [33.6474123386684, -117.8282264913693],
  [33.647552526474804, -117.8275723167867],
  [33.64760644480108, -117.82717074427063],
  [33.647568701976354, -117.82675136007177],
  [33.6474255920047, -117.82633746180481],
  [33.64706225363456, -117.82584866301904],
  [33.64692973517762, -117.82559926906585],
  [33.6470710881911, -117.82519068748296],
  [33.646527761277014, -117.82486700596925],
  [33.645732642538675, -117.82559926906585],
  [33.64473791574914, -117.82662062456981],
  [33.64493228103137, -117.8271883937824],
  [33.645369601311984, -117.8275120752961],
  [33.64578483265371, -117.82761820038257],
  [33.64640325859884, -117.82785167557277],
  [33.64653577786623, -117.82855210114343],
  [33.64655786439448, -117.82883863890378],
  [33.64661970663313, -117.82915436103382]
]).addTo(map);

var puertaDelSol = L.polygon([
  [33.64769949036798, -117.83439113593012],
  [33.64803211163665, -117.8334507091129],
  [33.64835925064075, -117.83194212197215],
  [33.6485211687527, -117.83087207772961],
  [33.648212248080334, -117.83086421874965],
  [33.648114003986805, -117.83107879546583],
  [33.647857607583035, -117.8318694620001],
  [33.64746727549202, -117.8335757444086],
  [33.64718590942532, -117.83413112064702],
]).addTo(map);

var plazaVerde = L.polygon([
  [33.648673491559926, -117.82974723905993],
  [33.64911164955864, -117.82825448064885],
  [33.64790491394531, -117.82784030490475],
  [33.647574495291494, -117.82844431119825],
  [33.647265624533404, -117.82888437292637],
  [33.647129146403515, -117.8294020926065],
  [33.648005475892575, -117.8296954670919],
]).addTo(map);

var plazaVerde2 = L.polygon([
  [33.64925530743338, -117.82749515845131],
  [33.64953543960445, -117.82619223053989],
  [33.648888979383926, -117.8260196573132],
  [33.64856574745301, -117.82590748471583],
  [33.64831434400095, -117.82568313952109],
  [33.647890547948194, -117.8257607974731],
  [33.64805575682707, -117.82642520439596],
  [33.6480916717588, -117.82720178391617]
]).addTo(map);

var vistaDelCampoNorte = L.polygon([
  [33.64912626577625, -117.82579137449152],
  [33.64938808464117, -117.82490364686319],
  [33.647825118478096, -117.82409898417751],
  [33.647589410479995, -117.82398387611993],
  [33.647526891072, -117.8237478417321],
  [33.645963891114945, -117.82300755206127],
  [33.644799478567236, -117.82259389560531],
  [33.6427554345759, -117.82248740155703],
  [33.64287154844711, -117.82302384334747],
  [33.64343079690273, -117.82354999755309],
  [33.643850589173, -117.82366801474697],
  [33.644850936970705, -117.82380748961252],
  [33.64631571098878, -117.82435466023875],
  [33.64709737709533, -117.82483268963445],
  [33.64806293981461, -117.82570039684374],
]).addTo(map);

var caminoDelSol = L.polygon([
  [33.646281719117376, -117.82497436202671],
  [33.645864028491054, -117.82474184607008],
  [33.64528333327747, -117.82449709243151],
  [33.643983014495106, -117.82425059975573],
  [33.64388255855833, -117.82422947052484],
  [33.643786087863944, -117.82379714508998],
  [33.643067252435316, -117.8239154458181],
  [33.64314718459957, -117.82435070962303],
  [33.64447262250704, -117.82529801275263],
  [33.64436681243438, -117.82566225079296],
  [33.644747359209035, -117.82634792836866]
]).addTo(map);

var vistaDelCampo = L.polygon([
  [33.642474562262436, -117.82388143357126],
  [33.642388277646646, -117.82298850245056],
  [33.64215597248209, -117.82246231089731],
  [33.64096788769785, -117.82289283125907],
  [33.6399589983619, -117.82349077620596],
  [33.63785784477076, -117.82496806956395],
  [33.63813662481086, -117.82551419262022],
  [33.638893308941675, -117.82571749390394],
  [33.63965391976066, -117.82588860942292],
  [33.63998579373619, -117.8252667466727],
  [33.640476964872526, -117.82486413040496],
  [33.64192784554446, -117.82412149751913],
]).addTo(map);

var campusVillage = L.polygon([
  [33.64536131057594, -117.84677772298107],
  [33.645169648805705, -117.84670098003697],
  [33.64487505673426, -117.8468459389314],
  [33.64417584019165, -117.84638974476364],
  [33.643849300571624, -117.84662850058977],
  [33.64369667836799, -117.84717849168919],
  [33.64348371670146, -117.84739166653392],
  [33.64339853188736, -117.8490459033291],
  [33.64415809350497, -117.84913117326698],
  [33.645169648805705, -117.84884551897504],
  [33.64538615558899, -117.84849591222965],
  [33.645340014844756, -117.84772848278861],
  [33.64511286005107, -117.84734903156497]
]).addTo(map);

var veranoPlace = L.polygon([
  [33.64779464473082, -117.82992306818205],
  [33.647891962121605, -117.83099645526714],
  [33.647458456534395, -117.83327076057611],
  [33.647086878579195, -117.83396155424471],
  [33.646732993321166, -117.8343335200663],
  [33.645586565373, -117.83396646665965],
  [33.64470332966863, -117.83450489547666],
  [33.64358686740589, -117.83547049069946],
  [33.642211365991905, -117.83012753046648],
  [33.64372084364187, -117.8294408849747],
  [33.645828708976765, -117.82935505428826]
]).addTo(map);

// UTC Apartments
var berkeleyCourt = L.polygon([
  [33.64936279855165, -117.8370612931492],
  [33.649297839126646, -117.83645339057415],
  [33.64934315398889, -117.83558846474668],
  [33.6479484522967, -117.83545539923477],
  [33.64795852242599, -117.83615096895616],
  [33.64808439894298, -117.83704613694542],
  [33.64829083603236, -117.83779009412571],
  [33.64885979422833, -117.83740904288702]
]).addTo(map);

var dartmouthCourt = L.polygon([
  [33.65328802642554, -117.83860996641184],
  [33.65176745064438, -117.83691688049713],
  [33.65121999045936, -117.83529936724662],
  [33.64960718210725, -117.83565486466432],
  [33.64957758901112, -117.83691688049713],
  [33.65062813769352, -117.83698797998066],
  [33.65132356427496, -117.83702352972244],
  [33.65167867355363, -117.83762787533249],
  [33.65190061610878, -117.83887211629443],
  [33.65201898523753, -117.83976085983865]
]).addTo(map);

var stanfordCourt = L.polygon([
  [33.65348378975847, -117.83880101678848],
  [33.65429755926122, -117.83931648804416],
  [33.65561436997449, -117.83935203778591],
  [33.657419403604386, -117.83894321575556],
  [33.65746378920028, -117.84031188081366],
  [33.65725665622355, -117.84164499613001],
  [33.65626537007505, -117.84312031041343],
  [33.654992956193524, -117.84443565085888],
  [33.6536317484222, -117.84271148838309],
  [33.65138274928183, -117.84164499613001],
]).addTo(map);

var harvardCourt = L.polygon([
  [33.6510800756305, -117.8349040292593],
  [33.65097382042792, -117.83404242614482],
  [33.649207308467254, -117.83340420161556],
  [33.6491276153437, -117.8341860266639],
  [33.64937997664853, -117.83482425119315],
  [33.64955264448343, -117.8352710083636],
]).addTo(map);

var cornellCourt = L.polygon([
  [33.64930686914753, -117.83527096381971],
  [33.64803469623577, -117.83516465245674],
  [33.6485878172033, -117.83241384593967],
  [33.64924049537355, -117.83262646866562],
  [33.64917412154836, -117.8327859357101],
  [33.648963937431056, -117.83399522746397],
  [33.64916305923922, -117.83472611808446]
]).addTo(map);

var ambroseCourt = L.polygon([
  [33.6528254440355, -117.83609155071876],
  [33.65294909602466, -117.83570875662112],
  [33.6529918985949, -117.83526882907604],
  [33.653216233861365, -117.83494365030526],
  [33.653065429825354, -117.83446877555],
  [33.65284150819349, -117.83431780380698],
  [33.65261987090253, -117.8342244758204],
  [33.65244164668753, -117.83433152851089],
  [33.65230455088639, -117.83467190116785],
]).addTo(map);

var columbiaCourt = L.polygon([
  [33.65217201286324, -117.83013787662202],
  [33.651625444833556, -117.83107277287722],
  [33.650782058216166, -117.83065533082836],
  [33.65097752194473, -117.82986393027748],
  [33.651849863914734, -117.82986827863215]
]).addTo(map);

// Other Irvine Co. Estates
var turtleRockVista = L.polygon([
  [33.65449933618267, -117.82218894340609],
  [33.65451486151225, -117.82056627064408],
  [33.651469566849165, -117.81898461116671],
  [33.65086088430339, -117.81932990694634],
  [33.65067489711139, -117.81975644879176],
  [33.650886246162095, -117.82086342643821],
  [33.65220505251545, -117.82066031127373],
  [33.65322250019887, -117.82119356728204]
]).addTo(map);

var turtleRockCanyon = L.polygon([
  [33.64481569262275, -117.80468890472433],
  [33.643469665226284, -117.80292873992862],
  [33.641509579474224, -117.80434515680939],
  [33.64278684192681, -117.80627634719353],
  [33.64384972420838, -117.8054931422044],
  [33.644599986153914, -117.80551459987534]
]).addTo(map);

var ranchoSanJoaquin = L.polygon([
  [33.663685613518574, -117.83105765522453],
  [33.66258163648097, -117.82950067064084],
  [33.66203691787472, -117.82790207415619],
  [33.6608760306496, -117.82807373552366],
  [33.66151005561384, -117.83012294309795],
  [33.66168865335188, -117.83165716656978],
  [33.662858459368984, -117.83148550520231]
]).addTo(map);

var parkWest = L.polygon([
  [33.66974330690416, -117.83117759577303],
  [33.66727010068391, -117.82831872726788],
  [33.66830142845244, -117.8272243860502],
  [33.66880146170721, -117.82781447200092],
  [33.66947114454839, -117.82836700702748],
  [33.66990142270415, -117.82911823380503],
  [33.670334479332176, -117.8304968891626],
]).addTo(map);

var villaSiena = L.polygon([
  [33.669504746854834, -117.85038215895347],
  [33.672316893701684, -117.84759499992771],
  [33.6709376994136, -117.84533514115424],
  [33.66770290755794, -117.84818128737928]
]).addTo(map);

var parkPlace = L.polygon([
  [33.670819217018405, -117.83889637472384],
  [33.672746260972765, -117.83801851047274],
  [33.673561535801205, -117.83894726540508],
  [33.67410151877035, -117.83855286262558],
  [33.67355094786596, -117.83670807543122],
  [33.670787452195874, -117.83672079810151],
]).addTo(map);

var parkWood = L.polygon([
  [33.658648468230204, -117.80734386172216],
  [33.65849015219796, -117.80424627809087],
  [33.65939481131583, -117.80396097433535],
  [33.66028815286083, -117.80324092200003],
  [33.66068393412471, -117.80393380254914],
  [33.66091009402952, -117.80480329970878],
  [33.66008460750194, -117.80522446239549],
  [33.659756672299764, -117.80583582758587],
  [33.65954181752409, -117.80669173885241],
  [33.65915733921808, -117.80727593225657]
]).addTo(map);
var woodbridgeVillas = L.polygon([
  [33.66606339440695, -117.80662814135444],
  [33.66761072757879, -117.80542933835227],
  [33.66796584929765, -117.80860921411227],
  [33.66624095864369, -117.80879208236684]
]).addTo(map);
var villaCoronado = L.polygon([
  [33.67640113931426, -117.83491865239152],
  [33.67560844950724, -117.83184274612478],
  [33.67327988093969, -117.83190227979445],
  [33.6745680330461, -117.8353155435227]
]).addTo(map);
var sanMarco = L.polygon([
  [33.68141508917175, -117.83245384385303],
  [33.68026744040256, -117.83032882073861],
  [33.67807749667364, -117.83138429579544],
  [33.679049510667745, -117.83449442896291]
]).addTo(map);

// paloVerde.bindPopup("This is Palo Verde!");
paloVerde.on('mouseover', function (e) {
  // Color
  paloVerde.setStyle({fillColor: 'green'});

  // Hyperlink in Popup
  var linkElement = document.createElement('a');
  linkElement.href = 'https://housing.uci.edu/palo-verde/';
  linkElement.textContent = "Palo Verde Website";
  linkElement.style.fontWeight = "bold";
  linkElement.style.color = "blue";
  linkElement.target = "_blank"; // Open in new tab

  // Text in Popup
  var textElement = document.createElement('p');
  textElement.textContent = "This is Palo Verde!";

  // Container for the Text and Image
  var containerDiv = document.createElement('div');
  containerDiv.appendChild(linkElement);
  containerDiv.appendChild(textElement);

  var popup = L.popup()
  .setLatLng([33.64198729972923, -117.83325487380097])
  .setContent(containerDiv);
  
  // Open on map
  popup.openOn(map);
});

// mesaCourt.bindPopup("This is Mesa Court!");
mesaCourt.on('mouseover', function (e) {
  // Color
  mesaCourt.setStyle({ fillColor: "green" });

  // Hyperlink in Popup
  var linkElement = document.createElement('a');
  linkElement.href = 'https://housing.uci.edu/mesa-court/';
  linkElement.textContent = "Mesa Court Website";
  linkElement.style.fontWeight = "bold";
  linkElement.style.color = "blue";
  linkElement.target = "_blank"; // Open in new tab

  // Text in Popup
  var textElement = document.createElement('p');
  textElement.textContent = "This is Mesa Court!";

  // Container for the Text and Image
  var containerDiv = document.createElement('div');
  containerDiv.appendChild(linkElement);
  containerDiv.appendChild(textElement);

  var popup = L.popup()
    .setLatLng([33.65150077079017, -117.84608822018754])
    .setContent(containerDiv);
  
  // Open on map
  popup.openOn(map);
});

// arroyoVista.bindPopup("This is Arroyo Vista!");
arroyoVista.on('mouseover', function (e) {
  // Color
  arroyoVista.setStyle({ fillColor: "green" });

  // Hyperlink in Popup
  var linkElement = document.createElement('a');
  linkElement.href = "https://housing.uci.edu/arroyo-vista/";
  linkElement.textContent = "Arroyo Vista Website";
  linkElement.style.fontWeight = "bold";
  linkElement.style.color = "blue";
  linkElement.target = "_blank"; // Open in new tab

  // Text in Popup
  var textElement = document.createElement('p');
  textElement.textContent = "This is Arroyo Vista!";

  // Container for the Text and Image
  var containerDiv = document.createElement('div');
  containerDiv.appendChild(linkElement);
  containerDiv.appendChild(textElement);

  var popup = L.popup()
    .setLatLng([33.645369601311984, -117.8275120752961])
    .setContent(containerDiv);
  
  // Open on map
  popup.openOn(map);
});

// middleEarth.bindPopup("This is Middle Earth!");
middleEarth.on('mouseover', function (e) {
  // Color
  middleEarth.setStyle({ fillColor: "green" });

  // Hyperlink in Popup
  var linkElement = document.createElement('a');
  linkElement.href = "https://housing.uci.edu/middle-earth/";
  linkElement.textContent = "Middle Earth Website";
  linkElement.style.fontWeight = "bold";
  linkElement.style.color = "blue";
  linkElement.target = "_blank"; // Open in new tab

  // Text in Popup
  var textElement = document.createElement('p');
  textElement.textContent = "This is Middle Earth!";

  // Container for the Text and Image
  var containerDiv = document.createElement('div');
  containerDiv.appendChild(linkElement);
  containerDiv.appendChild(textElement);

  var popup = L.popup()
    .setLatLng([33.6458707831479, -117.83946923328607])
    .setContent(containerDiv);
  
  // Open on map
  popup.openOn(map);
});

// puertaDelSol.bindPopup("This is Puerta Del Sol!");
puertaDelSol.on('mouseover', function (e) {
  // Color
  puertaDelSol.setStyle({ fillColor: "green" });

  // Hyperlink in Popup
  var linkElement = document.createElement('a');
  linkElement.href =
    "https://www.americancampus.com/student-apartments/ca/irvine/puerta-del-sol?utm_source=&utm_medium=&utm_campaign=&utm_content=&gad_source=1&gclid=CjwKCAiAu9yqBhBmEiwAHTx5p0bELQM-bNW3NiXU1wW8lQpgmBfTcPOXk-v_rSUgCD98syqwEfj1nhoCtc8QAvD_BwE";
  linkElement.textContent = "Puerta Del Sol Website";
  linkElement.style.fontWeight = "bold";
  linkElement.style.color = "blue";
  linkElement.target = "_blank"; // Open in new tab

  // Text in Popup
  var textElement = document.createElement('p');
  textElement.textContent = "This is Puerta Del Sol!";

  // Container for the Text and Image
  var containerDiv = document.createElement('div');
  containerDiv.appendChild(linkElement);
  containerDiv.appendChild(textElement);

  var popup = L.popup()
    .setLatLng([33.64769949036798, -117.83439113593012])
    .setContent(containerDiv);
  
  // Open on map
  popup.openOn(map);
});

// plazaVerde.bindPopup("This is Plaza Verde!");
plazaVerde.on("mouseover", function (e) {
  // Color
  plazaVerde.setStyle({ fillColor: "green" });

  // Hyperlink in Popup
  var linkElement = document.createElement("a");
  linkElement.href =
    "https://www.americancampus.com/student-apartments/ca/irvine/plaza-verde";
  linkElement.textContent = "Plaza Verde Website";
  linkElement.style.fontWeight = "bold";
  linkElement.style.color = "blue";
  linkElement.target = "_blank"; // Open in new tab

  // Text in Popup
  var textElement = document.createElement("p");
  textElement.textContent = "This is Plaza Verde!";

  // Container for the Text and Image
  var containerDiv = document.createElement("div");
  containerDiv.appendChild(linkElement);
  containerDiv.appendChild(textElement);

  var popup = L.popup()
    .setLatLng([33.647574495291494, -117.82844431119825])
    .setContent(containerDiv);

  // Open on map
  popup.openOn(map);
});

// plazaVerde2.bindPopup("This is Plaza Verde!");
plazaVerde2.on("mouseover", function (e) {
  // Color
  plazaVerde2.setStyle({ fillColor: "green" });

  // Hyperlink in Popup
  var linkElement = document.createElement("a");
  linkElement.href =
    "https://www.americancampus.com/student-apartments/ca/irvine/plaza-verde-2";
  linkElement.textContent = "Plaza Verde 2 Website";
  linkElement.style.fontWeight = "bold";
  linkElement.style.color = "blue";
  linkElement.target = "_blank"; // Open in new tab

  // Text in Popup
  var textElement = document.createElement("p");
  textElement.textContent = "This is Plaza Verde 2!";

  // Container for the Text and Image
  var containerDiv = document.createElement("div");
  containerDiv.appendChild(linkElement);
  containerDiv.appendChild(textElement);

  var popup = L.popup()
    .setLatLng([33.64925530743338, -117.82749515845131])
    .setContent(containerDiv);

  // Open on map
  popup.openOn(map);
});




  // Mousover Event
function highlightFeature(e) {
  var layer = e.target;
  layer.setStyle({
    weight: 5,
    color: "#666",
    dashArray: "",
    fillOpacity: 0.7,
  });

  layer.bringToFront
}

// On mouseout, reset the style
function resetHighlight(e) {
  var layer = e.target;
  layer.setStyle({
    weight: 2,
    opacity: 1,
    color: "white",
    dashArray: "3",
    fillOpacity: 0.7,
  });
}

// Zoom on click
function zoomToFeature(e) {
  map.fitBounds(e.target.getBounds());
}


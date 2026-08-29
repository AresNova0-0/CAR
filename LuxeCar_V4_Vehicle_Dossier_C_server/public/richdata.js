const BRAND_INFO={
"Ferrari":{country:"Ý",founded:"1939",hq:"Maranello, Italy",legal:"Ferrari S.p.A.",focus:"Xe đua, sports car, GT, hypercar",note:"Thiết kế Ý, động cơ hiệu suất cao, khí động học và chương trình cá nhân hóa."},
"Lamborghini":{country:"Ý",founded:"1963",hq:"Sant'Agata Bolognese, Italy",legal:"Automobili Lamborghini S.p.A.",focus:"Supercar, V12/V8 hybrid, SUV hiệu suất",note:"Ngôn ngữ thiết kế góc cạnh, hiệu suất mạnh và trải nghiệm giàu cảm xúc."},
"Bugatti":{country:"Pháp",founded:"1909",hq:"Molsheim, France",legal:"Bugatti Automobiles",focus:"Hypercar hiệu suất cực cao",note:"Sản lượng giới hạn, chế tác thủ công và công nghệ tốc độ cao."},
"McLaren":{country:"Anh",founded:"1985",hq:"Woking, United Kingdom",legal:"McLaren Automotive",focus:"Supercar và track car",note:"Trọng lượng thấp, carbon fibre, khí động học và cảm giác lái."},
"Porsche":{country:"Đức",founded:"1931",hq:"Stuttgart, Germany",legal:"Dr. Ing. h.c. F. Porsche AG",focus:"Sports car, GT, SUV, EV",note:"Kỹ thuật khung gầm, độ chính xác và khả năng sử dụng hàng ngày."},
"Aston Martin":{country:"Anh",founded:"1913",hq:"Gaydon, United Kingdom",legal:"Aston Martin Lagonda Limited",focus:"GT, sports car, hypercar",note:"Phong cách Anh, vật liệu thủ công và trải nghiệm grand touring."},
"Rolls-Royce":{country:"Anh",founded:"1906",hq:"Goodwood, United Kingdom",legal:"Rolls-Royce Motor Cars",focus:"Ultra-luxury và Bespoke",note:"Cá nhân hóa sâu, thủ công, độ êm và trải nghiệm hàng ghế sau."},
"Bentley":{country:"Anh",founded:"1919",hq:"Crewe, United Kingdom",legal:"Bentley Motors Limited",focus:"Ultra-luxury GT và SUV",note:"Thủ công truyền thống kết hợp hiệu suất và công nghệ hiện đại."},
"Mercedes-AMG":{country:"Đức",founded:"1967",hq:"Affalterbach, Germany",legal:"Mercedes-AMG GmbH",focus:"Performance luxury",note:"Động cơ AMG, khung gầm hiệu suất và hybrid hóa."},
"Maserati":{country:"Ý",founded:"1914",hq:"Modena, Italy",legal:"Maserati S.p.A.",focus:"Luxury GT và sports car",note:"Phong cách Ý, grand touring và âm thanh động cơ."},
"Koenigsegg":{country:"Thụy Điển",founded:"1994",hq:"Ängelholm, Sweden",legal:"Koenigsegg Automotive AB",focus:"Mega car",note:"Kết cấu nhẹ, truyền động độc đáo và sản lượng cực thấp."},
"Pagani":{country:"Ý",founded:"1992",hq:"Modena, Italy",legal:"Pagani Automobili",focus:"Hypercar thủ công",note:"Carbon composite, cơ khí tinh xảo và thiết kế như tác phẩm nghệ thuật."},
"Lotus":{country:"Anh",founded:"1952",hq:"Hethel, United Kingdom",legal:"Lotus Cars",focus:"Sports car nhẹ và EV performance",note:"Triết lý trọng lượng thấp và cảm giác lái."},
"Rimac":{country:"Croatia",founded:"2009",hq:"Zagreb, Croatia",legal:"Rimac Automobili",focus:"Electric hypercar và EV technology",note:"Nhiều motor điện, pin hiệu suất cao và phần mềm điều khiển."},
"Range Rover":{country:"Anh",founded:"1970",hq:"Whitley, United Kingdom",legal:"Range Rover / JLR",focus:"Luxury SUV",note:"Tiện nghi cao cấp kết hợp khả năng địa hình."},
"Mercedes-Maybach":{country:"Đức",founded:"1909",hq:"Stuttgart, Germany",legal:"Mercedes-Benz / Maybach",focus:"Ultra-luxury limousine",note:"Tập trung hàng ghế sau, vật liệu cao cấp và cá nhân hóa."},
"BMW":{country:"Đức",founded:"1916",hq:"Munich, Germany",legal:"BMW Group",focus:"Luxury performance",note:"Động lực học, công nghệ điện hóa và cabin cao cấp."}
};

const EXTRA_CARS=[
{id:"mercedes-maybach-s680",brand:"Mercedes-Maybach",name:"S 680 4MATIC",type:"Ultra Luxury Sedan",year:2025,usd:238000,vnd:6188000000,engine:"6.0L V12 Twin-Turbo",power:"621 hp",torque:"900 Nm",zero:"4,5 giây",top:"250 km/h",drive:"AWD",img:"https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=85"},
{id:"range-rover-sv",brand:"Range Rover",name:"Range Rover SV",type:"Ultra Luxury SUV",year:2025,usd:220000,vnd:5720000000,engine:"4.4L V8 Twin-Turbo",power:"626 hp",torque:"750 Nm",zero:"4,5 giây",top:"261 km/h",drive:"AWD",img:"https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=85"},
{id:"bentley-bentayga-speed",brand:"Bentley",name:"Bentayga Speed",type:"Ultra Luxury Performance SUV",year:2025,usd:270000,vnd:7020000000,engine:"4.0L V8 Twin-Turbo",power:"641 hp",torque:"850 Nm",zero:"3,9 giây",top:"310 km/h",drive:"AWD",img:"https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1200&q=85"},
{id:"bmw-xm-label",brand:"BMW",name:"XM Label",type:"Luxury Performance SUV",year:2025,usd:185000,vnd:4810000000,engine:"4.4L V8 Twin-Turbo + motor điện",power:"738 hp",torque:"1.000 Nm",zero:"3,8 giây",top:"290 km/h",drive:"AWD",img:"https://images.unsplash.com/photo-1556189250-72ba954cfc2b?auto=format&fit=crop&w=1200&q=85"},
{id:"ferrari-roma-spider",brand:"Ferrari",name:"Roma Spider",type:"Grand Touring Spider",year:2025,usd:278000,vnd:7228000000,engine:"3.9L V8 Twin-Turbo",power:"612 hp",torque:"760 Nm",zero:"3,4 giây",top:"320 km/h",drive:"RWD",img:"https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=85"},
{id:"aston-martin-db12-volante",brand:"Aston Martin",name:"DB12 Volante",type:"Luxury Convertible GT",year:2025,usd:250000,vnd:6500000000,engine:"4.0L V8 Twin-Turbo",power:"671 hp",torque:"800 Nm",zero:"3,7 giây",top:"325 km/h",drive:"RWD",img:"https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=85"}
];
EXTRA_CARS.forEach(x=>{if(!CARS.some(c=>c.id===x.id))CARS.push(x)});

CARS.forEach(c=>{
 c.manufacturer=BRAND_INFO[c.brand]||{country:"—",founded:"—",hq:"—",legal:c.brand,focus:"Luxury automotive",note:"Đối chiếu theo cấu hình thị trường."};
 c.production={modelYear:c.year,productionPeriod:`Đời xe ${c.year}`,specificDate:"Ngày xuất xưởng chính xác của một chiếc xe cụ thể cần VIN/CoC/hồ sơ nhà máy.",vin:"Dùng VIN để xác minh ngày sản xuất, nơi lắp ráp và cấu hình thực tế."};
 c.design={body:c.type,overall:"Thân xe được tạo hình theo ưu tiên khí động học và nhận diện thương hiệu; chiều dài/rộng/cao cụ thể phụ thuộc phiên bản.",materials:"Nhôm, thép cường độ cao, carbon fibre/composite và vật liệu nội thất cao cấp tùy mẫu.",aero:"Cản trước, hốc gió, sàn xe, diffuser, cánh gió hoặc active aero tùy mẫu.",layout:"Bố trí động cơ/dẫn động thay đổi theo từng mẫu và phiên bản."};
 c.components={powertrain:c.engine,transmission:"DCT / hộp số tự động hiệu suất cao / LST tùy mẫu.",chassis:"Khung gầm nhôm, thép hoặc carbon/composite tùy mẫu.",suspension:"Treo thể thao hoặc điều khiển điện tử tùy phiên bản.",brakes:"Phanh hiệu suất cao; carbon-ceramic là tùy chọn trên nhiều mẫu.",wheels:"Mâm hợp kim hiệu suất cao và lốp chuyên dụng tùy cấu hình.",electronics:"ABS, ESC, traction control, ECU, drive modes và hệ thống hỗ trợ tùy mẫu.",cabin:"Da, Alcantara, carbon, nhôm và vật liệu thủ công tùy cấu hình."};
 c.dimensions={length:"Theo phiên bản",width:"Theo phiên bản",height:"Theo phiên bản",wheelbase:"Theo phiên bản",weight:"Theo cấu hình/options"};
});


// Official model / manufacturer pages and visual-reference gallery data.
// Where a manufacturer does not expose an individual public model URL, the official brand page is used.
const OFFICIAL_MODEL_URLS={
 "ferrari-12cilindri":"https://www.ferrari.com/en-EN/auto/12cilindri",
 "ferrari-sf90":"https://www.ferrari.com/en-EN/auto/sf90-stradale",
 "ferrari-296":"https://www.ferrari.com/en-EN/auto/296-gtb",
 "ferrari-purosangue":"https://www.ferrari.com/en-EN/auto/ferrari-purosangue",
 "lamborghini-revuelto":"https://www.lamborghini.com/models/revuelto",
 "lamborghini-temerario":"https://www.lamborghini.com/models/temerario",
 "lamborghini-urus":"https://www.lamborghini.com/models/urus",
 "lamborghini-svj":"https://www.lamborghini.com/models/aventador",
 "bugatti-tourbillon":"https://newsroom.bugatti.com/en/models/tourbillion-en",
 "bugatti-chiron":"https://www.bugatti.com/the-bugatti-models/chiron",
 "mclaren-750s":"https://cars.mclaren.com/en/latest/post/750s",
 "mclaren-artura":"https://cars.mclaren.com/en/latest/post/artura",
 "porsche-gt3rs":"https://www.porsche.com/international/models/911/911-gt3-rs/",
 "porsche-turbos":"https://www.porsche.com/international/models/911/911-turbo-models/",
 "aston-valkyrie":"https://www.astonmartin.com/en/models/valkyrie",
 "aston-db12":"https://www.astonmartin.com/en/models/db12",
 "rolls-phantom":"https://www.rolls-roycemotorcars.com/en_US/showroom/phantom.html",
 "rolls-cullinan":"https://www.rolls-roycemotorcars.com/en_US/showroom/cullinan.html",
 "bentley-gt":"https://www.bentleymotors.com/en/models/continental-gt/continental-gt-speed.html",
 "mercedes-one":"https://www.mercedes-amg.com/en/home/vehicles/amg-one.html",
 "mercedes-gt63":"https://www.mercedes-amg.com/en/home/vehicles/gt-coupe.html",
 "maserati-mc20":"https://www.maserati.com/global/en/models/mc20",
 "koenigsegg-jesko":"https://www.koenigsegg.com/model/jesko",
 "pagani-utopia":"https://www.pagani.com/utopia/",
 "rimac-nevera":"https://www.rimac-automobili.com/nevera/",
 "mercedes-maybach-s680":"https://www.mercedes-benz.com/en/vehicles/passenger-cars/mercedes-maybach-s-class/",
 "range-rover-sv":"https://www.rangerover.com/en-us/range-rover/models-and-specifications/sv.html",
 "bentley-bentayga-speed":"https://www.bentleymotors.com/en/models/bentayga/bentayga-speed.html",
 "bmw-xm-label":"https://www.bmw.com/en/automotive-life/bmw-xm-label.html",
 "ferrari-roma-spider":"https://www.ferrari.com/en-EN/auto/ferrari-roma-spider",
 "aston-martin-db12-volante":"https://www.astonmartin.com/en/models/db12-volante"
};

const TECH_IMAGES={
 // High-quality automotive detail references. They are explicitly labelled as technical/reference imagery in the UI.
 engine:"https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1200&q=85",
 interior:"https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=1200&q=85",
 wheel:"https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=85",
 brake:"https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1200&q=85"
};

const MODEL_GALLERIES={
 "ferrari-12cilindri":[
  ["Ngoại thất — góc trước", "https://baogiaothong.mediacdn.vn/603483875699699712/2024/5/3/12cilindriwhiteint02-2048x1366-17147236017751267987055.png"],
  ["Khoang lái", "https://baogiaothong.mediacdn.vn/603483875699699712/2024/5/3/12cilindriwhiteint02-2048x1366-17147236017751267987055.png"],
  ["Khoang động cơ V12 — ảnh tham khảo", "https://cdn.motor1.com/images/mgl/bgl66w/s1/2025-ferrari-12cilindri-spider-first-drive-review.jpg"]
 ],
 "bugatti-tourbillon":[
  ["Chassis & powertrain", "https://images.carexpert.com.au/cms/v1/media/2024-06-bugatti-tourbillion-details-2.jpg"],
  ["Thiết kế phía sau", "https://cdn0.celebritax.com/sites/default/files/styles/vertical_to_horizontal/public/bugatti_tourbillon_10.jpg"]
 ],
 "bentley-bentayga-speed":[
  ["Nội thất", TECH_IMAGES.interior ]
 ]
};

const BRAND_OFFICIAL={
 "Ferrari":"https://www.ferrari.com/",
 "Lamborghini":"https://www.lamborghini.com/",
 "Bugatti":"https://www.bugatti.com/",
 "McLaren":"https://cars.mclaren.com/",
 "Porsche":"https://www.porsche.com/",
 "Aston Martin":"https://www.astonmartin.com/",
 "Rolls-Royce":"https://www.rolls-roycemotorcars.com/",
 "Bentley":"https://www.bentleymotors.com/",
 "Mercedes-AMG":"https://www.mercedes-amg.com/",
 "Maserati":"https://www.maserati.com/",
 "Koenigsegg":"https://www.koenigsegg.com/",
 "Pagani":"https://www.pagani.com/",
 "Rimac":"https://www.rimac-automobili.com/",
 "Mercedes-Maybach":"https://www.mercedes-benz.com/",
 "Range Rover":"https://www.rangerover.com/",
 "BMW":"https://www.bmw.com/"
};

CARS.forEach(c=>{
 c.official=OFFICIAL_MODEL_URLS[c.id]||BRAND_OFFICIAL[c.brand]||"#";
 c.production=c.production||{};
 c.production.status=c.year>=2026?"Mẫu xe thế hệ mới / giai đoạn sản xuất tùy thị trường":"Đời xe tham khảo";
 c.production.modelLaunch=c.production.modelLaunch||`Thông tin ra mắt mẫu ${c.name} được xác minh từ tài liệu/website chính hãng.`;
 c.production.vehicleBuildDate="Ngày sản xuất thực tế của CHIẾC XE cụ thể: cần tra theo VIN/CoC hoặc hồ sơ nhà máy; website không tự suy đoán một ngày cụ thể.";
 c.production.productionTrace="VIN → hồ sơ sản xuất → CoC → hồ sơ đại lý/nhà máy";
 c.gallery=MODEL_GALLERIES[c.id]||[
   ["Ngoại thất — ảnh mẫu",c.img],
   ["Khoang nội thất — ảnh tham khảo",TECH_IMAGES.interior],
   ["Khoang động cơ / hệ truyền động — ảnh tham khảo",TECH_IMAGES.engine],
   ["Mâm & phanh — ảnh tham khảo",TECH_IMAGES.brake]
 ];
});

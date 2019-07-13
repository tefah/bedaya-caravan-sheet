import csv from 'csv';
import fs from 'fs';

let res = `Trade name,Form,Generic name,quantity,exp date,Barcode
Dolphin 5%,Gel,Diclophinac sodum,41,3/1/2021,6221163002999
Diosed _c,tab,diosmin-ascorbic acid,30,4/1/2020,
timogen,syrup,temonum methyl sulfate,25,8/1/2019,6221042056006
Glaryl 4mg,tab,Glimipride,18,4/1/2021,6221163007333
Disartan 80mg,cap,valsartan,4,2/1/2021,6223002142729
Dicynone,tab,diethylammonum,6,8/1/2021,6221042096006
Gaptin 300mg,cap,Gapapentin,19,4/1/2021,6223002145713
Glimadel,tab,Glimepridine,20,5/1/2021,6222003701299
cidophage 500mg,tab,metformin,60,3/1/2020,6221163004221
Delsosin 600mg,tab,azythromycin,210,8/1/2019,6221163014497
Flucamox 500mg,vial,amoxicillin,10,9/1/2020,6221042559002
Nausilex,amp,alizapride,9,7/1/2020,622003702383
Mexicam,amp,meloxicam,7,8/1/2020,6221163005518
Dicynone,amp,diethylammonum-sulfonate,6,7/1/2021,6222003700082
Rani,amp,Rantidine,3,10/1/2020,6221151001086
alphanova,eye drop,brimonidine,2,8/1/2019,6224000219550
Emox 500mg,cap,amoxicillin,70,6/1/2021,6221032131492
zxtec,oral drop,ceterazine dihydrochloride,20,8/1/2020,6221045008590
Decal B12.N,syrup,ca-vit D3-vit B12,15,5/1/2020,6221075051184
folic,cap,folic acid,26,10/1/2019,
Glucofer,tab,ferrose of gluconate,18,8/1/2020,
pharocal,tab,ca carbonate,14,7/1/2020,
L-carnitine,cap,L-carnitine,21,8/1/2020,
Batrafen,solution,ciclopirox-olamine,6,10/1/2019,6223002148868
Buspar 10mg,tab,busbirone hydrochloride,2,4/1/2020,6224001007088
Adol,cap,paracetamol,9,3/1/2020,6291100088027
Mexicam,amp,meloxicam,20,8/1/2020,6221163005518
zithrokan 200mg,suspention,azithromycin,38,1/1/2021,
Navoproxin,supposatory,meclozine,72,5/1/2020,6221163006003
Dolphin 5%,Gel,declophinac Na,60,3/1/2020,6221163002999
Nausilex,amp,alizapride Hcl,10,7/1/2020,6222003702383
flabu 40mg,oral drops,ibuprofen,42,2/1/2020,6221163003767
Aspocid 75mg,chewable tab,acetyl salicylic acid,82,3/1/2020,6221043010328
flabu 40mg,oral drops,ibuprofen,42,2/1/2020,6221163003767
farcotilium 5mg,oral suspention,domperidone,25,7/1/2020,6223000011935
ipravent-s,inhalation,ipratrobium-sulbotamole,43,10/1/2019,6221060007707
Dolphin 12.5mg,supposatory,diclofinac sodum 12.5mg,83,1/1/2021,6221163002609
Blokium 50mg ,tab,atenolol,20,5/1/2021,150218071024
Blokium DIU,tab,atenolol,20,3/1/2022,150218100025
Blokium DIU,tab,atenolol 100mg ,7,9/1/2019,150218100025
clopidogrel 75mg,tab,clopidogrel,10,8/1/2019,6223004190551
Dophin 50mg,supposatory,diclophinac sodum 50mg,100,1/1/2021,6221163003057
mucosol,tab,carbocysteine 375mg,10,11/1/2020,
Rowachol,tab,multivitamins,4,1/1/2021,6221025030641
maxophage xr 1000mg,tab,metformin,9,11/1/2019,6223004519925
paxetin,tab,paroxitine,7,11/1/2019,6221094036919
Nitrotard,cap,nitroglycerin,12,9/1/2019,
moxen,cap,meloxicam,10,12/1/2019,
monomak 20mg ,tab,isosorbide,4,9/1/2020,6221088010598
metformin 500mg,tab,metformin,4,2/1/2020,6221042061413
Gatstar,eye drop,Gatifloxacin,7,8/1/2019,6224000219413
orchazid,eye drop,ketotifen,4,8/1/2019,6223005440242
Nevilob 5mg,tab,nebivolol,4,1/1/2020,622303579883
Adol 500mg,tab,paracetamol,480,3/1/2020,6291100088027
cecendazole,cap,secendazole,10,12/1/2019,
tearsgaurd,eye drop,hydroxypopylmethyline,3,5/1/2019,6223005440198
Delzosin,tab,azithromycim,65,8/1/2019,6221163007611
glucofer 300mg ,tab,ferrous gluconate,70,8/1/2020,
Flucamox 500mg,vial,Amoxyciliin+Flucloxacillin ,41,9/1/2020,6221042559002
E-mox 500mg,caps,Amoxycillin,70,6/1/2021,6221032131492
Dolphin 3%,Topical gel,Diclophenac sodium,39,3/1/2021,6221163002937
Ectomethrin 2.5,Lotion,Permethrin,4,5/1/2020,6221035004
Anallerge 4mg,Tab,Clorophenramine meleate,7,5/1/2021,6221068001158
Acetylcysteine 200mg,Eff.,Acetylcistein,2,10/1/2020,6221042202007
Vascular,Tab,Isoxsuprine,21,2/1/2022,6221042002003
Vascular,Tab,Isoxsuprine,19,8/1/2022,6221042002003
Rheumarine,Rectal Supp.,Diclophenac sodium,3,8/1/2019,6221042386417
Gaptin 300mg,caps,Gabapentin,6,4/1/2021,6221163004221
Tialepsy 1000mg,Tab,Levetiracetam,50,11/1/2020,6224000866068
Dolphin 12.5mg,Supp.,Diclophenac sodium ,72,6/1/2020,6221163002609
Aldactone 100mg,Tab,Spirolactone,4,6/1/2020,6221068905746
Amebazole 1gm,Tab,Secnidazole,43,5/1/2020,6224001026140
Clomid 50mg,Tab,Clompjine citrate,39,4/1/2021,6223002142309
Verm-1 500mg,Tab,Mebendazole,54,6/1/2021,1830073
Cotril 400/80mg,Tab,Co-Trimoxazole,85,10/1/2019,6221067000879
Paracetamol,Tab,Paracetamol,20,5/1/2021,6221067002767
Ethyl Alcohol,Spray,..,9,5/1/2021,6224000810115
Cidophage 500mg,Tab,Metformin Hcl,60,3/1/2020,6221043010830
Fosamax 70mg,Tab,Aldendronate,9,5/1/2020,32504
Glimadel 2mg,Tab,Glimepride,88,5/1/2021,6221163014480
Neurovit 3ml,Amp.,Vit B1+B6+B12,,12/1/2019,266533413
Carvipress 6.25mg,Tab,Carvidolol,31,2/1/2020,6223002140343
Nifurox 200mg,Suspension,Nifuroxazide,41,8/1/2019,1607056
Verm-1 500mg,Tab,Mebendazole,4,6/1/2021,1830073
Flabu,Oral Drops,Ibuprofen,24,2/1/2020,6221163003767
Magnabiotic 1200mg,I.V injection,Amoxycillin+clavulinic acid,39,1/1/2020,6221042563000
Flabu 40mg/ml,Oral Drops,Ibuprofen,36,2/1/2020,6221163003767
Selgon 20mg,Tab,Pipazethate Hcl,75,12/1/2019,6221032115058
Selgon 20mg,Tab,Pipazethate Hcl,9,8/1/2019,6221032115058
Effox 50mg,caps,Isosorbide-5-mononitrate,9,11/1/2022,6222003700891
Effox 25mg,caps,Isosorbide-5-mononitrate,5,11/1/2022,6222003701317
Fastacure 20mg,caps,Omeprazole,2,2/1/2020,6221088021549
Evastine 10mg,Tab,Ebastine,2,10/1/2020,6223003570125
Glucovance 500/5mg,Tab,Metformin 500mh / Glibenclamide 5mg,2,11/1/2019,6222003701836
Burinex 1mg,Tab,Bumetanide,9,4/1/2020,6222003700006
Coloverin D,Tab,Mebeverine+Dimethicone,1,3/1/2020,6222006501419
Coloverin D,Tab,Mebeverine+Dimethicone,1,4/1/2020,6222006501419
Furazol,Tab,Metrondiazole+Diloxanide furoate,1,2/1/2020,6221032112842
Glucophage 1000mg,Tab,Metformin Hcl,1,2/1/2020,6222003702482
Divido 75mg,caps,Diclofenac Sodium,1,11/1/2019,6281102230593
Gaptin 300mg,caps,Gabapentin,1,4/1/2021,6221163014497
Glimadel 3mg,Tab,Glimepride,1,5/1/2021,6221163014497
Feldoral 20mg,caps,Piroxicam,1,1/1/2020,6221042150001
Dolphin - K 75mg,Supp.,Diclofenac Sodium,75,5/1/2020,6221163003439
Flabu 40mg/ml,Oral Drops,Ibuprofen,42,2/1/2020,6221163003767
Gatistar .3%,Eye Drops,Gatifloxacin .3%,191,8/1/2019,6224000219413
Farcotilium 5mg/5ml,Suspension,Domperidone,9,7/1/2020,6223000011935
Nanazoxide 100mg,Suspension,Nitazoxanide,10,6/1/2021,6224000794255
Serpass 100mg,Tab,Sertaline,18,1/1/2021,6223002141647
Selgon 20mg,Tab,Pipazethate Hcl,7,8/1/2019,6221032115058
Sedclarit ,Tab,Loratadine,10,4/1/2020,6221042074400
Spasmag ,caps,Mag.+Yeast,5,2/1/2020,6223002145614
Terbin 250mg,Tab,Terbinafine,20,2/1/2021,6223002142828
Sinopril Co,Tab,Lisinopril+Hydrochlorothiazide,3,6/1/2020,6223002142286
Stellasil 5mg,Tab,Trifluoperazine,2,7/1/2021,6221068010846
Beclosone forte,inhaler,Beclomethasone dipropionate,9,5/1/2021,6221060005703
Bisoprolol 5 mg,tab,Bisoprolol fumarate,9,10/1/2020,171055
Ciprodiazol,tab,Ciprofloxacin + Metronidazole,8,4/1/2020,6222003702420
Delarex,tab,Desloratidine,10,3/1/2021,6223002142521
Deltarhino,nasal spray,Ephedrine + Naphazoline,20,4/1/2021,6223002148929
Disartan 160 mg,caps,Valsartan,20,3/1/2021,6223002145720
Disartan 80 mg,caps,Valsartan,14,2/1/2021,6223002145713
Disartan-co 80/12.5 mg,caps,Valsartan + Hydrochlorothiazide,13,3/1/2021,6223002145058
Doxiproct,rectal ointment,Ca dobesilate + Lidocaine,31,6/1/2020,6222003702048
Halonace 5 mg,tab,Haloperidol,3,"2/2021 , 3/2021",6221068000441
Hostacortin H 5 mg,tab,Prednisolone,11,12/1/2020,6223003991913
Indomethacin 50 mg,caps,Indomethacin,20,5/1/2020,6221151002550
Izoptomil 80 mg,tab,Verapamil,13,12/1/2019,6221060005604
Lipanthyl,caps,Fenofibrate,9,1/1/2021,6222003701942
Lipona 10 mg,tab,Atorvastatin,12,1/1/2020,6221042068009
Lipona 20 mg,tab,Atorvastatin,26,2/1/2020,6221042094008
Lipona 40 mg,tab,Atorvastatin,16,2/1/2020,6221042100013
Lucidril 500 mg,tab,Meclofenoxate,21,2/1/2021,6222003702116
Metrovent,inhaler,Salmeterol,11,11/1/2020,6221060004836
Mexicam,amp,Meloxicam,62,8/1/2020,6221163005518
Normalex,oral drops,Soudium picosulphate,12,4/1/2020,6221094010025
Polyfresh,ophth. solution,Sodium hyaluronate,13,5/1/2020,6223005440174
Ultracillin,vial,Ampicillin + Sulbactam,44,4/1/2021,6221042551013
Zocor 20 mg,tab,Simvastatin,10,2/1/2020,
Zollipak 30 mg,caps,Lansoprazole,2,1/1/2020,6221042173017
adole 500 mg ,tab,paracetamol,800,3/2020,6291100088027
timogen,syrup,tiemonium methyl sulphate,28,8/2019,*6221163007222
gatistar 0.3%,opthalmic solution,gatifloxacin,100,8/2019,*6224000219413
flabu 40 mg,oral drops,ibuprofin,95,2/2020,*6221163003767
colona,tab,sulpiride + mebeverine HCL,13,1/2021,*6223003974190
crestor,tab,rosuvastatin,4,12/2019,*6223003270261
crestor,tab,rosuvastatin,1,4/2020,*6223003270261
diosed.c 500mg ,tab,diosmine + ascorbic acid + hesperidin,2,4/2020,*6221042056006
carvidelol 25 mg,tab,cavidelol,4,8/2019,*6221126000109
silymarin plus,sachets,salymarin 70% 200mg+ acetyl cysteine 200 mg alpha tocophenol acetate,34,9/2020,*6221042211009
atorostat 40 mg,tab,atorvastatin,131,2/2020,*6221163009950
orchazid,opthalmic solution,ketotifan,150,8/2019,*6223005440242
orchadexoline,opthalmic solution,chloramphinicol + dexamethazone+tetryzoline,,4/2021,*6224000219239
flucamox 1 gm,vial,amoxicillin + flucloxacillin,50,9/2019,**622104244005
dolphin 5%,topical gel ,diclofenac sodium,82,3/2020,*6221163002999
nifurax 200/5,suspension,nifuroxazide,20,8/2019,**1607056
pandermal,ointment,neomycin_ nyststine-gramicidine,1000,7/2020,
vegaskine 120 ml ,syrup,paracetamol + chlorphiramine +pseudoephedrine,59,4/2020,*6223000171028
ethyl alcohol 70%,spray,ethyl alcohol 70%,8,12/2020,
dolphin,suppositeries, diclofenac sodium 12.5 mg,100,6/2020,*6221163002609
gaptin 300 mg,capsules,gabapentin,50,4/2021,*6221163004321
buminex 1 mg,tab,bumetanide 1 mg,9,4/2020,*622003700006
bisocard plus 5,tab,bisoprolol + hydrochlorothiazide,17,3/2021,*6223002142620
bisocard plus 5,tab,bisoprolol + hydrochlorothiazide,5,2/2020,*6223002140657
amebazole,tab,secnidazole,10,5/2020,*6224001026140
virustat 800,tab,acyclovir,8,12/2019,*6221094077721
zollpak 30 mg,capsules,lansoprazole,12,11/2020,*6221042173017
trivastal 50mg,tablets,piribedil,3,1/1/2020,
atorstat 20mg,tablets,atorvastatin,66,6/1/2020,
nifurox 200mg,suspension,nifuroxazide,20,8/1/2019,
modzar ,tablets,,40,12/1/2019,
cortiplex B6 150mg,im injection,B6 ,8,2/1/2021,
cortiplex B6 300mg,im injection,B6 ,8,2/1/2021,
mexicam 15mg,im injection,meloxicam,3,8/1/2020,
lornoxicam 8mg,im injection,lornoxicam,9,1/1/2020,
flabu 40mg,oral drops,ibuprofen,34,2/1/2020,
cipro 3mg,otic solution,ciprofloxacin,18,2/1/2020,
batrafen 15ml,solution,ciclopirox-olomine,10,2/1/2020,
batrafen 15ml,solution,ciclopirox-olomine,8,10/1/2019,
dolphin k 15ml,oral drops,diclofenac k,31,3/1/2021,
dolphin k 15ml,supp.,diclofenac k,60,6/1/2019,
cortiplex b6,ampoules,pyridoxine,9,4/1/2020,
rani,ampoules,ranitidine,11,10/1/2020,
flabu ,oral drops,ibuprofen,42,2/1/2020,
acetylcistein,sachets,acetylcistein,26,1/1/2020,
navoproxin,supp.,meclizine,90,5/1/2020,
delpanto,tablets,pantoprazole,48,10/1/2019,
xanthistop 120mg,tablets,febuxostat,48,12/1/2019,
xanthistop 80mg,tablets,febuxostat,49,5/1/2020,
dolcyl 2mg,tablets,glimepiride,20,10/1/2019,
enemax 120ml,enema,monosodium phosphate,7,1/1/2020,
livoprotect 40mg,sachets,silymarin,9,2/17/2020,
sigmacyn,oral powder,sulttamicllin,23,3/1/2019,
e-mox 500mg,capsules,amoxycillin,180,6/1/2021,
dolphin k ,supp.,diclofenac k,17,5/1/2020,
dolphin na,supp.,diclofenac na 12.5mg,13,1/1/2021,
captopril ,tablets,captopril,4,8/1/2019,
fastcure 20mg,capsules,omeprazole,7,2/1/2020,
feldoral,capsules,piroxicam,39,1/1/2020,
timogen,syrup,tiemonium methylsulphate,25,8/1/2019,
miconaz 20g,oral gel,miconazole,13,9/1/2021,
gynozole 400mg,vaginal capsules,miconazole nitrate 400mg,17,12/1/2020,
gynozole 200mg,vaginal capsules,miconazole nitrate 200mg,17,9/1/2020,
navoproxin 50mg,supp.,meclizine hcl 50mg,12,5/1/2020,
cervitam,capsules,piracetam 400mg,13,6/1/2020,
claudicat,tablets,cilostazole 50mg,3,12/1/2019,
cerebro 400mg,capsules,piracetam 400mg,11,3/1/2020,
baby rest,drop,simethicone 40mg,26,12/1/2020,
deltavit,tablets,cyanocoblamine,4,3/1/2020,
ateno 50mg,tablets,atenolol,1,3/1/2020,
adolor 30mg,ampoules,ketorolac tromethamine,8,6/1/2020,
delarex 5mg,tablets,desloratadine,22,3/1/2020,
riba 400mg,capsules,ribavirin,17,5/1/2020,
octomotol 110mg,tablets,bumadizone ca,10,9/1/2020,
metacardia 20mg,tablets,trimetazidine,31,11/1/2019,
levodel 500mg,tablets,levofloxacin,90,5/1/2020,
reparil gel 40g,gel,aescin,15,5/1/2020,
extrauma 15g,cream,recombinant hirudin,4,10/1/2020,
batrafen 10ml,cream,ciclopirox-olomine,7,2/1/2020,
doxiproct 30g,ointment,lidocaine hydrochloride,4,6/1/2020,
gatistar .3%,solution,gatifloxacine,75,8/1/2019,
mucotec 150mg,capsules,erdosteine,47,2/1/2020,
delpanto 20 mg,tab,pantoprazole,1,10/2019,*6221163001442
gaptin 100mg,capsules,gabapentin,1 شريط,4/2020,*82512
gaptin 30 mg,capsules,gabapentin,1 شريط,4/2021,*82519
vildogluse 50 mg,tab,vildogliptin,50,6/2020,*6224000866341
vasonorm 5 mg ,tab,amlodipine,61,10/2020,*6221151002512
vasonorm 10 mg ,tab,amlodipine,2,8/2020,*6221151002505
cerebro 400 mg,capsules,piracetam,3,3/2020,*6224000730451
cerebro 400 mg,capsules,piracetam,2,5/2020,*6224000730451
cerebro 400 mg,capsules,piracetam,3,12/2020,*6224000730451
cerebro 400 mg,capsules,piracetam,1,11/2020,*6224000730451
cerebro 400 mg,capsules,piracetam,1,4/2021,*6224000730451
celebrex 200 mg,capsules,celecoxib,1,12/2019,*6221180000893
coloverin -d,tab,mebverine,6,9/2020,
coloverin -d,tab,mebverine,3,10/2020,
antiver 100 mg,suspention,mebendazole,1,1/2020,*6223000171035
zollipak 30 mg,capsules,lansoprazole,1,1/2020,*6221042173017
navoproxin,tab,meclizine hcl 25mg + pyridoxine 50mg,105,3/2021,*6221163006119
navoproxin,tab,meclizine hcl 25mg + pyridoxine 50mg,16,3/2020,*6221163006119
aspocid,tab,acetyl salicyclic acid,65,3/2020,*6221043010328
ranitak 300 mg,tab,ranitidine,2,12/2019,*6221042023008
alzepizil 10,tab,dorepezil,15,,*6223002141678
aldomet,tab,methyl dopa,1,10/2019,*6221068904527
cidophage,tab,metformin,180,3/2020,*6221043010830
b - com,ampules,highly selective b complex,2,3/2020,*6221025024015
dicynone,ampules,diethylamon,14,7/2021,**622003700082
rankz,ampules,ranitidine,6,10/2020,*6221151001089
metrovent,inhaler,salmetrol,43,11/2020,*6221060004836
glycerin,suppositeries,gelatin,50,4/2020,*6223000011447
targo,tab,levofloxacin,30,3/2021,*6223002140299
Thrombo 75,tablet,clopidogrel,10,10/1/2019,6221032241191
Vastarel,tablet,trimetazidine dihydrochloride,17,5/1/2020,6223003960285
Biomax 500,capsules,Amoxicillin,18,4/1/2021,6221042162004
verm one,tablets,mebendazole,2,6/1/2021,1830073
vildagluse plus,tablets,vildaglipten 50   metformin hcl 1000,24,7/1/2020,6224000866358
orchatears plus,eye lubrical solution,polyvidone 5%,4,10/1/2019,6224000219158
mucosol,syrup,carbocysteine 250,10,2/1/2020,170615
mucosol,syrup,carbocysteine 125,6,2/1/2020,170565
batrafen 14,drops,ciclopirox-olamine,7,2/1/2021,6223002148868
batrafen 14,drops,ciclopirox-olamine,3,10/1/2019,6223002148868
hydroquine,tablets,hydroxychloroquine,7,2/1/2020,622003700549
aqua plus 100,syrup,,21,1/1/2020,6223003930059
flabu 40,suspension,ibubrufen,14,2/1/2020,6221163003767
puradin,intimate cleaner,,30,5/1/2021,00064
batrafen 10,ceam,ciclopirox-olamine,10,1/1/2021,6223002148349
lornoxicam,inj,lornoxicam,10,1/1/2020,6223004900563
cortiflex b6,IM,corticoadrenal 50 - corticosteroid 150 - pyridoxine 20,11,2/1/2021,6223004900280
dermatin 14,cream,cletrimazole 1%,10,9/1/2019,6223000011577
dermatin 14,cream,cletrimazole 1%,1,2/1/2020,6223000011577
thrombex 15,gel,hirudin,4,9/1/2019,622003702277
sediproct 20,cream,hydrocortisone,4,3/1/2021,6221508121118
doxiproct plus 20,ointment,calcium disulfate,5,6/1/2020,6222003702055
lornoxicam,tablets,lornoxicam,38,4/1/2021,6223004900310
lipicole 40,tablets,atrovastatin,10,2/1/2020,6221094026316
lanoxin 0.25,tablets,digoxin,16,11/1/2020,6221046009788
blokium 100,tablets,atenolol,20,5/1/2021,150218072025
doxium 500,capsules,calcium dolsilate monohydrate,20,2/1/2021,6221050050270
colona,tablets,sulpiride - mebeverine hcl,13,1/1/2021,6223003974190
crestor 5,tablets,rosuvastatin,5,12/1/2019,6223003270261
carnitol 500,capsules,l-carnitine tartrate 500,18,3/1/2020,6223004900082
cobal f,tablets,mecobalamin - folic acid,33,3/1/2020,6223002142194
cobal  ,tablet ,mecobalamin  ,18,8/1/2020,6223002142484
Thrombo 75,tablet,clopidogrel,10,10/1/2019,6221032241191
Vastarel,tablet,trimetazidine dihydrochloride,17,5/1/2020,6223003960285
Biomax 500,capsules,Amoxicillin,18,4/1/2021,6221042162004
verm one,tablets,mebendazole,2,6/1/2021,1830073
vildagluse plus,tablets,vildaglipten 50   metformin hcl 1000,24,7/1/2020,6224000866358
orchatears plus,eye lubrical solution,polyvidone 5%,4,10/1/2019,6224000219158
mucosol,syrup,carbocysteine 250,10,2/1/2020,170615
mucosol,syrup,carbocysteine 125,6,2/1/2020,170565
batrafen 14,drops,ciclopirox-olamine,7,2/1/2021,6223002148868
batrafen 14,drops,ciclopirox-olamine,3,10/1/2019,6223002148868
hydroquine,tablets,hydroxychloroquine,7,2/1/2020,622003700549
aqua plus 100,syrup,,21,1/1/2020,6223003930059
flabu 40,suspension,ibubrufen,14,2/1/2020,6221163003767
puradin,intimate cleaner,,30,5/1/2021,00064
batrafen 10,ceam,ciclopirox-olamine,10,1/1/2021,6223002148349
lornoxicam,inj,lornoxicam,10,1/1/2020,6223004900563
cortiflex b6,IM,corticoadrenal 50 - corticosteroid 150 - pyridoxine 20,11,2/1/2021,6223004900280
dermatin 14,cream,cletrimazole 1%,10,9/1/2019,6223000011577
dermatin 14,cream,cletrimazole 1%,1,2/1/2020,6223000011577
thrombex 15,gel,hirudin,4,9/1/2019,622003702277
sediproct 20,cream,hydrocortisone,4,3/1/2021,6221508121118
doxiproct plus 20,ointment,calcium disulfate,5,6/1/2020,6222003702055
lornoxicam,tablets,lornoxicam,38,4/1/2021,6223004900310
lipicole 40,tablets,atrovastatin,10,2/1/2020,6221094026316
lanoxin 0.25,tablets,digoxin,16,11/1/2020,6221046009788
blokium 100,tablets,atenolol,20,5/1/2021,150218072025
doxium 500,capsules,calcium dolsilate monohydrate,20,2/1/2021,6221050050270
colona,tablets,sulpiride - mebeverine hcl,13,1/1/2021,6223003974190
crestor 5,tablets,rosuvastatin,5,12/1/2019,6223003270261
carnitol 500,capsules,l-carnitine tartrate 500,18,3/1/2020,6223004900082
cobal f,tablets,mecobalamin - folic acid,33,3/1/2020,6223002142194
cobal  ,tablet ,mecobalamin  ,18,8/1/2020,6223002142484
Atorstat 10,tablets,atorvastatin,77,1/20/2019,622116000308
Atorstat 20,tablets,atorvastatin,4,6/20/2019,6221163009943
Dolphin 25,suppository,diclophenac sodium,100,6/21/2019,6221163002784
Dolphin 12.5,suppository,diclophenac sodium,3,1/21/2019,6221163002609
Dolphin 75,suppository,diclophenac sodium,89,5/20/2019,6221163003439
Dolphin 2.5,suppository,diclophenac sodium,58,6/20/2019,622463002609
Vildagluse  ,tablets,vildogliptin 50 + metformin 1000,23,7/20/2019,62240008666358
Vasonorm 5,tablets,amlodipine,1,10/20/2019,6221151002512
Vasonorm 10,tablets,amlodipine,87,8/20/2019,6221151002505
Vildagluse,tablets,vildaglipten 50   metformin hcl 1000,2,7/20/2019,6224000866358
Alveolin-P 100,syrup,supplement,18,12/19/2019,161112
Sedclarit,tablets,loratidine micronized,40,4/20/2019,6221042074000
Sterocor 10,capsules,simvastatin,4,10/20/2019,07153
Ipravent,Inhaler,Ipratropium bromide 20 + salbutamol sulphate ,9,10/19/2019,6221060005888
Vental,Oral inhaler,Declometasone + salbutamol,9,4/21/2019,6221060005888
Cervitam,capsules,Piractam,36,6/20/2019,6224001026324
Levozal,tablets,levocitrizine dihydrochloride,2,8/19/2019,1250074501
Moduretic,tablets,amiloride,2,11/21/2019,6221068904640
Deltavit B12,tablets,B12 + cyanocobal,12,3/20/2019,622116300241
Effox 50,capsules,isosorbide dinitrite,25,11/22/2019,6222003700891
Carvidilol,tablets,carvidilol,4,8/19/2019,6221126000109
Disposed c 500,tablets,diosmin,2,1/20/2019,6221042056006
Cobal,tablets,Micobalmin,4,1/20/2019,6223002140060
Silymarine plus,capsules,silymarine 70%,15,8/20/2019,6221042185003
Omega-3 plus,capsules,Fish oil 1000,4,11/19/2019,6221042164008
Seligon 20,tablets,Pipazethate HCl,68,12/19/2019,6221032115058
`

let resultant = []
let meds;
csv.parse(
  res,
  { columns: true },
  (err, result) => {
    result.forEach(row => {
      
      resultant.push(
        {
          value: row['Trade name'],
          label: row['Trade name']
        }
      )
    });

    console.log(resultant)
    
  }
)
export default resultant;
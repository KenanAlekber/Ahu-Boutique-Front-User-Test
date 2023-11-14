// import { Input } from '@chakra-ui/react'
// import React from 'react'

// export default function Modal() {
//     return (
//         <div>
//             <div class="fancybox-wrap fancybox-desktop fancybox-type-html fancybox-opened" tabindex="-1" style="width: 737px; height: auto; position: absolute; top: 27px; left: 391px; opacity: 1; overflow: visible;"><div class="fancybox-skin" style="padding: 0px; width: auto; height: auto;"><div class="fancybox-outer"><div class="fancybox-inner" style="overflow: auto; width: 737px; height: 425px;"><div id="hizliBakis"><link href="/Scripts/css/hizliBakis.css" rel="stylesheet">

//                 <div class="ProductPreviewContent">
//                     <ul>
//                         <li class="ProductPreviewItem">

//                             <div class="ProductPreviewLeft">
//                                 <div class="PreviewImages">
//                                     <div class="PreviewselectedImages">
//                                         <div class="PreviewselectedImagesBox">
//                                             <Image src={`https://localhost:7094/${posterImage?.imageUrl}`} alt={`Picture of ${name}`}>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div class="PreviewallImages">
//                                     <div class="PreviewallImagesItem">
//                                         <div class="PreviewallImagesBox">
//                                             <img src="https://static.ticimax.cloud/30743/Uploads/UrunResimleri/thumb/jeantas-cakimli-skiny-jean-lacivert-7b-fca.jpg?gt=638346201012558069" onclick="FastPreview.ThumbImageChange('https://static.ticimax.cloud/30743/Uploads/UrunResimleri/jeantas-cakimli-skiny-jean-lacivert-7b-fca.jpg?gt=638346201012558069')">
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div class="ProductPreviewRight">
//                                 <div class="ProductPreviewForm">
//                                     <div class="hizliBakis_Name">
//                                         Taş Çakımlı Skıny Jean Lacivert
//                                     </div>

//                                     <div id="divFiyatAlanlari">
//                                         <div class="hizliBakis_Price">
//                                             $19.36
//                                             <span class="kdvYazi">Vat included</span>
//                                         </div>
//                                         <div class="kombinFormline">
//                                             <div class="kombinright_line">

//                                             </div>
//                                         </div>
//                                     </div>

//                                     <div class="clear"></div>
//                                     <div id="divKombinUrunEkSecenek" class="divKombinUrunEkSecenek">
//                                         <div class="divKombinEksecenekTipi">
//                                             <div class="kombinFormline">
//                                                 <div class="kombinleft_line" style="width: auto;">Color</div>
//                                                 <div class="kombinright_line">
//                                                     <div>
//                                                         <div>
//                                                             <a onclick="FastPreview.SelectVariant(29769,251,0)" class="size_box  selected">Lacivert</a>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div class="clear"></div>
//                                         <div class="divKombinEksecenekTipi">
//                                             <div class="kombinFormline">
//                                                 <div class="kombinleft_line" style="width: auto;">Size</div>
//                                                 <div class="kombinright_line">
//                                                     <div>
//                                                         <div>
//                                                             <a onclick="FastPreview.SelectVariant(29769,676,1)" class="size_box  selected">34</a>
//                                                         </div>
//                                                         <div>
//                                                             <a onclick="FastPreview.SelectVariant(29769,677,1)" class="size_box ">36</a>
//                                                         </div>
//                                                         <div>
//                                                             <a onclick="FastPreview.SelectVariant(29769,678,1)" class="size_box ">38</a>
//                                                         </div>
//                                                         <div>
//                                                             <a onclick="FastPreview.SelectVariant(29769,679,1)" class="size_box ">40</a>
//                                                         </div>
//                                                         <div>
//                                                             <a onclick="FastPreview.SelectVariant(29769,688,1)" class="size_box ">42</a>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div class="clear"></div>
//                                     </div>
//                                     <div class="clear"></div>

//                                     <div class="clear"></div>
//                                     <div class="hizliBakis_Adet">
//                                         <div class="riSingle">
//                                             <a class="riDown btnHizliAzalt">Azalt</a>
//                                             <input type="text" id="txtHizliBakisAdet" class="txtSepetAdet" onchange="FastPreview.QuantityChange(this)" value="1" min="1" step="1" max="999999" data-double="false">
//                                                 <a class="riUp btnHizliArtir">Artır</a>
//                                         </div>
//                                     </div>

//                                     <div class="clear"></div>
//                                     <div style="width: 300px;">
//                                         <a href="javascript:void(0);" class="button hizliBakisSepeteEkle btnHizliSepeteEkle" style="display: inline-block; margin-top: 5px;">Add to cart</a>
//                                     </div>


//                                 </div>
//                             </div>
//                         </li>
//                     </ul>
//                     <div class="urunsecoverlay" style="display: none;"></div>
//                 </div>

//             {/* </div><div id="hizliBakisAltAlan"> */}



//                     {/* <script>
//                         $(document).ready(function () {
//                             setTimeout(function () {
//                                 $('#divHizliBakisBenzerUrun .owl-carousel, #divHizliBakisIlgiliUrun .owl-carousel').owlCarousel({
//                                     autoplay: true,
//                                     loop: false,
//                                     autoplayTimeout: 2000,
//                                     navClass: ['ProductListprev', 'ProductListnext'],
//                                     autoplaySpeed: 2000,
//                                     autoplayHoverPause: true,
//                                     margin: 30,
//                                     nav: true,
//                                     responsive: {
//                                         0: {
//                                             items: 2,
//                                             margin: 10,
//                                             nav: true,
//                                             loop: false
//                                         },
//                                         768: {
//                                             items: 2,
//                                             nav: true,
//                                             loop: false
//                                         }
//                                     }
//                                 });


//                             }, 500)
//                         });
//                     </script></div></div></div><a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a></div></div> */}
//         </div>
//     )
// }
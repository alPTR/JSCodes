Gallery = new function()
	{
		// URL list of a gallery images.
		var vaImgList = 
			[	"img/screenshots/Login_Page.jpg",
				"img/screenshots/Project_Jump.jpg",
				"img/screenshots/Task_Edit.jpg",
				"img/screenshots/Task_View.jpg",
				"img/screenshots/Search_View.jpg",
				"img/screenshots/Calendar_View.jpg"];
				
		var viCurrImgIndex = undefined;
		var voGalCont = undefined;
		var voGalBackground = undefined;
		var voImgCont = undefined;
				
		this.Open	= function(AStartIndex)
			{
				// Creating veil.
				voGalBackground = document.body.appendChild(document.createElement("DIV"));
				voGalBackground.onclick = new Function('{ Gallery.Close(); }');
				voGalBackground.setAttribute(GetClassAttrName(), 'gal_back');				
				// Creating an image container and controls.
				voGalCont = document.body.appendChild(document.createElement("DIV"));
				voGalCont.setAttribute(GetClassAttrName(), 'img_cont');
				voGalCont.innerHTML = 
					'<div onclick="Gallery.Prev();" class="prev_img" title="Previous image"></div>' +
					'<div onclick="Gallery.Next();" class="next_img" title="Next image"></div>'+
					'<div onclick="Gallery.Close();" class="close_img" title="Close gallery"></div>';
				// Loading an image.
				viCurrImgIndex = AStartIndex;	
				voImgCont = voGalCont.appendChild(document.createElement("IMG"));	
				voImgCont.src =	vaImgList[viCurrImgIndex]; 
				//console.log("Gallery opened");
			};
		
		this.Close	=	function()
			{
			//	console.log("Gallery Close.");
				RemoveElem(voGalCont);
				voGalCont = undefined;				
				RemoveElem(voGalBackground);
				voGalBackground = undefined;
				voImgCont	= undefined;
				viCurrImgIndex = undefined;
			};
				
		this.Next	= function()
			{
				//console.log("Gallery Next");
				if (viCurrImgIndex < vaImgList.length - 1)
					viCurrImgIndex ++;
				else
					viCurrImgIndex = 0;	
				voImgCont.src =	vaImgList[viCurrImgIndex];
			};
			
		this.Prev	= function()
			{
				//console.log("Gallery Prev");
				if (viCurrImgIndex > 0)
					viCurrImgIndex --;
				else
					viCurrImgIndex = vaImgList.length - 1;	
				voImgCont.src =	vaImgList[viCurrImgIndex];
			};
	};

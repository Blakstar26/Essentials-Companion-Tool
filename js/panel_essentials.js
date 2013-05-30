function set_quarterWatt_Env()
{
	resetLedBoardButtons();	
	resetColorTempButtons();
	resetLedSpacingButtons();
	resetPanelDims();
	resetWireType();
	resetWireLength();
	resetFactoryOptionsButtons();
	resetDescription();
	resetPriceModifierButtons();
	resetCommentsBox();
	
	document.getElementById("tail-type-dropbox").options.length = 1;
	document.getElementById("24").disabled=false;
	document.getElementById("a").disabled=false;
	document.getElementById("b").disabled=false;
	document.getElementById("c").disabled=false;
	document.getElementById("d").disabled=true;
	document.getElementById("ro").disabled=false;
	document.getElementById("fr").disabled=false;
	document.getElementById("nl").disabled=false;
	document.getElementById("cl").disabled=false;
	document.getElementById("df").disabled=false;
	document.getElementById("cp").disabled=false;
	document.getElementById("sc").disabled=false;
	document.getElementById("af").disabled=false;
	document.getElementById("so").disabled=false;
	document.getElementById("sg").disabled=true;
	document.getElementById("distributor_price").disabled=false;
	document.getElementById("distributor_price").checked=true;
	var panelExits = new Array('WE1', 'WE2', 'WE3', 'C');
	setPanelExits(panelExits);
}

function set_tenthWatt_Env()
{
	resetLedBoardButtons();
	resetColorTempButtons();
	resetLedSpacingButtons();
	resetPanelDims();
	resetWireType();
	resetWireLength();
	resetFactoryOptionsButtons();
	resetDescription();
	resetPriceModifierButtons();
	resetCommentsBox();
	
	document.getElementById("tail-type-dropbox").options.length = 1;
	document.getElementById("24").disabled=true;	
	document.getElementById("a").disabled=true;
	document.getElementById("b").disabled=true;
	document.getElementById("c").disabled=true;
	document.getElementById("d").disabled=false;
	document.getElementById("ro").disabled=false;
	document.getElementById("fr").disabled=true;
	document.getElementById("nl").disabled=false;
	document.getElementById("cl").disabled=true;
	document.getElementById("df").disabled=false;
	document.getElementById("cp").disabled=true;
	document.getElementById("sc").disabled=false;
	document.getElementById("af").disabled=true;
	document.getElementById("so").disabled=true;
	document.getElementById("sg").disabled=true;
	document.getElementById("d").checked=true;
	document.getElementById("distributor_price").disabled=false;
	document.getElementById("distributor_price").checked=true;
	var panelExits = new Array('WE1', 'WE2', 'WE3', 'C');
	setPanelExits(panelExits);
}

//******************************************************************

function resetLedBoardButtons()
{
	document.getElementById("25").disabled=false;
	document.getElementById("10").disabled=false;
}

function resetColorTempButtons()
{
	document.getElementById("24").disabled=false;
	document.getElementById("27").disabled=false;
	document.getElementById("30").disabled=false;
	document.getElementById("35").disabled=false;
	document.getElementById("40").disabled=false;
	document.getElementById("45").disabled=false;
	document.getElementById("24").checked=false;
	document.getElementById("27").checked=false;
	document.getElementById("30").checked=false;
	document.getElementById("35").checked=false;
	document.getElementById("40").checked=false;
	document.getElementById("45").checked=false;
}

function resetLedSpacingButtons()
{
	document.getElementById("a").disabled=false;
	document.getElementById("b").disabled=false;
	document.getElementById("c").disabled=false;
	document.getElementById("d").disabled=false;
	document.getElementById("a").checked=false;
	document.getElementById("b").checked=false;
	document.getElementById("c").checked=false;
	document.getElementById("d").checked=false;
}

function resetPanelDims()
{
	document.getElementById("standard-dim").disabled=false;
	document.getElementById("custom-dim").disabled=false;
	document.getElementById("standard-dim").checked=false;
	document.getElementById("custom-dim").checked=false;
	document.getElementById('height-input').innerHTML='';
	document.getElementById('width-input').innerHTML='';
	document.getElementById('sqft-input').innerHTML='';	
}

function resetWireType()
{
	/* document.getElementById('wire-exit-buttons').reset(); */
}

function resetWireLength()
{
	document.getElementById("standard-wire-length").disabled=false;
	document.getElementById("custom-wire-length").disabled=false;
	document.getElementById("standard-wire-length").checked=false;
	document.getElementById("custom-wire-length").checked=false;
}

function resetFactoryOptionsButtons()
{
	document.getElementById("fr").disabled=false;
	document.getElementById("nl").disabled=false;
	document.getElementById("cl").disabled=false;
	document.getElementById("df").disabled=false;
	document.getElementById("cp").disabled=false;
	document.getElementById("sc").disabled=false;
	document.getElementById("af").disabled=false;
	document.getElementById("so").disabled=false;
	document.getElementById("sg").disabled=false;
	document.getElementById("ro").disabled=false;
	document.getElementById("fr").checked=false;
	document.getElementById("nl").checked=false;
	document.getElementById("cl").checked=false;
	document.getElementById("df").checked=false;
	document.getElementById("cp").checked=false;
	document.getElementById("sc").checked=false;
	document.getElementById("af").checked=false;
	document.getElementById("so").checked=false;
	document.getElementById("sg").checked=false;
	document.getElementById("ro").checked=false;
}

function resetDescription() 
{
	document.getElementById('description').innerHTML="--";
	/* document.getElementById('description').innerHTML=''; */
	document.getElementById('watts').innerHTML='--';
	document.getElementById('total-panel-area').innerHTML='--';
	document.getElementById('number-of-leds').innerHTML='--';
	document.getElementById('dnPrice').innerHTML='0.00';
	//document.getElementById('watts-description').innerHTML=' ';
}

function resetPriceModifierButtons()
{
	document.getElementById("distributor_price").disabled=false;
	document.getElementById("d10_price").disabled=false
	document.getElementById("d19_price").disabled=false
	document.getElementById("roblon_price").disabled=false
	document.getElementById("distributor_price").checked=false;
	document.getElementById("d10_price").checked=false;
	document.getElementById("d19_price").checked=false;
	document.getElementById("roblon_price").checked=false;
}

function resetCommentsBox()
{	
	document.getElementById('comment').innerHTML=' '
	//document.getElementById('comment').reset();
}

//******************************************************************

function setPanelExits(panelExits)
{	
	for (i=0;i<panelExits.length;i++){
		var x = document.getElementById("tail-type-dropbox");
		var option = document.createElement("option");
		option.text = panelExits[i];
		try
		{
			// for IE earlier than version 8
			x.add(option,x.options[null]);
		}
		catch (e)
		{
			x.add(option, null);
		}
	}
}

//******************************************************************

function setPriceDisplay()
{ 
	var NORMAL_LABEL;
	var NEW_LABEL;
  
	if(document.getElementById("d10_price").checked==true)
	{
		NEW_LABEL = "!!!!D10 PRICING: ";
		NEW_LABEL = NEW_LABEL.fontcolor("#FF0000"); // sets color of the text to red
		document.getElementById('price_label').innerHTML=NEW_LABEL;
	} else if(document.getElementById("d19_price").checked==true)
	{
		NEW_LABEL = "!!!!D19 PRICING: ";
		NEW_LABEL = NEW_LABEL.fontcolor("#FF0000"); // sets color of the text to red
		document.getElementById('price_label').innerHTML=NEW_LABEL;
	} else if (document.getElementById("roblon_price").checked==true) 
	{
		var NEW_LABEL = "!!!!ROBLON PRICING: ";
		NEW_LABEL = NEW_LABEL.fontcolor("#FF0000"); // sets color of the text to red
		document.getElementById('price_label').innerHTML=NEW_LABEL;
	} else
	{
		NORMAL_LABEL = 'Distributor Net: ';
		document.getElementById('price_label').innerHTML=NORMAL_LABEL;
	}
	
} 

//******************************************************************

function setLedCode()
{
	var ledCode;
	if(document.getElementById("25").checked==true)
	{
		ledCode = "25";
	} else if(document.getElementById("10").checked==true)
	{
		ledCode = "10";
	} else 
	{
		alert("Please select 'LED Board' type!");
		exit();
	}
	return ledCode;
}

function setColorTempCode()
{	
	var colorTempCode;
	
	if(document.getElementById("24").checked==true)
	{
		colorTempCode = "24";
	} else 
	if(document.getElementById("27").checked==true)
	{
		colorTempCode = "27";
	} else if(document.getElementById("30").checked==true)
	{
		colorTempCode = "30";
	} else if(document.getElementById("35").checked==true)
	{
		colorTempCode = "35";
	} else if(document.getElementById("40").checked==true)
	{
		colorTempCode = "40";
	} else if(document.getElementById("45").checked==true)
	{
		colorTempCode = "45";
	} else
	{
		alert("Please select 'Color Temp'!");
		exit();
	}
	return colorTempCode;
}

function setLedSpacingCode()
{
	var ledSpacingCode;
	if(document.getElementById("a").checked==true)
	{
		ledSpacingCode = "A";
	} else if(document.getElementById("b").checked==true)
	{
		ledSpacingCode = "B";
	} else if(document.getElementById("c").checked==true)
	{
		ledSpacingCode = "C";
	} else if(document.getElementById("d").checked==true)
	{
		ledSpacingCode = "D";
	} else
	{
		alert("Please select 'LED Spacing' type!");
		exit();
	}
	return ledSpacingCode;
}

function setPanelHeightCode()
{
	var heightCode;
	var trueHeight;
	var roundHeight;
	var MIN = 0;
	var MAX = 120;
	if(document.getElementById('standard-dim').checked==true)
	{
		trueHeight = document.getElementById('height-input').value;
		if((trueHeight > MIN) && (trueHeight <= MAX) )
		{
			roundHeight = Math.ceil(trueHeight);
			heightCode = roundHeight;
		} else 
		{
			alert("Height dimension entered is not valid!\n\n"+"Please enter a height between 1 - 120 inches.");
			exit();
		}
	} else if(document.getElementById("custom-dim").checked==true)
	{
		heightCode = "XX";
	} else
	{
		alert("Please select 'Panel Dimension' type!");
		exit();
	}
	return heightCode;
}

function setPanelWidthCode()
{
	var widthCode;
	var trueWidth;
	var roundWidth;
	var MIN = 0;
	var MAX = 60;
	if(document.getElementById('standard-dim').checked==true)
	{
		trueWidth = document.getElementById('width-input').value;
		if((trueWidth > MIN) && (trueWidth <= MAX) )
		{
			roundWidth = Math.ceil(trueWidth);
			widthCode = roundWidth;
		} else
		{
			alert("Width dimension entered is not valid!\n\n"+"Please enter a width between 1 - 60 inches.");
			exit();
		}
	} else if(document.getElementById("custom-dim").checked==true)
	{
		widthCode = "XX";
	} else
	{
		alert("Please select 'Panel Dimension' type!");
		exit();
	}
	return widthCode;
}

function setWireLengthCode()
{
	var wireLengthCode;
	var DEFAULT = 8; //default length is 8 feet
	var CUSTOM_MIN = 0;
	var CUSTOM_MAX = 30;
	if(document.getElementById('standard-wire-length').checked==true)
	{
		wireLengthCode = DEFAULT;
	} else if(document.getElementById('custom-wire-length').checked==true)
	{
		var user_input = document.getElementById('wire-length-input').value;
		if ((user_input > CUSTOM_MIN) && (user_input <= CUSTOM_MAX))
		{
			wireLengthCode = Math.ceil(user_input);
		} else
		{
			alert("Wire length entered is not valid!\n\n"+"Please enter a length between 1 - 30 feet.");
			exit();
		}
	} else
	{
		alert("Please select 'Wire Exit Length' - 8ft Standard or Custom Length!");
		exit();
	}
	return wireLengthCode;
}

function setWireExitCode()
{
	var wireExitCode;
	var index = document.getElementById('tail-type-dropbox').selectedIndex;
	if(index != 0)
	{
		wireExitCode = document.getElementById('tail-type-dropbox').options[index].text;	
	} else
	{
		alert("Please select 'Wire Exit' type!\n\n"+"W2 is default exit.");
		exit();
	}
	return wireExitCode;
}

function setFactoryOptionsCode()
{
	var factoryOptionsCode = "";
	
	if (document.getElementById('nl').checked==true)
	{
		factoryOptionsCode = "/NL";
	} else	if(document.getElementById('cl').checked==true)
	{
		factoryOptionsCode = "/CL";
	} else if(document.getElementById('fr').checked==true)
	{
		/* factoryOptionsCode = "/FR"; */
		factoryOptionsCode = "";
	} else 
	{
		alert("Please select panel lens 'Factory Installed Option' type!");
		exit();
	}
	
	if(document.getElementById('df').checked==true)
	{
		factoryOptionsCode = factoryOptionsCode+"/DF";
	} 
	if (document.getElementById('cp').checked==true)
	{
		factoryOptionsCode = factoryOptionsCode+"/CP";
	}
	if(document.getElementById('af').checked==true)
	{
		factoryOptionsCode = factoryOptionsCode+"/AF";
	}
	if (document.getElementById('so').checked==true)
	{
		factoryOptionsCode = factoryOptionsCode+"/SO";
	}
	// if (document.getElementById('X').checked==true)
	// if (document.getElementById('X').checked==true)
	// if (document.getElementById('X').checked==true)
	if (document.getElementById('ro').checked==true)
	{
		factoryOptionsCode = factoryOptionsCode+"/RO";
	}
	return factoryOptionsCode;
}

//******************************************************************

function setSquareFoot()
{
	var squareFoot;
	var MIN_SQ_FOOT = 0;
	var MAX_SQ_FOOT = 50;
	if(document.getElementById('standard-dim').checked==true)
	{
		var trueHeight = ((document.getElementById('height-input').value)/12); //true height in feet
		var trueWidth = ((document.getElementById('width-input').value)/12); //true width in feet
		squareFoot = (trueHeight*trueWidth);
	} else if(document.getElementById("custom-dim").checked==true)
	{
		var user_input = parseFloat(document.getElementById('sqft-input').value);
		if((user_input > MIN_SQ_FOOT) && (user_input <= MAX_SQ_FOOT))
		{
			squareFoot = user_input; //convert user input from string to number, then store in var
		} else
		{
			alert("Square footage entered is not within acceptable range for a single panel!\n\n"+"Please enter value between 1-50 sqft.");
			exit();
		}
	} else
	{
		alert("Please select 'Panel Dimension' type!");
		exit();
	}
	squareFoot = squareFoot.toFixed(2);
	return squareFoot;
}

function setLedCount(squareFoot)
{
	//var squareFoot;
	var ledCount;
	
	var trueHeight;
	var trueWidth;
	var faux_height;
	var faux_width;
	var virt_spacing;
	var horiz_spacing;
	var virt_Led_count;
	var horiz_Led_count;
	
	//set LEDs vertical and horizontal spacing
	if(document.getElementById('a').checked==true)
	{
		virt_spacing = 2;
		horiz_spacing = 2;
	} else if(document.getElementById('b').checked==true)
	{
		virt_spacing = 3;
		horiz_spacing = 2;
	} else if(document.getElementById('c').checked==true)
	{
		virt_spacing = 4;
		horiz_spacing = 2;
	} else if(document.getElementById('d').checked==true)
	{
		virt_spacing = 1;
		horiz_spacing = 1;
	} else
	{
		alert("LED spacing cannot be set!");
		exit();
	}
	
	if(document.getElementById('standard-dim').checked==true)
	{
		trueHeight = document.getElementById('height-input').value; //true height in inches
		trueWidth = document.getElementById('width-input').value; //true width in inches
		
		virt_Led_count = Math.ceil(trueHeight/virt_spacing);
		horiz_Led_count = Math.ceil(trueWidth/horiz_spacing);
		
		if(document.getElementById('25').checked==true)
		{
			ledCount = virt_Led_count * horiz_Led_count;		
		} else if(document.getElementById('10').checked==true)
		{
			ledCount = virt_Led_count * horiz_Led_count;
			ledCount = ledCount - (ledCount%18);
		}
	} else if(document.getElementById('custom-dim').checked==true)
	{
		squareFoot = document.getElementById('sqft-input').value;		
		faux_height = (Math.sqrt(squareFoot)*12); //fake height in inches 
		faux_width = (Math.sqrt(squareFoot)*12); //fake width in inches
		
		virt_Led_count = Math.ceil(faux_height/virt_spacing);
		horiz_Led_count = Math.ceil(faux_width/horiz_spacing);
		
		if(document.getElementById('25').checked==true)
		{
			ledCount = virt_Led_count * horiz_Led_count;		
		} else if(document.getElementById('10').checked==true)
		{
			ledCount = virt_Led_count * horiz_Led_count;
			ledCount = ledCount - (ledCount%18);
		}
	} else
	{
		alert("Cannot determin LED counts!");
		exit();
	}
	return ledCount.toFixed(0);
}

//******************************************************************

function setPartNumber()
{
	var partNumber;
	var ledCode = setLedCode();
	var colorTempCode = setColorTempCode();
	var ledSpacingCode = setLedSpacingCode();
	var heightCode = setPanelHeightCode();
	var widthCode = setPanelWidthCode();
	var wireLengthCode = setWireLengthCode();
	var wireExitCode = setWireExitCode();
	var factoryOptionsCode = setFactoryOptionsCode();
	partNumber = "ELP" +"-"+ ledCode +"-"+ colorTempCode +"-"+ ledSpacingCode +"-"+ heightCode +"-"+ widthCode +"-"+ wireLengthCode +"-"+ wireExitCode+factoryOptionsCode;
	return partNumber;
}

//******************************************************************

function setWireLeadCount(panelWattage)
{
	var wireLeadCount;
	var MAX_WATTS_PER_TAIL = 85;
	wireLeadCount = Math.ceil(panelWattage/MAX_WATTS_PER_TAIL);
	return wireLeadCount;
}

function setWattsPerFoot(ledCode, ledSpacingCode)
{
	var wattsPerFoot;
	if(ledCode == "25")
	{
		if(ledSpacingCode == "A")
		{
			wattsPerFoot = 11;
		} else if(ledSpacingCode == "B")
		{
			wattsPerFoot = 7.32;
		} else if(ledSpacingCode == "C")
		{
			wattsPerFoot = 5.5;
		} else
		{
			alert("Cannot set watts per foot!");
			exit();
		}
	} else if(ledCode == "10")
	{
		wattsPerFoot = 5.5;
	} else
	{
		alert("Cannot dertermin LED Code!");
		exit();
	}
	return wattsPerFoot;
}

function setPanelDepth(ledCode)
{
	var panelDepth;
	
	if (ledCode == "10")
	{
		panelDepth = "1/2\" D (standard), ";
	} else 
	{
		if(document.getElementById('cp').checked==true)
		{
			panelDepth = "3/8\" D (compact), ";
		} else 
		{
			panelDepth = "5/8\" D (standard), ";
		}
	}
	return panelDepth;
}

function setPanelWattage(squareFoot, wattsPerFoot)
{
	var panelWattage = squareFoot * wattsPerFoot;
	return panelWattage; 
}

function setCommentBox(squareFoot)
{
	var comment = '';
	var SQFT_MIN = 4; //4sqft minimum
	
	if((document.getElementById("roblon_price").checked==false) && (squareFoot < SQFT_MIN))
	{
		comment = comment+'+ Below minimum panel size (4sqft) - $60 adder included<br/>';
	} else if((document.getElementById("roblon_price").checked==true) && (squareFoot < SQFT_MIN))
	{
		comment = comment+'+ Minmum panel size (4sqft) adder, NOT INCLUDED FOR ROBLON PRICING<br/>';
	}  
	
	if(document.getElementById("so").checked==true)
	{
		comment = comment+'+ Don\'t forget to include pricing for panel stand-offs (1 per 16-24") - $15 unit price<br/>';
	} 
	
	if((document.getElementById('af').checked==true) && (document.getElementById("custom-dim").checked==true))
	{
		comment = comment+'+ IMPORTANT! BECAUSE THIS IS A CUSTOM SHAPE, PLEASE CALCULATE ALUMINUM FRAMING PRICE YOURSELF!!!!<br/>';
	}
	
	comment = comment.fontcolor("#FF0000"); // sets color of the text to red
	return comment;
}

//******************************************************************

function setLedDescription(ledCode)
{
	var ledDescription;
	if(ledCode == "25")
	{
		ledDescription = "1/4 watt Nichia LEDs; ";
	} else if(ledCode == "10")
	{
		ledDescription = "1/10 watt Nichia LEDs; ";
	} else
	{
		alert("Cannot dertermin LED Code!");
		exit();
	}
	return ledDescription;
}
RoHS
function setColorTempDescription(colorTempCode)
{
	var colorTempDescription;
	if(colorTempCode == "24")
	{
		colorTempDescription = "2400K color temperature; ";
	} else if(colorTempCode == "27")
	{
		colorTempDescription = "2700K color temperature; ";
	} else	if(colorTempCode == "30")
	{
		colorTempDescription = "3000K color temperature; ";
	} else if(colorTempCode == "35")
	{
		colorTempDescription = "3500K color temperature; ";
	} else if(colorTempCode == "40")
	{
		colorTempDescription = "4000K color temperature; ";
	} else if(colorTempCode == "45")
	{
		colorTempDescription = "4500K color temperature; ";
	} else
	{
		alert("Cannot set color temp description!");
		exit();
	}
	return colorTempDescription;
}

function setLedSpacingDescription(ledSpacingCode)
{
	var ledSpacingDescription;
	if(ledSpacingCode == "A")
	{
		ledSpacingDescription = "2\" x 2\" array spacing; ";
	} else if(ledSpacingCode == "B")
	{
		ledSpacingDescription = "2\" x 3\" array spacing; ";
	} else if(ledSpacingCode == "C")
	{
		ledSpacingDescription = "2\" x 4\" array spacing; ";
	} else if(ledSpacingCode == "D")
	{
		ledSpacingDescription = "1\" x 1\" array spacing; ";
	} else 
	{
		alert("Cannot set LED spacing description!");
		exit();
	}
	return ledSpacingDescription;
}

function setPanelDimensionDescription(panelDepth, squareFoot) 
{
	var panelDimensionDescription;
	var panelColor = "white";
	if(document.getElementById('standard-dim').checked==true)
	{
		var height = document.getElementById('height-input').value;
		var width = document.getElementById('width-input').value;
		panelDimensionDescription = height+"\" H x "+width+"\" W x "+panelDepth+panelColor+", PVC panel; ";
		
	} else if(document.getElementById("custom-dim").checked==true)
	{
		panelDimensionDescription = squareFoot+"sqft. x "+panelDepth+panelColor+", custom shaped PVC panel; ";
	} else 
	{
		alert("Cannot set panel dimension description!");
		exit();
		
	}
	return panelDimensionDescription;  
}

function setWireLengthDescription(wireExitCode, wireLengthCode, wireLeadCount)
{
	var wireLengthDescription;
	if(wireExitCode == 'C')
	{
		wireLengthDescription = wireLeadCount+" - "+wireLengthCode+"ft. wire leads for hard-wired connection, "+ "CUSTOM panel exit; ";
	} else
	{
		wireLengthDescription = wireLeadCount+" - "+wireLengthCode+"ft. wire leads for hard-wired connection, "+wireExitCode+" panel exit; ";
	}
	return wireLengthDescription;
}

function setWattsDescription(panelWattage)
{
	var wattsDescription;
	wattsDescription = panelWattage+' watts total';
	return wattsDescription;
}

function setWattsPerFootDescription(wattsPerFoot)
{
	var wattsPerFootDescription = wattsPerFoot+"w per sqft.; ";
	return wattsPerFootDescription;
}

function setFactoryOptionsDescription()
{
	var factoryOptionsDescription;
	if(document.getElementById('nl').checked==true)
	{
		factoryOptionsDescription = "no lens; ";
	} else if(document.getElementById('cl').checked==true)
	{
		factoryOptionsDescription = "clear lens; ";
	} else if(document.getElementById('fr').checked==true)
	{
		factoryOptionsDescription = "frosted lens; ";
	}
	
	
	
	if(document.getElementById('df').checked==true)
	{
		factoryOptionsDescription = factoryOptionsDescription+"accessory stand-off diffuser panel; ";
	}
	// if(document.getElementById('cp').checked==true)
	// {
		// factoryOptionsDescription = factoryOptionsDescription+"3/8\" compact substrate; ";
	// }
	if(document.getElementById('sc').checked==true)
	{
		factoryOptionsDescription = factoryOptionsDescription+"custom XXX panel color; ";
	}
	if(document.getElementById('af').checked==true)
	{
		factoryOptionsDescription = factoryOptionsDescription+"Aluminum framing for added rigidity and support of pvc substrate; ";
	}
	if(document.getElementById('so').checked==true)
	{
		factoryOptionsDescription = factoryOptionsDescription+"stand-off mounting, for diffuser panel; ";
	}
	// if(document.getElementById('sg').checked==true)
	// {
		// factoryOptionsDescription = factoryOptionsDescription+"";
	// }
	if(document.getElementById('ro').checked==true)
	{
		factoryOptionsDescription = factoryOptionsDescription+"RoHS Compliant ";
	}
	return factoryOptionsDescription;
}

function setDescription()
{
	var description;
	var ledCode = setLedCode();
	var colorTempCode = setColorTempCode();
	var ledSpacingCode = setLedSpacingCode();
	var wireExitCode = setWireExitCode();
	var squareFoot = setSquareFoot();
	var wattsPerFoot = setWattsPerFoot(ledCode, ledSpacingCode)
	var panelWattage = setPanelWattage(squareFoot, wattsPerFoot);
	var wireLeadCount = setWireLeadCount(panelWattage);
	var wireLengthCode = setWireLengthCode();
	var panelDepth = setPanelDepth(ledCode);
	
	var ledDescription = setLedDescription(ledCode);
	var colorTempDescription = setColorTempDescription(colorTempCode);
	var ledSpacingDescription = setLedSpacingDescription(ledSpacingCode);
	var panelDimensionDescription = setPanelDimensionDescription(panelDepth, squareFoot);
	var wireLengthDescription = setWireLengthDescription(wireExitCode, wireLengthCode, wireLeadCount);
	var wattsPerFootDescription = setWattsPerFootDescription(wattsPerFoot);
	var factoryOptionsDescription = setFactoryOptionsDescription();
	description = "Essentials LED Light Panel; "+ledDescription + colorTempDescription + ledSpacingDescription + panelDimensionDescription + wireLengthDescription + wattsPerFootDescription + factoryOptionsDescription;
	return description;
}

//******************************************************************

function setPrice(squareFoot, ledCode, wireLeadCount, wireLengthCode, ledSpacingCode)
{		
	var totalPrice;
	var basePrice;
	var adderPrice = 0;
	var price_per_foot;
	var DEFAULT = 8; //defualt wire lead length, in feet
	var MIN_PANEL_SIZE = 4; //minimum panel size @ 95/sqft pricing. $60 adder for anything smaller than this.
	var round_sqft = Math.ceil(squareFoot);

	//Basic square foot pricing
	if(ledCode == "25")
	{
		if(document.getElementById("roblon_price").checked==true)
		{
			if(ledSpacingCode == "A")
			{
				 price_per_foot = 72;
			} else if(ledSpacingCode == "B")
			{
				 price_per_foot = 61;
			} else if(ledSpacingCode == "C")
			{
				price_per_foot = 50;
			}
		} else
		{
		    if(ledSpacingCode == "A")
			{
				 price_per_foot = 99;
			} else if(ledSpacingCode == "B")
			{
				 price_per_foot = 84;
			} else if(ledSpacingCode == "C")
			{
				price_per_foot = 68;
			} 
		}
	} else if(ledCode == "10")
	{
		if(document.getElementById("roblon_price").checked==true)
		{
			price_per_foot = 145;
		} else
		{
			price_per_foot = 193;
		}
	} else 
	{
		alert("Cannot dertermin LED Code!");
		exit();
	}
	
	  

	
	//Flat fee adder for panels smaller than 4sqft
	if(document.getElementById("roblon_price").checked==true)
	{
		var min_size_adder = 0; //No minimum size, adder price for Roblon panels
		adderPrice = (adderPrice+min_size_adder);
	} else if(squareFoot < MIN_PANEL_SIZE)
	{
		var min_size_adder = 60; //adder price for panels less than 4sqft
		adderPrice = (adderPrice+min_size_adder);
	}
	
	//Custom Tail length pricing adder
	if(wireLengthCode > DEFAULT)
	{
		var extra_wire_price = 1.5;
		var tailExtra = (wireLengthCode - DEFAULT);
		var extra_length_total = ((tailExtra * extra_wire_price)*wireLeadCount);
		adderPrice = (adderPrice+extra_length_total);
	}
	
	//Factory Options, pricing adder
	if(document.getElementById('cl').checked==true)
	{
		var clearLens_sqft_price = 2;
		adderPrice = adderPrice+(round_sqft*clearLens_sqft_price);
	} else if(document.getElementById('fr').checked==true)
	{
		var clearLens_sqft_price = 2;
		adderPrice = adderPrice+(round_sqft*clearLens_sqft_price);
	} else if(document.getElementById('nl').checked==true)
	{
		var noLens_sqft_price = 0;
		adderPrice = adderPrice+(round_sqft*noLens_sqft_price);
	}
	
	if(document.getElementById('df').checked==true)
	{
		var diffuserLens_sqft_price = 10;
		adderPrice = adderPrice+(round_sqft*diffuserLens_sqft_price);
	}

	if(document.getElementById('af').checked==true)
	{
		var framing_perfoot_price = 10;
		if(document.getElementById("standard-dim").checked==true)
		{
			var width = (document.getElementById('width-input').value); //true width in inches;		
			var height = (document.getElementById('height-input').value); //true height in inches;
			var perimeter_inches = ((width*2) + (height*2));
			var perimeter_feet = (perimeter_inches/12);
			var perimeter_rnd_feet = Math.ceil(perimeter_feet);
			adderPrice = adderPrice+(perimeter_rnd_feet*framing_perfoot_price);
		}
	}	
	
	basePrice = (round_sqft*price_per_foot);
	totalPrice = (basePrice+adderPrice);
	
	//Apply D10 discount
	if (document.getElementById("d10_price").checked==true)
	{
		var D10 = 0.9;
		totalPrice = totalPrice * D10;
	} else if (document.getElementById("d19_price").checked==true) //Apply D19 discount
	{
	  var D19 = 0.81;
	  totalPrice = totalPrice * D19;
	}
	
	return totalPrice.toFixed(2);
}

//******************************************************************

function printFullDescription(fullDescription, wattsDescription)
{
	document.getElementById('description').innerHTML=fullDescription;
}

function printWatts(wattsDescription)
{
	document.getElementById('watts').innerHTML=wattsDescription;
}

function printSquareArea(squareFoot)
{
	document.getElementById('total-panel-area').innerHTML=squareFoot;
}

function printLedCount(ledCount)
{
	document.getElementById('number-of-leds').innerHTML=ledCount;
}

function printPrice(totalPrice)
{
	document.getElementById('dnPrice').innerHTML=totalPrice;
}

function printCommentBox(commentBox)
{
	document.getElementById('comment').innerHTML=commentBox;
}

// ******************************* TESTING SEND TO CLIPBOARD FEATURE - START *******************************

function fnSelect(objId)
{
   fnDeSelect();
   if (document.selection) 
   {
      var range = document.body.createTextRange();
      range.moveToElementText(document.getElementById(objId));
      range.select();
   }
   else if (window.getSelection) 
   {
      var range = document.createRange();
      range.selectNode(document.getElementById(objId));
      window.getSelection().addRange(range);
   }
}
function fnDeSelect() 
{
   if (document.selection)
             document.selection.empty();
   else if (window.getSelection)
              window.getSelection().removeAllRanges();
} 
// ******************************* TESTING SEND TO CLIPBOARD FEATURE - END *******************************


function main()
{

	var ledCode = setLedCode();
	var ledSpacingCode = setLedSpacingCode();
	var wireLengthCode = setWireLengthCode();
	var squareFoot = setSquareFoot();
	var wattsPerFoot = setWattsPerFoot(ledCode, ledSpacingCode);
	var panelWattage = setPanelWattage(squareFoot, wattsPerFoot);
	var wireLeadCount = setWireLeadCount(panelWattage);
	var ledCount = setLedCount(squareFoot);
	var partNumber = setPartNumber();
	
	var wattsDescription = setWattsDescription(panelWattage);
	var description = setDescription();
	var fullDescription = partNumber+" - "+description;
	var totalPrice = setPrice(squareFoot, ledCode, wireLeadCount, wireLengthCode, ledSpacingCode);
	var commentBox = setCommentBox(squareFoot);
	
	setPriceDisplay();
	
	printCommentBox(commentBox);
	printFullDescription(fullDescription);
	printSquareArea(squareFoot);
	//printWatts(panelWattage);
	printWatts(wattsDescription);
	printPrice(totalPrice);
	printLedCount(ledCount);
	
}

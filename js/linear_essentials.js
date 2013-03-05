//set, disable and/or enable buttons for 1S enviornment
function set_1S_Env()
{
	resetAllForm();
	resetTailsBox();
	resetLengthBox();
	document.getElementById("2590").disabled=true;
	document.getElementById("nl").disabled=false;
	document.getElementById("op").disabled=true;
	document.getElementById("pg").disabled=false;
	document.getElementById("ro").disabled=false;
	var squareExits = new Array('Select Tail', 'WE1', 'WE3', 'C');
	setAllTailExits(squareExits);
	setFixtureLengths();
	document.getElementById("distributor_price").checked=true;
}

//set, disable and/or enable buttons for 2Sl enviornment
function set_2SL_Env()
{
	resetAllForm();
	resetTailsBox();
	resetLengthBox();
	document.getElementById("2590").disabled=true;
	document.getElementById("nl").disabled=true;
	document.getElementById("ro").disabled=false;
	var squareExits = new Array('Select Tail', 'WE1', 'WE3', 'WR1', 'WR2', 'WR3', 'WL1', 'WL2', 'WL3', 'WB1', 'WB2', 'WB3', 'C');
	setAllTailExits(squareExits);
	setFixtureLengths();
	document.getElementById("distributor_price").checked=true;
}

//set, disable and/or enable buttons for 1R enviornment
function set_1R_Env()
{
	resetAllForm();
	resetTailsBox();
	resetLengthBox();
	document.getElementById("2590").disabled=true;
	document.getElementById("pg").disabled=true;
	document.getElementById("op").disabled=true;
	document.getElementById("n").disabled=false;
	document.getElementById("im").disabled=false;
	document.getElementById("bu").disabled=false;
	document.getElementById("ro").disabled=false;
	var roundExits = new Array('Select Tail', 'WE1', 'WE3', 'WB1', 'WB3', 'C');
	setAllTailExits(roundExits);
	setFixtureLengths();
	document.getElementById("distributor_price").checked=true;
}

//set, disable and/or enable buttons for 2R enviornment
function set_2RL_Env()
{
	resetAllForm();
	resetTailsBox();
	resetLengthBox();
	document.getElementById("2590").disabled=true;
	document.getElementById("nl").disabled=true;
	document.getElementById("n").disabled=false;
	document.getElementById("im").disabled=false;
	document.getElementById("bu").disabled=false;
	document.getElementById("fs").disabled=false;
	document.getElementById("ro").disabled=false;
	var roundExits = new Array('Select Tail', 'WE1', 'WE3', 'WB1', 'WB3', 'C');
	setAllTailExits(roundExits);
	setFixtureLengths();
	document.getElementById("distributor_price").checked=true;
}

//set, disable and/or enable buttons for 3SL enviornment
function set_3SL_Env()
{
	resetAllForm();
	resetTailsBox();
	resetLengthBox();
	document.getElementById("nl").disabled=true;
	document.getElementById("ro").disabled=false;
	var squareExits = new Array('Select Tail', 'WE1', 'WE3', 'WR1', 'WR2', 'WR3', 'WL1', 'WL2', 'WL3', 'WB1', 'WB2', 'WB3', 'C');
	setAllTailExits(squareExits);
	setFixtureLengths();
	document.getElementById("distributor_price").checked=true;
}

//set, disable and/or enable buttons for 1QL enviornment
function set_1QL_Env()
{
	resetAllForm();
	resetTailsBox();
	resetLengthBox();
	document.getElementById("2590").disabled=true;
	document.getElementById("nl").disabled=true;
	document.getElementById("ro").disabled=false;
	var quarterRoundExits = new Array('Select Tail', 'WE1', 'WE3', 'WR1', 'WR3', 'WB1', 'TB3', 'C');
	setAllTailExits(quarterRoundExits);
	setFixtureLengths();
	document.getElementById("distributor_price").checked=true;
}

//set, disable and/or enable buttons for 10th watt LED enviornment
function set_1018_Env()
{
	document.getElementById("2400").checked=false;
	document.getElementById("2400").disabled=true;
}

//set, disable and/or enable buttons for 1/4 watt LED enviornment
function set_2545_Env()
{
	document.getElementById("2400").checked=false;
	document.getElementById("2400").disabled=false;
}

//set, disable and/or enable buttons for dual 1/4 watt LED enviornment
function set_2590_Env()
{
	document.getElementById("2400").checked=false;
	document.getElementById("2400").disabled=false;
}

//******************************************************************
function resetAllForm()
{
	resetLedBoardButtons();
	resetColorTempButtons();
	resetFinishButtons();
	resetLensButtons();
	resetFactoryOptionsButtons();
	resetCustomLength();	
	resetDescription();
	resetPriceModifierButtons();	
	resetCommentsBox();
}

function resetTailsBox()
{
	document.getElementById("tail-one-dropbox").options.length = 1;
	document.getElementById("tail-two-dropbox").options.length = 1;
}

function resetLengthBox()
{
	document.getElementById("length-dropbox").options.length = 1;
}
	
function resetLedBoardButtons()
{
	document.getElementById("1018").disabled=false;
	document.getElementById("2545").disabled=false;
	document.getElementById("2590").disabled=false;
	document.getElementById("1018").checked=false;
	document.getElementById("2545").checked=false;
	document.getElementById("2590").checked=false;
}

function resetColorTempButtons()
{
	document.getElementById("2400").disabled=false;
	document.getElementById("2700").disabled=false;
	document.getElementById("3000").disabled=false;
	document.getElementById("3500").disabled=false;
	document.getElementById("4000").disabled=false;
	document.getElementById("4500").disabled=false;
	document.getElementById("2400").checked=false;
	document.getElementById("2700").checked=false;
	document.getElementById("3000").checked=false;
	document.getElementById("3500").checked=false;
	document.getElementById("4000").checked=false;
	document.getElementById("4500").checked=false;
}

function resetFinishButtons()
{
	document.getElementById("al").disabled=false;
	document.getElementById("bl").disabled=false;
	document.getElementById("custom").disabled=false;
	document.getElementById("al").checked=false;
	document.getElementById("bl").checked=false;
	document.getElementById("custom").checked=false;
}

function resetLensButtons()
{
	document.getElementById("pg").disabled=false;
	document.getElementById("op").disabled=false;
	document.getElementById("nl").disabled=false;
	document.getElementById("pg").checked=false;
	document.getElementById("op").checked=false;
	document.getElementById("nl").checked=false;
}

function resetFactoryOptionsButtons()
{
	
	document.getElementById("n").disabled=true;
	document.getElementById("im").disabled=true;
	document.getElementById("bu").disabled=true;	
	document.getElementById("fs").disabled=true;
	document.getElementById("n").checked=false;
	document.getElementById("im").checked=false;
	document.getElementById("bu").checked=false;
	document.getElementById("fs").checked=false;
	document.getElementById("ro").checked=false;
}

function resetCustomLength()
{
	document.getElementById("custom-length-input").value="";
	document.getElementById("custom-length-input").disabled=true;
}

function resetDescription() {
	document.getElementById('description').innerHTML='';
	document.getElementById('watts').innerHTML='';
	document.getElementById('inches').innerHTML='--';
	document.getElementById('mm').innerHTML='--';
	document.getElementById('dnPrice').innerHTML='0.00';
	
}

function resetPriceModifierButtons()
{
	document.getElementById("distributor_price").disabled=false;
	document.getElementById("d10_price").disabled=false;
	document.getElementById("d19_price").disabled=false;	
	document.getElementById("roblon_price").disabled=false;
	document.getElementById("distributor_price").checked=true;
	document.getElementById("d10_price").checked=false;
	document.getElementById("d19_price").checked=false;
	document.getElementById("roblon_price").checked=false;
}

function resetCommentsBox()
{
	document.getElementById('comment').innerHTML='';
}

function resetXXButtons()
{
	document.getElementById('XX').innerHTML=' ';
	document.getElementById('XX').reset();
	document.getElementById("XX").disabled=false;
	document.getElementById("XX").checked=false;
}

//******************************************************************

function setAllTailExits(tailExits)
{
	setTailExitOne(tailExits);
	setTailExitTwo(tailExits);
}

function setTailExitOne(tailExits)
{
	var selectedOption = 0;
	var select = $("#tail-one-dropbox");
	if(select.prop) {
		var options = select.prop('options');
	} else {
		var options = select.attr('options');
	}
	$('option', select).remove();
	
	$.each(tailExits, function(val, text) {
		options[options.length] = new Option(text, val);
	});
	select.val(selectedOption);
}

function setTailExitTwo(tailExits)
{
	var selectedOption = 0;
	
	var select = $('#tail-two-dropbox');
	if(select.prop) {
		var options = select.prop('options');
	} else {
		var options = select.attr('options');
	}
	$('option', select).remove();

	$.each(tailExits, function(val, text) {
		options[options.length] = new Option(text, val);
	});
	select.val(selectedOption);
}

function setFixtureLengths()
{
	var fixtureLengths = new Array(4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80, 84, 88, 92, 96, 'C');
	
	//set length dropbox
	var select = $('#length-dropbox');
	
	if(select.prop) {
		var options = select.prop('options');
	} else {
		var options = select.attr('options');
	}
	
	$.each(fixtureLengths, function(val, text) {
		options[options.length] = new Option(text, val);
	});
}

function setPriceDisplay()
{ 
	var NORMAL_LABEL;
	var NEW_LABEL;
  
	if (document.getElementById("d10_price").checked==true)
	{
		NEW_LABEL = "D10 PRICING: ";
		NEW_LABEL = NEW_LABEL.fontcolor("#FF0000"); // sets color of the text to red
		document.getElementById('price_label').innerHTML=NEW_LABEL;
	} else if (document.getElementById("d19_price").checked==true)
	{
		NEW_LABEL = "D19 PRICING: ";
		NEW_LABEL = NEW_LABEL.fontcolor("#FF0000"); // sets color of the text to red
		document.getElementById('price_label').innerHTML=NEW_LABEL;
	} else if (document.getElementById("roblon_price").checked==true)
	{
		var NEW_LABEL = "ROBLON PRICING: ";
		NEW_LABEL = NEW_LABEL.fontcolor("#FF0000"); // sets color of the text to red
		document.getElementById('price_label').innerHTML=NEW_LABEL;
	} else
	{
		NORMAL_LABEL = 'Distributor Net:';
		document.getElementById('price_label').innerHTML=NORMAL_LABEL;
	}
	
} 

//******************************************************************

function setExtrusionCode()
{
	var extrusionCode;
	if(document.getElementById("1S").checked==true)
	{
		extrusionCode = "1S";
	} else if(document.getElementById("2SL").checked==true)
	{
		extrusionCode = "2SL";
	} else if(document.getElementById("1R").checked==true)
	{
		extrusionCode = "1R";
	} else if(document.getElementById("2RL").checked==true)
	{
		extrusionCode = "2RL";
	} else if(document.getElementById("3SL").checked==true)
	{
		extrusionCode = "3SL";
	} else if(document.getElementById("1QL").checked==true)
	{
		extrusionCode = "1QL";
	}
	return extrusionCode;
}

function setLedCode()
{
	var ledCode;
	if(document.getElementById("1018").checked==true)
	{
		ledCode = "1018";
	} else if(document.getElementById("2545").checked==true)
	{
		ledCode = "2545";
	} else if(document.getElementById("2590").checked==true)
	{
		ledCode = "2590";
	}
	return ledCode;
}

function setColorTempCode()
{
	var colorTempCode;
	if(document.getElementById("2400").checked==true)
	{
		colorTempCode = "24";
	} else if(document.getElementById("2700").checked==true)
	{
		colorTempCode = "27";
	} else if(document.getElementById("3000").checked==true)
	{
		colorTempCode = "30";
	} else if(document.getElementById("3500").checked==true)
	{
		colorTempCode = "35";
	} else if(document.getElementById("4000").checked==true)
	{
		colorTempCode = "40";
	} else if(document.getElementById("4500").checked==true)
	{
		colorTempCode = "45";
	}
	return colorTempCode;
}

function setFinishCode()
{
	var finishCode;
	if(document.getElementById("al").checked==true)
	{
		finishCode = "AL";
	} else if(document.getElementById("bl").checked==true)
	{
		finishCode = "BL";
	} else if(document.getElementById("custom").checked==true)
	{
		finishCode = "C";
	}
	return finishCode;
}

function setLensCode()
{
	var lensCode;
	if(document.getElementById("pg").checked==true)
	{
		lensCode = "PG";
	} else if(document.getElementById("op").checked==true)
	{
		lensCode = "OP";
	} else if(document.getElementById("nl").checked==true)
	{
		lensCode = "NL";
	}
	return lensCode;
}

function setWireCode()
{
	var wireCode;
	var exitOne;
	var exitTwo;
	var indexOne = document.getElementById("tail-one-dropbox").selectedIndex;
	var indexTwo = document.getElementById("tail-two-dropbox").selectedIndex;
	if((indexOne != 0) && (indexTwo == 0))
	{
		wireCode = document.getElementById("tail-one-dropbox").options[indexOne].text;	
	} else if ((indexOne != 0) && (indexTwo != 0))	
	{
		exitOne = document.getElementById("tail-one-dropbox").options[indexOne].text;
		exitTwo = document.getElementById("tail-two-dropbox").options[indexTwo].text;
		wireCode = exitOne + "/" + exitTwo;
	} else if((indexOne == 0) && (indexTwo != 0))
	{
		wireCode = document.getElementById("tail-two-dropbox").options[indexTwo].text;	
	}
	return wireCode;
}

function setLengthCode()
{
	var index = document.getElementById("length-dropbox").selectedIndex;
	var lengthCode = document.getElementById("length-dropbox").options[index].text;
	return lengthCode;
}

function setFactoryOptionsCode(extrusionCode)
{
	var factoryOptionsCode = '';
	
	if (extrusionCode == "1R" || extrusionCode == "2RL" ){
		if(document.getElementById("n").checked==true)
		{
			factoryOptionsCode = "-N";
		} else if(document.getElementById("im").checked==true)
		{
			factoryOptionsCode = "-IM";
		} else if(document.getElementById("bu").checked==true)
		{
			factoryOptionsCode = "-BU";
		} else if(document.getElementById("fs").checked==true)
		{
			factoryOptionsCode = "-FS";
		} else {
			alert("Please select factory option");
			exit();
		}
	}
	
	if(document.getElementById("ro").checked==true)
	{
		factoryOptionsCode = factoryOptionsCode+"-RO";
	}
	return factoryOptionsCode;
}

function setPartNumber(extrusionCode, ledCode, colorTempCode, finishCode, lensCode, wireCode, lengthCode, factoryOptionsCode)
{
	var partNumber = "ELL" + "-" + extrusionCode + "-" + ledCode + "-" + colorTempCode + "-" + finishCode + "-" + lensCode + "-" + wireCode + "-" + lengthCode+factoryOptionsCode;	
	return partNumber;
}

//******************************************************************

function setIpRating(extrusionCode)
{
	var ipRating;
	if ((extrusionCode == "2SL") || (extrusionCode == "2RL") || (extrusionCode == "3SL") || (extrusionCode == "1QL"))
	{
		ipRating = "IP64";
	} else 
	{
		ipRating = "IP20";
	} 
	return ipRating;
}


function setTrueLength(lengthCode)
{
	
	var index = document.getElementById("length-dropbox").selectedIndex;
	var length_list = new Array(4.72, 8.66, 12.6, 16.54, 20.47, 24.41, 28.35, 32.28, 36.22, 40.16, 44.09, 48.03, 51.97, 55.91, 59.84, 63.78, 67.72, 71.65, 75.59, 79.53, 83.46, 87.4, 91.34, 95.28);
	var trueLength;
	if (lengthCode == 'C')
	{
		var lengthInput = document.getElementById("custom-length-input").value;
		var MAX_LENGTH = length_list[23];
		trueLength = parseFloat(lengthInput); 
		if (trueLength >= MAX_LENGTH)
		{
			alert('CUSTOM LENGTH CANNOT EQUAL OR EXCEED MAX POSSIBLE (95.28 in.)!!');
			exit();
		} else {
            return trueLength;
        }
	} else 
	{
		trueLength = length_list[index-1];
		return trueLength.toFixed(2);
	}
}

function setLengthConversion(inches)
{
	var MM_IN_INCHES = 25.4;
	var mm = (inches * MM_IN_INCHES);
	return Math.round(mm);
}

function setCommentBox()
{
	var comment = '';
	if(document.getElementById("fs").checked==true)
	{
		comment = comment+'+ Don\'t forget - Include \'Free Standing Mount\' price in Quotewerks!<br/>+ Don\'t forget - $15 adder for \'Free Standing\' mounts at non-standard heights';
	}
	
	if(document.getElementById("roblon_price").checked==true)
	{
		comment = comment+'+ Don\'t forget - Roblon Essentials\' accessories are 30% off!<br/>';
	}
	
	if(document.getElementById("3SL").checked==true)
	{
		comment = comment+'+ Don\'t forget - If using 3SL Wall/Ceiling Rough-in Kit, be sure to quote 12 ft lengths when system has continuous runs, longer than 8\' (96")!<br/>';
		comment = comment+'+ Don\'t forget - Be sure to set 3SL tail exits as \'WB1, WB2 or WB3\', if using 3SL Wall/Ceiling Rough-in Kit!<br/>';
	}
	
	comment = comment.fontcolor("#FF0000"); // sets color of the text to red
	return comment;
}

//******************************************************************

function setExtrusionDescription(extrusionCode, ipRating)
{
	var extrusionDescription;
	switch(extrusionCode)
	{
		case "1S":
  		extrusionDescription = "Small-Square ("+ipRating+") extrusion;";
  		break;
		case "2SL":
  		extrusionDescription = "Medium-Square ("+ipRating+") extrusion;";
  		break;
  		case "1R":
  		extrusionDescription = "Small-Round ("+ipRating+") extrusion;";
  		break;
  		case "2RL":
  		extrusionDescription = "Large-Round ("+ipRating+") extrusion;";
  		break;
  		case "3SL":
  		extrusionDescription = "Large-Square ("+ipRating+") extrusion;";
  		break;
  		case "1QL":
  		extrusionDescription = "Quarter-Round ("+ipRating+") extrusion;";
  		break;
		default:
  		//code to be executed if n is different from case 1 and 2
	}	
	return extrusionDescription;
}

function setLengthDescription(trueLength, trueLengthMM)
{
	var inches = trueLength;
	var mm = trueLengthMM;
	var lengthDescription = inches+ "\" (" + mm + "mm) extrusion length;";
	return lengthDescription;
}

function setLedDescription(ledCode)
{
	var ledDescription;
	if (ledCode == '1018')
	{
		ledDescription = "0.1 watt Nichia LEDs;";
	} else if (ledCode == '2545')
	{
		ledDescription = "0.25 watt Nichia LEDs;";
	} else if (ledCode == '2590')
	{
		ledDescription = "2 rows of 0.25 watt Nichia LEDs;";
	}
	return ledDescription;
}

function setColorDescription(colorTempCode)
{
	var colorDescription;
	if (colorTempCode == '24')
	{
		colorDescription = '2400°K color temp, 87+ CRI;';
	} else if (colorTempCode == '27')
	{
		colorDescription = '2700°K color temp, 87+ CRI;';
	} else if (colorTempCode == '30')
	{
		colorDescription = '3000°K color temp, 87+ CRI;';
	} else if (colorTempCode == '35')
	{
		colorDescription = '3500°K color temp, 87+ CRI;';
	} else if (colorTempCode == '40')
	{
		colorDescription = '4000°K color temp, 87+ CRI;';
	} else if (colorTempCode == '45')
	{
		colorDescription = '4500°K color temp, 87+ CRI;';
	}
	return colorDescription;
}

function setLensDescription(lensCode)
{
	var lensDescription;
	if (lensCode == 'PG')
	{
		lensDescription = 'clear, acrylic lens;';
	} else if (lensCode == 'OP')
	{
		lensDescription = 'opal, acrylic lens;';
	} else if (lensCode == 'NL')
	{
		lensDescription = 'no lens;';
	} 
	return lensDescription;
}

function setWireDescription(wireCode)
{
	var wireDescription;
	var indexOne = document.getElementById("tail-one-dropbox").selectedIndex;
	var indexTwo = document.getElementById("tail-two-dropbox").selectedIndex;
	var wireCode;
	if ((indexOne > 0) && (indexTwo > 0))
	{
		wireDescription = wireCode+' wire exits, 2 - 96", 18 AWG wire leads from both ends of fixture;';
	} else if ((indexOne > 0) || (indexTwo > 0))
	{
		wireDescription = wireCode+' wire exit, 1 - 96", 18 AWG wire lead from one end of fixture with male Tyco Mate \'n Lock connector;';
	}
	return wireDescription;
}

function setFinishDescription(finishCode)
{
	var finishDescription;
	if (finishCode == 'AL')
	{
		finishDescription = 'silver anodized finish;';
	} else if (finishCode == 'BL')
	{
		finishDescription = 'black anodized finish;';
	} else
	{
		finishDescription = 'custom XXX finish;';
	}
	return finishDescription;
}

function setFactoryOptionsDescription(factoryOptionsCode)
{
	var factoryOptionsDescription = '';
	if (document.getElementById("im").checked==true)
	{
		factoryOptionsDescription = 'factory installed, plastic tab end-cap for inside mount, screws directly to mounting surface; '
	} else if (document.getElementById("bu").checked==true)
	{
		factoryOptionsDescription = 'factory installed, threaded bushing, with nut, for mounting extrusion perpendicular to surface; '
	} else if (document.getElementById("fs").checked==true)
	{
		factoryOptionsDescription = 'factory installed, XX" high free standing mount , with 8mm leg and end joint; '
	} else 
	{
		factoryOptionsDescription = 'fixture mounts using surface mounting clip, 1 per 18" (min. 2 per fixture); '
	} 
	
	if (document.getElementById("ro").checked==true)
	{
		factoryOptionsDescription = factoryOptionsDescription+'RoHS compliant product; '
	}
	return factoryOptionsDescription;
}

function setCustomLengthDescription(lengthCode, trueLength)
{
	var customLengthDescription;
	var LED_COUPON_LENGTH = 3.937;
	var END_CAP_WIDTH = 0.37;
	var MIN_AIR_GAP = 0.4; //gap between board and end-cap is a minimum of 0.20" (x2) = 0.4
	var coupon_count;
	var board_length;
	var avail_length; //available extrusion space for LED boards
	
	if(lengthCode == 'C')
	{        
		avail_length = (trueLength - END_CAP_WIDTH) - MIN_AIR_GAP;
		var temp_count = (avail_length / LED_COUPON_LENGTH); //find rough number of coupons in a custom length
		
		coupon_count = Math.floor(temp_count); //round down to integer to get exact number
		board_length = coupon_count * LED_COUPON_LENGTH;
		board_length = board_length.toFixed(2);
		customLengthDescription = 'with LED board '+board_length+'" long, centered; ';
	} else {
	
		customLengthDescription = '';
	}
	
	return customLengthDescription;
}

function setWattsDescription(totalWatts)
{
	var wattsDescription;
	wattsDescription = totalWatts+' watts total';
	return wattsDescription;
}

function setTotalWatts(ledCode, trueLength, lengthCode)
{
	var totalWatts;
	var tenthWattages = new Array(0.9, 1.79, 2.69, 3.58, 4.48, 5.38, 6.27, 7.17, 8.07, 8.96, 9.06, 10.7, 11.6, 12.5, 13.4, 14.3, 15.2, 16.1, 17.0, 17.9, 18.1, 19.7, 20.6, 21.5);
	var quarterWattages = new Array(1.83, 3.66, 5.5, 7.32, 9.15, 11.0, 12.8, 14.6, 16.5, 18.3, 20.1, 22.0, 23.8, 25.6, 27.5, 29.3, 31.2, 33.0, 34.8, 36.7, 38.5, 40.3, 42.2, 44.0);
    
	if (lengthCode == "C")
	{
		var END_CAP_WIDTH = 0.79;
        var LED_COUPON_LENGTH = 3.93;
        
        var temp = ((trueLength - END_CAP_WIDTH) / LED_COUPON_LENGTH); //find number of coupons in a custom length
        var index = Math.floor(temp); //round down to integer to get wattage index
        
        if (ledCode == "1018")
        {   
            totalWatts = tenthWattages[index-1];
        } else if (ledCode == "2545")
        {
            totalWatts = quarterWattages[index-1];
        } else if (ledCode == "2590")
        {
            totalWatts = quarterWattages[index-1];
            totalWatts = (totalWatts * 2);
        }
        
        return totalWatts;
	} else 
    {
        var index = document.getElementById("length-dropbox").selectedIndex;
        
        if (ledCode == "1018")
        {
            totalWatts = tenthWattages[index-1];
        } else if (ledCode == "2545")
        {
            totalWatts = quarterWattages[index-1];
        } else if (ledCode == "2590")
        {
            totalWatts = quarterWattages[index-1];
            totalWatts = (totalWatts * 2);
        }
        
        return totalWatts;
    }    
    
}

function setFullDescription()
{
	var fullDescription;
	var partNumber;
	
	var extrusionCode = setExtrusionCode();
	var lengthCode = setLengthCode();
	var ledCode = setLedCode();
	var colorTempCode = setColorTempCode();
	
	var lensCode = setLensCode();
	var wireCode = setWireCode();
	var finishCode = setFinishCode();
	var factoryOptionsCode = setFactoryOptionsCode(extrusionCode);
	var trueLength = setTrueLength(lengthCode);
	var trueLengthMM = setLengthConversion(trueLength);
	
	var ipRating = setIpRating(extrusionCode);
	var generalDescription = "VLT Essential Linear LED;";
	var extrusionDescription = setExtrusionDescription(extrusionCode, ipRating);
	var lengthDescription = setLengthDescription(trueLength, trueLengthMM);
	var ledDescription = setLedDescription(ledCode);
	var colorDescription = setColorDescription(colorTempCode);
	var lensDescription = setLensDescription(lensCode);
	var wireDescription = setWireDescription(wireCode);
	var factoryOptionsDescription = setFactoryOptionsDescription(factoryOptionsCode);
	var finishDescription = setFinishDescription(finishCode);
	var customLengthDescription = setCustomLengthDescription(lengthCode, trueLength);
	
	partNumber = setPartNumber(extrusionCode, ledCode, colorTempCode, finishCode, lensCode, wireCode, lengthCode, factoryOptionsCode);
	fullDescription = partNumber+"   -   "+generalDescription+" "+extrusionDescription+" "+lengthDescription+" "+customLengthDescription+" "+ledDescription+" "+colorDescription+" "+lensDescription+" "+wireDescription+" "+factoryOptionsDescription+" "+finishDescription;
	return fullDescription;
}

//******************************************************************

function setDnPrice(extrusionCode, trueLength, lengthCode)
{
	var dnPrice;
    var index = document.getElementById("length-dropbox").selectedIndex;
    
    var END_CAP_WIDTH = 0.79;
    var LED_COUPON_LENGTH = 3.93;
    var CUSTOM_LENGTH_FEE = 10; //$10 custom cut fee
	
	var PG_1S_PER_FOOT = 2.46; //per foot price of 1S PG lens
	var ROBLON_ACC_DISCOUNT = 0.70; //roblon accessory discount
    
	// IF CHECKED, LOAD ROBLON PRICING
	if (document.getElementById("roblon_price").checked==true)
	{
		var _1S_DnPrice = new Array(21, 24, 30, 39.9, 50.1, 60, 69.9, 80.1, 90, 99.9, 110.1, 120, 129.9, 140.1, 150, 159.9, 170.1, 180, 189.9, 200.1, 210, 219.9, 230.1, 240);
		var _1R_DnPrice = new Array(23.8, 27.2, 34, 45.22, 56.78, 68, 79.22, 90.78, 102, 113.22, 124.78, 136, 147.22, 158.78, 170, 181.22, 192.78, 204, 215.22, 226.78, 238, 249.22, 260.78, 272);
		var _2RL_DnPrice = new Array(31.5, 36, 45, 59.85, 75.15, 90, 104.85, 120.15, 135, 149.85, 165.15, 180, 194.85, 210.15, 225, 239.85, 255.15, 270, 284.85, 300.15, 315, 329.85, 345.15, 360);
		var _2SL_DnPrice = new Array(31.5, 36, 45, 59.85, 75.15, 90, 104.85, 120.15, 135, 149.85, 165.15, 180, 194.85, 210.15, 225, 239.85, 255.15, 270, 284.85, 300.15, 315, 329.85, 345.15, 360);
		var _3SL_DnPrice = new Array(39.2, 44.8, 56, 74.48, 93.52, 112, 130.48, 149.52, 168, 186.48, 205.52, 224, 242.48, 261.52, 280, 298.48, 317.52, 336, 354.48, 373.52, 392, 410.48, 429.52, 448);
		var _3SL_Dual_DnPrice = new Array(58.8, 67.2, 84, 111.72, 140.28, 168, 195.72, 224.28, 252, 279.72, 308.28, 336, 363.72, 392.28, 420, 447.72, 476.28, 504, 531.72, 560.28, 588, 615.72, 644.28, 672);
		var _1QL_DnPrice = new Array(31.5, 36, 45, 59.85, 75.15, 90, 104.85, 120.15, 135, 149.85, 165.15, 180, 194.85, 210.15, 225, 239.85, 255.15, 270, 284.85, 300.15, 315, 329.85, 345.15, 360);
	} else //SET DISTRIBUTOR PRICING
	{
		var _1S_DnPrice = new Array(37.10, 42.4, 53, 70.49, 88.51, 106, 123.49, 141.51, 159, 176.49, 194.51, 212, 229.49, 247.51, 265, 282.49, 300.51, 318, 335.49, 353.51, 371, 388.49, 406.51, 424);
		var _1R_DnPrice = new Array(42, 48, 60, 79.8, 100.2, 120, 139.8, 160.2, 180, 199.8, 220.2, 240, 259.8, 280.2, 300, 319.8, 340.2, 360, 379.8, 400.2, 420, 439.8, 460.2, 480);
		var _2RL_DnPrice = new Array(53.2, 60.8, 76, 101.08, 126.92, 152, 177.08, 202.92, 228, 253.08, 278.92, 304, 329.08, 354.92, 380, 405.08, 430.92, 456, 481, 506.92, 532, 557.08, 582.92, 608);
		var _2SL_DnPrice = new Array(53.2, 60.8, 76, 101.08, 126.92, 152, 177.08, 202.92, 228, 253.08, 278.92, 304, 329.08, 354.92, 380, 405.08, 430.92, 456, 481, 506.92, 532, 557.08, 582.92, 608);
		var _3SL_DnPrice = new Array(66.5, 76, 95, 126.35, 158.65, 190, 221.35, 253.65, 285, 316.35, 348.65, 380, 411.35, 443.65, 475, 506.35, 538.65, 570, 601.35, 633.65, 665, 696.35, 728.65, 760);
		var _3SL_Dual_DnPrice = new Array(98, 112, 140, 186.20, 233.80, 280, 326.2, 373.8, 420, 466.2, 413.8, 560, 606.2, 653.8, 700, 746.2, 793.8, 840, 886.2, 933.8, 980, 1026.2, 1073.8, 1120);
		var _1QL_DnPrice = new Array(53.2, 60.8, 76, 101.08, 126.92, 152, 177.08, 202.92, 228, 253.08, 278.92, 304, 329.08, 354.92, 380, 405.08, 430.92, 456, 481, 506.92, 532, 557.08, 582.92, 608);
	}
    
    if (extrusionCode == "1S")
	{
        if (lengthCode == 'C')
        {        
            var temp = ((trueLength - END_CAP_WIDTH) / LED_COUPON_LENGTH); //find number of coupons in a custom length
            index = Math.ceil(temp); //round up to integer to get index
            dnPrice = _1S_DnPrice[index-1] + CUSTOM_LENGTH_FEE;
        } else 
        {
            dnPrice = _1S_DnPrice[index-1];	
        }
		
		//Adding "PG" clear lens price to 1S price
		if((document.getElementById("roblon_price").checked==true) && (document.getElementById("pg").checked==true))
		{
			var ROBLON_PG_1S_PER_FOOT = PG_1S_PER_FOOT * ROBLON_ACC_DISCOUNT;
			var pg_length = (trueLength/12); //convert lens length from inches to foot
			pg_length = Math.ceil(pg_length); //round lens length up to nearest foot
			var lens_cost = pg_length * ROBLON_PG_1S_PER_FOOT;
			dnPrice = dnPrice + lens_cost;
		} else if(document.getElementById("pg").checked==true)
		{
			var pg_length = (trueLength/12); //convert lens length from inches to foot
			pg_length = Math.ceil(pg_length); //round lens length up to nearest foot
			var lens_cost = pg_length * PG_1S_PER_FOOT;
			dnPrice = dnPrice + lens_cost;
		}
	} else if (extrusionCode == "1R")
	{
        if (lengthCode == 'C')
        {        
            var temp = ((trueLength - END_CAP_WIDTH) / LED_COUPON_LENGTH); //find number of coupons in a custom length
            index = Math.ceil(temp); //round up to integer to get index
            dnPrice = _1R_DnPrice[index-1] + CUSTOM_LENGTH_FEE;
        } else 
        {
            dnPrice = _1R_DnPrice[index-1];
        }            
	} else if (extrusionCode == "2RL")
	{
        if (lengthCode == 'C')
        {        
            var temp = ((trueLength - END_CAP_WIDTH) / LED_COUPON_LENGTH); //find number of coupons in a custom length
            index = Math.ceil(temp); //round up to integer to get index
            dnPrice = _2RL_DnPrice[index-1] + CUSTOM_LENGTH_FEE;
        } else 
        {
            dnPrice = _2RL_DnPrice[index-1];	
        }
	} else if (extrusionCode == "2SL")
	{
        if (lengthCode == 'C')
        {        
            var temp = ((trueLength - END_CAP_WIDTH) / LED_COUPON_LENGTH); //find number of coupons in a custom length
            index = Math.ceil(temp); //round up to integer to get index
            dnPrice = _2SL_DnPrice[index-1] + CUSTOM_LENGTH_FEE;
        } else 
        {
            dnPrice = _2SL_DnPrice[index-1];	
        }
	} else if ((extrusionCode == "3SL") && (document.getElementById("2590").checked==true))
	{
        if (lengthCode == 'C')
        {        
            var temp = ((trueLength - END_CAP_WIDTH) / LED_COUPON_LENGTH); //find number of coupons in a custom length
            index = Math.ceil(temp); //round up to integer to get index
            dnPrice = _3SL_Dual_DnPrice[index-1] + CUSTOM_LENGTH_FEE;
        } else 
        {
            dnPrice = _3SL_Dual_DnPrice[index-1];
        }
	} else if (extrusionCode == "3SL")
	{
        if (lengthCode == 'C')
        {        
            var temp = ((trueLength - END_CAP_WIDTH) / LED_COUPON_LENGTH); //find number of coupons in a custom length
            index = Math.ceil(temp); //round up to integer to get index
            dnPrice = _3SL_DnPrice[index-1] + CUSTOM_LENGTH_FEE;
        } else 
        {
            dnPrice = _3SL_DnPrice[index-1];	
        }
	} else if (extrusionCode == "1QL")
	{
        if (lengthCode == 'C')
        {        
            var temp = ((trueLength - END_CAP_WIDTH) / LED_COUPON_LENGTH); //find number of coupons in a custom length
            index = Math.ceil(temp); //round up to integer to get index
            dnPrice = _1QL_DnPrice[index-1] + CUSTOM_LENGTH_FEE;
        } else 
        {
            dnPrice = _1QL_DnPrice[index-1];	
        }
	} else 
	{
		dnPrice = 0;
	}
	
	//Apply D10 discount
	if (document.getElementById("d10_price").checked==true)
	{
	  var D10 = 0.9;
	  dnPrice = dnPrice * D10;
	} else if (document.getElementById("d19_price").checked==true) //Apply D19 discount
	{
	  var D19 = 0.81;
	  dnPrice = dnPrice * D19;
	} 
	
	return dnPrice.toFixed(2);
}

//******************************************************************

function printFullDescription(fullDescription, wattsDescription)
{
	document.getElementById('description').innerHTML=fullDescription.fontcolor("#000000");
}

function printLengthConversion(inches, mm)
{
	document.getElementById('inches').innerHTML=inches;
	document.getElementById('mm').innerHTML=mm;
}

function printTotalWattage(totalWatts)
{
	document.getElementById('watts').innerHTML=totalWatts.fontcolor("#000000");
}

function printDnPrice(dnPrice)
{
	document.getElementById('dnPrice').innerHTML=dnPrice.fontcolor("#000000");
}

function printCommentBox(commentBox)
{
	document.getElementById('comment').innerHTML=commentBox;
}

// ******************************* TESTING SEND TO CLIPBOARD FEATURE - START *******************************




// ******************************* TESTING SEND TO CLIPBOARD FEATURE - END *******************************

function main()
{
	
	var ledCode = setLedCode();
	var lengthCode = setLengthCode();
	var trueLength = setTrueLength(lengthCode);
	var totalWatts = setTotalWatts(ledCode, trueLength, lengthCode);
	
	var fullDescription = setFullDescription();
	
	var wattsDescription = setWattsDescription(totalWatts);
	
	printFullDescription(fullDescription);
	printTotalWattage(wattsDescription);
	
	var mm = setLengthConversion(trueLength);
	printLengthConversion(trueLength, mm);	
	
	var extrusionCode = setExtrusionCode();
	var dnPrice = setDnPrice(extrusionCode, trueLength, lengthCode);
	var commentBox = setCommentBox();
	printCommentBox(commentBox);
	setPriceDisplay();
	printDnPrice(dnPrice);
}

//set, disable and/or enable buttons for 1S enviornment
function set_1S_Env()
{
	resetAllForm();
	resetTailsBox();
	resetLengthBox();
	document.getElementById("2590").disabled=true;
	document.getElementById("nl").disabled=false;
	document.getElementById("op").disabled=true;
	document.getElementById("pg").disabled=true;
	document.getElementById("sl").disabled=false;
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
	document.getElementById("sl").disabled=true;
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
	document.getElementById("sl").disabled=true;
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
	document.getElementById("sl").disabled=true;
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
	document.getElementById("sl").disabled=true;
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
	document.getElementById("sl").disabled=true;
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
	document.getElementById("sl").disabled=false;
	document.getElementById("op").disabled=false;
	document.getElementById("nl").disabled=false;
	document.getElementById("pg").checked=false;
	document.getElementById("sl").checked=false;
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
	} else if(document.getElementById("sl").checked==true)
	{
		lensCode = "SL";
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
	} 
	else if (lensCode == 'SL')
	{
		lensDescription = 'clear, sliding lens;';
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
	
	var SL_1S_PER_FOOT = 7.5; //per foot price of 1S SL lens
	var ROBLON_ACC_DISCOUNT = 0.70; //roblon accessory discount
    
	// IF CHECKED, LOAD ROBLON PRICING
	if (document.getElementById("roblon_price").checked==true)
	{
		var _1S_DnPrice = new Array(19.32,	22.08,	27.60,	36.71,	46.09,	55.20,	64.31,	73.69,	82.80,	91.91,	101.29,	110.40,	119.51,	128.89,	138.00,	147.11,	156.49,	165.60,	174.71,	184.09,	193.20,	202.31,	211.69,	220.80);
		var _1R_DnPrice = new Array(21.90,	25.02,	31.28,	41.60,	52.24,	62.56,	72.88,	83.52,	93.84,	104.16,	114.80,	125.12,	135.44,	146.08,	156.40,	166.72,	177.36,	187.68,	198.00,	208.64,	218.96,	229.28,	239.92,	250.24);
		var _2RL_DnPrice = new Array(28.98,	33.12,	41.40,	55.06,	69.14,	82.80,	96.46,	110.54,	124.20,	137.86,	151.94,	165.60,	179.26,	193.34,	207.00,	220.66,	234.74,	248.40,	262.06,	276.14,	289.80,	303.46,	317.54,	331.20);
		var _2SL_DnPrice = new Array(28.98,	33.12,	41.40,	55.06,	69.14,	82.80,	96.46,	110.54,	124.20,	137.86,	151.94,	165.60,	179.26,	193.34,	207.00,	220.66,	234.74,	248.40,	262.06,	276.14,	289.80,	303.46,	317.54,	331.20);
		var _3SL_DnPrice = new Array(36.06,	41.22,	51.52,	68.52,	86.04,	103.04,	120.04,	137.56,	154.56,	171.56,	189.08,	206.08,	223.08,	240.60,	257.60,	274.60,	292.12,	309.12,	326.12,	343.64,	360.64,	377.64,	395.16,	412.16);
		var _3SL_Dual_DnPrice = new Array(54.10, 61.82,	77.28,	102.78,	129.06,	154.56,	180.06,	206.34,	231.84,	257.34,	283.62,	309.12,	334.62,	360.90,	386.40,	411.90,	438.18,	463.68,	489.18,	515.46,	540.96,	566.46,	592.74,	618.24);
		var _1QL_DnPrice = new Array(28.98,	33.12,	41.40,	55.06,	69.14,	82.80,	96.46,	110.54,	124.20,	137.86,	151.94,	165.60,	179.26,	193.34,	207.00,	220.66,	234.74,	248.40,	262.06,	276.14,	289.80,	303.46,	317.54,	331.20);
	} else //SET DISTRIBUTOR PRICING
	{
		var _1S_DnPrice = new Array(34.13,	39.01,	48.76,	64.85,	81.43,	97.52,	113.61,	130.19,	146.28,	162.37,	178.95,	195.04,	211.13,	227.71,	243.80,	259.89,	276.47,	292.56,	308.65,	325.23,	341.32,	357.41,	373.99,	390.08);
		var _1R_DnPrice = new Array(38.64,	44.16,	55.20,	73.42,	92.18,	110.40,	128.62,	147.38,	165.60,	183.82,	202.58,	220.80,	239.02,	257.78,	276.00,	294.22,	312.98,	331.20,	349.42,	368.18,	386.40,	404.62,	423.38,	441.60);
		var _2RL_DnPrice = new Array(48.94,	55.94,	69.92,	92.99,	116.77,	139.84,	162.91,	186.69,	209.76,	232.83,	256.61,	279.68,	302.75,	326.53,	349.60,	372.67,	396.45,	419.52,	442.52,	466.37,	489.44,	512.51,	536.29,	559.36);
		var _2SL_DnPrice = new Array(48.94,	55.94,	69.92,	92.99,	116.77,	139.84,	162.91,	186.69,	209.76,	232.83,	256.61,	279.68,	302.75,	326.53,	349.60,	372.67,	396.45,	419.52,	442.52,	466.37,	489.44,	512.51,	536.29,	559.36);
		var _3SL_DnPrice = new Array(61.18,	69.92,	87.40,	116.24,	145.96,	174.80,	203.64,	233.36,	262.20,	291.04,	320.76,	349.60,	378.44,	408.16,	437.00,	465.84,	495.56,	524.40,	553.24,	582.96,	611.80,	640.64,	670.36,	699.20);
		var _3SL_Dual_DnPrice = new Array(90.16, 103.04, 128.80, 171.30, 215.10, 257.60, 300.10, 343.90, 386.40, 428.90, 380.70, 515.20, 557.70, 601.50, 644.00, 686.50, 730.30, 772.80, 815.30, 859.10, 901.60, 944.10, 987.90, 1030.40);
		var _1QL_DnPrice = new Array(48.94,	55.94,	69.92,	92.99,	116.77,	139.84,	162.91,	186.69,	209.76,	232.83,	256.61,	279.68,	302.75,	326.53,	349.60,	372.67,	396.45,	419.52,	442.52,	466.37,	489.44,	512.51,	536.29,	559.36);
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
		
		//Adding "SL" clear lens price to 1S price
		if((document.getElementById("roblon_price").checked==true) && (document.getElementById("sl").checked==true))
		{
			var ROBLON_SL_1S_PER_FOOT = SL_1S_PER_FOOT * ROBLON_ACC_DISCOUNT;
			var sl_length = (trueLength/12); //convert lens length from inches to foot
			if(((sl_length*12)%12) <= 1)
			{				
				sl_length = Math.floor(sl_length); //round lens length down to nearest foot
			} else
			{
				sl_length = Math.ceil(sl_length); //round lens length up to nearest foot
			}
			var lens_cost = sl_length * ROBLON_SL_1S_PER_FOOT;
			dnPrice = dnPrice + lens_cost;
		} else if(document.getElementById("sl").checked==true)
		{
			var sl_length = (trueLength/12); //convert lens length from inches to foot
			if(((sl_length*12)%12) <= 1)
			{				
				sl_length = Math.floor(sl_length); //round lens length down to nearest foot
			} else
			{
				sl_length = Math.ceil(sl_length); //round lens length up to nearest foot
			}
			var lens_cost = sl_length * SL_1S_PER_FOOT;
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

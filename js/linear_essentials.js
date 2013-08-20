$( document ).ready(function(){
	function ELL_Obj(){
	//
	//Object Properties
	//
		this.LED_COUPON_LENGTH = 3.937; //led coupon length of all fixture types
		this.END_CAP_WIDTH = 0.37; //end cap width of all fixture types
		this.MIN_AIR_GAP = 0.4; //gap between board and end-cap is a minimum of 0.20" (x2) = 0.4
		
		this.tailExitCodeList;
		this.lengthCodeList;
		
		this.currentTypeIndex;
		this.wireOneIndex;
		this.wireTwoIndex;
		this.lengthIndex;
		this.customLengthInput;
		
		this.extCode;
		this.ledCode;
		this.colorTempCode;
		this.finishCode;
		this.lensCode;
		this.wireCode;
		this.lengthCode;
		this.factoryOptCode;
		this.partNumber;
		
		this.lengthList;
		this.trueLength_inches;
		this.trueLength_mm;
		this.currentType;
		this.fixtureWattages;
		this.totalWatts;
		this.powerType;
		this.ipRating;
		this.cri;
		this.couponCount;
		this.boardLength;
		this.fixtureComments; //*
		
		
		this.generalDescription;
		this.extDescript;
		this.lengthDescript;
		this.customlengthDescript;
		this.pwrTypeDescript;
		this.ledDescript;
		this.wattsDescript;
		this.colorDescript;
		this.criDescript;
		this.lensDescript;
		this.wireLengthDescript;
		this.wireExitDescript;
		this.connectorDescript;
		//this.mountingDescript; //*
		this.factoryOptDescript;
		this.finishDescript;
		this.fullDescription;
		
		this.dn_basePrice; //*
		this.roblon_basePrice; //*
		this.customLengthAdd; //*
		this.lensAdd; //*
		this.d_modifier; //*
		this.fixtPrice; //*
		
	//
	//Object Methods
	//
	this.setTailExitCodeList;
	this.loadTailExitOneList;
	this.loadTailExitTwoList;
	
	this.setLengthCodeList;
	this.loadLengthCodeList;
	 
	this.customInputON;
	
	this.getCurrentTypeIndex;
	this.getWireOneIndex;
	this.getWireTwoIndex;
	this.getLengthIndex;
	this.getCustomLengthInput;
	
	this.getExtCode;
	this.getLedCode;
	this.getColorTempCode;
	this.getFinishCode;
	this.getLensCode;
	this.getWireCode;
	this.getLengthCode;
	this.getFactoryOptCode;
	this.setPartNumber;
	
	this.setLengthList;
	this.setTrueLength_inches;
	this.setTrueLength_mm;
	this.setCurrentType;
	this.setFixtureWattages;
	this.setTotalWatts;
	this.setPowerType;
	this.setIpRating;
	this.setCRI;
	this.setCouponCount;
	this.setBoardLength;
	//this.setfixtureComments; //*
	
	this.errorCheck; //*
	
	this.setGeneralDescription;
	this.setExtDescript;
	this.setLengthDescript;
	this.setCustomlengthDescript;
	this.setPwrTypeDescript;
	this.setLedDescript; 
	this.setWattsDescript;
	this.setColorDescript;
	this.setCriDescript;
	this.setLensDescript;
	this.setWireLengthDescript;
	this.setWireExitDescript;
	this.setConnectorDescript;
	//this.setMountingDiscript; //*
	this.setFactoryOptDescript;
	this.setFinishDescript;
	this.setFullDescription;
	
	this.setDN_basePrice; //*
	this.setRoblon_basePrice; //*
	this.setCustomLengthAdd; //**
	this.setLensAdd; //*
	this.setD_modifier; //*
	this.setFixturePrice; //*
	
	this.priceDisplay; //*
	
	this.printFullDescription;
	this.printLengthConversion;
	this.printTotalWattage;
	this.printPrice;
	this.printComments;
	
	this.showCode;
	}

	//******** Set and Load Form Select Box Lists ********//
	
	ELL_Obj.prototype.setTailExitCodeList = function(){
		if(this.extCode==="1S"){
			this.tailExitCodeList = ['WE1', 'WE3', 'C'];
		} else if((this.extCode==="2SL") || (this.extCode==="3SL") || (this.extCode==="4SL")){
			this.tailExitCodeList = ['WE1', 'WE3', 'WR1', 'WR2', 'WR3', 'WL1', 'WL2', 'WL3', 'WB1', 'WB2', 'WB3', 'C'];
		} else if((this.extCode==="1R")){
			this.tailExitCodeList = ['WE1', 'WE3', 'WR1', 'WR2', 'WR3', 'WL1', 'WL2', 'WL3', 'WB1', 'WB3', 'C'];
		} else if(this.extCode==="2RL"){
			this.tailExitCodeList = ['WE1', 'WE3', 'WB1', 'WB3', 'C'];
		} else if(this.extCode==="1QL"){
			this.tailExitCodeList = ['WE1', 'WE3', 'WR1', 'WR3', 'WB1', 'TB3', 'C'];
		} else if((this.extCode==="5SL") || (this.extCode==="6SL")){
			this.tailExitCodeList = ['WE1', 'WE3', 'WR1', 'WR2', 'WR3', 'WL1', 'WL2', 'WL3', 'WB1', 'WB2', 'WB3', 'C'];
		} else if(this.extCode==="1EL"){
			this.tailExitCodeList = ['WE1', 'WE3', 'WB1', 'WB3', 'C'];
		} else { //If extCode == "LR" or Default
			this.tailExitCodeList = ['WE1'];
		}
	}
	
	ELL_Obj.prototype.loadTailExitOneList = function(){
		$.each(this.tailExitCodeList, function(key, value) {
			$('#tail-one-dropbox').append($("<option/>", {
        value: key,
        text: value
			}));
		});
	}
	
	ELL_Obj.prototype.loadTailExitTwoList = function(){
		$.each(this.tailExitCodeList, function(key, value) {
			$('#tail-two-dropbox').append($("<option/>", {
        value: key,
        text: value
			}));
		});
	}
	
	ELL_Obj.prototype.setLengthCodeList = function(){
		if(this.extCode==="LR"){
			this.lengthCodeList = [8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 'C'];
		} else {
			this.lengthCodeList = [4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80, 84, 88, 92, 96, 'C'];
		}
	}
	
	ELL_Obj.prototype.loadLengthCodeList = function(){
		$.each(this.lengthCodeList, function(key, value) {
			$('#length-dropbox').append($("<option/>", {
        value: key,
        text: value
			}));
		});
	}
	
	//******** ???? ********//
	
	ELL_Obj.prototype.customInputON = function(lengthCode){
		if(this.lengthCode==="C"){
			$('#custom-length-input').val("");
			$("#custom-length-input").prop('disabled', false);
		} else {
			$('#custom-length-input').val("");
			$("#custom-length-input").prop('disabled', true);
		}
	}
	
	//******** Get Index/User Inputs from Form ********//
	
	ELL_Obj.prototype.getCurrentTypeIndex = function(){
		this.currentTypeIndex = $("#current-dropbox").prop("selectedIndex");
	};	
		
	ELL_Obj.prototype.getWireOneIndex = function(){
		this.wireOneIndex = $("#tail-one-dropbox").prop("selectedIndex");
	};
		
	ELL_Obj.prototype.getWireTwoIndex = function(){
		this.wireTwoIndex = $("#tail-two-dropbox").prop("selectedIndex");
	};	

	ELL_Obj.prototype.getLengthIndex = function(){
		var temp = $("#length-dropbox").prop("selectedIndex");
		this.lengthIndex = (temp - 1);
	};
	
	ELL_Obj.prototype.getCustomLengthInput = function(){
		this.customLengthInput = $('#custom-length-input').val();
	}
	
	//******** Part Number Codes from Form ********//
	
	ELL_Obj.prototype.getExtCode = function(){
		var extVal = $('input[name=extrusion-group]:checked', '#myExtForm').val();
		if(extVal){this.extCode = extVal;} else
		{this.extCode = "XX";}
	};

	ELL_Obj.prototype.getLedCode = function(){
		var ledVal = $('input[name=led-board-group]:checked', '#myLedForm').val();
		if(ledVal){this.ledCode = ledVal;} else
		{this.ledCode = "XXXX";}
	};

	ELL_Obj.prototype.getColorTempCode = function(){
		var colVal = $('input[name=color-temp-group]:checked', '#myColForm').val();
		if(colVal){this.colorTempCode = colVal;} else
		{this.colorTempCode = "XX";}
	};

	ELL_Obj.prototype.getFinishCode = function(){
		var finishVal = $('input[name=ext-finish-group]:checked', '#myFinishForm').val();
		if(finishVal){this.finishCode = finishVal;} else
		{this.finishCode = "XX";}
	};

	ELL_Obj.prototype.getLensCode = function(){
		var lensVal = $('input[name=lens-group]:checked', '#myLensForm').val();
		if(lensVal){this.lensCode = lensVal;} else
		{this.lensCode = "XX";}
	};

	ELL_Obj.prototype.getWireCode = function(){
		if((this.wireOneIndex !== 0) && (this.wireTwoIndex === 0)){
			this.wireCode = $("#tail-one-dropbox option:selected").text();
		} else if ((this.wireOneIndex !== 0) && (this.wireTwoIndex !== 0)){
			this.wireCode = $("#tail-one-dropbox option:selected").text();
			this.wireCode += "/" + $("#tail-two-dropbox option:selected").text();
		} else if((this.wireOneIndex === 0) && (this.wireTwoIndex !== 0)){
			this.wireCode = $("#tail-two-dropbox option:selected").text();
		} else { this.wireCode = "XXX"; }
	};

	ELL_Obj.prototype.getLengthCode = function(){
		if(this.lengthIndex >= 0){
			this.lengthCode = $("#length-dropbox option:selected").text();
		} else {
			this.lengthCode = "X";
		}
	};

	ELL_Obj.prototype.getFactoryOptCode = function(){
		var factOptVal = $('input[name=factory-installed-group]:checked', '#myFctyOptForm').val();	
		if((this.extCode=="1R") || (this.extCode=="2RL")){
			if(factOptVal){
				factOptVal = "-"+$('input[name=factory-installed-group]:checked', '#myFctyOptForm').val();
			} else {
				factOptVal = "-XX";
			}
		} else {factOptVal = "";}
		
		var rohs_val = $('input[name=factory-installed-rohs]:checked', '#myFctyOptForm').val();		
		if(rohs_val){
			factOptVal += "-"+rohs_val;
		}
		this.factoryOptCode = factOptVal;
	};

	ELL_Obj.prototype.setPartNumber = function(){
		this.partNumber = "ELL-" + this.extCode + "-" + this.ledCode + "-" + this.colorTempCode + "-" + this.finishCode + "-" + this.lensCode + "-" + this.wireCode + "-" + this.lengthCode + this.factoryOptCode;
	};
	
	//******** Set Misc Details of Fixture ********//
	
	ELL_Obj.prototype.setLengthList = function(){
		if(this.extCode === "5SL"){
			this.lengthList = [5.12, 9.06, 13, 16.93, 20.87, 24.8, 28.74, 32.68, 36.61, 40.55, 44.49, 48.43, 52.36, 56.3, 60.24, 64.17, 68.11, 72.05];	
		} else if(this.extCode === "LR"){
			this.lengthList = [8.5, 12.55, 16.22, 20.07, 23.62, 27.79, 31.65, 35.51, 39.37, 43.22, 47.08];
		} else {
			this.lengthList = [4.72, 8.66, 12.6, 16.54, 20.47, 24.41, 28.35, 32.28, 36.22, 40.16, 44.09, 48.03, 51.97, 55.91, 59.84, 63.78, 67.72, 71.65, 75.59, 79.53, 83.46, 87.4, 91.34, 95.28];
		}
	}
	
	ELL_Obj.prototype.setTrueLength_inches = function(){
		this.trueLength_inches=0;
		var index = this.lengthIndex;
		
		if(this.lengthCode==="C"){
			//var trueLength = parseFloat($('#custom-length-input').val());
			var trueLength = this.customLengthInput;
			//var max_length = length_list[23];
			var lastIndex = (this.lengthList.length - 1);
			var max_length = this.lengthList[lastIndex];
			if (trueLength >= max_length){
				var alertMsg='CUSTOM LENGTH CANNOT EQUAL OR EXCEED MAX POSSIBLE!!';
				$.msgBox({
					title:"Warning!",
					content: alertMsg
				});
				exit();
			} else {
				this.trueLength_inches = trueLength;
			}
		} else {
			this.trueLength_inches = this.lengthList[index];
		}
	}
	
	ELL_Obj.prototype.setTrueLength_mm = function(){
		var MM_IN_INCHES = 25.4;
		this.trueLength_mm = (this.trueLength_inches * MM_IN_INCHES).toFixed(0);
	};
	
	ELL_Obj.prototype.setCurrentType = function(){
		if(this.extCode === "LR"){
			if(this.currentTypeIndex !== 0){
				this.currentType = $("#current-dropbox option:selected").text();
			} else {
				this.currentType = "XXX";
			}
		}
	}
	
	ELL_Obj.prototype.setFixtureWattages = function(){
		if(this.ledCode === "1084"){
			if(this.currentType === "700"){
				this.fixtureWattages = [4.6, 6.6, 8.7, 10.4, 12.1, 14.5, 16.5, 18.5, 20.5, 22.4, 24.9];
			} else if (this.currentType==="500"){
				this.fixtureWattages = [3.0, 4.4, 5.8, 7.1, 8.3, 10, 11.4, 12.8, 14.2, 15.7, 17.5];
			} else if(this.currentType==="350"){
				this.fixtureWattages = [2.1, 3, 4, 4.7, 5.6, 6.8, 7.7, 8.7, 9.7, 10.7, 12.0];
			} else {
				this.fixtureWattages = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			}
		} else if(this.ledCode === "1018"){			
			this.fixtureWattages = [0.9, 1.8, 2.7, 3.6, 4.5, 5.4, 6.3, 7.2, 8.1, 9.0, 9.9, 10.7, 11.6, 12.5, 13.4, 14.3, 15.2, 16.1, 17.0, 17.9, 18.1, 19.7, 20.6, 21.5];
		} else if((this.ledCode === "2545") || (this.ledCode === "3545") || (this.ledCode === "4545")) {
			this.fixtureWattages = [1.8, 3.7, 5.5, 7.3, 9.2, 11.0, 12.8, 14.6, 16.5, 18.3, 20.1, 22.0, 23.8, 25.6, 27.5, 29.3, 31.2, 33.0, 34.8, 36.7, 38.5, 40.3, 42.2, 44.0];
		} else if((this.ledCode === "2590") || (this.ledCode === "3590") || (this.ledCode === "4590")) {
			this.fixtureWattages = [3.7, 7.3, 11.0, 14.6, 18.3, 22.0, 25.6, 29.2, 33.0, 36.6, 40.2, 44.0, 47.6, 51.2, 55.0, 58.6, 62.4, 66.0, 69.6, 73.4, 77.0, 80.6, 84.4, 88.0];
		} else {
			this.fixtureWattages = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
		}
	}
	
	ELL_Obj.prototype.setTotalWatts = function(){
		this.totalWatts = this.fixtureWattages[this.lengthIndex];
	}
	
	
	ELL_Obj.prototype.setPowerType = function(){
		if(this.extCode === "LR"){
			this.powerType = this.currentType+"mA"; //350/500/700mA constant current type
		} else {
			this.powerType = "24v"; //24v constant voltage type
		}
	}
		
	ELL_Obj.prototype.setIpRating = function(){
		if(this.extCode === "5SL"){
			this.ipRating = "67";
		} else if((this.extCode === "LR") || (this.extCode === "1EL") || (this.extCode === "1R") || (this.extCode === "1S")){
			this.ipRating = "20";
		} else if((this.extCode === "2RL") || (this.extCode === "1QL") || (this.extCode === "4SL") || (this.extCode === "3SL") || (this.extCode === "2SL")){
			this.ipRating = "54";
		} else if(this.extCode === "PL"){
			/* do something */
		} else {
			this.ipRating = "00";
		}		
	}
	
	ELL_Obj.prototype.setCRI = function(){
		if(this.extCode === "LR"){
			this.cri = "87";
		} else if((this.extCode === "1S") || (this.extCode === "2SL") || (this.extCode === "3SL") || (this.extCode === "4SL") || (this.extCode === "5SL") || (this.extCode === "1EL") || (this.extCode === "1QL") || (this.extCode === "1R") || (this.extCode === "2R")){
			if((this.ledCode === "1018") || (this.ledCode === "2545") || (this.ledCode === "2590")){
				this.cri = "87";
			} else if((this.ledCode === "3545") || (this.ledCode === "3590")){
				this.cri = "92+";
			} else {
				this.cri = "85";
			}
		} else {
			this.cri = "0";
		}
	}
	
	ELL_Obj.prototype.setCouponCount = function(){
		this.couponCount = 0;
		if(this.extCode === "C"){
			//var avail_length = (this.trueLength_inches - this.END_CAP_WIDTH) - this.MIN_AIR_GAP; //available extrusion space for LED boards
			//var temp_count = (avail_length / this.LED_COUPON_LENGTH); //find rough number of coupons in a custom length
			this.couponCount = Math.floor((((this.trueLength_inches - this.END_CAP_WIDTH) - this.MIN_AIR_GAP) / this.LED_COUPON_LENGTH)); //round down to integer to get exact number
		} else {
			var LENGTH_CODE = parseInt(this.lengthCode, 10);
			var LENGTH_OF_COUPON = 4; //approx length of coupon in inches
			this.couponCount = (LENGTH_CODE/LENGTH_OF_COUPON);
		}
	}
	
	ELL_Obj.prototype.setBoardLength = function(){
		this.boardLength = (this.couponCount * this.LED_COUPON_LENGTH);
	}
	
	ELL_Obj.prototype.errorCheck = function(){
		var alertMsg="Please choose ";
		var errorStrg;
		if(this.extCode==="XX"){errorStrg="extrusion type!";}
		if(this.ledCode==="XXXX"){errorStrg="LED board type!";}
		if(this.currentType==="XXX"){errorStrg="Current type!";}
		if(this.colorTempCode==="XX"){errorStrg="LED color type!";}
		if(this.finishCode==="XX"){errorStrg="finish type!";}
		if(this.lensCode==="XX"){errorStrg="lens type!";}
		if((this.factoryOptCode==='-XX') || (this.factoryOptCode==='-XX-RO')){errorStrg="factory options type!";}
		if(this.wireCode==="XXX"){errorStrg="wire exit type!";}		
		if(this.lengthCode==="X"){errorStrg="fixture length!";}
		if((isNaN(this.trueLength_inches)) && (this.lengthCode==="C")){errorStrg="valid custom length!";}
		
		if(errorStrg){
			$.msgBox({
				title:"Warning!",
				/* content:"Merhaba Dünya! / Hello World!" */
				content: alertMsg+errorStrg
			});
			exit();
		}
	}
	
	//******** Set Descriptions ********//
	
	ELL_Obj.prototype.setGeneralDescription = function(){
		this.generalDescription = "VLT Essential Linear LED; ";
	}
	
	ELL_Obj.prototype.setExtDescript = function(){
		if(this.extCode === "4SL"){
			this.extDescript = "Square (IP"+this.ipRating+") extrusion with extra depth; ";
		} else if(this.extCode === "1EL"){
			this.extDescript = "Demi-Ellipse (IP"+this.ipRating+") extrusion; ";
		} else if(this.extCode === "1QL"){
			this.extDescript = "Quarter - Round (IP"+this.ipRating+") extrusion; ";
		} else if(this.extCode === "1S"){
			this.extDescript = "Small - Square (IP"+this.ipRating+") extrusion; ";
		} else if(this.extCode === "3SL"){
			this.extDescript = "Large - Round/Square (IP"+this.ipRating+") extrusion; ";
		} else if((this.extCode === "2SL") || (this.extCode === "LR")){
			this.extDescript = "Medium Square (IP"+this.ipRating+") extrusion; ";
		} else if((this.extCode === "1R") || (this.extCode === "2RL")){
			this.extDescript = "Round (IP"+this.ipRating+") extrusion; ";
		} else{
			this.extDescript = ";";
		}
	}
	
	ELL_Obj.prototype.setLengthDescript = function(){
		this.lengthDescript = this.trueLength_inches + "\" (" + this.trueLength_mm + "mm) extrusion length; ";
	}
	
	ELL_Obj.prototype.setCustomlengthDescript = function(){
		if(this.lengthCode === 'C'){
			this.customlengthDescript = "with LED board "+this.board_length+"\" long, centered within extrusion; ";
		} else {
			this.customlengthDescript = "";
		}
	}
	
	ELL_Obj.prototype.setPwrTypeDescript = function(){
		if(this.extCode === "LR"){
			this.pwrTypeDescript = this.powerType+" constant current; "
		} else {
			this.pwrTypeDescript = this.powerType+" constant voltage; "
		}
	}
	
	ELL_Obj.prototype.setLedDescript = function(){
		if(this.extCode === "LR"){
			if ((this.ledCode === "1084") && (this.currentType === "700")){
				this.ledDescript = "0.10 watt (Nichia 157 - 42 lm/w) LEDs; ";
			} else if ((this.ledCode === "1084") && (this.currentType === "500")){
				this.ledDescript = "0.10 watt (Nichia 157 - 47 lm/w) LEDs; ";
			} else if ((this.ledCode === "1084") && (this.currentType === "350")){
				this.ledDescript = "0.10 watt (Nichia 157 - 46 lm/w) LEDs; ";
			}	else {
				this.ledDescript = ";";
			}
		} else {
			if (this.ledCode === "1018"){
				this.ledDescript = "0.10 watt (Nichia 1157 - 108 lm/w) LED; ";
			} else if (this.ledCode === "2545"){
				this.ledDescript = "0.25 watt (Nichia 157 - 108 lm/w) LED; ";
			} else if (this.ledCode === "3545"){
				this.ledDescript = "0.25 watt HI-CRI (Nichia 757 - 110 lm/w) LED; ";
			} else if (this.ledCode === "4545"){
				this.ledDescript = "0.25 watt HI-LUMEN (Nichia 757 - 126 lm/w) LED; ";
			} else if (this.ledCode === "2590"){
				this.ledDescript = "2 rows of 0.25 watt (Nichia 157 - 126 lm/w) LED; ";
			} else if (this.ledCode === "3590"){
				this.ledDescript = "2 rows of 0.25 watt HI-CRI (Nichia 757 - 110 lm/w) LED; ";
			} else if (this.ledCode === "4590"){
				this.ledDescript = "2 rows of 0.25 watt HI-LUMEN (Nichia 757 - 126 lm/w) LED; ";
			} else {
				this.ledDescript = ";";
			}
		}
	}
	
	ELL_Obj.prototype.setWattsDescript = function(){
		if((this.ledCode === "1084") && (this.currentType === "700")){
			this.wattsDescript = "6.6w/ft; ";
		} else if((this.ledCode === "1084") && (this.currentType === "500")){
			this.wattsDescript = "4.4w/ft; ";
		} else if((this.ledCode === "1084") && (this.currentType === "350")){
			this.wattsDescript = "3.0w/ft; ";
		} else if(this.ledCode === "1018"){
			this.wattsDescript = "2.7w/ft; ";
		} else if((this.ledCode === "2590") || (this.ledCode === "3590") || (this.ledCode === "4590")){
			this.wattsDescript = "5.5w/ft; ";
		} else if((this.ledCode === "2545") || (this.ledCode === "3545") || (this.ledCode === "4545")) {
			this.wattsDescript = "11.0w/ft; ";
		} else {
			this.wattsDescript = "0.0w/ft; ";
		}
	}
		
	ELL_Obj.prototype.setColorDescript = function(){
		if (this.colorTempCode === '24')
		{
			this.colorDescript = "2400°K color temp, ";
		} else if (this.colorTempCode === '27')
		{
			this.colorDescript = "2700°K color temp, ";
		} else if (this.colorTempCode === '30')
		{
			this.colorDescript = "3000°K color temp, ";
		} else if (this.colorTempCode === '35')
		{
			this.colorDescript = "3500°K color temp, ";
		} else if (this.colorTempCode === '40')
		{
			this.colorDescript = "4000°K color temp, ";
		} else if (this.colorTempCode === '45')
		{
			this.colorDescript = "4500°K color temp, ";
		}	else {
			this.colorDescript = ";";
		}
	}
	
	ELL_Obj.prototype.setCriDescript = function(){
		this.criDescript = this.cri+" CRI; ";
	}
	
	ELL_Obj.prototype.setLensDescript = function(){
		if (this.lensCode === 'PG'){
			this.lensDescript = 'clear, acrylic lens; ';
		} else if (this.lensCode === 'SLC'){
			this.lensDescript = 'clear, sliding lens; ';
		} else if (this.lensCode === '10C'){
			this.lensDescript = '10° optical lens; ';
		} else if (this.lensCode === '30C'){
			this.lensDescript = '30° optical lens; ';
		} else if (this.lensCode === '60C'){
			this.lensDescript = '60° optical lens; ';
		} else if (this.lensCode === 'OP1'){
			this.lensDescript = 'opal, light-diffused lens; ';
		} else if (this.lensCode === 'OP2'){
			this.lensDescript = 'opal, medium-diffused lens; ';
		} else if (this.lensCode === 'OP3'){
			this.lensDescript = 'opal, heavily-diffused lens; ';
		} else if (this.lensCode === 'DF'){
			this.lensDescript = 'diffuser film; ';
		} else if (this.lensCode === 'DL'){
			this.lensDescript = 'diffuser lens; ';
		}	else if(this.lensCode === 'NL'){
			this.lensDescript = 'no lens; ';
		} else {
			this.lensDescript = ";";
		}
	}
	
	ELL_Obj.prototype.setWireLengthDescript = function(){
		if((this.wireOneIndex > 0) && (this.wireTwoIndex > 0)){
			this.wireLengthDescript = "2 - 96\" 18 AWG wire leads, ";
		} else if((this.wireOneIndex > 0) && (this.wireTwoIndex < 1) || (this.wireOneIndex < 1) && (this.wireTwoIndex > 0)){
			this.wireLengthDescript = "1 - 96\" 18 AWG wire lead, ";
		} else {
			this.wireLengthDescript = ";";
		}
	}
	
	ELL_Obj.prototype.setWireExitDescript = function(){
		if ((this.wireOneIndex > 0) && (this.wireTwoIndex > 0)){
			this.wireExitDescript = this.wireCode+" wire exits ";
		} else if((this.wireOneIndex > 0) && (this.wireTwoIndex < 1) || (this.wireOneIndex < 1) && (this.wireTwoIndex > 0)){
			this.wireExitDescript = this.wireCode+" wire exit ";
		} else {
			this.wireExitDescript = "";
		}
	}
	
	ELL_Obj.prototype.setConnectorDescript = function(){
		this.connectorDescript = "with male Tyco Mate n Lock connector; ";
	}
	
	ELL_Obj.prototype.setFactoryOptDescript = function(){		
		if (this.factoryOptCode.indexOf("IM") > -1){
			this.factoryOptDescript = "factory installed plastic tab end-cap for inside mount, screws directly to mounting surface; ";
		} else if (this.factoryOptCode.indexOf("EM") > -1){
			this.factoryOptDescript = "factory instaled end-mount leg; ";
		} else if (this.factoryOptCode.indexOf("TM") > -1){
			this.factoryOptDescript = "factory installed T-Mount leg; ";
		} else if (this.factoryOptCode.indexOf("CM") > -1){
			this.factoryOptDescript = "factory installed corner-mount leg; ";
		} else if(this.factoryOptCode.indexOf("BU") > -1){
			this.factoryOptDescript = "factory installed threaded bushing with nut; ";
		} else {
			this.factoryOptDescript = "";
		} 
		
		if (this.factoryOptCode.indexOf("RO") > -1){
			this.factoryOptDescript = this.factoryOptDescript+"RoHS compliant product; ";
		} else {
			this.factoryOptDescript = "";	
		}
	}
	
	ELL_Obj.prototype.setFinishDescript = function(){
		if (this.finishCode === 'AL'){
			this.finishDescript = "silver anodized finish;";
		} else if (this.finishCode === 'BL'){
			this.finishDescript = "black anodized finish;";
		} else if(this.finishCode === 'WH'){
			this.finishDescript = "white powder-coat finish;";
		} else if(this.finishCode === 'BR'){
			this.finishDescript = "bronze powder-coat finish;";
		} else if(this.finishCode === "C"){
			this.finishDescript = "custom XXX finish;";
		} else {
			this.finishDescript = "";
		}
	}
	
	ELL_Obj.prototype.setFullDescription = function(){
		this.fullDescription = this.partNumber + " - " + this.generalDescription + this.extDescript + this.lengthDescript + this.customlengthDescript + this.pwrTypeDescript + this.ledDescript + this.wattsDescript + this.colorDescript + this.criDescript + this.lensDescript + this.wireLengthDescript  + this.wireExitDescript + this.connectorDescript + this.factoryOptDescript + this.finishDescript;
	}
	
	//******** Print to Form ********//
	
	ELL_Obj.prototype.printFullDescription = function(){
		$("#description").text(this.fullDescription);
	}
	
	ELL_Obj.prototype.printLengthConversion = function(){
		$("#inches").text(this.trueLength_inches);
		$("#mm").text(this.trueLength_mm);
	}
	
	ELL_Obj.prototype.printTotalWattage = function(){
		$("#watts").text(this.totalWatts+" watts each");
	}
	
	ELL_Obj.prototype.printPrice = function(){
		$("#price").text(this.fixtPrice);
	}
	
	ELL_Obj.prototype.printCommentBox = function(){
		$("#comment").text(this.fixtureComments);
	}
	
	//******** XXX ********//
	
	ELL_Obj.prototype.XX = function(){
		var XX = $('input[name=XXX-group]:checked', '#myXXXForm').val();
		if(lengthVal){this.XX = XX;} else
		{this.XX = "XX";}
	}

	ELL_Obj.prototype.showCode = function(){
		//alert("Extrusion is: " + this.extCode);
		//alert("LED Type is: " + this.ledCode);
		//alert("Factory Option is: " + this.factoryOptCode);
		//alert("Part Number is: " + this.partNumber);
		alert("Description is: " + this.fullDescription);
	}
	
	ELL_Obj.prototype.setDN_basePrice = function(){
	}
	
	ELL_Obj.prototype.setRoblon_basePrice = function(){
	}
	
	ELL_Obj.prototype.setCustomLengthAdd = function(){
	}
	
	ELL_Obj.prototype.setLensAdd = function(){
	}
	
	ELL_Obj.prototype.setD_modifier = function(){
	}
	
	ELL_Obj.prototype.setFixturePrice = function(){
	}
	
	ELL_Obj.prototype.priceDisplay = function(){
	}
	
	//******** Set Form Elements ********//
	
	//*set and load tail and length dropbox*//
	$( ".ext-button" ).click(function( event ){
		//create object
		var onForm = new ELL_Obj();
		onForm.getExtCode();
		//set and load fixture tail exits to form
		onForm.setTailExitCodeList();
		onForm.loadTailExitOneList();
		onForm.loadTailExitTwoList();
		//set and load fixture lengths to form
		onForm.setLengthCodeList();
		onForm.loadLengthCodeList();
	});
	
	$( "#length-dropbox" ).change(function( event ){
		//create object
		var onForm = new ELL_Obj();
		//determine length Code
		onForm.getLengthIndex();
		onForm.getLengthCode();
		//call custom input method to confirm whether input should be on/off
		onForm.customInputON();
	});
	
	//******** Main Fucntion Here ********//
	
	$( "#try" ).click(function( event ){
		var isFixture = new ELL_Obj();
		
		isFixture.getCurrentTypeIndex();
		isFixture.getWireOneIndex();
		isFixture.getWireTwoIndex();
		isFixture.getLengthIndex();
		isFixture.getCustomLengthInput();
		
		isFixture.getExtCode();
		isFixture.getLedCode();
		isFixture.getColorTempCode();
		isFixture.getFinishCode();
		isFixture.getLensCode();
		isFixture.getWireCode();
		isFixture.getLengthCode();
		isFixture.getFactoryOptCode();
		isFixture.setPartNumber();
		
		isFixture.setLengthList();
		isFixture.setTrueLength_inches();
		isFixture.setTrueLength_mm();
		isFixture.setCurrentType();
		isFixture.setFixtureWattages();
		isFixture.setTotalWatts();
		isFixture.setPowerType();
		isFixture.setIpRating();
		isFixture.setCRI();
		isFixture.setCouponCount();
		isFixture.setBoardLength();
		//isFixture.setfixtureComments();
		
		isFixture.errorCheck();
		
		isFixture.setGeneralDescription();
		isFixture.setExtDescript();
		isFixture.setLengthDescript();
		isFixture.setCustomlengthDescript();
		isFixture.setPwrTypeDescript();
		isFixture.setLedDescript();
		isFixture.setWattsDescript();
		isFixture.setColorDescript();
		isFixture.setCriDescript();
		isFixture.setLensDescript();
		isFixture.setWireLengthDescript();
		isFixture.setWireExitDescript();
		isFixture.setConnectorDescript();
		//this.setMountingDiscript; //*
		isFixture.setFactoryOptDescript();
		isFixture.setFinishDescript();
		isFixture.setFullDescription();
		
		isFixture.printFullDescription();
		isFixture.printLengthConversion();
		isFixture.printTotalWattage();
		//isFixture.printPrice();
		//isFixture.printCommentBox();
		//isFixture.showCode();
		main(isFixture.extCode, isFixture.lensCode, isFixture.lengthCode, isFixture.trueLength_inches);
	});
	
	
});

	
//*******************************************************************************

//set, disable and/or enable buttons for 1S enviornment
function set_1S_Env(){
	resetAllForm();
	resetTailsBox();
	resetLengthBox();
	document.getElementById("2590").disabled=true;
	document.getElementById("3590").disabled=true;
	document.getElementById("4590").disabled=true;
	document.getElementById("1084").disabled=true;
	document.getElementById("current-dropbox").disabled=true;
	document.getElementById("wh").disabled=true;
	document.getElementById("br").disabled=true;
	document.getElementById("nl").disabled=false;
	document.getElementById("pg").disabled=true;
	document.getElementById("slc").disabled=false;
	document.getElementById("10c").disabled=true;
	document.getElementById("30c").disabled=true;
	document.getElementById("60c").disabled=true;
	document.getElementById("op1").disabled=true;
	document.getElementById("op2").disabled=true;
	document.getElementById("op3").disabled=true;
	document.getElementById("df").disabled=true;
	document.getElementById("dl").disabled=true;
	document.getElementById("em").disabled=true;
	document.getElementById("tm").disabled=true;
	document.getElementById("cm").disabled=true;
	document.getElementById("ro").disabled=false;
	document.getElementById("current-dropbox").disabled=true;
	document.getElementById("tail-two-dropbox").disabled=false;
	//var squareExits = new Array('Select Tail', 'WE1', 'WE3', 'C');
	//setAllTailExits(squareExits);
	//setFixtureLengths();
}

//set, disable and/or enable buttons for 2Sl enviornment
function set_2SL_Env(){
	resetAllForm();
	resetTailsBox();
	resetLengthBox();
	document.getElementById("2590").disabled=true;
	document.getElementById("3590").disabled=true;
	document.getElementById("4590").disabled=true;
	document.getElementById("1084").disabled=true;
	document.getElementById("current-dropbox").disabled=true;
	document.getElementById("wh").disabled=true;
	document.getElementById("br").disabled=true;
	document.getElementById("nl").disabled=true;
	document.getElementById("slc").disabled=true;
	document.getElementById("10c").disabled=true;
	document.getElementById("30c").disabled=false;
	document.getElementById("60c").disabled=true;
	document.getElementById("op1").disabled=false;
	document.getElementById("op2").disabled=false;
	document.getElementById("op3").disabled=false;
	document.getElementById("df").disabled=true;
	document.getElementById("dl").disabled=true;
	document.getElementById("em").disabled=true;
	document.getElementById("tm").disabled=true;
	document.getElementById("cm").disabled=true;
	document.getElementById("ro").disabled=false;
	document.getElementById("current-dropbox").disabled=true;
	document.getElementById("tail-two-dropbox").disabled=false;
	document.getElementById("distributor_price").checked=true;
	//var squareExits = new Array('Select Tail', 'WE1', 'WE3', 'WR1', 'WR2', 'WR3', 'WL1', 'WL2', 'WL3', 'WB1', 'WB2', 'WB3', 'C');
	//setAllTailExits(squareExits);
	//setFixtureLengths();
}

//set, disable and/or enable buttons for 1R enviornment
function set_1R_Env(){
	resetAllForm();
	resetTailsBox();
	resetLengthBox();
	document.getElementById("2590").disabled=true;
	document.getElementById("3590").disabled=true;
	document.getElementById("4590").disabled=true;
	document.getElementById("1084").disabled=true;
	document.getElementById("current-dropbox").disabled=true;
	document.getElementById("pg").disabled=true;
	document.getElementById("slc").disabled=true;
	document.getElementById("10c").disabled=true;
	document.getElementById("30c").disabled=true;
	document.getElementById("60c").disabled=true;
	document.getElementById("op1").disabled=true;
	document.getElementById("op2").disabled=true;
	document.getElementById("op3").disabled=true;
	document.getElementById("df").disabled=true;
	document.getElementById("dl").disabled=true;
	document.getElementById("n").disabled=false;
	document.getElementById("im").disabled=false;
	document.getElementById("em").disabled=false;
	document.getElementById("tm").disabled=false;
	document.getElementById("cm").disabled=false;
	document.getElementById("bu").disabled=false;	
	document.getElementById("ro").disabled=false;
	document.getElementById("current-dropbox").disabled=true;
	document.getElementById("tail-two-dropbox").disabled=false;
	document.getElementById("distributor_price").checked=true;
	//var roundExits = new Array('Select Tail', 'WE1', 'WE3', 'WR1', 'WR2', 'WR3', 'WL1', 'WL2', 'WL3', 'WB1', 'WB3', 'C');
	//setAllTailExits(roundExits);
	//setFixtureLengths();
}

//set, disable and/or enable buttons for 2R enviornment
function set_2RL_Env(){
	resetAllForm();
	resetTailsBox();
	resetLengthBox();
	document.getElementById("2590").disabled=true;
	document.getElementById("3590").disabled=true;
	document.getElementById("4590").disabled=true;
	document.getElementById("1084").disabled=true;
	document.getElementById("current-dropbox").disabled=true;
	document.getElementById("nl").disabled=true;
	document.getElementById("slc").disabled=true;
	document.getElementById("10c").disabled=true;
	document.getElementById("30c").disabled=false;
	document.getElementById("60c").disabled=true;
	document.getElementById("op1").disabled=false;
	document.getElementById("op2").disabled=false;
	document.getElementById("op3").disabled=false;
	document.getElementById("df").disabled=true;
	document.getElementById("dl").disabled=true;
	document.getElementById("n").disabled=false;
	document.getElementById("im").disabled=false;
	document.getElementById("em").disabled=false;
	document.getElementById("tm").disabled=false;
	document.getElementById("cm").disabled=false;
	document.getElementById("bu").disabled=false;
	document.getElementById("ro").disabled=false;
	document.getElementById("current-dropbox").disabled=true;
	document.getElementById("tail-two-dropbox").disabled=false;
	document.getElementById("distributor_price").checked=true;
	//var roundExits = new Array('Select Tail', 'WE1', 'WE3', 'WB1', 'WB3', 'C');
	//setAllTailExits(roundExits);
	//setFixtureLengths();
}

//set, disable and/or enable buttons for 3SL enviornment
function set_3SL_Env(){
	resetAllForm();
	resetTailsBox();
	resetLengthBox();
	document.getElementById("1084").disabled=true;
	document.getElementById("current-dropbox").disabled=true;
	document.getElementById("wh").disabled=true;
	document.getElementById("br").disabled=true;
	document.getElementById("nl").disabled=true;
	document.getElementById("slc").disabled=true;
	document.getElementById("10c").disabled=true;
	document.getElementById("30c").disabled=true;
	document.getElementById("60c").disabled=true;
	document.getElementById("op1").disabled=false;
	document.getElementById("op2").disabled=false;
	document.getElementById("op3").disabled=false;
	document.getElementById("df").disabled=true;
	document.getElementById("dl").disabled=true;
	document.getElementById("em").disabled=true;
	document.getElementById("tm").disabled=true;
	document.getElementById("cm").disabled=true;
	document.getElementById("ro").disabled=false;
	document.getElementById("current-dropbox").disabled=true;
	document.getElementById("tail-two-dropbox").disabled=false;
	document.getElementById("distributor_price").checked=true;
	//var squareExits = new Array('Select Tail', 'WE1', 'WE3', 'WR1', 'WR2', 'WR3', 'WL1', 'WL2', 'WL3', 'WB1', 'WB2', 'WB3', 'C');
	//setAllTailExits(squareExits);
	//setFixtureLengths();
}

//set, disable and/or enable buttons for 1QL enviornment
function set_1QL_Env(){
	resetAllForm();
	resetTailsBox();
	resetLengthBox();
	document.getElementById("2590").disabled=true;
	document.getElementById("3590").disabled=true;
	document.getElementById("4590").disabled=true;
	document.getElementById("1084").disabled=true;
	document.getElementById("current-dropbox").disabled=true;
	document.getElementById("nl").disabled=true;
	document.getElementById("slc").disabled=true;
	document.getElementById("10c").disabled=true;
	document.getElementById("30c").disabled=false;
	document.getElementById("60c").disabled=true;
	document.getElementById("op1").disabled=false;
	document.getElementById("op2").disabled=false;
	document.getElementById("op3").disabled=false;
	document.getElementById("df").disabled=true;
	document.getElementById("dl").disabled=true;
	document.getElementById("ro").disabled=false;
	document.getElementById("current-dropbox").disabled=true;
	document.getElementById("tail-two-dropbox").disabled=false;
	document.getElementById("distributor_price").checked=true;
	//var quarterRoundExits = new Array('Select Tail', 'WE1', 'WE3', 'WR1', 'WR3', 'WB1', 'TB3', 'C');
	//setAllTailExits(quarterRoundExits);
	//setFixtureLengths();
}

//set, disable and/or enable buttons for 4SL enviornment
function set_4SL_Env(){
	resetAllForm();
	resetTailsBox();
	resetLengthBox();
	document.getElementById("2590").disabled=true;
	document.getElementById("3590").disabled=true;
	document.getElementById("4590").disabled=true;
	document.getElementById("1084").disabled=true;
	document.getElementById("current-dropbox").disabled=true;
	document.getElementById("wh").disabled=true;
	document.getElementById("br").disabled=true;
	document.getElementById("pg").disabled=true;
	document.getElementById("nl").disabled=true;
	document.getElementById("slc").disabled=true;
	document.getElementById("10c").disabled=true;
	document.getElementById("30c").disabled=true;
	document.getElementById("60c").disabled=true;
	document.getElementById("op1").disabled=false;
	document.getElementById("op2").disabled=false;
	document.getElementById("op3").disabled=false;
	document.getElementById("df").disabled=true;
	document.getElementById("dl").disabled=true;
	document.getElementById("ro").disabled=false;
	document.getElementById("current-dropbox").disabled=true;
	document.getElementById("tail-two-dropbox").disabled=false;
	document.getElementById("distributor_price").checked=true;
	//var squareExits = new Array('Select Tail', 'WE1', 'WE3', 'WR1', 'WR2', 'WR3', 'WL1', 'WL2', 'WL3', 'WB1', 'WB2', 'WB3', 'C');
	//setAllTailExits(squareExits);
	//setFixtureLengths();
}

//set, disable and/or enable buttons for 5SL enviornment
function set_5SL_Env(){
	resetAllForm();
	resetTailsBox();
	resetLengthBox();
	document.getElementById("2590").disabled=true;
	document.getElementById("3590").disabled=true;
	document.getElementById("4590").disabled=true;
	document.getElementById("1084").disabled=true;
	document.getElementById("current-dropbox").disabled=true;
	document.getElementById("wh").disabled=true;
	document.getElementById("br").disabled=true;
	document.getElementById("nl").disabled=true;
	document.getElementById("pg").disabled=false;
	document.getElementById("slc").disabled=true;
	document.getElementById("10c").disabled=true;
	document.getElementById("30c").disabled=true;
	document.getElementById("60c").disabled=true;
	document.getElementById("df").disabled=true;
	document.getElementById("dl").disabled=true;
	document.getElementById("ro").disabled=false;
	document.getElementById("current-dropbox").disabled=true;
	document.getElementById("tail-two-dropbox").disabled=false;
	document.getElementById("distributor_price").checked=true;
	//var squareExits = new Array('Select Tail', 'WE1', 'WE3', 'WR1', 'WR2', 'WR3', 'WL1', 'WL2', 'WL3', 'WB1', 'WB2', 'WB3', 'C');
	//setAllTailExits(squareExits);
	//setFixtureLengths();
}

//set, disable and/or enable buttons for 6SL enviornment
function set_6SL_Env(){
	resetAllForm();
	resetTailsBox();
	resetLengthBox();
	document.getElementById("1084").disabled=true;
	document.getElementById("current-dropbox").disabled=true;
	document.getElementById("wh").disabled=true;
	document.getElementById("br").disabled=true;
	document.getElementById("nl").disabled=true;
	document.getElementById("pg").disabled=false;
	document.getElementById("slc").disabled=true;
	document.getElementById("10c").disabled=true;
	document.getElementById("30c").disabled=true;
	document.getElementById("60c").disabled=true;
	document.getElementById("op1").disabled=false;
	document.getElementById("op2").disabled=false;
	document.getElementById("op3").disabled=false;
	document.getElementById("df").disabled=true;
	document.getElementById("dl").disabled=true;
	document.getElementById("ro").disabled=false;
	document.getElementById("current-dropbox").disabled=true;
	document.getElementById("tail-two-dropbox").disabled=false;
	document.getElementById("distributor_price").checked=true;
	//var squareExits = new Array('Select Tail', 'WE1', 'WE3', 'WR1', 'WR2', 'WR3', 'WL1', 'WL2', 'WL3', 'WB1', 'WB2', 'WB3', 'C');
	//setAllTailExits(squareExits);
	//setFixtureLengths();
}

//set, disable and/or enable buttons for 1EL enviornment
function set_1EL_Env(){
	resetAllForm();
	resetTailsBox();
	resetLengthBox();
	document.getElementById("2590").disabled=true;
	document.getElementById("3590").disabled=true;
	document.getElementById("4590").disabled=true;
	document.getElementById("1084").disabled=true;
	document.getElementById("current-dropbox").disabled=true;
	document.getElementById("nl").disabled=true;
	document.getElementById("pg").disabled=true;
	document.getElementById("slc").disabled=true;
	document.getElementById("10c").disabled=true;
	document.getElementById("30c").disabled=true;
	document.getElementById("60c").disabled=true;
	document.getElementById("op1").disabled=true;
	document.getElementById("op2").disabled=true;
	document.getElementById("op3").disabled=true;
	document.getElementById("df").disabled=false;
	document.getElementById("df").checked=true;
	document.getElementById("dl").disabled=true;
	document.getElementById("ro").disabled=false;
	document.getElementById("current-dropbox").disabled=true;
	document.getElementById("tail-two-dropbox").disabled=false;
	document.getElementById("distributor_price").checked=true;
	//var EL_Exits = new Array('Select Tail', 'WE1', 'WE3', 'WB1', 'WB3', 'C');
	//setAllTailExits(EL_Exits);
	//setFixtureLengths();
}

//set, disable and/or enable buttons for LR enviornment
function set_LR_Env(){
	resetAllForm();
	resetTailsBox();
	resetLengthBox();
	document.getElementById("1018").disabled=true;
	document.getElementById("2545").disabled=true;
	document.getElementById("3545").disabled=true;
	document.getElementById("4545").disabled=true;
	document.getElementById("2590").disabled=true;
	document.getElementById("3590").disabled=true;
	document.getElementById("4590").disabled=true;
	//document.getElementById("1084").checked=true;
	document.getElementById("current-dropbox").disabled=false;
	document.getElementById("custom").disabled=false;
	document.getElementById("nl").disabled=true;
	document.getElementById("pg").disabled=true;
	document.getElementById("slc").disabled=true;
	document.getElementById("10c").disabled=true;
	document.getElementById("30c").disabled=true;
	document.getElementById("60c").disabled=true;
	document.getElementById("op1").disabled=true;
	document.getElementById("op2").disabled=true;
	document.getElementById("op3").disabled=true;
	document.getElementById("df").disabled=true;
	document.getElementById("dl").checked=true;
	document.getElementById("ro").disabled=false;
	document.getElementById("tail-two-dropbox").disabled=true;
	document.getElementById("distributor_price").checked=true;
	//var LR_Exits = new Array('Select Tail', 'WE1');
	//setAllTailExits(LR_Exits);
	//setFixtureLengths();
}

//set, disable and/or enable buttons for 10th watt (157) LED enviornment
function set_1018_Env(){
	document.getElementById("2400").checked=false;
	document.getElementById("2400").disabled=true;
}

//set, disable and/or enable buttons for 1/4 watt (157) LED enviornment
function set_2545_Env(){
	document.getElementById("2400").checked=false;
	document.getElementById("2400").disabled=false;
}

//set, disable and/or enable buttons for dual XX watt (XXX) LED enviornment
function set_3545_Env(){
	document.getElementById("2400").checked=false;
	document.getElementById("2400").disabled=false;
}

//set, disable and/or enable buttons for 1/4 watt (757) LED enviornment
function set_4545_Env(){
	document.getElementById("2400").checked=false;
	document.getElementById("2400").disabled=false;
}

//set, disable and/or enable buttons for dual 1/4 watt (157) LED enviornment
function set_2590_Env(){
	document.getElementById("2400").checked=false;
	document.getElementById("2400").disabled=false;
}

//set, disable and/or enable buttons for dual 1/4 watt (757) LED enviornment
function set_3590_Env(){
	document.getElementById("2400").checked=false;
	document.getElementById("2400").disabled=false;
}

//set, disable and/or enable buttons for dual 1/4 watt (757) LED enviornment
function set_4590_Env(){
	document.getElementById("2400").checked=false;
	document.getElementById("2400").disabled=false;
}

//set, disable and/or enable buttons for dual XX watt (XXX) LED enviornment
function set_1084_Env(){
	document.getElementById("2400").checked=false;
	document.getElementById("2400").disabled=true;
}

//******************************************************************
function resetAllForm(){
	resetLedBoardButtons();
	resetCurrentOpt;
	resetColorTempButtons();
	resetFinishButtons();
	resetLensButtons();
	resetFactoryOptionsButtons();
	resetCustomLength();	
	resetDescription();
	resetPriceModifierButtons();	
	resetCommentsBox();
}

function resetTailsBox(){
	document.getElementById("tail-one-dropbox").options.length = 1;
	document.getElementById("tail-two-dropbox").options.length = 1;
}

function resetLengthBox(){
	document.getElementById("length-dropbox").options.length = 1;
}
	
function resetLedBoardButtons(){
	document.getElementById("1018").disabled=false;
	document.getElementById("2545").disabled=false;
	document.getElementById("3545").disabled=false;
	document.getElementById("4545").disabled=false;
	document.getElementById("2590").disabled=false;
	document.getElementById("3590").disabled=false;
	document.getElementById("4590").disabled=false;
	document.getElementById("1084").disabled=false;
	document.getElementById("1018").checked=false;
	document.getElementById("2545").checked=false;
	document.getElementById("3545").checked=false;
	document.getElementById("4545").checked=false;
	document.getElementById("2590").checked=false;
	document.getElementById("3590").checked=false;
	document.getElementById("4590").checked=false;
	document.getElementById("1084").checked=false;
}

function resetCurrentOpt(){
	document.getElementById("mA_default").selected=true;
	document.getElementById("current-dropbox").disabled=false;
}

function resetColorTempButtons(){
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

function resetFinishButtons(){
	document.getElementById("al").disabled=false;
	document.getElementById("bl").disabled=false;
	document.getElementById("wh").disabled=false;
	document.getElementById("br").disabled=false;
	document.getElementById("custom").disabled=false;
	document.getElementById("al").checked=false;
	document.getElementById("bl").checked=false;
	document.getElementById("wh").checked=false;
	document.getElementById("br").checked=false;
	document.getElementById("custom").checked=false;
}

function resetLensButtons(){
	document.getElementById("nl").disabled=false;
	document.getElementById("pg").disabled=false;
	document.getElementById("slc").disabled=false;
	document.getElementById("10c").disabled=false;
	document.getElementById("30c").disabled=false;
	document.getElementById("60c").disabled=false;
	document.getElementById("op1").disabled=false;
	document.getElementById("op2").disabled=false;
	document.getElementById("op3").disabled=false;
	document.getElementById("df").disabled=false;
	document.getElementById("dl").disabled=false;
	document.getElementById("nl").checked=false;
	document.getElementById("pg").checked=false;
	document.getElementById("slc").checked=false;
	document.getElementById("10c").checked=false;
	document.getElementById("30c").checked=false;
	document.getElementById("60c").checked=false;
	document.getElementById("op1").checked=false;
	document.getElementById("op2").checked=false;
	document.getElementById("op3").checked=false;
	document.getElementById("df").checked=false;
	document.getElementById("dl").checked=false;
}

function resetFactoryOptionsButtons(){	
	document.getElementById("n").disabled=true;
	document.getElementById("im").disabled=true;
	document.getElementById("em").disabled=true;
	document.getElementById("tm").disabled=true;
	document.getElementById("cm").disabled=true;
	document.getElementById("bu").disabled=true;	
	document.getElementById("ro").disabled=true;
	
	document.getElementById("n").checked=false;
	document.getElementById("im").checked=false;
	document.getElementById("em").checked=false;
	document.getElementById("tm").checked=false;
	document.getElementById("cm").checked=false;
	document.getElementById("bu").checked=false;
	document.getElementById("ro").checked=false;
}

function resetCustomLength(){
	document.getElementById("custom-length-input").value="";
	document.getElementById("custom-length-input").disabled=true;
}

function resetDescription(){
	document.getElementById('description').innerHTML='--';
	document.getElementById('watts').innerHTML='--';
	document.getElementById('inches').innerHTML='--';
	document.getElementById('mm').innerHTML='--';
	document.getElementById('price').innerHTML='0.00';
}

function resetPriceModifierButtons(){
	document.getElementById("distributor_price").disabled=false;
	document.getElementById("d10_price").disabled=false;
	document.getElementById("d19_price").disabled=false;	
	document.getElementById("roblon_price").disabled=false;
	document.getElementById("distributor_price").checked=true;
	document.getElementById("d10_price").checked=false;
	document.getElementById("d19_price").checked=false;
	document.getElementById("roblon_price").checked=false;
}

function resetCommentsBox(){
	document.getElementById('comment').innerHTML='--';
}

function resetXXButtons(){
	document.getElementById('XX').innerHTML=' ';
	document.getElementById('XX').reset();
	document.getElementById("XX").disabled=false;
	document.getElementById("XX").checked=false;
}

//******************************************************************

/* function setAllTailExits(tailExits){
	setTailExitOne(tailExits);
	setTailExitTwo(tailExits);
} */

/* function setTailExitOne(tailExits)
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
} */

/* function setTailExitTwo(tailExits)
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
} */

//**************************************************************************************
/* function setFixtureLengths()
{
	var fixtureLengths = setLengthList();
	
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
} */

/* function setLengthList(){
	var lengthList;
	if(document.getElementById("LR").checked==true){
		lengthList = new Array(8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 'C');
	} else {
		lengthList = new Array(4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80, 84, 88, 92, 96, 'C');
	}
	return lengthList;
} */
//**************************************************************************************

 // ENABLE CUSTOM LENGTH INPUT, IF 'C' SELECTED FROM DROPDOWN//
function enableCustomInput(){
	var index = document.getElementById("length-dropbox").selectedIndex;
	var lengthCode = document.getElementById("length-dropbox").options[index].text;
	if (lengthCode === "C"){
		document.getElementById("custom-length-input").value="";
		document.getElementById("custom-length-input").disabled=false;
	} else {
		document.getElementById("custom-length-input").value="";
		document.getElementById("custom-length-input").disabled=true;
	}
}

function setPriceDisplay(){ 
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

/* function setExtrusionCode()
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
	} else if(document.getElementById("4SL").checked==true)
	{
		extrusionCode = "4SL";
	} else if(document.getElementById("5SL").checked==true)
	{
		extrusionCode = "5SL";
	} else if(document.getElementById("6SL").checked==true)
	{
		extrusionCode = "6SL";
	} else if(document.getElementById("1QL").checked==true)
	{
		extrusionCode = "1QL";
	} else if(document.getElementById("1EL").checked==true)
	{
		extrusionCode = "1EL";
	} else if(document.getElementById("LR").checked==true)
	{
		extrusionCode = "LR";
	} else {extrusionCode = "XX";}
	return extrusionCode;
} */

/* function setLedCode()
{
	var ledCode;
	if(document.getElementById("1018").checked==true)
	{
		ledCode = "1018";
	} else if(document.getElementById("2545").checked==true)
	{
		ledCode = "2545";
	} else if(document.getElementById("3545").checked==true)
	{
		ledCode = "3545";
	} else if(document.getElementById("4545").checked==true)
	{
		ledCode = "4545";
	} else if(document.getElementById("2590").checked==true)
	{
		ledCode = "2590";
	} else if(document.getElementById("3590").checked==true)
	{
		ledCode = "3590";
	} else if(document.getElementById("4590").checked==true)
	{
		ledCode = "4590";
	} else if(document.getElementById("1084").checked==true)
	{
		ledCode = "1084";
	} else {ledCode = "XXXX";}
	return ledCode;
} */

/* function setColorTempCode()
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
	} else {colorTempCode = "XX";}
	return colorTempCode;
} */

/* function setFinishCode()
{
	var finishCode;
	if(document.getElementById("al").checked==true)
	{
		finishCode = "AL";
	} else if(document.getElementById("bl").checked==true)
	{
		finishCode = "BL";
	} else if(document.getElementById("wh").checked==true)
	{
		finishCode = "WH";
	} else if(document.getElementById("br").checked==true)
	{
		finishCode = "BR";
	} else if(document.getElementById("custom").checked==true)
	{
		finishCode = "C";
	} else {finishCode = "X";}
	return finishCode;
} */

/* function setLensCode()
{
	var lensCode;
	if(document.getElementById("pg").checked==true)
	{
		lensCode = "PG";
	} else if(document.getElementById("slc").checked==true)
	{
		lensCode = "SLC";
	} else if(document.getElementById("10c").checked==true)
	{
		lensCode = "10C";
	} else if(document.getElementById("30c").checked==true)
	{
		lensCode = "30C";
	} else if(document.getElementById("60c").checked==true)
	{
		lensCode = "60C";
	} else if(document.getElementById("op1").checked==true)
	{
		lensCode = "OP1";
	} else if(document.getElementById("op2").checked==true)
	{
		lensCode = "OP2";
	} else if(document.getElementById("op3").checked==true)
	{
		lensCode = "OP3";
	} else if(document.getElementById("nl").checked==true)
	{
		lensCode = "NL";
	} else if(document.getElementById("df").checked==true)
	{
		lensCode = "DF";
	} else if(document.getElementById("dl").checked==true)
	{
		lensCode = "DL";
	} else {lensCode = "XX";}
	return lensCode;
} */

/* function setWireCode()
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
	} else {wireCode = "XXX";}
	return wireCode;
} */

/* function setLengthCode()
{
	var lengthCode;
	var index = document.getElementById("length-dropbox").selectedIndex;
	if(index != 0){
		lengthCode = document.getElementById("length-dropbox").options[index].text;
	} else {lengthCode="X";}
	return lengthCode;
} */

/* function setFactoryOptionsCode(extrusionCode)
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
		} else if(document.getElementById("cm").checked==true)
		{
			factoryOptionsCode = "-CM";
		} else {
			factoryOptionsCode = 'XX';
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
} */

//******************************************************************
/* function setPowerType(extrusionCode){
	var powerType;
	if(extrusionCode=="LR"){
		//do something
	} else {
		powerType = "24v";
	}
	return powerType;
} */

/* function setIpRating(extrusionCode)
{
	var ipRating;
	if ((extrusionCode == "5SL") || (extrusionCode == "6SL")){
		ipRating = "IP67";
	} else if ((extrusionCode == "2SL") || (extrusionCode == "2RL") || (extrusionCode == "3SL") || (extrusionCode == "4SL") || (extrusionCode == "1QL") || (extrusionCode == "1EL")){
		ipRating = "IP64";
	} else {
		ipRating = "IP20";
	} 
	return ipRating;
} */

/* function setCRI(ledCode){
	var cri;
	if((ledCode=="3545") || (ledCode=="3590")){cri="90+"} else
	if((ledCode=="1018") || (ledCode=="2545") || (ledCode=="2590")){cri="87"} else
	if((ledCode=="4545") || (ledCode=="4590")){cri="85"} 
	else {cri="XX"}
	return cri;
} */

/* function setTrueLength(lengthCode)
{
	
	var index = document.getElementById("length-dropbox").selectedIndex;
	var length_list = new Array(4.72, 8.66, 12.6, 16.54, 20.47, 24.41, 28.35, 32.28, 36.22, 40.16, 44.09, 48.03, 51.97, 55.91, 59.84, 63.78, 67.72, 71.65, 75.59, 79.53, 83.46, 87.4, 91.34, 95.28);
	var trueLength=0;
	if (lengthCode == 'C')
	{
		var lengthInput = document.getElementById("custom-length-input").value;
		var MAX_LENGTH = length_list[23];
		trueLength = parseFloat(lengthInput); 
		if (trueLength >= MAX_LENGTH)
		{
			var alertMsg='CUSTOM LENGTH CANNOT EQUAL OR EXCEED MAX POSSIBLE (95.28 in.)!!';
			$.msgBox({
				title:"Warning!",
				content: alertMsg
			});
			exit();
		} else {
      return trueLength;
    }
	} else 
	{
		trueLength = length_list[index-1];
		return trueLength;
	}
} */

/* function setLengthConversion(inches)
{
	var MM_IN_INCHES = 25.4;
	var mm = (inches * MM_IN_INCHES);
	return Math.round(mm);
} */

function setCommentBox()
{
	var comment = '';
	if((document.getElementById("fs").checked==true) || (document.getElementById("cm").checked==true))
	{
		comment = comment+'+ Don\'t forget - Include \'Free Standing/Center Mount\' price in Quotewerks!<br/>+ Don\'t forget - $15 adder for \'Free Standing/Center\' mounts at non-standard heights';
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

/* function setExtrusionDescription(extrusionCode, ipRating)
{
	var extrusionDescription;
	if(extrusionCode=="1S"){extrusionDescription = "Small-Square ("+ipRating+") extrusion;";} else
	if(extrusionCode=="2SL"){extrusionDescription = "Medium-Square/Lensed ("+ipRating+") extrusion;";} else
	if(extrusionCode=="1R"){extrusionDescription = "Small-Round ("+ipRating+") extrusion;";} else
	if(extrusionCode=="2RL"){extrusionDescription = "Large-Round/Lensed ("+ipRating+") extrusion;";} else
	if(extrusionCode=="3SL"){extrusionDescription = "Large-Square/Lensed ("+ipRating+") extrusion;";} else
	if(extrusionCode=="4SL"){extrusionDescription = "Medium-Square/Lensed/Deep ("+ipRating+") extrusion;";} else
	if(extrusionCode=="5SL"){extrusionDescription = "Medium-Square/Exterior ("+ipRating+") extrusion;";} else
	if(extrusionCode=="6SL"){extrusionDescription = "Large-Square/Exterior ("+ipRating+") extrusion;";} else
	if(extrusionCode=="1QL"){extrusionDescription = "Quarter-Round ("+ipRating+") extrusion;";} else
	if(extrusionCode=="1EL"){extrusionDescription = "Ellipse/Lensed ("+ipRating+") extrusion;";} else
	if(extrusionCode=="LR"){extrusionDescription = "Medium-Square/Lensed ("+ipRating+") extrusion;";} 
	else{extrusionDescription = "XXXXXXXXXXXXXX ("+ipRating+") extrusion;";}
	return extrusionDescription;
} */

/* function setLengthDescription(trueLength, trueLengthMM)
{
	var inches = trueLength;
	var mm = trueLengthMM;
	var lengthDescription = inches+ "\" (" + mm + "mm) extrusion length;";
	return lengthDescription;
} */

/* function setPowerTypeDescription(powerType){
	var powerTypeDescription;
	if(powerType!="24v"){
		powerTypeDescription = powerType+" constant current, ";
	} else {
		powerTypeDescription = powerType+" constant voltage, ";;
	}
	return powerTypeDescription;
} */

/* function setLedDescription(ledCode)
{
	var ledDescription;
	if (ledCode == '1018')
	{
		ledDescription = "0.10 watt (157 - 63 lm/w) Nichia LEDs;";
	} else if (ledCode == '2545')
	{
		ledDescription = "0.25 watt (157 - 69 lm/w) Nichia LEDs;";
	} else if (ledCode == '3545')
	{
		ledDescription = "0.25 watt HI-CRI (757 - XX lm/w) Nichia LEDs;";
	} else if (ledCode == '4545')
	{
		ledDescription = "0.25 watt HI-LUMEN (757 - 93 lm/w) Nichia LEDs;";
	} else if (ledCode == '2590')
	{
		ledDescription = "2 rows of 0.25 watt (157 - XX lm/w) Nichia LEDs;";
	} else if (ledCode == '3590')
	{
		ledDescription = "2 rows of 0.25 watt HI-CRI (757 - XX lm/w) Nichia LEDs;";
	} else if (ledCode == '4590')
	{
		ledDescription = "2 rows of 0.25 watt HI-LUMEN (757 - XX lm/w) Nichia LEDs;";
	} else if (ledCode == '1084')
	{
		ledDescription = "0.10 watt (157 - XX lm/w) Nichia LEDs;";
	}
	return ledDescription;
} */

/* function setColorDescription(colorTempCode, cri)
{
	var colorDescription;
	if (colorTempCode == '24')
	{
		colorDescription = '2400°K color temp, '+cri+' CRI;';
	} else if (colorTempCode == '27')
	{
		colorDescription = '2700°K color temp, '+cri+' CRI;';
	} else if (colorTempCode == '30')
	{
		colorDescription = '3000°K color temp, '+cri+' CRI;';
	} else if (colorTempCode == '35')
	{
		colorDescription = '3500°K color temp, '+cri+' CRI;';
	} else if (colorTempCode == '40')
	{
		colorDescription = '4000°K color temp, '+cri+' CRI;';
	} else if (colorTempCode == '45')
	{
		colorDescription = '4500°K color temp, '+cri+' CRI;';
	}
	return colorDescription;
} */

/* function setLensDescription(lensCode)
{
	var lensDescription;
	if (lensCode == 'PG')
	{
		lensDescription = 'clear, acrylic lens;';
	} else if (lensCode == 'SLC')
	{
		lensDescription = 'clear, sliding lens;';
	} else if (lensCode == '10C')
	{
		lensDescription = '10° optical lens;';
	} else if (lensCode == '30C')
	{
		lensDescription = '30° optical lens;';
	} else if (lensCode == '60C')
	{
		lensDescription = '60° optical lens;';
	} else if (lensCode == 'OP1')
	{
		lensDescription = 'opal, light-diffused lens;';
	} else if (lensCode == 'OP2')
	{
		lensDescription = 'opal, medium-diffused lens;';
	} else if (lensCode == 'OP3')
	{
		lensDescription = 'opal, heavily-diffused lens;';
	} else if (lensCode == 'DF')
	{
		lensDescription = 'diffuser film;';
	} else if (lensCode == 'DL') 
	{
		lensDescription = 'diffuser lens;';
	}	else if(lensCode == 'NL') {
		lensDescription = 'no lens;';
	} else {lensDescription = 'XXXXX;';}
	return lensDescription;
} */

/* function setWireDescription(wireCode)
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
} */

/* function setFinishDescription(finishCode)
{
	var finishDescription;
	if (finishCode == 'AL')
	{
		finishDescription = 'silver anodized finish;';
	} else if (finishCode == 'BL')
	{
		finishDescription = 'black anodized finish;';
	} else if(finishCode == 'WH')
	{
		finishDescription = 'white powder-coat finish;';
	} else if(finishCode == 'BR')
	{
		finishDescription = 'bronze powder-coat finish;';
	} else
	{
		finishDescription = 'custom XXX finish;';
	}
	return finishDescription;
} */

/* function setFactoryOptionsDescription(factoryOptionsCode)
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
	} else if (document.getElementById("cm").checked==true)
	{
		factoryOptionsDescription = 'factory installed, XX" high center mount, with centered 8mm leg; '
	} else 
	{
		factoryOptionsDescription = 'fixture mounts using surface mounting clip, 1 per 18" (min. 2 per fixture); '
	} 
	
	if (document.getElementById("ro").checked==true)
	{
		factoryOptionsDescription = factoryOptionsDescription+'RoHS compliant product; '
	}
	return factoryOptionsDescription;
} */

/* function setCustomLengthDescription(lengthCode, trueLength)
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
} */

/* function setWattsDescription(totalWatts)
{
	var wattsDescription;
	wattsDescription = totalWatts+' watts total';
	return wattsDescription;
} */

/* function setTotalWatts(ledCode, trueLength, lengthCode)
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
        } else if ((ledCode == "2545") || (ledCode == "3545") || (ledCode == "4545"))
        {
            totalWatts = quarterWattages[index-1];
        } else if (ledCode == "1084")
        {
            //totalWatts = quarterWattages[index-1];
            //totalWatts = (totalWatts * 2);
						totalWatts = 0;
        } else if ((ledCode == "2590") || (ledCode == "3590") || (ledCode == "4590") )
        {
            totalWatts = quarterWattages[index-1];
            totalWatts = (totalWatts * 2);
        } else {totalWatts = 0;}
        return totalWatts;
	} else 
    {
        var index = document.getElementById("length-dropbox").selectedIndex;
        
        if (ledCode == "1018")
        {   
            totalWatts = tenthWattages[index-1];
        } else if ((ledCode == "2545") || (ledCode == "3545") || (ledCode == "4545"))
        {
            totalWatts = quarterWattages[index-1];
        } else if (ledCode == "1084")
        {
            //totalWatts = quarterWattages[index-1];
            //totalWatts = (totalWatts * 2);
						totalWatts = 0;
        } else if ((ledCode == "2590") || (ledCode == "3590") || (ledCode == "4590") )
        {
            totalWatts = quarterWattages[index-1];
            totalWatts = (totalWatts * 2);
        } else {totalWatts = 0;}
        
        return totalWatts;
    }    
    
} */

/* function setFullDescription()
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
	var powerType = setPowerType(extrusionCode);
	var cri = setCRI(ledCode);
	
	var ipRating = setIpRating(extrusionCode);
	var generalDescription = "VLT Essential Linear LED;";
	var extrusionDescription = setExtrusionDescription(extrusionCode, ipRating);
	var lengthDescription = setLengthDescription(trueLength, trueLengthMM);
	var powerTypeDescription = setPowerTypeDescription(powerType);
	var ledDescription = setLedDescription(ledCode);
	var colorDescription = setColorDescription(colorTempCode, cri);
	var lensDescription = setLensDescription(lensCode);
	var wireDescription = setWireDescription(wireCode);
	var factoryOptionsDescription = setFactoryOptionsDescription(factoryOptionsCode);
	var finishDescription = setFinishDescription(finishCode);
	var customLengthDescription = setCustomLengthDescription(lengthCode, trueLength);
	
	errorCheck(extrusionCode, ledCode, colorTempCode, finishCode, lensCode, factoryOptionsCode, wireCode, lengthCode, trueLength);
	
	partNumber = setPartNumber(extrusionCode, ledCode, colorTempCode, finishCode, lensCode, wireCode, lengthCode, factoryOptionsCode);
	fullDescription = partNumber+"   -   "+generalDescription+" "+extrusionDescription+" "+lengthDescription+" "+powerTypeDescription+" "+customLengthDescription+" "+ledDescription+" "+colorDescription+" "+lensDescription+" "+wireDescription+" "+factoryOptionsDescription+" "+finishDescription;
	return fullDescription;
} */

//******************************************************************

//Load all pricing
function setBasePrice(extrusionCode, lengthCode, trueLength) {
	var pricing = {
		"distributorNet": [
			{"_1018_2545_": [
				{"_1S_": [34.3,	39.2,	49,	65.17, 81.83, 98, 114.17, 130.83, 147, 163.17, 179.83, 196,	212.17,	228.83,	245, 261.17, 277.83, 294,	310.17,	326.83,	343, 359.17, 375.83, 392]},				
				{"_2SL_": [49, 56, 70, 93.1, 116.9,	140, 163.1,	186.9, 210,	233.1, 256.9,	280, 303.1, 326.9, 350,	373.1, 396.9,	420, 443.1, 466.9, 490,	513.1, 536.9, 560]},
				{"_3SL_": [60.2, 68.8, 86, 114.38, 143.62, 172,	200.38,	229.62,	258, 286.38, 315.62, 344,	372.38,	401.62,	430, 458.38, 487.62, 516,	544.38,	573.62, 602, 630.38, 659.62, 688]},
				{"_4SL_": [52.5, 60, 75, 99.75,	125.25,	150, 174.75, 200.25, 225,	249.75,	275.25,	300, 324.75, 350.25, 375,	399.75,	425.25,	450, 474.75, 500.25, 525, 549.75,	575.25,	600]},
				{"_5SL_": [62.3, 71.2, 89, 118.37, 148.63, 178,	207.37,	237.63,	267, 296.37, 326.63, 356,	385.37,	415.63,	445, 474.37, 504.63, 534,	0, 0,	0, 0,	0, 0]},
				{"_6SL_": [0, 0, 0, 0, 0,	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]},
				{"_1R_": [38.5, 44, 55, 73.15,	91.85, 110,	128.15,	146.85,	165, 183.15, 201.85, 220,	238.15,	256.85,	275, 293.15, 311.85, 330,	348.15,	366.85,	385, 403.15, 421.85, 440]},
				{"_2RL_": [49, 56, 70, 93.1, 116.9,	140, 163.1,	186.9, 210,	233.1, 256.9,	280, 303.1, 326.9, 350,	373.1, 396.9,	420, 443.1, 466.9, 490,	513.1, 536.9, 560]},
				{"_1QL_": [49, 56, 70, 93.1, 116.9,	140, 163.1,	186.9, 210,	233.1, 256.9,	280, 303.1, 326.9, 350,	373.1, 396.9,	420, 443.1, 466.9, 490,	513.1, 536.9, 560]},
				{"_1EL_": [52.5, 60, 75, 99.75,	125.25,	150, 174.75, 200.25, 225,	249.75,	275.25,	300, 324.75, 350.25, 375,	399.75,	425.25,	450, 474.75, 500.25, 525, 549.75,	575.25,	600]}
			]},
			{"_3545_": [
				{"_1S_": [40.425,	46.2,	57.75, 76.8075,	96.4425, 115.5,	134.5575,	154.1925,	173.25,	192.3075,	211.9425,	231, 250.0575, 269.6925, 288.75, 307.8075, 327.4425, 346.5, 365.5575, 385.1925,	404.25,	423.3075,	442.9425,	462]},				
				{"_2SL_": [57.33,	65.52, 81.9, 108.927,	136.773, 163.8,	190.827, 218.673,	245.7, 272.727,	300.573, 327.6,	354.627, 382.473, 409.5, 436.527,	464.373, 491.4,	518.427, 546.273,	573.3, 600.327,	628.173, 655.2]},
				{"_3SL_": [71.295, 81.48,	101.85,	135.4605,	170.0895,	203.7, 237.3105, 271.9395, 305.55, 339.1605, 373.7895, 407.4, 441.0105,	475.6395,	509.25,	542.8605,	577.4895,	611.1, 644.7105, 679.3395, 712.95, 746.5605, 781.1895, 814.8]},
				{"_4SL_": [59.535, 68.04,	85.05, 113.1165, 142.0335, 170.1,	198.1665,	227.0835,	255.15,	283.2165,	312.1335,	340.2, 368.2665, 397.1835, 425.25, 453.3165, 482.2335, 510.3,	538.3665, 567.2835,	595.35,	623.4165,	652.3335,	680.4]},
				{"_5SL_": [73.5, 84, 105,	139.65,	175.35,	210, 244.65, 280.35, 315,	349.65,	385.35,	420, 454.65, 490.35, 525,	559.65,	595.35, 630, 0,	0, 0,	0, 0,	0]},
				{"_6SL_": [0, 0, 0, 0, 0,	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]},
				{"_1R_": [44.835, 51.24,	64.05, 85.1865,	106.9635,	128.1, 149.2365, 171.0135, 192.15, 213.2865, 235.0635, 256.2,	277.3365,	299.1135,	320.25,	341.3865,	363.1635,	384.3, 405.4365, 427.2135, 448.35, 469.4865, 491.2635, 512.4]},
				{"_2RL_": [57.33,	65.52, 81.9, 108.927,	136.773, 163.8,	190.827, 218.673,	245.7, 272.727,	300.573, 327.6,	354.627, 382.473, 409.5, 436.527,	464.373, 491.4,	518.427, 546.273,	573.3, 600.327,	628.173, 655.2]},
				{"_1QL_": [57.33,	65.52, 81.9, 108.927,	136.773, 163.8,	190.827, 218.673,	245.7, 272.727,	300.573, 327.6,	354.627, 382.473, 409.5, 436.527,	464.373, 491.4,	518.427, 546.273,	573.3, 600.327,	628.173, 655.2]},
				{"_1EL_": [59.535, 68.04,	85.05, 113.1165, 142.0335, 170.1,	198.1665,	227.0835,	255.15,	283.2165,	312.1335,	340.2, 368.2665, 397.1835, 425.25, 453.3165, 482.2335, 510.3,	538.3665,	567.2835,	595.35,	623.4165,	652.3335,	680.4]}
			]},
			{"_4545_": [
				{"_1S_": [38.5,	44,	55,	73.15,	91.85,	110,	128.15,	146.85,	165,	183.15,	201.85,	220,	238.15,	256.85,	275,	293.15,	311.85,	330,	348.15,	366.85,	385,	403.15,	421.85,	440]},				
				{"_2SL_": [54.6,	62.4,	78,	103.74,	130.26,	156,	181.74,	208.26,	234,	259.74,	286.26,	312,	337.74,	364.26,	390,	415.74,	442.26,	468,	493.74,	520.26,	546,	571.74,	598.26,	624]},
				{"_3SL_": [67.9,	77.6,	97,	129.01,	161.99,	194,	226.01,	258.99,	291,	323.01,	355.99,	388,	420.01,	452.99,	485,	517.01,	549.99,	582,	614.01,	646.99,	679,	711.01,	743.99,	776]},
				{"_4SL_": [56.7,	64.8,	81,	107.73,	135.27,	162,	188.73,	216.27,	243,	269.73,	297.27,	324,	350.73,	378.27,	405,	431.73,	459.27,	486,	512.73,	540.27,	567,	593.73,	621.27,	648]},
				{"_5SL_": [70,	80,	100,	133,	167,	200,	233,	267,	300,	333,	367,	400,	433,	467,	500,	533,	567,	600,	0,	0,	0,	0,	0,	0]},
				{"_6SL_": [0, 0, 0, 0, 0,	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]},
				{"_1R_": [42.7,	48.8,	61,	81.13,	101.87,	122,	142.13,	162.87,	183,	203.13,	223.87,	244,	264.13,	284.87,	305,	325.13,	345.87,	366,	386.13,	406.87,	427,	447.13,	467.87,	488]},
				{"_2RL_": [54.6,	62.4,	78,	103.74,	130.26,	156,	181.74,	208.26,	234,	259.74,	286.26,	312,	337.74,	364.26,	390,	415.74,	442.26,	468,	493.74,	520.26,	546,	571.74,	598.26,	624]},
				{"_1QL_": [54.6,	62.4,	78,	103.74,	130.26,	156,	181.74,	208.26,	234,	259.74,	286.26,	312,	337.74,	364.26,	390,	415.74,	442.26,	468,	493.74,	520.26,	546,	571.74,	598.26,	624]},
				{"_1EL_": [56.7,	64.8,	81,	107.73,	135.27,	162,	188.73,	216.27,	243,	269.73,	297.27,	324,	350.73,	378.27,	405,	431.73,	459.27,	486,	512.73,	540.27,	567,	593.73,	621.27,	648]}
			]},
			{"_2590_": [
				{"_3SL_dual": [87.5,	100,	125,	166.25,	208.75,	250,	291.25,	333.75,	375,	416.25,	458.75,	500,	541.25,	583.75,	625,	666.25,	708.75,	750,	791.25,	833.75,	875,	916.25,	958.75,	1000]},						
				{"_6SL_dual": [0, 0, 0, 0, 0,	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}
			]},
			{"_3590_": [
				{"_3SL_dual": [104.37,	119.28,	149.1,	198.303,	248.997,	298.2,	347.403,	398.097,	447.3,	496.503,	547.197,	596.4,	645.603,	696.297,	745.5,	794.703,	845.397,	894.6,	943.803,	994.497,	1043.7,	1092.903,	1143.597,	1192.8]},						
				{"_6SL_dual": [0, 0, 0, 0, 0,	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}
			]},
			{"_4590_": [
				{"_3SL_dual": [99.4,	113.6,	142,	188.86,	237.14,	284,	330.86,	379.14,	426,	472.86,	521.14,	568,	614.86,	663.14,	710,	756.86,	805.14,	852,	898.86,	947.14,	994,	1040.86,	1089.14,	1136]},						
				{"_6SL_dual": [0, 0, 0, 0, 0,	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}
			]},
			{"_1084_": [
				{"_LR_": [59.5,	68,	85,	113.05,	141.95,	170,	198.05,	226.95,	255,	283.05,	311.95,	340,	368.05,	396.95,	425,	0,	0,	0,	0,	0,	0,	0,	0,	0]}
			]}
		],
		"roblon": [
			{"_1018_2545_": [
				{"_1S_": [19.3109,	22.0696,	27.587,	36.69071,	46.07029,	55.174,	64.27771,	73.65729,	82.761,	91.86471,	101.24429,	110.348,	119.45171,	128.83129,	137.935,	147.03871,	156.41829,	165.522,	174.62571,	184.00529,	193.109,	202.21271,	211.59229,	220.696]},				
				{"_2SL_": [28.9786,	33.1184,	41.398,	55.05934,	69.13466,	82.796,	96.45734,	110.53266,	124.194,	137.85534,	151.93066,	165.592,	179.25334,	193.32866,	206.99,	220.65134,	234.72666,	248.388,	262.04934,	276.12466,	289.786,	303.44734,	317.52266,	331.184]},
				{"_3SL_": [36.0598,	41.2112,	51.514,	68.51362,	86.02838,	103.028,	120.02762,	137.54238,	154.542,	171.54162,	189.05638,	206.056,	223.05562,	240.57038,	257.57,	274.56962,	292.08438,	309.084,	326.08362,	343.59838,	360.598,	377.59762,	395.11238,	412.112]},
				{"_4SL_": [31.0485,	35.484,	44.355,	58.99215,	74.07285,	88.71,	103.34715,	118.42785,	133.065,	147.70215,	162.78285,	177.42,	192.05715,	207.13785,	221.775,	236.41215,	251.49285,	266.13,	280.76715,	295.84785,	310.485,	325.12215,	340.20285,	354.84]},
				{"_5SL_": [36.84422,	42.10768,	52.6346,	70.004018,	87.899782,	105.2692,	122.638618,	140.534382,	157.9038,	175.273218,	193.168982,	210.5384,	227.907818,	245.803582,	263.173,	280.542418,	298.438182,	315.8076,	0,	0,	0,	0,	0,	0]},
				{"_6SL_": [0, 0, 0, 0, 0,	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]},
				{"_1R_": [21.868,	24.992,	31.24,	41.5492,	52.1708,	62.48,	72.7892,	83.4108,	93.72,	104.0292,	114.6508,	124.96,	135.2692,	145.8908,	156.2,	166.5092,	177.1308,	187.44,	197.7492,	208.3708,	218.68,	228.9892,	239.6108,	249.92]},
				{"_2RL_": [28.9786,	33.1184,	41.398,	55.05934,	69.13466,	82.796,	96.45734,	110.53266,	124.194,	137.85534,	151.93066,	165.592,	179.25334,	193.32866,	206.99,	220.65134,	234.72666,	248.388,	262.04934,	276.12466,	289.786,	303.44734,	317.52266,	331.184]},
				{"_1QL_": [28.9786,	33.1184,	41.398,	55.05934,	69.13466,	82.796,	96.45734,	110.53266,	124.194,	137.85534,	151.93066,	165.592,	179.25334,	193.32866,	206.99,	220.65134,	234.72666,	248.388,	262.04934,	276.12466,	289.786,	303.44734,	317.52266,	331.184]},
				{"_1EL_": [31.0485,	35.484,	44.355,	58.99215,	74.07285,	88.71,	103.34715,	118.42785,	133.065,	147.70215,	162.78285,	177.42,	192.05715,	207.13785,	221.775,	236.41215,	251.49285,	266.13,	280.76715,	295.84785,	310.485,	325.12215,	340.20285,	354.84]}
			]},
			{"_3545_": [
				{"_1S_": [24.255,	27.72,	34.65,	46.0845,	57.8655,	69.3,	80.7345,	92.5155,	103.95,	115.3845,	127.1655,	138.6,	150.0345,	161.8155,	173.25,	184.6845,	196.4655,	207.9,	219.3345,	231.1155,	242.55,	253.9845,	265.7655,	277.2]},				
				{"_2SL_": [34.398,	39.312,	49.14,	65.3562,	82.0638,	98.28,	114.4962,	131.2038,	147.42,	163.6362,	180.3438,	196.56,	212.7762,	229.4838,	245.7,	261.9162,	278.6238,	294.84,	311.0562,	327.7638,	343.98,	360.1962,	376.9038,	393.12]},
				{"_3SL_": [42.777,	48.888,	61.11,	81.2763,	102.0537,	122.22,	142.3863,	163.1637,	183.33,	203.4963,	224.2737,	244.44,	264.6063,	285.3837,	305.55,	325.7163,	346.4937,	366.66,	386.8263,	407.6037,	427.77,	447.9363,	468.7137,	488.88]},
				{"_4SL_": [35.721,	40.824,	51.03,	67.8699,	85.2201,	102.06,	118.8999,	136.2501,	153.09,	169.9299,	187.2801,	204.12,	220.9599,	238.3101,	255.15,	271.9899,	289.3401,	306.18,	323.0199,	340.3701,	357.21,	374.0499,	391.4001,	408.24]},
				{"_5SL_": [44.1,	50.4,	63,	83.79,	105.21,	126,	146.79,	168.21,	189,	209.79,	231.21,	252,	272.79,	294.21,	315,	335.79,	357.21,	378,	0,	0,	0,	0,	0,	0]},
				{"_6SL_": [0, 0, 0, 0, 0,	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]},
				{"_1R_": [26.901,	30.744,	38.43,	51.1119,	64.1781,	76.86,	89.5419,	102.6081,	115.29,	127.9719,	141.0381,	153.72,	166.4019,	179.4681,	192.15,	204.8319,	217.8981,	230.58,	243.2619,	256.3281,	269.01,	281.6919,	294.7581,	307.44]},
				{"_2RL_": [34.398,	39.312,	49.14,	65.3562,	82.0638,	98.28,	114.4962,	131.2038,	147.42,	163.6362,	180.3438,	196.56,	212.7762,	229.4838,	245.7,	261.9162,	278.6238,	294.84,	311.0562,	327.7638,	343.98,	360.1962,	376.9038,	393.12]},
				{"_1QL_": [34.398,	39.312,	49.14,	65.3562,	82.0638,	98.28,	114.4962,	131.2038,	147.42,	163.6362,	180.3438,	196.56,	212.7762,	229.4838,	245.7,	261.9162,	278.6238,	294.84,	311.0562,	327.7638,	343.98,	360.1962,	376.9038,	393.12]},
				{"_1EL_": [35.721,	40.824,	51.03,	67.8699,	85.2201,	102.06,	118.8999,	136.2501,	153.09,	169.9299,	187.2801,	204.12,	220.9599,	238.3101,	255.15,	271.9899,	289.3401,	306.18,	323.0199,	340.3701,	357.21,	374.0499,	391.4001,	408.24]}
			]},
			{"_4545_": [
				{"_1S_": [23.1,	26.4,	33,	43.89,	55.11,	66,	76.89,	88.11,	99,	109.89,	121.11,	132,	142.89,	154.11,	165,	175.89,	187.11,	198,	208.89,	220.11,	231,	241.89,	253.11,	264]},				
				{"_2SL_": [32.76,	37.44,	46.8,	62.244,	78.156,	93.6,	109.044,	124.956,	140.4,	155.844,	171.756,	187.2,	202.644,	218.556,	234,	249.444,	265.356,	280.8,	296.244,	312.156,	327.6,	343.044,	358.956,	374.4]},
				{"_3SL_": [40.74,	46.56,	58.2,	77.406,	97.194,	116.4,	135.606,	155.394,	174.6,	193.806,	213.594,	232.8,	252.006,	271.794,	291,	310.206,	329.994,	349.2,	368.406,	388.194,	407.4,	426.606,	446.394,	465.6]},
				{"_4SL_": [34.02,	38.88,	48.6,	64.638,	81.162,	97.2,	113.238,	129.762,	145.8,	161.838,	178.362,	194.4,	210.438,	226.962,	243,	259.038,	275.562,	291.6,	307.638,	324.162,	340.2,	356.238,	372.762,	388.8]},
				{"_5SL_": [42,	48,	60,	79.8,	100.2,	120,	139.8,	160.2,	180,	199.8,	220.2,	240,	259.8,	280.2,	300,	319.8,	340.2,	360,	0,	0,	0,	0,	0,	0]},
				{"_6SL_": [0, 0, 0, 0, 0,	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]},
				{"_1R_": [25.62,	29.28,	36.6,	48.678,	61.122,	73.2,	85.278,	97.722,	109.8,	121.878,	134.322,	146.4,	158.478,	170.922,	183,	195.078,	207.522,	219.6,	231.678,	244.122,	256.2,	268.278,	280.722,	292.8]},
				{"_2RL_": [32.76,	37.44,	46.8,	62.244,	78.156,	93.6,	109.044,	124.956,	140.4,	155.844,	171.756,	187.2,	202.644,	218.556,	234,	249.444,	265.356,	280.8,	296.244,	312.156,	327.6,	343.044,	358.956,	374.4]},
				{"_1QL_": [32.76,	37.44,	46.8,	62.244,	78.156,	93.6,	109.044,	124.956,	140.4,	155.844,	171.756,	187.2,	202.644,	218.556,	234,	249.444,	265.356,	280.8,	296.244,	312.156,	327.6,	343.044,	358.956,	374.4]},
				{"_1EL_": [34.02,	38.88,	48.6,	64.638,	81.162,	97.2,	113.238,	129.762,	145.8,	161.838,	178.362,	194.4,	210.438,	226.962,	243,	259.038,	275.562,	291.6,	307.638,	324.162,	340.2,	356.238,	372.762,	388.8]}
			]},
			{"_2590_": [
				{"_3SL_dual": [53.9875,	61.7,	77.125,	102.57625,	128.79875,	154.25,	179.70125,	205.92375,	231.375,	256.82625,	283.04875,	308.5,	333.95125,	360.17375,	385.625,	411.07625,	437.29875,	462.75,	488.20125,	514.42375,	539.875,	565.32625,	591.54875,	617]},						
				{"_6SL_dual": [0, 0, 0, 0, 0,	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}
			]},
			{"_3590_": [
				{"_3SL_dual": [62.622,	71.568,	89.46,	118.9818,	149.3982,	178.92,	208.4418,	238.8582,	268.38,	297.9018,	328.3182,	357.84,	387.3618,	417.7782,	447.3,	476.8218,	507.2382,	536.76,	566.2818,	596.6982,	626.22,	655.7418,	686.1582,	715.68]},						
				{"_6SL_dual": [0, 0, 0, 0, 0,	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}
			]},
			{"_4590_": [
				{"_3SL_dual": [59.64,	68.16,	85.2,	113.316,	142.284,	170.4,	198.516,	227.484,	255.6,	283.716,	312.684,	340.8,	368.916,	397.884,	426,	454.116,	483.084,	511.2,	539.316,	568.284,	596.4,	624.516,	653.484,	681.6]},						
				{"_6SL_dual": [0, 0, 0, 0, 0,	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}
			]},
			{"_1084_": [
				{"_LR_": [35.1883,	40.2152,	50.269,	66.85777,	83.94923,	100.538,	117.12677,	134.21823,	150.807,	167.39577,	184.48723,	201.076,	217.66477,	234.75623,	251.345,	0,	0,	0,	0,	0,	0,	0,	0,	0]}
			]}
		]
	};
	
	//set appropriate length index
	var basePrice;
	var index;
	if (lengthCode == "C"){
		var END_CAP_WIDTH = 0.37;
		var LED_COUPON_LENGTH = 3.937;
		var MIN_AIR_GAP = 0.4; //gap between board and end-cap is a minimum of 0.20" (x2) = 0.4
		
		var avail_length = (trueLength - END_CAP_WIDTH) - MIN_AIR_GAP;
		var temp_count = (avail_length / LED_COUPON_LENGTH); //find rough number of coupons in a custom length
		var coupon_count = Math.floor(temp_count); //round down to integer to get exact number
		index = coupon_count;
	} else {
		index = document.getElementById("length-dropbox").selectedIndex;
		index = (index-1);
	}
	
	if((document.getElementById("distributor_price").checked==true) || (document.getElementById("d10_price").checked==true) || (document.getElementById("d19_price").checked==true)) {
		if((document.getElementById("1018").checked==true) || (document.getElementById("2545").checked==true)){
			if(document.getElementById("1S").checked==true) {basePrice = pricing.distributorNet[0]._1018_2545_[0]._1S_[index];} else
			if(document.getElementById("2SL").checked==true) {basePrice = pricing.distributorNet[0]._1018_2545_[1]._2SL_[index];} else
			if(document.getElementById("3SL").checked==true) {basePrice = pricing.distributorNet[0]._1018_2545_[2]._3SL_[index];} else
			if(document.getElementById("4SL").checked==true) {basePrice = pricing.distributorNet[0]._1018_2545_[3]._4SL_[index];} else
			if(document.getElementById("5SL").checked==true) {basePrice = pricing.distributorNet[0]._1018_2545_[4]._5SL_[index];} else
			if(document.getElementById("6SL").checked==true) {basePrice = pricing.distributorNet[0]._1018_2545_[5]._6SL_[index];} else
			if(document.getElementById("1R").checked==true) {basePrice = pricing.distributorNet[0]._1018_2545_[6]._1R_[index];} else
			if(document.getElementById("2RL").checked==true) {basePrice = pricing.distributorNet[0]._1018_2545_[7]._2RL_[index];} else
			if(document.getElementById("1QL").checked==true) {basePrice = pricing.distributorNet[0]._1018_2545_[8]._1QL_[index];} else
			if(document.getElementById("1EL").checked==true) {basePrice = pricing.distributorNet[0]._1018_2545_[9]._1EL_[index];} else
			{basePrice = 0;}
		} else if(document.getElementById("3545").checked==true){
			if(document.getElementById("1S").checked==true) {basePrice = pricing.distributorNet[1]._3545_[0]._1S_[index];} else
			if(document.getElementById("2SL").checked==true) {basePrice = pricing.distributorNet[1]._3545_[1]._2SL_[index];} else
			if(document.getElementById("3SL").checked==true) {basePrice = pricing.distributorNet[1]._3545_[2]._3SL_[index];} else
			if(document.getElementById("4SL").checked==true) {basePrice = pricing.distributorNet[1]._3545_[3]._4SL_[index];} else
			if(document.getElementById("5SL").checked==true) {basePrice = pricing.distributorNet[1]._3545_[4]._5SL_[index];} else
			if(document.getElementById("6SL").checked==true) {basePrice = pricing.distributorNet[1]._3545_[5]._6SL_[index];} else
			if(document.getElementById("1R").checked==true) {basePrice = pricing.distributorNet[1]._3545_[6]._1R_[index];} else
			if(document.getElementById("2RL").checked==true) {basePrice = pricing.distributorNet[1]._3545_[7]._2RL_[index];} else
			if(document.getElementById("1QL").checked==true) {basePrice = pricing.distributorNet[1]._3545_[8]._1QL_[index];} else
			if(document.getElementById("1EL").checked==true) {basePrice = pricing.distributorNet[1]._3545_[9]._1EL_[index];} else
			{basePrice = 0;}
		} else if(document.getElementById("4545").checked==true){
			if(document.getElementById("1S").checked==true) {basePrice = pricing.distributorNet[2]._4545_[0]._1S_[index];} else
			if(document.getElementById("2SL").checked==true) {basePrice = pricing.distributorNet[2]._4545_[1]._2SL_[index];} else
			if(document.getElementById("3SL").checked==true) {basePrice = pricing.distributorNet[2]._4545_[2]._3SL_[index];} else
			if(document.getElementById("4SL").checked==true) {basePrice = pricing.distributorNet[2]._4545_[3]._4SL_[index];} else
			if(document.getElementById("5SL").checked==true) {basePrice = pricing.distributorNet[2]._4545_[4]._5SL_[index];} else
			if(document.getElementById("6SL").checked==true) {basePrice = pricing.distributorNet[2]._4545_[5]._6SL_[index];} else
			if(document.getElementById("1R").checked==true) {basePrice = pricing.distributorNet[2]._4545_[6]._1R_[index];} else
			if(document.getElementById("2RL").checked==true) {basePrice = pricing.distributorNet[2]._4545_[7]._2RL_[index];} else
			if(document.getElementById("1QL").checked==true) {basePrice = pricing.distributorNet[2]._4545_[8]._1QL_[index];} else
			if(document.getElementById("1EL").checked==true) {basePrice = pricing.distributorNet[2]._4545_[9]._1EL_[index];} else
			{basePrice = 0;}
		} else if(document.getElementById("2590").checked==true){					
			if(document.getElementById("3SL").checked==true) {basePrice = pricing.distributorNet[3]._2590_[0]._3SL_dual[index];} else 
			if(document.getElementById("6SL").checked==true) {basePrice = pricing.distributorNet[3]._2590_[1]._6SL_dual[index];} else 
			{basePrice = 0;}
		} else if(document.getElementById("3590").checked==true){
			if(document.getElementById("3SL").checked==true) {basePrice = pricing.distributorNet[4]._3590_[0]._3SL_dual[index];} else 
			if(document.getElementById("6SL").checked==true) {basePrice = pricing.distributorNet[4]._3590_[1]._6SL_dual[index];} else 
			{basePrice = 0;}
		} else if(document.getElementById("4590").checked==true){
			if(document.getElementById("3SL").checked==true) {basePrice = pricing.distributorNet[5]._4590_[0]._3SL_dual[index];} else 
			if(document.getElementById("6SL").checked==true) {basePrice = pricing.distributorNet[5]._4590_[1]._6SL_dual[index];} else 
			{basePrice = 0;}
		} else if(document.getElementById("1084").checked==true){
			if(document.getElementById("LR").checked==true) {basePrice = pricing.distributorNet[6]._1084_[0]._LR_[index];} else 
			{basePrice = 0;}
		} else {
			//*** DEFAULT HERE ***//
			basePrice = 0;
		}
	} else if(document.getElementById("roblon_price").checked==true) {
		if((document.getElementById("1018").checked==true) || (document.getElementById("2545").checked==true)){
			if(document.getElementById("1S").checked==true) {basePrice = pricing.roblon[0]._1018_2545_[0]._1S_[index];} else
			if(document.getElementById("2SL").checked==true) {basePrice = pricing.roblon[0]._1018_2545_[1]._2SL_[index];} else
			if(document.getElementById("3SL").checked==true) {basePrice = pricing.roblon[0]._1018_2545_[2]._3SL_[index];} else
			if(document.getElementById("4SL").checked==true) {basePrice = pricing.roblon[0]._1018_2545_[3]._4SL_[index];} else
			if(document.getElementById("5SL").checked==true) {basePrice = pricing.roblon[0]._1018_2545_[4]._5SL_[index];} else
			if(document.getElementById("6SL").checked==true) {basePrice = pricing.roblon[0]._1018_2545_[5]._6SL_[index];} else
			if(document.getElementById("1R").checked==true) {basePrice = pricing.roblon[0]._1018_2545_[6]._1R_[index];} else
			if(document.getElementById("2RL").checked==true) {basePrice = pricing.roblon[0]._1018_2545_[7]._2RL_[index];} else
			if(document.getElementById("1QL").checked==true) {basePrice = pricing.roblon[0]._1018_2545_[8]._1QL_[index];} else
			if(document.getElementById("1EL").checked==true) {basePrice = pricing.roblon[0]._1018_2545_[9]._1EL_[index];} else
			{basePrice = 0;}
		} else if(document.getElementById("3545").checked==true){
			if(document.getElementById("1S").checked==true) {basePrice = pricing.roblon[1]._3545_[0]._1S_[index];} else
			if(document.getElementById("2SL").checked==true) {basePrice = pricing.roblon[1]._3545_[1]._2SL_[index];} else
			if(document.getElementById("3SL").checked==true) {basePrice = pricing.roblon[1]._3545_[2]._3SL_[index];} else
			if(document.getElementById("4SL").checked==true) {basePrice = pricing.roblon[1]._3545_[3]._4SL_[index];} else
			if(document.getElementById("5SL").checked==true) {basePrice = pricing.roblon[1]._3545_[4]._5SL_[index];} else
			if(document.getElementById("6SL").checked==true) {basePrice = pricing.roblon[1]._3545_[5]._6SL_[index];} else
			if(document.getElementById("1R").checked==true) {basePrice = pricing.roblon[1]._3545_[6]._1R_[index];} else
			if(document.getElementById("2RL").checked==true) {basePrice = pricing.roblon[1]._3545_[7]._2RL_[index];} else
			if(document.getElementById("1QL").checked==true) {basePrice = pricing.roblon[1]._3545_[8]._1QL_[index];} else
			if(document.getElementById("1EL").checked==true) {basePrice = pricing.roblon[1]._3545_[9]._1EL_[index];} else
			{basePrice = 0;}
		} else if(document.getElementById("4545").checked==true){
			if(document.getElementById("1S").checked==true) {basePrice = pricing.roblon[2]._4545_[0]._1S_[index];} else
			if(document.getElementById("2SL").checked==true) {basePrice = pricing.roblon[2]._4545_[1]._2SL_[index];} else
			if(document.getElementById("3SL").checked==true) {basePrice = pricing.roblon[2]._4545_[2]._3SL_[index];} else
			if(document.getElementById("4SL").checked==true) {basePrice = pricing.roblon[2]._4545_[3]._4SL_[index];} else
			if(document.getElementById("5SL").checked==true) {basePrice = pricing.roblon[2]._4545_[4]._5SL_[index];} else
			if(document.getElementById("6SL").checked==true) {basePrice = pricing.roblon[2]._4545_[5]._6SL_[index];} else
			if(document.getElementById("1R").checked==true) {basePrice = pricing.roblon[2]._4545_[6]._1R_[index];} else
			if(document.getElementById("2RL").checked==true) {basePrice = pricing.roblon[2]._4545_[7]._2RL_[index];} else
			if(document.getElementById("1QL").checked==true) {basePrice = pricing.roblon[2]._4545_[8]._1QL_[index];} else
			if(document.getElementById("1EL").checked==true) {basePrice = pricing.roblon[2]._4545_[9]._1EL_[index];} else
			{basePrice = 0;}
		} else if(document.getElementById("2590").checked==true){					
			if(document.getElementById("3SL").checked==true) {basePrice = pricing.roblon[3]._2590_[0]._3SL_dual[index];} else 
			if(document.getElementById("6SL").checked==true) {basePrice = pricing.roblon[3]._2590_[1]._6SL_dual[index];} else 
			{basePrice = 0;}
		} else if(document.getElementById("3590").checked==true){
			if(document.getElementById("3SL").checked==true) {basePrice = pricing.roblon[4]._3590_[0]._3SL_dual[index];} else 
			if(document.getElementById("6SL").checked==true) {basePrice = pricing.roblon[4]._3590_[1]._6SL_dual[index];} else 
			{basePrice = 0;}
		} else if(document.getElementById("4590").checked==true){
			if(document.getElementById("3SL").checked==true) {basePrice = pricing.roblon[5]._4590_[0]._3SL_dual[index];} else 
			if(document.getElementById("6SL").checked==true) {basePrice = pricing.roblon[5]._4590_[1]._6SL_dual[index];} else 
			{basePrice = 0;}
		} else if(document.getElementById("1084").checked==true){
			if(document.getElementById("LR").checked==true) {basePrice = pricing.roblon[6]._1084_[0]._LR_[index];} else 
			{basePrice = 0;}
		} else {
			//*** DEFAULT HERE ***//
			basePrice = 0;
		}
	}
	return basePrice;
}

function setCustomLengthAdder(tempTotal, lengthCode) {
	var CUSTOM_LENGTH_FEE = 10; //$10 custom cut fee
	var ROBLON_ACC_DISCOUNT = 0.70; //roblon accessory discount
	
	if(tempTotal==0){return tempTotal;} //if starting price is $0, do not add to value
	
	if(lengthCode == "C") {
		if(document.getElementById("roblon_price").checked==true){
			tempTotal = tempTotal+(CUSTOM_LENGTH_FEE*ROBLON_ACC_DISCOUNT);
		} else {
			tempTotal = tempTotal+CUSTOM_LENGTH_FEE;
		}
	}
	return tempTotal;
}

function setLensAdder(tempTotal, lensCode, trueLength) {
	var lensAdder=0;
	
	if(tempTotal==0){return tempTotal;} //if starting price is $0, do not add to value
	
	//1S SLIDING LENS PRICING
	if(lensCode == "SLC"){
		var slcLensPrice;
		var SLC_1S_PER_FOOT = 7.5; //per foot price of 1S SLC lens
		var ROBLON_SLC_1S_PER_FOOT = 3.75; // Roblon per foot price of 1S SLC lens
		
		if(document.getElementById("roblon_price").checked==true)
		{					
			var slc_length = (trueLength/12); //convert lens length from inches to foot
			if(((slc_length*12)%12) <= 1){slc_length = Math.floor(slc_length);} //round lens length down to nearest foot 
			else{slc_length = Math.ceil(slc_length);} //round lens length up to nearest foot
			lensAdder = slc_length * ROBLON_SLC_1S_PER_FOOT;
		} else {
			var slc_length = (trueLength/12); //convert lens length from inches to foot
			if(((slc_length*12)%12) <= 1){slc_length = Math.floor(slc_length);} //round lens length down to nearest foot
			else{slc_length = Math.ceil(slc_length);} //round lens length up to nearest foot
			lensAdder = slc_length * SLC_1S_PER_FOOT;
		}
	}
	// 60°/30°/10° OPTICAL LENS PRICING
	if((lensCode=="60C") || (lensCode=="30C") || (lensCode=="10C")){
		var OPTIC_PER_FOOT = 8.5; //per foot price of optical lenses
		var ROBLON_OPTIC_PER_FOOT = 4.25; // Roblon per foot price of optical lenses
		if(document.getElementById("roblon_price").checked==true) {
			//STUFF HERE
			var optic_length = (trueLength/12); //convert lens length from inches to foot
			if(((optic_length*12)%12) <= 1){optic_length = Math.floor(optic_length);} //round lens length down to nearest foot 
			else{optic_length = Math.ceil(optic_length);} //round lens length up to nearest foot
			lensAdder = optic_length * ROBLON_OPTIC_PER_FOOT;
		} else {
			//STUFF HERE
			var optic_length = (trueLength/12); //convert lens length from inches to foot
			if(((optic_length*12)%12) <= 1){optic_length = Math.floor(optic_length);} //round lens length down to nearest foot 
			else{optic_length = Math.ceil(optic_length);} //round lens length up to nearest foot
			lensAdder = optic_length * OPTIC_PER_FOOT;
		}
	}
	return (tempTotal+lensAdder);
}

//Apply pre-defined discounts to fixture price
function discountDeduct(tempTotal){
	if(tempTotal==0){return tempTotal;} //if starting price is $0, do not add to value 
	
	if (document.getElementById("d10_price").checked==true)
	{
		var D10 = 0.9;
		tempTotal = tempTotal * D10;
	} else if (document.getElementById("d19_price").checked==true) //Apply D19 discount
	{
		var D19 = 0.81;
		tempTotal = tempTotal * D19;
	} else {
		tempTotal=tempTotal;
	}
	return tempTotal;
}

//******************************************************************

/* function printFullDescription(fullDescription, wattsDescription)
{
	document.getElementById('description').innerHTML=fullDescription.fontsize(2);
} */

/* function printLengthConversion(inches, mm)
{
	document.getElementById('inches').innerHTML=inches.toFixed(2);
	document.getElementById('mm').innerHTML=mm.toFixed(0);
} */

/* function printTotalWattage(totalWatts)
{
	document.getElementById('watts').innerHTML=totalWatts;
} */

function printPrice(price)
{
	document.getElementById('price').innerHTML=price.toFixed(2);
}

function printCommentBox(commentBox)
{
	document.getElementById('comment').innerHTML=commentBox;
}

// ******************************* COPY FEATURE - START *******************************

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
// *******************************   *******************************

/*
function errorCheck(extrusionCode, ledCode, colorTempCode, finishCode, lensCode, factoryOptionsCode, wireCode, lengthCode, trueLength){
	var alertMsg="Please choose ";
	var errorStrg;
	if(extrusionCode=="XX"){errorStrg="extrusion type!";}
	if(ledCode=="XXXX"){errorStrg="LED board type!";}
	if(colorTempCode=="XX"){errorStrg="LED color type!";}
	if(finishCode=="X"){errorStrg="finish type!";}
	if(lensCode=="XX"){errorStrg="lens type!";}
	if((factoryOptionsCode=='XX') || (factoryOptionsCode=='XX-RO')){errorStrg="factory options type!";}
	if(wireCode=="XXX"){errorStrg="wire exit type!";}		
	if(lengthCode=="X"){errorStrg="fixture length!";}
	if((isNaN(trueLength)) && (lengthCode=="C")){errorStrg="valid custom length!";}
	
	if(errorStrg){
		$.msgBox({
			title:"Warning!",
			content: alertMsg+errorStrg
		});
		exit();
	}
}
*/
/* ******************************   ******************************* */

function main(extCode, lensCode, lengthCode, trueLength_inches){
	
	//var ledCode = setLedCode();
	//var lensCode = setLensCode();
	//var lengthCode = setLengthCode();
	//var trueLength = setTrueLength(lengthCode);
	//var totalWatts = setTotalWatts(ledCode, trueLength, lengthCode);
	
	//var fullDescription = setFullDescription();
	
	//var wattsDescription = setWattsDescription(totalWatts);
	
	//printFullDescription(fullDescription);
	//printTotalWattage(wattsDescription);
	
	//var mm = setLengthConversion(trueLength);
	//printLengthConversion(trueLength, mm);	
	
	//var extrusionCode = setExtrusionCode();
	//var commentBox = setCommentBox();
	//printCommentBox(commentBox);

	extrusionCode = extCode;
	lensCode = lensCode;
	lengthCode = lengthCode;
	trueLength = trueLength_inches;
	
	
	var basePrice = setBasePrice(extrusionCode, lengthCode, trueLength);
	var tempTotal = setCustomLengthAdder(basePrice, lengthCode);
	tempTotal = setLensAdder(tempTotal, lensCode, trueLength);
	tempTotal = discountDeduct(tempTotal);
	setPriceDisplay();
	printPrice(tempTotal);
}

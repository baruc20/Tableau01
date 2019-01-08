// Initialize the viz variable 
var vizCMS_Cost_Hosp_Stat,CMZ02, vizMedicareIP01, vizMedicareOP01, vizSacPoliceDispatch, vizIPOP_Pay_Hospital, vizSuperStore_D3, CMZ08, CMZ09;

window.onload= function() {
// When the webpage has loaded, load the viz

	var placeholder01 = document.getElementById('myCMS_Cost_Hosp_Stat_Viz');
	var vizURL01 = 'http://rfplogisticatableau.brazilsouth.cloudapp.azure.com/views/CMZ/DashboardAgendamientoDomicilio?:embed=y&:display_count=no&:showAppBanner=false&:showShareOptions=true&:showVizHome=no';
	var options01 = {
	    
		width: '100%',
		height: '1000px',
		hideToolbar: true,
		hideTabs: true,
		
	};

	vizCMS_Cost_Hosp_Stat = new tableau.Viz(placeholder01, vizURL01, options01);

	
	// inicio placeholder02
	var placeholder02 = document.getElementById('miDashboard02');
	var vizURL02 = 'http://rfplogisticatableau.brazilsouth.cloudapp.azure.com/views/CMZ/DashboardVoucherDespacho?:embed=y&:display_count=no&:showAppBanner=false&:showShareOptions=true&:showVizHome=no';
	var options02 = {
	    
		width: '100%',
		height: '800px',
		hideToolbar: true,
		hideTabs: true,
		
	};
	
	CMZ02 = new tableau.Viz(placeholder02, vizURL02, options02);
// fin placeholder02

	
	
	
//fin de modificaciones	
	var placeholder03 = document.getElementById('myMedicareIP01Viz');
	var vizURL03 = 'http://rfplogisticatableau.brazilsouth.cloudapp.azure.com/views/CMZ/DashboardVoucherRecepcion?:embed=y&:display_count=no&:showAppBanner=false&:showShareOptions=true&:showVizHome=no';
	var options03 = {
	    width: '1280px',
		height: '720px',
		hideToolbar: true,
		hideTabs: true
	};

	vizMedicareIP01 = new tableau.Viz(placeholder03, vizURL03, options03);

	// Listen for filter change/selection for "Medicare Inpatient Charge Analysis 01"

	
	var placeholder04 = document.getElementById('myMedicareOP01Viz');
	var vizURL04 = 'http://rfplogisticatableau.brazilsouth.cloudapp.azure.com/views/CMZ/DashboardCambiodeUbicaciones?:embed=y&:display_count=no&:showAppBanner=false&:showShareOptions=true&:showVizHome=no';
	var options04 = {
		width: '1280px',
		height: '720px',
		hideToolbar: true,
		hideTabs: true
	};

	vizMedicareOP01 = new tableau.Viz(placeholder04, vizURL04, options04);

	
	
	var placeholder05 = document.getElementById('myIPOP_Pay_Hospital');
	var vizURL05 = 'http://rfplogisticatableau.brazilsouth.cloudapp.azure.com/views/CMZ/DashboardControlCumplimientoPlanificacion?:embed=y&:display_count=no&:showAppBanner=false&:showShareOptions=true&:showVizHome=no';
	var options05 = {
		width: '1280px',
		height: '720px',
		hideToolbar: true,
		hideTabs: true
	};

	vizIPOP_Pay_Hospital = new tableau.Viz(placeholder05, vizURL05, options05);	

	var placeholder06 = document.getElementById('mySuperStore_D3');
	var vizURL06 = 'http://rfplogisticatableau.brazilsouth.cloudapp.azure.com/views/CMZ/DashboardCD?:embed=y&:display_count=no&:showAppBanner=false&:showShareOptions=true&:showVizHome=no';
	var options06 = {
		width: '1280px',
		height: '720px',
		hideToolbar: true,
		hideTabs: true
	};

	vizSuperStore_D3 = new tableau.Viz(placeholder06, vizURL06, options06);	

	
	var placeholder15 = document.getElementById('mySacPoliceDispatchViz');
	var vizURL15 = 'http://rfplogisticatableau.brazilsouth.cloudapp.azure.com/views/CMZ/DashboardRankingCD?:embed=y&:display_count=no&:showAppBanner=false&:showShareOptions=true&:showVizHome=no';
	var options15 = {
		width: '1280px',
		height: '720px',
		hideToolbar: true,
		hideTabs: true
	};

	vizSacPoliceDispatch = new tableau.Viz(placeholder15, vizURL15, options15);
	
	
	
		var placeholder08 = document.getElementById('miDashboard08');
	var vizURL08 = 'http://rfplogisticatableau.brazilsouth.cloudapp.azure.com/views/CMZ/DasboardCumplimientoCD?:embed=y&:display_count=no&:showAppBanner=false&:showShareOptions=true&:showVizHome=no';
	var options08 = {
	    
		width: '100%',
		height: '720px',
		hideToolbar: true,
		hideTabs: true,
		
	};
	
	CMZ08 = new tableau.Viz(placeholder08, vizURL08, options08);
	
	
	//
	var placeholder09 = document.getElementById('miDashboard09');
	var vizURL09 = 'http://rfplogisticatableau.brazilsouth.cloudapp.azure.com/views/CMZ/CompaiaMineraZaldivar?:embed=y&:display_count=no&:showAppBanner=false&:showShareOptions=true&:showVizHome=no';
	var options09 = {
	    
		width: '100%',
		height: '720px',
		hideToolbar: true,
		hideTabs: true,
		
	};
	
	CMZ09 = new tableau.Viz(placeholder09, vizURL09, options09);
	
	

};


// Filter the specified dimension to the specified value(s)
function setFilterTo(vizName, sheetName, filterName, values) {
	var sheet = vizName.getWorkbook().getActiveSheet().getWorksheets().get(sheetName);
    sheet.applyFilterAsync(filterName, values, tableau.FilterUpdateType.REPLACE); 
}


//function switchView(sheetName) {
//	var workbook = vizMedicareOP01.getWorkbook();
//	workbook.activateSheetAsync(sheetName);
//}

// Filter the specified dimension to the specified value(s)
//function show(filterName, values) {
//	var sheet = vizMedicareOP01.getWorkbook().getActiveSheet();
//	sheet.applyFilterAsync(filterName, values, tableau.FilterUpdateType.REPLACE);
//}

// Select the marks that have the specified value(s) for the specified dimension
//function selectMarks(filterName, values) {
//	var sheet = vizMedicareOP01.getWorkbook().getActiveSheet();
//	sheet.selectMarksAsync(filterName, values, tableau.FilterUpdateType.REPLACE);
//}

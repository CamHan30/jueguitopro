gdjs.GAME_32OVERCode = {};
gdjs.GAME_32OVERCode.localVariables = [];
gdjs.GAME_32OVERCode.idToCallbackMap = new Map();
gdjs.GAME_32OVERCode.GDMedievalButtonBeigeObjects1= [];
gdjs.GAME_32OVERCode.GDMedievalButtonBeigeObjects2= [];
gdjs.GAME_32OVERCode.GDTransparentButtonWithWhiteYellowBorderObjects1= [];
gdjs.GAME_32OVERCode.GDTransparentButtonWithWhiteYellowBorderObjects2= [];
gdjs.GAME_32OVERCode.GDDinoObjects1= [];
gdjs.GAME_32OVERCode.GDDinoObjects2= [];
gdjs.GAME_32OVERCode.GDsubvidatituloObjects1= [];
gdjs.GAME_32OVERCode.GDsubvidatituloObjects2= [];
gdjs.GAME_32OVERCode.GDsubvidaObjects1= [];
gdjs.GAME_32OVERCode.GDsubvidaObjects2= [];
gdjs.GAME_32OVERCode.GDHUDObjects1= [];
gdjs.GAME_32OVERCode.GDHUDObjects2= [];
gdjs.GAME_32OVERCode.GDTXTMONEDAObjects1= [];
gdjs.GAME_32OVERCode.GDTXTMONEDAObjects2= [];
gdjs.GAME_32OVERCode.GDAREADERIESGOObjects1= [];
gdjs.GAME_32OVERCode.GDAREADERIESGOObjects2= [];
gdjs.GAME_32OVERCode.GDbloquefantasmaObjects1= [];
gdjs.GAME_32OVERCode.GDbloquefantasmaObjects2= [];


gdjs.GAME_32OVERCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteYellowBorder"), gdjs.GAME_32OVERCode.GDTransparentButtonWithWhiteYellowBorderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GAME_32OVERCode.GDTransparentButtonWithWhiteYellowBorderObjects1.length;i<l;++i) {
    if ( gdjs.GAME_32OVERCode.GDTransparentButtonWithWhiteYellowBorderObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GAME_32OVERCode.GDTransparentButtonWithWhiteYellowBorderObjects1[k] = gdjs.GAME_32OVERCode.GDTransparentButtonWithWhiteYellowBorderObjects1[i];
        ++k;
    }
}
gdjs.GAME_32OVERCode.GDTransparentButtonWithWhiteYellowBorderObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MENU", false);
}
}

}


};

gdjs.GAME_32OVERCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GAME_32OVERCode.GDMedievalButtonBeigeObjects1.length = 0;
gdjs.GAME_32OVERCode.GDMedievalButtonBeigeObjects2.length = 0;
gdjs.GAME_32OVERCode.GDTransparentButtonWithWhiteYellowBorderObjects1.length = 0;
gdjs.GAME_32OVERCode.GDTransparentButtonWithWhiteYellowBorderObjects2.length = 0;
gdjs.GAME_32OVERCode.GDDinoObjects1.length = 0;
gdjs.GAME_32OVERCode.GDDinoObjects2.length = 0;
gdjs.GAME_32OVERCode.GDsubvidatituloObjects1.length = 0;
gdjs.GAME_32OVERCode.GDsubvidatituloObjects2.length = 0;
gdjs.GAME_32OVERCode.GDsubvidaObjects1.length = 0;
gdjs.GAME_32OVERCode.GDsubvidaObjects2.length = 0;
gdjs.GAME_32OVERCode.GDHUDObjects1.length = 0;
gdjs.GAME_32OVERCode.GDHUDObjects2.length = 0;
gdjs.GAME_32OVERCode.GDTXTMONEDAObjects1.length = 0;
gdjs.GAME_32OVERCode.GDTXTMONEDAObjects2.length = 0;
gdjs.GAME_32OVERCode.GDAREADERIESGOObjects1.length = 0;
gdjs.GAME_32OVERCode.GDAREADERIESGOObjects2.length = 0;
gdjs.GAME_32OVERCode.GDbloquefantasmaObjects1.length = 0;
gdjs.GAME_32OVERCode.GDbloquefantasmaObjects2.length = 0;

gdjs.GAME_32OVERCode.eventsList0(runtimeScene);
gdjs.GAME_32OVERCode.GDMedievalButtonBeigeObjects1.length = 0;
gdjs.GAME_32OVERCode.GDMedievalButtonBeigeObjects2.length = 0;
gdjs.GAME_32OVERCode.GDTransparentButtonWithWhiteYellowBorderObjects1.length = 0;
gdjs.GAME_32OVERCode.GDTransparentButtonWithWhiteYellowBorderObjects2.length = 0;
gdjs.GAME_32OVERCode.GDDinoObjects1.length = 0;
gdjs.GAME_32OVERCode.GDDinoObjects2.length = 0;
gdjs.GAME_32OVERCode.GDsubvidatituloObjects1.length = 0;
gdjs.GAME_32OVERCode.GDsubvidatituloObjects2.length = 0;
gdjs.GAME_32OVERCode.GDsubvidaObjects1.length = 0;
gdjs.GAME_32OVERCode.GDsubvidaObjects2.length = 0;
gdjs.GAME_32OVERCode.GDHUDObjects1.length = 0;
gdjs.GAME_32OVERCode.GDHUDObjects2.length = 0;
gdjs.GAME_32OVERCode.GDTXTMONEDAObjects1.length = 0;
gdjs.GAME_32OVERCode.GDTXTMONEDAObjects2.length = 0;
gdjs.GAME_32OVERCode.GDAREADERIESGOObjects1.length = 0;
gdjs.GAME_32OVERCode.GDAREADERIESGOObjects2.length = 0;
gdjs.GAME_32OVERCode.GDbloquefantasmaObjects1.length = 0;
gdjs.GAME_32OVERCode.GDbloquefantasmaObjects2.length = 0;


return;

}

gdjs['GAME_32OVERCode'] = gdjs.GAME_32OVERCode;

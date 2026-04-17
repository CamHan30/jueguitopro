gdjs.MENUCode = {};
gdjs.MENUCode.localVariables = [];
gdjs.MENUCode.idToCallbackMap = new Map();
gdjs.MENUCode.GDTransparentButtonWithWhiteYellowBorderObjects1= [];
gdjs.MENUCode.GDTransparentButtonWithWhiteYellowBorderObjects2= [];
gdjs.MENUCode.GDDinoObjects1= [];
gdjs.MENUCode.GDDinoObjects2= [];
gdjs.MENUCode.GDsubvidatituloObjects1= [];
gdjs.MENUCode.GDsubvidatituloObjects2= [];
gdjs.MENUCode.GDsubvidaObjects1= [];
gdjs.MENUCode.GDsubvidaObjects2= [];
gdjs.MENUCode.GDHUDObjects1= [];
gdjs.MENUCode.GDHUDObjects2= [];
gdjs.MENUCode.GDTXTMONEDAObjects1= [];
gdjs.MENUCode.GDTXTMONEDAObjects2= [];
gdjs.MENUCode.GDAREADERIESGOObjects1= [];
gdjs.MENUCode.GDAREADERIESGOObjects2= [];
gdjs.MENUCode.GDbloquefantasmaObjects1= [];
gdjs.MENUCode.GDbloquefantasmaObjects2= [];


gdjs.MENUCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteYellowBorder"), gdjs.MENUCode.GDTransparentButtonWithWhiteYellowBorderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MENUCode.GDTransparentButtonWithWhiteYellowBorderObjects1.length;i<l;++i) {
    if ( gdjs.MENUCode.GDTransparentButtonWithWhiteYellowBorderObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MENUCode.GDTransparentButtonWithWhiteYellowBorderObjects1[k] = gdjs.MENUCode.GDTransparentButtonWithWhiteYellowBorderObjects1[i];
        ++k;
    }
}
gdjs.MENUCode.GDTransparentButtonWithWhiteYellowBorderObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "escena1", false);
}
}

}


};

gdjs.MENUCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MENUCode.GDTransparentButtonWithWhiteYellowBorderObjects1.length = 0;
gdjs.MENUCode.GDTransparentButtonWithWhiteYellowBorderObjects2.length = 0;
gdjs.MENUCode.GDDinoObjects1.length = 0;
gdjs.MENUCode.GDDinoObjects2.length = 0;
gdjs.MENUCode.GDsubvidatituloObjects1.length = 0;
gdjs.MENUCode.GDsubvidatituloObjects2.length = 0;
gdjs.MENUCode.GDsubvidaObjects1.length = 0;
gdjs.MENUCode.GDsubvidaObjects2.length = 0;
gdjs.MENUCode.GDHUDObjects1.length = 0;
gdjs.MENUCode.GDHUDObjects2.length = 0;
gdjs.MENUCode.GDTXTMONEDAObjects1.length = 0;
gdjs.MENUCode.GDTXTMONEDAObjects2.length = 0;
gdjs.MENUCode.GDAREADERIESGOObjects1.length = 0;
gdjs.MENUCode.GDAREADERIESGOObjects2.length = 0;
gdjs.MENUCode.GDbloquefantasmaObjects1.length = 0;
gdjs.MENUCode.GDbloquefantasmaObjects2.length = 0;

gdjs.MENUCode.eventsList0(runtimeScene);
gdjs.MENUCode.GDTransparentButtonWithWhiteYellowBorderObjects1.length = 0;
gdjs.MENUCode.GDTransparentButtonWithWhiteYellowBorderObjects2.length = 0;
gdjs.MENUCode.GDDinoObjects1.length = 0;
gdjs.MENUCode.GDDinoObjects2.length = 0;
gdjs.MENUCode.GDsubvidatituloObjects1.length = 0;
gdjs.MENUCode.GDsubvidatituloObjects2.length = 0;
gdjs.MENUCode.GDsubvidaObjects1.length = 0;
gdjs.MENUCode.GDsubvidaObjects2.length = 0;
gdjs.MENUCode.GDHUDObjects1.length = 0;
gdjs.MENUCode.GDHUDObjects2.length = 0;
gdjs.MENUCode.GDTXTMONEDAObjects1.length = 0;
gdjs.MENUCode.GDTXTMONEDAObjects2.length = 0;
gdjs.MENUCode.GDAREADERIESGOObjects1.length = 0;
gdjs.MENUCode.GDAREADERIESGOObjects2.length = 0;
gdjs.MENUCode.GDbloquefantasmaObjects1.length = 0;
gdjs.MENUCode.GDbloquefantasmaObjects2.length = 0;


return;

}

gdjs['MENUCode'] = gdjs.MENUCode;

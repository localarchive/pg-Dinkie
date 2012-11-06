
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){sym.$("rect").css({"margin-left":"-210px","margin-top":"-70px"});sym.$("rect2").css({"margin-left":"-210px","margin-top":"-70px"});sym.$("Text2").css({"margin-left":"-175px","margin-top":"-70px"});});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",4000,function(sym,e){sym.stop(0);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_rect}","touchend",function(sym,e){sym.play(1000);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",6000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_rect2}","touchend",function(sym,e){sym.play(4001);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_sound}","touchend",function(sym,e){window.open("duck.mp3","_new");});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'button'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",500,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_RoundRect}","touchstart",function(sym,e){sym.stop(500);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_RoundRect}","touchend",function(sym,e){sym.stop(0);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",750,function(sym,e){sym.stop();});
//Edge binding end
})("button");
//Edge symbol end:'button'

//=========================================================

//Edge symbol: 'button_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",600,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",750,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_RoundRectCopy}","touchstart",function(sym,e){sym.stop(600);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_RoundRectCopy}","touchend",function(sym,e){sym.stop(0);});
//Edge binding end
})("button_1");
//Edge symbol end:'button_1'
})(jQuery,AdobeEdge,"EDGE-455333329");
/*
 * AllInOne Banner - Content Slider v3.0
 *
 * Copyright 2012, LambertGroup
 * 
*/


(function(c){function H(b,a){c(b.currentImg.attr("data-text-id")).css("display","block");var e=c(b.currentImg.attr("data-text-id")).children(),g=0;currentText_arr=[];e.each(function(){currentText_arr[g]=c(this);var f=currentText_arr[g].attr("data-initial-left"),e=currentText_arr[g].attr("data-initial-top");a.responsive&&(f=parseInt(f/(a.origWidth/a.width),10),e=parseInt(e/(a.origWidth/a.width),10));currentText_arr[g].css({left:f+"px",top:e+"px",opacity:parseInt(currentText_arr[g].attr("data-fade-start"), 10)/100});var h=currentText_arr[g];setTimeout(function(){if(a.responsive){newCss="";if(h.css("font-size").lastIndexOf("px")!=-1){fontSize=h.css("font-size").substr(0,h.css("font-size").lastIndexOf("px"));newCss=newCss+("font-size:"+fontSize/(a.origWidth/a.width)+"px;")}else if(h.css("font-size").lastIndexOf("em")!=-1){fontSize=h.css("font-size").substr(0,h.css("font-size").lastIndexOf("em"));newCss=newCss+("font-size:"+fontSize/(a.origWidth/a.width)+"em;")}if(h.css("line-height").lastIndexOf("px")!= -1){lineHeight=h.css("line-height").substr(0,h.css("line-height").lastIndexOf("px"));newCss=newCss+("line-height:"+lineHeight/(a.origWidth/a.width)+"px;")}else if(h.css("line-height").lastIndexOf("em")!=-1){lineHeight=h.css("line-height").substr(0,h.css("line-height").lastIndexOf("em"));newCss=newCss+("line-height:"+lineHeight/(a.origWidth/a.width)+"em;")}h.wrapInner('<div class="newFS" style="'+newCss+'" />')}var f=h.attr("data-final-left"),e=h.attr("data-final-top");if(a.responsive){f=parseInt(f/ (a.origWidth/a.width),10);e=parseInt(e/(a.origWidth/a.width),10)}var g=1;b.isVideoPlaying==true&&(g=0);h.animate({opacity:g,left:f+"px",top:e+"px"},h.attr("data-duration")*1E3,function(){b.isVideoPlaying==true&&c(b.currentImg.attr("data-text-id")).children().css("opacity",0)})},1E3*currentText_arr[g].attr("data-delay"));g++})}function y(b,a,e,g,f,s,h,A,w,u,t){var l=!0;if(!e.loop&&a.current_img_no+b>=g||!e.loop&&0>a.current_img_no+b)l=!1;l&&!a.slideIsRunning&&(c(".newFS",u).contents().unwrap(),a.arcInitialTime= (new Date).getTime(),a.timeElapsed=0,e.showCircleTimer&&(a.ctx.clearRect(0,0,a.canvas.width,a.canvas.height),a.ctx.beginPath(),a.ctx.globalAlpha=e.behindCircleAlpha/100,a.ctx.arc(e.circleRadius+2*e.circleLineWidth,e.circleRadius+2*e.circleLineWidth,e.circleRadius,0,2*Math.PI,!1),a.ctx.lineWidth=e.circleLineWidth+2,a.ctx.strokeStyle=e.behindCircleColor,a.ctx.stroke(),a.ctx.beginPath(),a.ctx.globalAlpha=e.circleAlpha/100,a.ctx.arc(e.circleRadius+2*e.circleLineWidth,e.circleRadius+2*e.circleLineWidth, e.circleRadius,0,0,!1),a.ctx.lineWidth=e.circleLineWidth,a.ctx.strokeStyle=e.circleColor,a.ctx.stroke()),a.slideIsRunning=!0,a.previous_current_img_no=a.current_img_no,c(a.currentImg.attr("data-text-id")).css("display","none"),c(f[a.current_img_no]).removeClass("bottomNavButtonON"),t.css("display","none"),a.current_img_no=a.current_img_no+b>=g?0:0>a.current_img_no+b?g-1:a.current_img_no+b,c(f[a.current_img_no]).addClass("bottomNavButtonON"),a.currentImg=c(s[a.current_img_no]),w.animate({left:-1*a.current_img_no* e.width+"px"},800,"easeOutQuad",function(){a.slideIsRunning=false;c(s[a.current_img_no]).attr("data-video")=="true"&&t.css("display","block");if(c(s[a.previous_current_img_no]).attr("data-video")=="true"){c("#contentHolderUnit_"+a.previous_current_img_no,u).html(c(s[a.previous_current_img_no]).html());E(a.previous_current_img_no,a,e,s,u,h,A)}H(a,e,h,A);if(e.autoPlay>0&&g>1&&!a.mouseOverBanner){clearTimeout(a.timeoutID);a.timeoutID=setTimeout(function(){y(1,a,e,g,f,s,h,A,w,u,t)},e.autoPlay*1E3)}}))} function w(b,a,c,g){a=c.origImgsDimensions[a].split(";");g.responsive&&(a[0]/=g.origWidth/g.width,a[1]/=g.origWidth/g.width);b.width(a[0]);b.height(a[1])}function E(b,a,e,g,f,s,h){e.responsive&&(imgInside=c("#contentHolderUnit_"+b,f).find("img:first"),null!=imgInside.width()&&w(imgInside,b,a,e),textIdChildren=c(c(g[b]).attr("data-text-id")).children(),k=-1,textIdChildren.each(function(){k++;imgInside=c(this).find("img:first");null!=imgInside.width()&&w(imgInside,c(g[b]).attr("data-text-id")+"-"+k, a,e)}),c(c(g[b]).attr("data-text-id")).css({width:s.width()+"px",left:parseInt(b*e.width,10),top:h.css("top")}))}c.fn.allinone_contentSlider=function(b){b=c.extend({},c.fn.allinone_contentSlider.defaults,b);return this.each(function(){var a=c(this);responsiveWidth=a.parent().width();responsiveHeight=a.parent().height();b.responsiveRelativeToBrowser&&(responsiveWidth=c(window).width(),responsiveHeight=c(window).height());b.origWidth=b.width;b.width100Proc&&(b.width=responsiveWidth);b.origHeight=b.height; b.height100Proc&&(b.height=responsiveHeight);if(b.responsive&&(b.origWidth!=responsiveWidth||b.width100Proc))b.width=b.origWidth>responsiveWidth||b.width100Proc?responsiveWidth:b.origWidth,b.height100Proc||(b.height=b.width/(b.origWidth/b.origHeight));var e=c("<div></div>").addClass("allinone_contentSlider").addClass(b.skin),g=c('<div class="bannerControls"> <div class="leftNav"></div> <div class="rightNav"></div> </div> <div class="contentHolderVisibleWrapper"><div class="contentHolder"></div></div> <div class="playOver"></div> <canvas class="mycanvas"></canvas>'); a.wrap(e);a.after(g);var f=a.parent(".allinone_contentSlider"),g=c(".bannerControls",f),s=c(".contentHolderVisibleWrapper",f),h=c(".contentHolder",f),e=c('<div class="bottomNavLeft"></div>'),A=c('<div class="bottomNav"></div>'),J=c('<div class="bottomNavRight"></div>');a.after(e);a.after(A);a.after(J);b.showAllControllers||g.css("display","none");var u=c(".leftNav",f),t=c(".rightNav",f);u.css("display","none");t.css("display","none");b.showNavArrows&&b.showOnInitNavArrows&&(u.css("display","block"), t.css("display","block"));var l=c(".bottomNav",f),r=c(".bottomNavLeft",f),x=c(".bottomNavRight",f),C;l.css("display","block");r.css("display","block");x.css("display","block");l.css({bottom:b.thumbsWrapperMarginBottom+"px",top:"auto"});r.css({bottom:b.thumbsWrapperMarginBottom+"px",top:"auto"});x.css({bottom:b.thumbsWrapperMarginBottom+"px",top:"auto"});b.showBottomNav||(l.css("display","none"),r.css("display","none"),x.css("display","none"));b.showOnInitBottomNav||(l.css("left","-5000px"),r.css("left", "-5000px"),x.css("left","-5000px"));b.enableTouchScreen&&(h.css({cursor:"url("+b.absUrl+"skins/hand.cur),url("+b.absUrl+"skins/hand.cur),move",left:"0px",top:"0px",position:"absolute"}),h.draggable({axis:"x",distance:10,start:function(){origLeft=parseInt(c(this).css("left"),10);p.css("display","none")},stop:function(){if(!d.slideIsRunning){finalLeft=parseInt(c(this).css("left"),10);direction=1;origLeft<finalLeft&&(direction=-1);y(direction,d,b,n,v,m,a,g,h,f,p)}}}));var p=c(".playOver",f);p.css({left:parseInt((b.width- p.width())/2,10)+"px",top:parseInt((b.height-p.height())/2,10)+"px"});var n=0,d={current_img_no:0,currentImg:0,previous_current_img_no:0,slideIsRunning:!1,mouseOverBanner:!1,isVideoPlaying:!1,timeoutID:"",intervalID:"",arcInitialTime:(new Date).getTime(),timeElapsed:0,windowWidth:0,origImgsDimensions:[],canvas:"",ctx:"",bannerRatio:b.origWidth/b.origHeight};d.canvas=c(".mycanvas",f)[0];d.canvas.width=2*b.circleRadius+4*b.circleLineWidth;d.canvas.height=2*b.circleRadius+4*b.circleLineWidth;b.showCircleTimer&& (c.browser.msie&&9>parseInt(c.browser.version,10)&&(d.canvas=G_vmlCanvasManager.initElement(d.canvas),!b.showCircleTimerIE8IE7&&b.showCircleTimer&&(b.showCircleTimer=!1)),d.ctx=d.canvas.getContext("2d"));f.width(b.width);f.height(b.height);s.width(b.width);s.height(b.height);h.width(b.width);h.height(b.height);g.css("margin-top",parseInt((b.height-u.height())/2,10)+"px");var m=a.find("ul:first").children(),z,F=0,q,B=0,I=0,o;m.each(function(){d.currentImg=c(this);if(!d.currentImg.is("li"))d.currentImg= d.currentImg.find("li:first");if(d.currentImg.is("li")){n++;z=c('<div class="contentHolderUnit" rel="'+(n-1)+'" id="contentHolderUnit_'+(n-1)+'">'+d.currentImg.html()+"</div>");z.width(b.width);z.height(b.height);h.append(z);F=F+b.width;o=c("#contentHolderUnit_"+(n-1),f).find("img:first");if(o.width()!=null){d.origImgsDimensions[n-1]=o.width()+";"+o.height();b.responsive&&b.origWidth!=responsiveWidth&&w(o,n-1,d,b)}else d.origImgsDimensions[n-1]=null;q=c('<div class="bottomNavButtonOFF" rel="'+(n- 1)+'"></div>');l.append(q);B=B+(parseInt(q.css("padding-left").substring(0,q.css("padding-left").length-2),10)+q.width());I=parseInt((l.height()-parseInt(q.css("height").substring(0,q.css("height").length-2)))/2,10);q.css("margin-top",I+"px");h.append(c(d.currentImg.attr("data-text-id")));c(d.currentImg.attr("data-text-id")).css({width:a.width()+"px",left:parseInt((n-1)*b.width,10),top:g.css("top")});var D=-1;c(d.currentImg.attr("data-text-id")).children().each(function(){D++;o=c(this).find("img:first"); if(o.width()!=null){d.origImgsDimensions[d.currentImg.attr("data-text-id")+"-"+D]=o.width()+";"+o.height();b.responsive&&b.origWidth!=responsiveWidth&&w(o,d.currentImg.attr("data-text-id")+"-"+D,d,b)}else d.origImgsDimensions[d.currentImg.attr("data-text-id")+"-"+D]=null})}});h.width(F);l.width(B);b.showOnInitBottomNav&&(l.css("left",parseInt((f.width()-B)/2,10)+"px"),r.css("left",parseInt(l.css("left").substring(0,l.css("left").length-2),10)-r.width()+"px"),x.css("left",parseInt(l.css("left").substring(0, l.css("left").length-2),10)+l.width()+parseInt(q.css("padding-left").substring(0,q.css("padding-left").length-2),10)+"px"));c("iframe").each(function(){var b=c(this).attr("src");c(this).attr("src",b+"?wmode=transparent")});d.current_img_no=0;d.currentImg=c(m[0]);H(d,b,a,g);f.mouseenter(function(){d.mouseOverBanner=true;clearTimeout(d.timeoutID);nowx=(new Date).getTime();d.timeElapsed=d.timeElapsed+(nowx-d.arcInitialTime);if(b.autoHideNavArrows&&b.showNavArrows){u.css("display","block");t.css("display", "block")}if(b.autoHideBottomNav&&b.showBottomNav){l.css({display:"block",left:parseInt((f.width()-B)/2,10)+"px"});r.css({display:"block",left:parseInt(l.css("left").substring(0,l.css("left").length-2),10)-r.width()+"px"});x.css({display:"block",left:parseInt(l.css("left").substring(0,l.css("left").length-2),10)+l.width()+parseInt(q.css("padding-left").substring(0,q.css("padding-left").length-2),10)+"px"})}});f.mouseleave(function(){d.mouseOverBanner=false;nowx=(new Date).getTime();if(b.autoHideNavArrows&& b.showNavArrows){u.css("display","none");t.css("display","none")}if(b.autoHideBottomNav&&b.showBottomNav){l.css("display","none");r.css("display","none");x.css("display","none")}if(b.autoPlay>0&&n>1&&!d.isVideoPlaying){clearTimeout(d.timeoutID);d.arcInitialTime=(new Date).getTime();var c=parseInt(b.autoPlay*1E3-(d.timeElapsed+nowx-d.arcInitialTime),10);d.timeoutID=setTimeout(function(){y(1,d,b,n,v,m,a,g,h,f,p)},c)}});z=c(".contentHolderUnit",h);z.click(function(){var a=c(this).attr("rel");if(c(m[d.current_img_no]).attr("data-video")== "true")if(a!=d.current_img_no)d.isVideoPlaying=false;else{clearTimeout(d.timeoutID);o=c(this).find("img:first");o.css("display","none");p.css("display","none");d.isVideoPlaying=true}if(c(m[d.current_img_no]).attr("data-link")!=void 0&&a==d.current_img_no&&c(m[d.current_img_no]).attr("data-link")!=""){a=b.target;c(m[d.current_img_no]).attr("data-target")!=void 0&&c(m[d.current_img_no]).attr("data-target")!=""&&(a=c(m[d.current_img_no]).attr("data-target"));a=="_blank"?window.open(c(m[d.current_img_no]).attr("data-link")): window.location=c(m[d.current_img_no]).attr("data-link")}});p.click(function(){p.css("display","none");clearTimeout(d.timeoutID);o=c("#contentHolderUnit_"+d.current_img_no,f).find("img:first");o.css("display","none");d.isVideoPlaying=true});u.click(function(){if(!d.slideIsRunning){d.isVideoPlaying=false;clearTimeout(d.timeoutID);y(-1,d,b,n,v,m,a,g,h,f,p)}});t.click(function(){if(!d.slideIsRunning){d.isVideoPlaying=false;clearTimeout(d.timeoutID);y(1,d,b,n,v,m,a,g,h,f,p)}});var G=!1;c(window).resize(function(){doResizeNow= true;if(navigator.userAgent.indexOf("Android")!=-1){if(b.windowOrientationScreenSize0==0&&window.orientation==0)b.windowOrientationScreenSize0=c(window).width();if(b.windowOrientationScreenSize90==0&&window.orientation==90)b.windowOrientationScreenSize90=c(window).height();if(b.windowOrientationScreenSize_90==0&&window.orientation==-90)b.windowOrientationScreenSize_90=c(window).height();b.windowOrientationScreenSize0&&(window.orientation==0&&c(window).width()>b.windowOrientationScreenSize0)&&(doResizeNow= false);b.windowOrientationScreenSize90&&(window.orientation==90&&c(window).height()>b.windowOrientationScreenSize90)&&(doResizeNow=false);b.windowOrientationScreenSize_90&&(window.orientation==-90&&c(window).height()>b.windowOrientationScreenSize_90)&&(doResizeNow=false);if(d.windowWidth==0){doResizeNow=false;d.windowWidth=c(window).width()}}c.browser.msie&&(parseInt(c.browser.version,10)==9&&d.windowWidth==0)&&(doResizeNow=false);if(d.windowWidth==c(window).width()){doResizeNow=false;if(b.windowCurOrientation!= window.orientation&&navigator.userAgent.indexOf("Android")!=-1){b.windowCurOrientation=window.orientation;doResizeNow=true}}else d.windowWidth=c(window).width();if(b.responsive&&doResizeNow){G!==false&&clearTimeout(G);G=setTimeout(function(){var e=d,j=b,o=n,q=m,t=g,r=p,w=v,x=c("body").css("overflow");c("body").css("overflow","hidden");responsiveWidth=a.parent().parent().width();responsiveHeight=a.parent().parent().height();if(j.responsiveRelativeToBrowser){responsiveWidth=c(window).width();responsiveHeight= c(window).height()}if(j.width100Proc)j.width=responsiveWidth;if(j.height100Proc)j.height=responsiveHeight;if(j.origWidth!=responsiveWidth||j.width100Proc){if(j.origWidth>responsiveWidth||j.width100Proc)j.width=responsiveWidth;else if(!j.width100Proc)j.width=j.origWidth;if(!j.height100Proc)j.height=j.width/e.bannerRatio;f.width(j.width);f.height(j.height);s.width(j.width);s.height(j.height);h.width(j.width);h.height(j.height);t.css("margin-top",parseInt((j.height-u.height())/2,10)+"px");contentHolderUnit= c(".contentHolderUnit",f);contentHolderUnit.width(j.width);contentHolderUnit.height(j.height);holderWidth=j.width*o;for(i=0;i<o;i++)E(i,e,j,q,f,a,t);h.width(holderWidth);l.css({left:parseInt((f.width()-l.width())/2,10)+"px"});r.css({left:parseInt((j.width-r.width())/2,10)+"px",top:parseInt((j.height-r.height())/2,10)+"px"});clearTimeout(e.timeoutID);y(1,e,j,o,w,q,a,t,h,f,r)}c("body").css("overflow",x)},300)}});var v=c(".bottomNavButtonOFF",f);v.click(function(){if(!d.slideIsRunning){d.isVideoPlaying= false;var e=c(this).attr("rel");c(v[d.current_img_no]).removeClass("bottomNavButtonON");d.previous_current_img_no=d.current_img_no;c("#contentHolderUnit_"+d.previous_current_img_no,f).html(c(m[d.previous_current_img_no]).html());E(d.previous_current_img_no,d,b,m,f,a,g);d.current_img_no=e-1;y(1,d,b,n,v,m,a,g,h,f,p)}});v.mouseenter(function(){var a=c(this),d=a.attr("rel");if(b.showPreviewThumbs){C=c('<div class="bottomOverThumb"></div>');a.append(C);d=c(m[d]).attr("data-bottom-thumb");C.html('<img src="'+ d+'">')}a.addClass("bottomNavButtonON")});v.mouseleave(function(){var a=c(this),e=a.attr("rel");b.showPreviewThumbs&&C.remove();d.current_img_no!=e&&a.removeClass("bottomNavButtonON")});c(v[d.current_img_no]).addClass("bottomNavButtonON");0<b.autoPlay&&1<n&&(b.showCircleTimer&&(d.intervalID=setInterval(function(){var a=d,c=b;nowx=(new Date).getTime();if(!a.mouseOverBanner&&!a.effectIsRunning&&c.showCircleTimer){a.ctx.clearRect(0,0,a.canvas.width,a.canvas.height);a.ctx.beginPath();a.ctx.globalAlpha= c.behindCircleAlpha/100;a.ctx.arc(c.circleRadius+2*c.circleLineWidth,c.circleRadius+2*c.circleLineWidth,c.circleRadius,0,2*Math.PI,false);a.ctx.lineWidth=c.circleLineWidth+2;a.ctx.strokeStyle=c.behindCircleColor;a.ctx.stroke();a.ctx.beginPath();a.ctx.globalAlpha=c.circleAlpha/100;a.ctx.arc(c.circleRadius+2*c.circleLineWidth,c.circleRadius+2*c.circleLineWidth,c.circleRadius,0,(a.timeElapsed+nowx-a.arcInitialTime)/1E3*2/c.autoPlay*Math.PI,false);a.ctx.lineWidth=c.circleLineWidth;a.ctx.strokeStyle=c.circleColor; a.ctx.stroke()}},125)),d.timeoutID=setTimeout(function(){y(1,d,b,n,v,m,a,g,h,f,p)},1E3*b.autoPlay));"true"==c(m[d.current_img_no]).attr("data-video")&&p.css("display","block")})};c.fn.allinone_contentSlider.defaults={skin:"imposing",width:918,height:382,width100Proc:!1,height100Proc:!1,autoPlay:7,loop:!0,target:"_blank",absUrl:"",showAllControllers:!0,showNavArrows:!0,showOnInitNavArrows:!0,autoHideNavArrows:!0,showBottomNav:!0,showOnInitBottomNav:!0,autoHideBottomNav:!0,showPreviewThumbs:!0,enableTouchScreen:!0, showCircleTimer:!0,showCircleTimerIE8IE7:!1,circleRadius:10,circleLineWidth:4,circleColor:"#FF0000",circleAlpha:100,behindCircleColor:"#000000",behindCircleAlpha:50,responsive:!1,responsiveRelativeToBrowser:!0,thumbsWrapperMarginBottom:-35,origWidth:0,origHeight:0,origThumbW:0,origThumbH:0,windowOrientationScreenSize0:0,windowOrientationScreenSize90:0,windowOrientationScreenSize_90:0,windowCurOrientation:0}})(jQuery);
$(function(){
		/***     bounce     ***/
		var boun = $('#boun');// Tip: avoid this ton of code using AniJS ;)

		
		boun.mouseover(function(){// when mouseover execute the animation

  			// the animation starts
  			boun.toggleClass('bounce animated');

  			// do something when animation ends
  			boun.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){

   				// trick to execute the animation again
   				$(e.target).removeClass('bounce animated');

   			});

  		});

		/***     flash     ***/
		var element = $('#square');// Tip: avoid this ton of code using AniJS ;)

		
		element.mouseover(function(){// when mouseover execute the animation

  			// the animation starts
  			element.toggleClass('flash animated');

  			// do something when animation ends
  			element.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){

   				// trick to execute the animation again
   				$(e.target).removeClass('flash animated');

   			});

  		});

		/***     pulse     ***/
		var pul = $('#pul');// Tip: avoid this ton of code using AniJS ;)

		
		pul.mouseover(function(){// when mouseover execute the animation

  			// the animation starts
  			pul.toggleClass('pulse animated');

  			// do something when animation ends
  			pul.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){

   				// trick to execute the animation again
   				$(e.target).removeClass('pulse animated');

   			});

  		});

		/***     rubberBand     ***/
		var rubber = $('#rubber');// Tip: avoid this ton of code using AniJS ;)

		
		rubber.mouseover(function(){// when mouseover execute the animation

  			// the animation starts
  			rubber.toggleClass('rubberBand animated');

  			// do something when animation ends
  			rubber.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){

   				// trick to execute the animation again
   				$(e.target).removeClass('rubberBand animated');

   			});

  		});

		/***     shake     ***/
		var shak = $('#shak');// Tip: avoid this ton of code using AniJS ;)

		
		shak.mouseover(function(){// when mouseover execute the animation

  			// the animation starts
  			shak.toggleClass('shake animated');

  			// do something when animation ends
  			shak.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){

   				// trick to execute the animation again
   				$(e.target).removeClass('shake animated');

   			});

  		});

		/***     swing     ***/
		var swi = $('#swi');// Tip: avoid this ton of code using AniJS ;)

		
		swi.mouseover(function(){// when mouseover execute the animation

  			// the animation starts
  			swi.toggleClass('swing animated');

  			// do something when animation ends
  			swi.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){

   				// trick to execute the animation again
   				$(e.target).removeClass('swing animated');

   			});

  		});

		/***     tada     ***/
		var tad = $('#tad');// Tip: avoid this ton of code using AniJS ;)

		
		tad.mouseover(function(){// when mouseover execute the animation

  			// the animation starts
  			tad.toggleClass('tada animated');

  			// do something when animation ends
  			tad.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){

   				// trick to execute the animation again
   				$(e.target).removeClass('tada animated');

   			});

  		});

		/***     wobble     ***/
		var wob = $('#wob');// Tip: avoid this ton of code using AniJS ;)

		
		wob.mouseover(function(){// when mouseover execute the animation

  			// the animation starts
  			wob.toggleClass('wobble animated');

  			// do something when animation ends
  			wob.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){

   				// trick to execute the animation again
   				$(e.target).removeClass('wobble animated');

   			});

  		});

		/***     bounceIn     ***/
		var bIn = $('#bIn');// Tip: avoid this ton of code using AniJS ;)

		
		bIn.mouseover(function(){// when mouseover execute the animation

  			// the animation starts
  			bIn.toggleClass('bounceIn animated');

  			// do something when animation ends
  			bIn.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){

   				// trick to execute the animation again
   				$(e.target).removeClass('bounceIn animated');

   			});

  		});

		
		/***     bounceInDown     ***/
		var bdn = $('#bdn');// Tip: avoid this ton of code using AniJS ;)

		
		bdn.mouseover(function(){// when mouseover execute the animation

  			// the animation starts
  			bdn.toggleClass('bounceInDown animated');

  			// do something when animation ends
  			bdn.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){

   				// trick to execute the animation again
   				$(e.target).removeClass('bounceInDown animated');

   			});

  		});

    /***     bounceInLeft     ***/
    var bft = $('#bft');// Tip: avoid this ton of code using AniJS ;)

    
    bft.mouseover(function(){// when mouseover execute the animation

        // the animation starts
        bft.toggleClass('bounceInLeft animated');

        // do something when animation ends
        bft.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){

          // trick to execute the animation again
          $(e.target).removeClass('bounceInLeft animated');

        });

      });

    /***     bounceInRight     ***/
    var brt = $('#brt');// Tip: avoid this ton of code using AniJS ;)

    
    brt.mouseover(function(){// when mouseover execute the animation

        // the animation starts
        brt.toggleClass('bounceInRight animated');

        // do something when animation ends
        brt.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){

          // trick to execute the animation again
          $(e.target).removeClass('bounceInRight animated');

        });

      });

     /***     bounceInUp     ***/
    var bup = $('#bup');// Tip: avoid this ton of code using AniJS ;)

    
    bup.mouseover(function(){// when mouseover execute the animation

        // the animation starts
        bup.toggleClass('bounceInUp animated');

        // do something when animation ends
        bup.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){

          // trick to execute the animation again
          $(e.target).removeClass('bounceInUp animated');

        });

      });

    /***     bounceOut     ***/
    var bot = $('#bot');// Tip: avoid this ton of code using AniJS ;)

    
    bot.mouseover(function(){// when mouseover execute the animation

        // the animation starts
        bot.toggleClass('bounceOut animated');

        // do something when animation ends
        bot.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){

          // trick to execute the animation again
          $(e.target).removeClass('bounceOut animated');

        });

      });

    /***     bounceOutDown     ***/
    var bon = $('#bon');// Tip: avoid this ton of code using AniJS ;)

    
    bon.mouseover(function(){// when mouseover execute the animation

        // the animation starts
        bon.toggleClass('bounceOutDown animated');

        // do something when animation ends
        bon.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){

          // trick to execute the animation again
          $(e.target).removeClass('bounceOutDown animated');

        });

      });

    /***     bounceOutLeft     ***/
    var bol = $('#bol');// Tip: avoid this ton of code using AniJS ;)

    
    bol.mouseover(function(){// when mouseover execute the animation

        // the animation starts
        bol.toggleClass('bounceOutLeft animated');

        // do something when animation ends
        bol.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){

          // trick to execute the animation again
          $(e.target).removeClass('bounceOutLeft animated');

        });

      });

    /***     bounceOutRight     ***/
    var bor = $('#bor');// Tip: avoid this ton of code using AniJS ;)

    
    bor.mouseover(function(){// when mouseover execute the animation

        // the animation starts
        bor.toggleClass('bounceOutRight animated');

        // do something when animation ends
        bor.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){

          // trick to execute the animation again
          $(e.target).removeClass('bounceOutRight animated');

        });

      });

    /***     bounceOutUp     ***/
    var bou = $('#bou');// Tip: avoid this ton of code using AniJS ;)

    
    bou.mouseover(function(){// when mouseover execute the animation

        // the animation starts
        bou.toggleClass('bounceOutUp animated');

        // do something when animation ends
        bou.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){

          // trick to execute the animation again
          $(e.target).removeClass('bounceOutUp animated');

        });

      });

     /***     fadeIn     ***/
    var fan = $('#fan');// Tip: avoid this ton of code using AniJS ;)

    
    fan.mouseover(function(){// when mouseover execute the animation

        // the animation starts
        fan.toggleClass('fadeIn animated');

        // do something when animation ends
        fan.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){

          // trick to execute the animation again
          $(e.target).removeClass('fadeIn animated');

        });

      });

     /***     fadeInDown     ***/
    var fid = $('#fid');// Tip: avoid this ton of code using AniJS ;)

    
    fid.mouseover(function(){// when mouseover execute the animation

        // the animation starts
        fid.toggleClass('fadeInDown animated');

        // do something when animation ends
        fid.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){

          // trick to execute the animation again
          $(e.target).removeClass('fadeInDown animated');

        });

      });

     /***     fadeInDownBig     ***/
    var fidb = $('#fidb');// Tip: avoid this ton of code using AniJS ;)

    
    fidb.mouseover(function(){// when mouseover execute the animation

        // the animation starts
        fidb.toggleClass('fadeInDownBig animated');

        // do something when animation ends
        fidb.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){

          // trick to execute the animation again
          $(e.target).removeClass('fadeInDownBig animated');

        });

      });

     /***     fadeInLeft     ***/
    var fil = $('#fil');// Tip: avoid this ton of code using AniJS ;)

    
    fil.mouseover(function(){// when mouseover execute the animation

        // the animation starts
        fil.toggleClass('fadeInLeft animated');

        // do something when animation ends
        fil.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){

          // trick to execute the animation again
          $(e.target).removeClass('fadeInLeft animated');

        });

      });

     /***     fadeInLeftBig     ***/
    var filb = $('#filb');// Tip: avoid this ton of code using AniJS ;)

    
    filb.mouseover(function(){// when mouseover execute the animation

        // the animation starts
        filb.toggleClass('fadeInLeftBig animated');

        // do something when animation ends
        filb.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){

          // trick to execute the animation again
          $(e.target).removeClass('fadeInLeftBig animated');

        });

      });

     /***     fadeInRight     ***/
    var fir = $('#fir');// Tip: avoid this ton of code using AniJS ;)

    
    fir.mouseover(function(){// when mouseover execute the animation

        // the animation starts
        fir.toggleClass('fadeInRight animated');

        // do something when animation ends
        fir.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){

          // trick to execute the animation again
          $(e.target).removeClass('fadeInRight animated');

        });

      });


     /***     fadeInRightBig     ***/
    var firb = $('#firb');// Tip: avoid this ton of code using AniJS ;)

    
    firb.mouseover(function(){// when mouseover execute the animation

        // the animation starts
        firb.toggleClass('fadeInRightBig animated');

        // do something when animation ends
        firb.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){

          // trick to execute the animation again
          $(e.target).removeClass('fadeInRightBig animated');

        });

      });


     /***     fadeInUp     ***/
    var fiu = $('#fiu');// Tip: avoid this ton of code using AniJS ;)

    
    fiu.mouseover(function(){// when mouseover execute the animation

        // the animation starts
        fiu.toggleClass('fadeInUp animated');

        // do something when animation ends
        fiu.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){

          // trick to execute the animation again
          $(e.target).removeClass('fadeInUp animated');

        });

      });


     /***     fadeInUpBig     ***/
    var fiub = $('#fiub');// Tip: avoid this ton of code using AniJS ;)

    
    fiub.mouseover(function(){// when mouseover execute the animation

        // the animation starts
        fiub.toggleClass('fadeInUpBig animated');

        // do something when animation ends
        fiub.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){

          // trick to execute the animation again
          $(e.target).removeClass('fadeInUpBig animated');

        });

      });


     /***     fadeOut     ***/
    var fot = $('#fot');// Tip: avoid this ton of code using AniJS ;)

    
    fot.mouseover(function(){// when mouseover execute the animation

        // the animation starts
        fot.toggleClass('fadeOut animated');

        // do something when animation ends
        fot.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){

          // trick to execute the animation again
          $(e.target).removeClass('fadeOut animated');

        });

      });


     /***     fadeOutDown     ***/
    var fod = $('#fod');// Tip: avoid this ton of code using AniJS ;)

    
    fod.mouseover(function(){// when mouseover execute the animation

        // the animation starts
        fod.toggleClass('fadeOutDown animated');

        // do something when animation ends
        fod.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){

          // trick to execute the animation again
          $(e.target).removeClass('fadeOutDown animated');

        });

      });


     /***     fadeOutDownBig     ***/
    var fodb = $('#fodb');// Tip: avoid this ton of code using AniJS ;)

    
    fodb.mouseover(function(){// when mouseover execute the animation

        // the animation starts
        fodb.toggleClass('fadeOutDownBig animated');

        // do something when animation ends
        fodb.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){

          // trick to execute the animation again
          $(e.target).removeClass('fadeOutDownBig animated');

        });

      });


     /***     fadeOutLeft     ***/
    var fol = $('#fol');// Tip: avoid this ton of code using AniJS ;)

    
    fol.mouseover(function(){// when mouseover execute the animation

        // the animation starts
        fol.toggleClass('fadeOutLeft animated');

        // do something when animation ends
        fol.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){

          // trick to execute the animation again
          $(e.target).removeClass('fadeOutLeft animated');

        });

      });


     /***     fadeOutLeftBig     ***/
    var folb = $('#folb');// Tip: avoid this ton of code using AniJS ;)

    
    folb.mouseover(function(){// when mouseover execute the animation

        // the animation starts
        folb.toggleClass('fadeOutLeftBig animated');

        // do something when animation ends
        folb.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){

          // trick to execute the animation again
          $(e.target).removeClass('fadeOutLeftBig animated');

        });

      });


     /***     fadeOutRight     ***/
    var fort = $('#fort');// Tip: avoid this ton of code using AniJS ;)

    
    fort.mouseover(function(){// when mouseover execute the animation

        // the animation starts
        fort.toggleClass('fadeOutRight animated');

        // do something when animation ends
        fort.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){

          // trick to execute the animation again
          $(e.target).removeClass('fadeOutRight animated');

        });

      });


     /***     fadeOutRightBig     ***/
    var forb = $('#forb');// Tip: avoid this ton of code using AniJS ;)

    
    forb.mouseover(function(){// when mouseover execute the animation

        // the animation starts
        forb.toggleClass('fadeOutRightBig animated');

        // do something when animation ends
        forb.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){

          // trick to execute the animation again
          $(e.target).removeClass('fadeOutRightBig animated');

        });

      });


     /***     fadeOutUp     ***/
    var fou = $('#fou');// Tip: avoid this ton of code using AniJS ;)

    
    fou.mouseover(function(){// when mouseover execute the animation

        // the animation starts
        fou.toggleClass('fadeOutUp animated');

        // do something when animation ends
        fou.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){

          // trick to execute the animation again
          $(e.target).removeClass('fadeOutUp animated');

        });

      });


     /***     fadeOutUpBig     ***/
    var foub = $('#foub');// Tip: avoid this ton of code using AniJS ;)

    
    foub.mouseover(function(){// when mouseover execute the animation

        // the animation starts
        foub.toggleClass('fadeOutUpBig animated');

        // do something when animation ends
        foub.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){

          // trick to execute the animation again
          $(e.target).removeClass('fadeOutUpBig animated');

        });

      });


     /***     flip     ***/
    var flp = $('#flp');// Tip: avoid this ton of code using AniJS ;)

    
    flp.mouseover(function(){// when mouseover execute the animation

        // the animation starts
        flp.toggleClass('flip animated');

        // do something when animation ends
        flp.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){

          // trick to execute the animation again
          $(e.target).removeClass('flip animated');

        });

      });


     /***     flipInX     ***/
    var fix = $('#fix');// Tip: avoid this ton of code using AniJS ;)

    
    fix.mouseover(function(){// when mouseover execute the animation

        // the animation starts
        fix.toggleClass('flipInX animated');

        // do something when animation ends
        fix.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){

          // trick to execute the animation again
          $(e.target).removeClass('flipInX animated');

        });

      });


     /***     flipInY     ***/
    var fiy = $('#fiy');// Tip: avoid this ton of code using AniJS ;)

    
    fiy.mouseover(function(){// when mouseover execute the animation

        // the animation starts
        fiy.toggleClass('flipInY animated');

        // do something when animation ends
        fiy.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){

          // trick to execute the animation again
          $(e.target).removeClass('flipInY animated');

        });

      });


     /***     flipOutX     ***/
    var fox = $('#fox');// Tip: avoid this ton of code using AniJS ;)

    
    fox.mouseover(function(){// when mouseover execute the animation

        // the animation starts
        fox.toggleClass('flipOutX animated');

        // do something when animation ends
        fox.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){

          // trick to execute the animation again
          $(e.target).removeClass('flipOutX animated');

        });

      });


     /***     flipOutY     ***/
    var foy = $('#foy');// Tip: avoid this ton of code using AniJS ;)

    
    foy.mouseover(function(){// when mouseover execute the animation

        // the animation starts
        foy.toggleClass('flipOutY animated');

        // do something when animation ends
        foy.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){

          // trick to execute the animation again
          $(e.target).removeClass('flipOutY animated');

        });

      });


     /***     lightSpeedIn     ***/
    var lsi = $('#lsi');// Tip: avoid this ton of code using AniJS ;)

    
    lsi.mouseover(function(){// when mouseover execute the animation

        // the animation starts
        lsi.toggleClass('lightSpeedIn animated');

        // do something when animation ends
        lsi.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){

          // trick to execute the animation again
          $(e.target).removeClass('lightSpeedIn animated');

        });

      });


     /***     lightSpeedOut     ***/
    var lso = $('#lso');// Tip: avoid this ton of code using AniJS ;)

    
    lso.mouseover(function(){// when mouseover execute the animation

        // the animation starts
        lso.toggleClass('lightSpeedOut animated');

        // do something when animation ends
        lso.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){

          // trick to execute the animation again
          $(e.target).removeClass('lightSpeedOut animated');

        });

      });


     /***     rotate     ***/
    var roe = $('#roe');// Tip: avoid this ton of code using AniJS ;)

    
    roe.mouseover(function(){// when mouseover execute the animation

        // the animation starts
        roe.toggleClass('rotate animated');

        // do something when animation ends
        roe.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){

          // trick to execute the animation again
          $(e.target).removeClass('rotate animated');

        });

      });


     /***     rotateDownLeft     ***/
    var rdt = $('#rdt');// Tip: avoid this ton of code using AniJS ;)

    
    rdt.mouseover(function(){// when mouseover execute the animation

        // the animation starts
        rdt.toggleClass('rotateDownLeft animated');

        // do something when animation ends
        rdt.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){

          // trick to execute the animation again
          $(e.target).removeClass('rotateDownLeft animated');

        });

      });


     /***     rotateDownRight     ***/
    var rdr = $('#rdr');// Tip: avoid this ton of code using AniJS ;)

    
    rdr.mouseover(function(){// when mouseover execute the animation

        // the animation starts
        rdr.toggleClass('rotateDownRight animated');

        // do something when animation ends
        rdr.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){

          // trick to execute the animation again
          $(e.target).removeClass('rotateDownRight animated');

        });

      });

     /***     rotateUpRight     ***/
    var rur = $('#rur');// Tip: avoid this ton of code using AniJS ;)

    
    rur.mouseover(function(){// when mouseover execute the animation

        // the animation starts
        rur.toggleClass('rotateUpRight animated');

        // do something when animation ends
        rur.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){

          // trick to execute the animation again
          $(e.target).removeClass('rotateUpRight animated');

        });

      });


     /***     rotateIn     ***/
    var rin = $('#rin');// Tip: avoid this ton of code using AniJS ;)

    
    rin.mouseover(function(){// when mouseover execute the animation

        // the animation starts
        rin.toggleClass('rotateIn animated');

        // do something when animation ends
        rin.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){

          // trick to execute the animation again
          $(e.target).removeClass('rotateIn animated');

        });

      });


     /***     rotateInDownLeft     ***/
    var ridl = $('#ridl');// Tip: avoid this ton of code using AniJS ;)

    
    ridl.mouseover(function(){// when mouseover execute the animation

        // the animation starts
        ridl.toggleClass('rotateInDownLeft animated');

        // do something when animation ends
        ridl.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){

          // trick to execute the animation again
          $(e.target).removeClass('rotateInDownLeft animated');

        });

      });


     /***     rotateInDownRight     ***/
    var ridr = $('#ridr');// Tip: avoid this ton of code using AniJS ;)

    
    ridr.mouseover(function(){// when mouseover execute the animation

        // the animation starts
        ridr.toggleClass('rotateInDownRight animated');

        // do something when animation ends
        ridr.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){

          // trick to execute the animation again
          $(e.target).removeClass('rotateInDownRight animated');

        });

      });


     /***     rotateInUpLeft     ***/
    var riul = $('#riul');// Tip: avoid this ton of code using AniJS ;)

    
    riul.mouseover(function(){// when mouseover execute the animation

        // the animation starts
        riul.toggleClass('rotateInUpLeft animated');

        // do something when animation ends
        riul.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){

          // trick to execute the animation again
          $(e.target).removeClass('rotateInUpLeft animated');

        });

      });


     /***     rotateInUpRight     ***/
    var riur = $('#riur');// Tip: avoid this ton of code using AniJS ;)

    
    riur.mouseover(function(){// when mouseover execute the animation

        // the animation starts
        riur.toggleClass('rotateInUpRight animated');

        // do something when animation ends
        riur.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){

          // trick to execute the animation again
          $(e.target).removeClass('rotateInUpRight animated');

        });

      });


     /***     rotateUpLeft     ***/
    var rut = $('#rut');// Tip: avoid this ton of code using AniJS ;)

    
    rut.mouseover(function(){// when mouseover execute the animation

        // the animation starts
        rut.toggleClass('rotateUpLeft animated');

        // do something when animation ends
        rut.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){

          // trick to execute the animation again
          $(e.target).removeClass('rotateUpLeft animated');

        });

      });


     /***     rotataDownLeft     ***/
    var rodl = $('#rodl');// Tip: avoid this ton of code using AniJS ;)

    
    rodl.mouseover(function(){// when mouseover execute the animation

        // the animation starts
        rodl.toggleClass('rotateOutDownLeft animated');

        // do something when animation ends
        rodl.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){

          // trick to execute the animation again
          $(e.target).removeClass('rotateOutDownLeft animated');

        });

      });


     /***     rotateOutDownRight     ***/
    var rodr = $('#rodr');// Tip: avoid this ton of code using AniJS ;)

    
    rodr.mouseover(function(){// when mouseover execute the animation

        // the animation starts
        rodr.toggleClass('rotateOutDownRight animated');

        // do something when animation ends
        rodr.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){

          // trick to execute the animation again
          $(e.target).removeClass('rotateOutDownRight animated');

        });

      });


     /***     rotateOutUpLeft     ***/
    var roul = $('#roul');// Tip: avoid this ton of code using AniJS ;)

    
    roul.mouseover(function(){// when mouseover execute the animation

        // the animation starts
        roul.toggleClass('rotateOutUpLeft animated');

        // do something when animation ends
        roul.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){

          // trick to execute the animation again
          $(e.target).removeClass('rotateOutUpLeft animated');

        });

      });


     /***     rotateOut     ***/
    var rout = $('#rout');// Tip: avoid this ton of code using AniJS ;)

    
    rout.mouseover(function(){// when mouseover execute the animation

        // the animation starts
        rout.toggleClass('rotateOut animated');

        // do something when animation ends
        rout.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){

          // trick to execute the animation again
          $(e.target).removeClass('rotateOut animated');

        });

      });

     /***     rotateOutUpRight     ***/
    var rour = $('#rour');// Tip: avoid this ton of code using AniJS ;)

    
    rour.mouseover(function(){// when mouseover execute the animation

        // the animation starts
        rour.toggleClass('rotateOutUpRight animated');

        // do something when animation ends
        rour.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){

          // trick to execute the animation again
          $(e.target).removeClass('rotateOutUpRight animated');

        });

      });


     /***     hinge     ***/
    var hge = $('#hge');// Tip: avoid this ton of code using AniJS ;)

    
    hge.mouseover(function(){// when mouseover execute the animation

        // the animation starts
        hge.toggleClass('hinge animated');

        // do something when animation ends
        hge.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){

          // trick to execute the animation again
          $(e.target).removeClass('hinge animated');

        });

      });


     /***     rollIn     ***/
    var rln = $('#rln');// Tip: avoid this ton of code using AniJS ;)

    
    rln.mouseover(function(){// when mouseover execute the animation

        // the animation starts
        rln.toggleClass('rollIn animated');

        // do something when animation ends
        rln.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){

          // trick to execute the animation again
          $(e.target).removeClass('rollIn animated');

        });

      });


     /***     rollOut     ***/
    var rot = $('#rot');// Tip: avoid this ton of code using AniJS ;)

    
    rot.mouseover(function(){// when mouseover execute the animation

        // the animation starts
        rot.toggleClass('rollOut animated');

        // do something when animation ends
        rot.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){

          // trick to execute the animation again
          $(e.target).removeClass('rollOut animated');

        });

      });


     /***     zoomIn     ***/
    var zin = $('#zin');// Tip: avoid this ton of code using AniJS ;)

    
    zin.mouseover(function(){// when mouseover execute the animation

        // the animation starts
        zin.toggleClass('zoomIn animated');

        // do something when animation ends
        zin.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){

          // trick to execute the animation again
          $(e.target).removeClass('zoomIn animated');

        });

      });


     /***     zoomInDown     ***/
    var zid = $('#zid');// Tip: avoid this ton of code using AniJS ;)

    
    zid.mouseover(function(){// when mouseover execute the animation

        // the animation starts
        zid.toggleClass('zoomInDown animated');

        // do something when animation ends
        zid.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){

          // trick to execute the animation again
          $(e.target).removeClass('zoomInDown animated');

        });

      });


     /***     zoomInLeft     ***/
    var zil = $('#zil');// Tip: avoid this ton of code using AniJS ;)

    
    zil.mouseover(function(){// when mouseover execute the animation

        // the animation starts
        zil.toggleClass('zoomInLeft animated');

        // do something when animation ends
        zil.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){

          // trick to execute the animation again
          $(e.target).removeClass('zoomInLeft animated');

        });

      });


     /***     zoomInRight     ***/
    var zir = $('#zir');// Tip: avoid this ton of code using AniJS ;)

    
    zir.mouseover(function(){// when mouseover execute the animation

        // the animation starts
        zir.toggleClass('zoomInRight animated');

        // do something when animation ends
        zir.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){

          // trick to execute the animation again
          $(e.target).removeClass('zoomInRight animated');

        });

      });


     /***     zoomInUp     ***/
    var ziu = $('#ziu');// Tip: avoid this ton of code using AniJS ;)

    
    ziu.mouseover(function(){// when mouseover execute the animation

        // the animation starts
        ziu.toggleClass('zoomInUp animated');

        // do something when animation ends
        ziu.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){

          // trick to execute the animation again
          $(e.target).removeClass('zoomInUp animated');

        });

      });


     /***     zoomOut     ***/
    var zot = $('#zot');// Tip: avoid this ton of code using AniJS ;)

    
    zot.mouseover(function(){// when mouseover execute the animation

        // the animation starts
        zot.toggleClass('zoomOut animated');

        // do something when animation ends
        zot.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){

          // trick to execute the animation again
          $(e.target).removeClass('zoomOut animated');

        });

      });


     /***     zoomOutDown     ***/
    var zod = $('#zod');// Tip: avoid this ton of code using AniJS ;)

    
    zod.mouseover(function(){// when mouseover execute the animation

        // the animation starts
        zod.toggleClass('zoomOutDown animated');

        // do something when animation ends
        zod.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){

          // trick to execute the animation again
          $(e.target).removeClass('zoomOutDown animated');

        });

      });


     /***     zoomOutLeft     ***/
    var zol = $('#zol');// Tip: avoid this ton of code using AniJS ;)

    
    zol.mouseover(function(){// when mouseover execute the animation

        // the animation starts
        zol.toggleClass('zoomOutLeft animated');

        // do something when animation ends
        zol.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){

          // trick to execute the animation again
          $(e.target).removeClass('zoomOutLeft animated');

        });

      });


     /***     zoomOutRight     ***/
    var zor = $('#zor');// Tip: avoid this ton of code using AniJS ;)

    
    zor.mouseover(function(){// when mouseover execute the animation

        // the animation starts
        zor.toggleClass('zoomOutRight animated');

        // do something when animation ends
        zor.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){

          // trick to execute the animation again
          $(e.target).removeClass('zoomOutRight animated');

        });

      });


     /***     zoomOutUp     ***/
    var zou = $('#zou');// Tip: avoid this ton of code using AniJS ;)

    
    zou.mouseover(function(){// when mouseover execute the animation

        // the animation starts
        zou.toggleClass('zoomOutUp animated');

        // do something when animation ends
        zou.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){

          // trick to execute the animation again
          $(e.target).removeClass('zoomOutUp animated');

        });

      });


     /***     slideInDown     ***/
    var sid = $('#sid');// Tip: avoid this ton of code using AniJS ;)

    
    sid.mouseover(function(){// when mouseover execute the animation

        // the animation starts
        sid.toggleClass('slideInDown animated');

        // do something when animation ends
        sid.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){

          // trick to execute the animation again
          $(e.target).removeClass('slideInDown animated');

        });

      });


     /***     slideInLeft     ***/
    var sil = $('#sil');// Tip: avoid this ton of code using AniJS ;)

    
    sil.mouseover(function(){// when mouseover execute the animation

        // the animation starts
        sil.toggleClass('slideInLeft animated');

        // do something when animation ends
        sil.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){

          // trick to execute the animation again
          $(e.target).removeClass('slideInLeft animated');

        });

      });


     /***     slideInRight     ***/
    var sir = $('#sir');// Tip: avoid this ton of code using AniJS ;)

    
    sir.mouseover(function(){// when mouseover execute the animation

        // the animation starts
        sir.toggleClass('slideInRight animated');

        // do something when animation ends
        sir.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){

          // trick to execute the animation again
          $(e.target).removeClass('slideInRight animated');

        });

      });


     /***     slideInUp     ***/
    var siu = $('#siu');// Tip: avoid this ton of code using AniJS ;)

    
    siu.mouseover(function(){// when mouseover execute the animation

        // the animation starts
        siu.toggleClass('slideInUp animated');

        // do something when animation ends
        siu.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){

          // trick to execute the animation again
          $(e.target).removeClass('slideInUp animated');

        });

      });


     /***     slideOutDown     ***/
    var sod = $('#sod');// Tip: avoid this ton of code using AniJS ;)

    
    sod.mouseover(function(){// when mouseover execute the animation

        // the animation starts
        sod.toggleClass('slideOutDown animated');

        // do something when animation ends
        sod.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){

          // trick to execute the animation again
          $(e.target).removeClass('slideOutDown animated');

        });

      });


     /***     slideOutLeft     ***/
    var sol = $('#sol');// Tip: avoid this ton of code using AniJS ;)

    
    sol.mouseover(function(){// when mouseover execute the animation

        // the animation starts
        sol.toggleClass('slideOutLeft animated');

        // do something when animation ends
        sol.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){

          // trick to execute the animation again
          $(e.target).removeClass('slideOutLeft animated');

        });

      });


     /***     slideOutRight     ***/
    var sor = $('#sor');// Tip: avoid this ton of code using AniJS ;)

    
    sor.mouseover(function(){// when mouseover execute the animation

        // the animation starts
        sor.toggleClass('slideOutRight animated');

        // do something when animation ends
        sor.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){

          // trick to execute the animation again
          $(e.target).removeClass('slideOutRight animated');

        });

      });


     /***     slideOutUp     ***/
    var sou = $('#sou');// Tip: avoid this ton of code using AniJS ;)

    
    sou.mouseover(function(){// when mouseover execute the animation

        // the animation starts
        sou.toggleClass('slideOutUp animated');

        // do something when animation ends
        sou.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){

          // trick to execute the animation again
          $(e.target).removeClass('slideOutUp animated');

        });

      });
});
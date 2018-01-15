var firstPar = $('.article--self-page p').eq(0);
    firstPar.wrap('<div class="first-p"></div>'),
    $('.first-p p').before('<div class="first-l">' + firstPar.html()[0] + '</div>');
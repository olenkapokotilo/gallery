$(document).ready(function () {
    var $container = $(".grid");
    var arr = ["img/1.png", "img/2.png", "img/1.png", "img/3.png", "img/4.png", "img/5.png", "img/1.png", "img/2.png", "img/1.png", "img/3.png", "img/4.png", "img/5.png"];
    for (var i = 0; i < arr.length; i++) {
        var imgNew = document.createElement("img");
        imgNew.src = arr[i];

        var grid_itemNew = document.createElement("a");
        grid_itemNew.className = "grid-item";
        grid_itemNew.appendChild(imgNew);
        $container.append(grid_itemNew);
        //$container.isotope().append(grid_itemNew).isotope('appended', grid_itemNew).isotope('layout');

    }

    $container.imagesLoaded(function () {
        $container.isotope({
            layoutMode: 'masonryHorizontal',
            itemSelector: '.grid-item',
            stamp: ".adding",
            stagger: 30,
            //percentPosition: true,
            masonryHorizontal: {
                rowHeight: 100,
                gutter: 10
            },
            resizesContainer: false
        });
    });


    // -----------------------------------------------

    $('.wrapper').niceScroll({ cursorcolor: "#21b8c6", cursoropacitymin: "1", cursorwidth: "10px", background: "#d1dae2", cursorborder: "1px solid #21b8c6" });
    // -----------------------------------------------
   
    $('.grid').on("click", ".grid-item", function (event) {
        $("#popup-img")[0].src = event.target.src; //TODO: first el()
        $(".popup").fadeIn();
    });
   

    $("#close-popup").click(function () {
        $(".popup").fadeOut();
    });
// -----------------------------------------------
    $("#file-input").change(function (evt) {
            var tgt = evt.target || window.event.srcElement,
            files = tgt.files;

            // FileReader support
            if (FileReader && files && files.length) {
                var fr = new FileReader();
                fr.onload = function () {
                    var img = document.createElement("img");
                    img.src = fr.result;
                    //img.style.width = "150px";
                    var grid_item = document.createElement("a");
                    grid_item.className = "grid-item";
                    grid_item.appendChild(img);
                    $container.append(grid_itemNew);
                    $container.isotope().append(grid_item).isotope('appended', grid_item).isotope('layout');
                }
                fr.readAsDataURL(files[0]);
            }
            
        });
    // -----------------------------------------------

        $('.grid').on('mouseenter','.grid-item',function() {
            $(".cover-img").appendTo(this);
            $(this).find(".cover-img").fadeIn();
        
        });
    // -----------------------------------------------
        $('.grid').on('mouseleave','.grid-item',function() {
            $(this).find('.cover-img').fadeOut();
        });
    // -----------------------------------------------
            var canvasDislike = $('#countDislike')[0];
            var contextDislike = canvasDislike.getContext('2d');
            var img = new Image();
            img.src = "img/num-box.png";
            img.onload = function () {
                contextDislike.drawImage(img, 0, 0);
                contextDislike.font = "11px sans-serif";
                contextDislike.fillStyle = "#48949d";
                contextDislike.textAlign = "center";
                contextDislike.textBaseline = 'middle';
                contextDislike.fillText("3", 9, 8);
            };


            var canvasLike = $('#countLike')[0];
            var contextLike = canvasLike.getContext('2d');
            var img = new Image();
            img.src = "img/num-box.png";
            img.onload = function () {
                contextLike.drawImage(img, 0, 0);
                contextLike.font = "11px sans-serif";
                contextLike.fillStyle = "#48949d";
                contextLike.textAlign = "center";
                contextLike.textBaseline = 'middle';
                contextLike.fillText("5", 9, 8);
            };
            //var canvasLike = document.createElement("canvas");
            ////canvasLike.id = "countLike";
            //canvasLike.className = "num-box";
            
            //var contextLike = canvasLike.getContext('2d');
            //var img = new Image();
            //img.src = "img/num-box.png";
            //img.onload = function () {
            //    canvasLike.width = img.width; //TODO: for ather canvas
            //    canvasLike.height = img.height;
            //    contextLike.drawImage(img, 0, 0);
            //    contextLike.font = "10px sans-serif";
            //    contextLike.fillStyle = "#48949d";
            //    contextLike.textAlign = "center";
            //    contextLike.textBaseline = 'middle';
            //    contextLike.fillText("10", 8, 8);
            //    $("#countLike")[0].appendChild(canvasLike);
            //};

            var canvasComment = $('#countComment')[0];
            var contextComment = canvasComment.getContext('2d');
            var img = new Image();
            img.src = "img/num-box.png";
            img.onload = function () {
                contextComment.drawImage(img, 0, 0);
                contextComment.font = "10px sans-serif";
                contextComment.fillStyle = "#48949d";
                contextComment.textAlign = "center";
                contextComment.textBaseline = 'middle';
                contextComment.fillText("10", 8, 8);
            };

           // $("#popup-comment-title").append("3");

           // $("#popup-img").style.marginTop = (parseInt($(".popup-img").height) - parseInt($("#popup-img").height) * 0.5) + "px";

});

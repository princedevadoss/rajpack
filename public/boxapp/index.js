$(document).ready(function() {
    var gsm_map = {
        '100 gsm': 100,
        '120 gsm': 120,
        '140 gsm': 140,
        '160 gsm': 160,
        '180 gsm': 180,
        '200 gsm': 200,
        '220 gsm': 220,
        '230 gsm': 230,
        '250 gsm': 250,
        '300 gsm': 300,
    };
    var rate_map = {
        '12 BF': 23,
        '14 BF': 24,
        '16 BF': 25,
        '16 GY': 26.50,
        '18 BF': 26,
        '18 GY': 27.50,
        '20 BF': 28,
        '20 GY': 29,
        '22 BF': 29,
        '24 BF': 31,
        '28 BF': 32.50,
        '30 BF': 35,
        'Duplex Board': 39
    }
    $('.result').hide();
    $('#lenmm').keyup(function() {
        $('#lencm').val(Number(this.value/10).toFixed(2));
        $('#lenin').val(Number(this.value/25.4).toFixed(2));
    });
    $('#widmm').keyup(function() {
        $('#widcm').val(Number(this.value/10).toFixed(2));
        $('#widin').val(Number(this.value/25.4).toFixed(2));
    });
    $('#heimm').keyup(function() {
        $('#heicm').val(Number(this.value/10).toFixed(2));
        $('#heiin').val(Number(this.value/25.4).toFixed(2));
    });
    $('#lencm').keyup(function() {
        $('#lenmm').val(Number(this.value*10).toFixed(2));
        $('#lenin').val(Number(this.value/2.54).toFixed(2));
    });
    $('#widcm').keyup(function() {
        $('#widmm').val(Number(this.value*10).toFixed(2));
        $('#widin').val(Number(this.value/2.54).toFixed(2));
    });
    $('#heicm').keyup(function() {
        $('#heimm').val(Number(this.value*10).toFixed(2));
        $('#heiin').val(Number(this.value/2.54).toFixed(2));
    });
    $('#lenin').keyup(function() {
        $('#lencm').val(Number(this.value*2.54).toFixed(2));
        $('#lenmm').val(Number(this.value*25.4).toFixed(2));
    });
    $('#widin').keyup(function() {
        $('#widcm').val(Number(this.value*2.54).toFixed(2));
        $('#widmm').val(Number(this.value*25.4).toFixed(2));
    });
    $('#heiin').keyup(function() {
        $('#heicm').val(Number(this.value*2.54).toFixed(2));
        $('#heimm').val(Number(this.value*25.4).toFixed(2));
    });
    $('#lenmm').focusout(function() {
        $('#lenmm').val(Number(this.value).toFixed(2));
    });
    $('#widmm').focusout(function() {
        $('#widmm').val(Number(this.value).toFixed(2));
    });
    $('#heimm').focusout(function() {
        $('#heimm').val(Number(this.value).toFixed(2));
    });
    $('#lencm').focusout(function() {
        $('#lencm').val(Number(this.value).toFixed(2));
    });
    $('#widcm').focusout(function() {
        $('#widcm').val(Number(this.value).toFixed(2));
    });
    $('#heicm').focusout(function() {
        $('#heicm').val(Number(this.value).toFixed(2));
    });
    $('#lenin').focusout(function() {
        $('#lenin').val(Number(this.value).toFixed(2));
    });
    $('#widin').focusout(function() {
        $('#widin').val(Number(this.value).toFixed(2));
    });
    $('#heiin').focusout(function() {
        $('#heiin').val(Number(this.value).toFixed(2));
    });
    $('#cc').focusout(function() {
        $('#cc').val(Number(this.value).toFixed(2));
    });
    $('#profit').focusout(function() {
        $('#profit').val(Number(this.value).toFixed(2));
    });
    $('#calc').click(function() {
        var linches = Number($('#lenin')[0].value);
        var winches = Number($('#widin')[0].value);
        var hinches = Number($('#heiin')[0].value);
        var temp1 = winches + hinches + 1;
        var temp2 = linches + winches + linches + winches + 2;
        var temp3 = linches + winches + 2;
        var gsm1 = $('#gs1')[0] ? Number(gsm_map[$('#gs1')[0].value]) : 0;
        var gsm2 = $('#gs2')[0] ? (Number(gsm_map[$('#gs2')[0].value])*0.4) + Number(gsm_map[$('#gs2')[0].value]) : 0;
        var gsm3 = $('#gs3')[0] ? Number(gsm_map[$('#gs3')[0].value]) : 0;
        var gsm4 = $('#gs4')[0] ? (Number(gsm_map[$('#gs4')[0].value])*0.4) + Number(gsm_map[$('#gs4')[0].value]) : 0;
        var gsm5 = $('#gs5')[0] ? Number(gsm_map[$('#gs5')[0].value]) : 0;
        var gsm6 = $('#gs6')[0] ? (Number(gsm_map[$('#gs6')[0].value])*0.4) + Number(gsm_map[$('#gs6')[0].value]) : 0;
        var gsm7 = $('#gs7')[0] ? Number(gsm_map[$('#gs7')[0].value]) : 0;
        var gsm8 = $('#gs8')[0] ? (Number(gsm_map[$('#gs8')[0].value])*0.4) + Number(gsm_map[$('#gs8')[0].value]) : 0;
        var gsm9 = $('#gs9')[0] ? Number(gsm_map[$('#gs9')[0].value]) : 0;
        var totgsm = gsm1 + gsm2 + gsm3 + gsm4 + gsm5 + gsm6 + gsm7 + gsm8 + gsm9;
        var boardHeight1 = temp1.toFixed(2);
        var boardHeight2 = temp1.toFixed(2);
        var boardLength1 = temp2.toFixed(2);
        var boardLength2 = temp3.toFixed(2);
        var weight1 = Number(boardHeight1 * boardLength1 * totgsm / 1550000).toFixed(2);
        var weight2 = Number(boardHeight2 * boardLength2 * totgsm * 2 / 1550000).toFixed(2);
        var t1j1 = $('#ra1')[0] ? Number(boardHeight1 * boardLength1 * gsm1 * Number(rate_map[$('#ra1')[0].value]).toFixed(2) / 1550000).toFixed(2) : 0;
        var t1j2 = $('#ra1')[0] ? Number(boardHeight2 * boardLength2 * gsm1 * Number(rate_map[$('#ra1')[0].value]).toFixed(2) * 2 / 1550000).toFixed(2) : 0;
        var t2j1 = $('#ra2')[0] ? Number(boardHeight1 * boardLength1 * gsm2 * Number(rate_map[$('#ra2')[0].value]).toFixed(2) / 1550000).toFixed(2) : 0;
        var t2j2 = $('#ra2')[0] ? Number(boardHeight2 * boardLength2 * gsm2 * Number(rate_map[$('#ra2')[0].value]).toFixed(2) * 2 / 1550000).toFixed(2) : 0;
        var t3j1 = $('#ra3')[0] ? Number(boardHeight1 * boardLength1 * gsm3 * Number(rate_map[$('#ra3')[0].value]).toFixed(2) / 1550000).toFixed(2) : 0;
        var t3j2 = $('#ra3')[0] ? Number(boardHeight2 * boardLength2 * gsm3 * Number(rate_map[$('#ra3')[0].value]).toFixed(2) * 2 / 1550000).toFixed(2) : 0;
        var t4j1 = $('#ra4')[0] ? Number(boardHeight1 * boardLength1 * gsm4 * Number(rate_map[$('#ra4')[0].value]).toFixed(2) / 1550000).toFixed(2) : 0;
        var t4j2 = $('#ra4')[0] ? Number(boardHeight2 * boardLength2 * gsm4 * Number(rate_map[$('#ra4')[0].value]).toFixed(2) * 2 / 1550000).toFixed(2) : 0;
        var t5j1 = $('#ra5')[0] ? Number(boardHeight1 * boardLength1 * gsm5 * Number(rate_map[$('#ra5')[0].value]).toFixed(2) / 1550000).toFixed(2) : 0;
        var t5j2 = $('#ra5')[0] ? Number(boardHeight2 * boardLength2 * gsm5 * Number(rate_map[$('#ra5')[0].value]).toFixed(2) * 2 / 1550000).toFixed(2) : 0;
        var t6j1 = $('#ra6')[0] ? Number(boardHeight1 * boardLength1 * gsm6 * Number(rate_map[$('#ra6')[0].value]).toFixed(2) / 1550000).toFixed(2) : 0;
        var t6j2 = $('#ra6')[0] ? Number(boardHeight2 * boardLength2 * gsm6 * Number(rate_map[$('#ra6')[0].value]).toFixed(2) * 2 / 1550000).toFixed(2) : 0;
        var t7j1 = $('#ra7')[0] ? Number(boardHeight1 * boardLength1 * gsm7 * Number(rate_map[$('#ra7')[0].value]).toFixed(2) / 1550000).toFixed(2) : 0;
        var t7j2 = $('#ra7')[0] ? Number(boardHeight2 * boardLength2 * gsm7 * Number(rate_map[$('#ra7')[0].value]).toFixed(2) * 2 / 1550000).toFixed(2) : 0;
        var t8j1 = $('#ra8')[0] ? Number(boardHeight1 * boardLength1 * gsm8 * Number(rate_map[$('#ra8')[0].value]).toFixed(2) / 1550000).toFixed(2) : 0;
        var t8j2 = $('#ra8')[0] ? Number(boardHeight2 * boardLength2 * gsm8 * Number(rate_map[$('#ra8')[0].value]).toFixed(2) * 2 / 1550000).toFixed(2) : 0;
        var t9j1 = $('#ra9')[0] ? Number(boardHeight1 * boardLength1 * gsm9 * Number(rate_map[$('#ra9')[0].value]).toFixed(2) / 1550000).toFixed(2) : 0;
        var t9j2 = $('#ra9')[0] ? Number(boardHeight2 * boardLength2 * gsm9 * Number(rate_map[$('#ra9')[0].value]).toFixed(2) * 2 / 1550000).toFixed(2) : 0;
        var totj1 = (Number(t1j1) + Number(t2j1) + Number(t3j1) + Number(t4j1) + Number(t5j1) + Number(t6j1) + Number(t7j1) + Number(t8j1) + Number(t9j1)).toFixed(2);
        var totj2 = (Number(t1j2) + Number(t2j2) + Number(t3j2) + Number(t4j2) + Number(t5j2) + Number(t6j2) + Number(t7j2) + Number(t8j2) + Number(t9j2)).toFixed(2);
        var papercost1 = Number(Number(totj1) * 0.05 + Number(totj1)).toFixed(2);
        var papercost2 = Number(Number(totj2) * 0.05 + Number(totj2)).toFixed(2);
        var labourcost1 = Number(weight1 * Number($('#cc')[0].value)).toFixed(2);
        var labourcost2 = Number(weight2 * Number($('#cc')[0].value)).toFixed(2);
        var profit1 = Number(papercost1 * Number($('#profit')[0].value) / 100).toFixed(2);
        var profit2 = Number(papercost2 * Number($('#profit')[0].value) / 100).toFixed(2);
        var boxcost1 = Number(Number(papercost1) + Number(labourcost1) + Number(profit1)).toFixed(2);
        var boxcost2 = Number(Number(papercost2) + Number(labourcost2) + Number(profit2)).toFixed(2);
        var tr1 = '<tr><td class=\'cd\'>Board Height</td><td class=\'cd\'>' + boardHeight1 + '</td><td class=\'cd\'>' + boardHeight2 + '</td></tr>';
        $('#finalresult').append(tr1);
        var tr2 = '<tr><td class=\'cd\'>Board Length</td><td class=\'cd\'>' + boardLength1 + '</td><td class=\'cd\'>' + boardLength2 + '</td></tr>';
        $('#finalresult').append(tr2);
        var tr3 = '<tr><td class=\'cd\'>Weight</td><td class=\'cd\'>' + weight1 + '</td><td class=\'cd\'>' + weight2 + '</td></tr>';
        $('#finalresult').append(tr3);
        var tr5 = '<tr><td class=\'cd\'>Paper Cost</td><td class=\'cd\'>' + papercost1 + '</td><td class=\'cd\'>' + papercost2 + '</td></tr>';
        $('#finalresult').append(tr5);
        var tr6 = '<tr><td class=\'cd\'>Labour Cost</td><td class=\'cd\'>' + labourcost1 + '</td><td class=\'cd\'>' + labourcost2 + '</td></tr>';
        $('#finalresult').append(tr6);
        var tr7 = '<tr><td class=\'cd\'>Profit Cost</td><td class=\'cd\'>' + profit1 + '</td><td class=\'cd\'>' + profit2 + '</td></tr>';
        $('#finalresult').append(tr7);
        var tr8 = '<tr><td class=\'cd\'>Box Cost</td><td class=\'cd\'>' + boxcost1 + '</td><td class=\'cd\'>' + boxcost2 + '</td></tr>';
        $('#finalresult').append(tr8);
        $('.result').show();
    });
    function make_select() {
        $("input").on("click", function () {
            $(this).select();
        });
    }
    $('#close').click(function() {
        $('#finalresult').find('tr').remove();
        $('.result').hide();
    });
    $('#plies').click(function() {
        $('#list').toggle();
    })
    $('.ply-drop').click(function() {
            handle_dropdown(this);
    });
    $('#pl').click(function() {
        $('#list').toggle();
    });
    function gsm_dropdown(i) {
        return `<input id="gs${i}"/>
        <img id="gsam${i}" src="./dropdown.png" class="drop-down-btn"></img>
        <ul id="glist${i}" class="drop-down">
           <li class="gsm-drop${i}">100 gsm</li>
           <li class="gsm-drop${i}">120 gsm</li>
           <li class="gsm-drop${i}">140 gsm</li>
           <li class="gsm-drop${i}">160 gsm</li>
           <li class="gsm-drop${i}">180 gsm</li>
           <li class="gsm-drop${i}">200 gsm</li>
           <li class="gsm-drop${i}">220 gsm</li>
           <li class="gsm-drop${i}">230 gsm</li>
           <li class="gsm-drop${i}">250 gsm</li>
           <li class="gsm-drop${i}">300 gsm</li>
        </ul>`;
    }
    function rate_dropdown(i) {
        return `<input id="ra${i}"/>
        <img id="rate${i}" src="./dropdown.png" class="drop-down-btn"></img>
        <ul id="rlist${i}" class="drop-down">
           <li class="rate-drop${i}">12 BF</li>
           <li class="rate-drop${i}">14 BF</li>
           <li class="rate-drop${i}">16 BF</li>
           <li class="rate-drop${i}">16 GY</li>
           <li class="rate-drop${i}">18 BF</li>
           <li class="rate-drop${i}">18 GY</li>
           <li class="rate-drop${i}">20 BF</li>
           <li class="rate-drop${i}">20 GY</li>
           <li class="rate-drop${i}">22 BF</li>
           <li class="rate-drop${i}">24 BF</li>
           <li class="rate-drop${i}">28 BF</li>
           <li class="rate-drop${i}">30 BF</li>
           <li style="padding-left: 18px;" class="rate-drop${i}">Duplex Board</li>
        </ul>`;
    }
    function checkPly() {
        var plytext = $('#pl')[0].value;
        if(plytext.length > 0) {
            $('#ply').show();
            $('.float-btn').show();
        }
        else {
            $('#ply').hide();
            $('.float-btn').hide();
        }
    }
    function handle_dropdown(self) {
        var height = 50;
        var text = $(self)[0].innerText;
        $('#pl').val(text);
        $('.drop-down').toggle();
        var value = text.split(' ')[0];
        var plybody = $('#ply-table');
        plybody.find('tr').remove();
        for (let i=1; i<=value; i++) {
            var tr = `<tr>
                        <td>${i} Ply</td>
                        <td>${gsm_dropdown(i)}</td>
                        <td>${rate_dropdown(i)}</td>    
                    </tr>`;
            plybody.append(tr);
            $(`#gsam${i}`).click(function(){
                $(`#glist${i}`).toggle();
            });
            $(`#gs${i}`).click(function(){
                $(`#glist${i}`).toggle();
            });
            $(`#rate${i}`).click(function(){
                $(`#rlist${i}`).toggle();
            });
            $(`#ra${i}`).click(function(){
                $(`#rlist${i}`).toggle();
            });
            $(`.gsm-drop${i}`).click(function() {
                var text = $(this)[0].innerText;
                $(`#gs${i}`).val(text);
                if(i===1) {
                    for(var t=2; t<=value; t++) {
                        $(`#gs${t}`).val(text);
                    }
                }
                if (i===2) {
                    for(var t=4; t<=value; t=t+2) {
                        $(`#gs${t}`).val(text);
                    }
                }
                $(`#glist${i}`).toggle();
            });
            $(`.rate-drop${i}`).click(function() {
                var text = $(this)[0].innerText;
                $(`#ra${i}`).val(text);
                if(i===1) {
                    for(var t=2; t<=value; t++) {
                        $(`#ra${t}`).val(text);
                    }
                }
                if (i===2) {
                    for(var t=4; t<=value; t=t+2) {
                        $(`#ra${t}`).val(text);
                    }
                }
                $(`#rlist${i}`).toggle();
            });
            height = height + 50;
        }
        $('#ply').css({'height': height + 'px'});
        $('.float-btn').css({'padding-top': (height-50) +'px'})
        checkPly();
        make_select();
    }
    checkPly();
    make_select();
});
function checkKey() {
    var key = $('#key')[0].value;
    console.log(key);
    if (key === '12345') {
        $('.keycode').hide();
    }
}
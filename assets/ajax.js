console.log('ajaxJS');


const web = location.href.split('/');

const  txRef = web[4] //tx reference ID
console.log(txRef);

const head = $('head');

$.ajax({
    url: 'assets/database.json',
    type: 'get',
    success: function (result) {
        // console.log(result)

    var filter = result.filter( data => {
        return data.tx == txRef
    })

    // console.log(filter);

    filter.forEach( data => {
        console.log(data)

        var head_content = `
        <meta content="website" property="og:type">
        <meta content="${data.nft} | OpenSea" property="og:title">
        <meta content="OpenSea" property="og:site_name">
        <title>${data.nft} - ${data.collection} | OpenSea</title>
        <meta content="${data.nft} - ${data.collection} | OpenSea" property="og:title">
        <meta content="${data.description}">
        <meta content="${data.image}"
        property="og:image">
        <meta content="summary_large_image" property="twitter:card">
        <meta name="viewport" content="width=device-width">
    
        <meta charset="utf-8">
        `;

        head.append(head_content) //himo function ani or kwaa to imong function ani daan para diri



        $('#nft').html(data.nft)
    })

    },
    error: function (error) {
        console.log(error)
    }
})
$('#submit_btn').on('click', function(e) {
    e.preventDefault();
    let textData = $('textarea').val();
    postHandler(textData);
});

let postHandler = (postData) => {
    $.ajax({
        url: 'http://localhost:3000/data',
        type: 'POST',
        data: postData,
        contentType: 'application/json',
        success: function(data) {
            data.forEach((row)=> {
                let str = '';
                row.forEach(function(element){
                    str+= element + ' | ';
                })
                let t = ('<div>' + str + '</div>')
                $('#csv').append(t);
            });
        },
        error: function(err) {
            console.log(err)
        }
    })
}

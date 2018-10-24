 


$(document).ready(function () {
    $('#form-submit').on('click', function (event) {
        event.preventDefault();
        
        var name = $('#name').val(),
            email = $('#email').val(),
            subject = $('#subject').val(),
            message = $('#message').val();

        if (!/^\s*$/g.test(message)) {
            if ($('#attentionMessage') !== undefined) {
                $('#attentionMessage').remove();
                $('#message').css({border: 'solid 1px #A9A9A9'});
            }
        } else {
            if ($('#attentionMessage')[0] === undefined) {
                $('#message').css({border: 'solid 1px red'});
                $('#message').shake({
                    interval: 100,
                    distance: 10,
                    times: 2
                });
            }
        }

        if (/^[a-zA-Zа-яА-Я]+$/.test(name)) {
            if ($('#attentionName') !== undefined) {
                $('#attentionName').remove();
                $('#name').css({border: 'solid 1px #A9A9A9'});
            }
        } else {
            if ($('#attentionName')[0] === undefined) {
                $('#name').css({border: 'solid 1px red'});
                $('#name').shake({
                    interval: 100,
                    distance: 10,
                    times: 2
                });

            }
        }

        if (/^[a-zA-Zа-яА-Я]+$/.test(subject)) {
            if ($('#attentionSubject') !== undefined) {
                $('#attentionSubject').remove();
                $('#subject').css({border: 'solid 1px #A9A9A9'});
            }
        } else {
            if ($('#attentionSubject')[0] === undefined) {
                $('#subject').css({border: 'solid 1px red'});
                $('#subject').shake({
                    interval: 100,
                    distance: 10,
                    times: 2
                });

            }
        }

        if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            if($('#attentionEmail') !== undefined) {
                $('#attentionEmail').remove();
                $('#email').css({border: 'solid 1px #A9A9A9'});
            }
        } else {
            if ($('#attentionEmail')[0] === undefined) {
                $('#email').css({border: 'solid 1px red'});
                $('#email').shake({
                    interval: 100,
                    distance: 10,
                    times: 2
                });

            }
        }
    });
});

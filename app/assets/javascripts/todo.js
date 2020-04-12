$(function(){
  $('.js-form').on('submit', function(e){
    e.preventDefault();
    var todo = $('.js-form__text-field').val();

    $.ajax({
      type: 'POST',
      url: '/todos.json',
      data: {
        todo: {
          content: todo
        }
      },
      dataType: 'json'
    })

    .done(function(data){
      var html = $('<li class="todo">').append(data.content);
      $('.todos').append(html);
      $('.js-form__text-field').val('');
    })

    .fail(function(){
      alert('error');
    });
  });
});
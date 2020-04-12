$(function(){

  function buildHTML(todo){
    var html = $('<li class="todo">').append(todo.content);
    return html;
  }
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
      var html = buildHTML(data);
      $('.todos').append(html);
      $('.js-form__text-field').val('');
    })

    .fail(function(){
      alert('error');
    });
  });
});
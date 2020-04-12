class TodosController < ApplicationController
  def index
    @todo = Todo.new
    @todos = Todo.order('created_at ASC')
  end

  def create
    Todo.create(todo_params)
    redirect_to :root
  end

  private
  def todo_params
    params.require(:todo).permit(:content)
  end
end

class TodosController < ApplicationController
  def index
    @todo = Todo.new
    @todos = Todo.order('created_at ASC')
  end

  def create
    @todo = Todo.create(todo_params)
    respond_to do |format|
      format.html{ redirect_to :root }
      format.json{ render json: @todo }
    end
  end

  private
  def todo_params
    params.require(:todo).permit(:content)
  end
end

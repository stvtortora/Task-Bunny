class Api::TasksController < ApplicationController
  def create
    @task = current_user.tasks.new(task_params)
    if @task.save
      time_slot_registration = TimeSlotRegistration.find_by(tasker_id: @task.tasker_id, time_slot_id: @task.time_slot_id)
      time_slot_registration.toggle_status
      render json: {}
    else
      render json: @task.errors.full_messages, status: 422
    end
  end

  def index
    @tasks = current_user.tasks.includes(:category, :location, :tasker, :client, :time_slot)

    render 'api/tasks/index'
  end

  def destroy
    @task  = Task.find(params[:id])
    time_slot_registration = TimeSlotRegistration.find_by(tasker_id: @task.tasker_id, time_slot_id: @task.time_slot_id)
    time_slot_registration.toggle_status
    @task.destroy
    render 'api/tasks/show'
  end

  private

  def task_params
    params.require(:task_info).permit(:location_id, :category_id, :tasker_id, :time_slot_id)
  end
end

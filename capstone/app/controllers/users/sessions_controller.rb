# frozen_string_literal: true

class Users::SessionsController < Devise::SessionsController
  # before_action :configure_sign_in_params, only: [:create]

  def index
      users = User.all
      render json: users
  end

  def oneuser
      user = User.find(params[:id])
      render json: user
  end

  def friends
      i = 0
      friends = []
      UserStatus.where("status = ?",1).length.times do
          if current_user.id == UserStatus.where("status = ?",1)[i].recipient_id
              friends << UserStatus.where("status = ?",1)[i].sender
              i = i + 1
          elsif current_user.id == UserStatus.where("status = ?",1)[i].sender_id
              friends << UserStatus.where("status = ?",1)[i].recipient
              i = i + 1
          else
              i = i + 1
          end
      end
      # friend = status.username
      render json: friends
  end

  def friendid
      i = 0
      friends = []
      UserStatus.where("status = ?",1).length.times do
          if current_user.id == UserStatus.where("status = ?",1)[i].recipient_id
              friends << UserStatus.where("status = ?",1)[i].sender_id
              i = i + 1
          elsif current_user.id == UserStatus.where("status = ?",1)[i].sender_id
              friends << UserStatus.where("status = ?",1)[i].recipient_id
              i = i + 1
          else
              i = i + 1
          end
      end
      render json: friends
  end

  def pendingids
      i = 0
     pending = []
      UserStatus.where("status = ?",0).length.times do
          if current_user.id == UserStatus.where("status = ?",0)[i].recipient_id
              pending << UserStatus.where("status = ?",0)[i].sender_id
              i = i + 1
          elsif current_user.id == UserStatus.where("status = ?",0)[i].sender_id
              pending << UserStatus.where("status = ?",0)[i].recipient_id
              i = i + 1

          else
              i = i + 1
          end
      end
      render json: pending
  end


  def sentpendingids
      i = 0
     pending = []
      UserStatus.where("status = ?",0).length.times do
          if current_user.id == UserStatus.where("status = ?",0)[i].recipient_id
              pending << UserStatus.where("status = ?",0)[i].sender_id
              i = i + 1
          else
              i = i + 1
          end
      end
      render json: pending
  end

  # GET /resource/sign_in
  def new
    super
  end

  # POST /resource/sign_in
  def create
    super
  end

  # DELETE /resource/sign_out
  def destroy
    super
  end

  # protected

  # If you have extra params to permit, append them to the sanitizer.
  def configure_sign_in_params
    devise_parameter_sanitizer.permit(:sign_in, keys: [:attribute])
  end
end

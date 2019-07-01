class UsersController < ApplicationController

  before_action :user_signed_in?

  def updateavatar
    user = User.find(params[:id]) #probably would be current_user for you
     user.update_attributes(user_params)
     user.update_attributes(picture_url: url_for(user.avatar))
    render :show
  end

  def updatelocation
    user = User.find(current_user.id)
    user.update_attributes(lat: params[:lat], lng: params[:lng])
    # if params[:id] == @user
      render json: user
    # else
    #   render plain: "you cant edit other users location"
    # end
  end

  def showavatar
    @user = User.find(params[:id])
     render plain: url_for(@user.avatar)
  end

  def user_params
    params.require(:user).permit(:avatar, :lat, :lng)
  end
end

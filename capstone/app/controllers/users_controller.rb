class UsersController < ApplicationController

  def updateavatar
    user = User.find(params[:id]) #probably would be current_user for you
     user.update_attributes(user_params)
     user.update_attributes(picture_url: url_for(user.avatar))
    render :show
  end

  def showavatar
    @user = User.find(params[:id])
     render plain: url_for(@user.avatar)
  end

  def user_params
    params.require(:user).permit(:avatar)
  end
end

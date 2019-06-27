class UserstatusController < ApplicationController

      def index
        status = UserStatus.all
        render json: status

      end

      def create
        status = UserStatus.create(status_params)
        if status.valid?
            render json: status
            if params[:status] == 0
             p Post.create(:user_id => params[:recipient_id], :post_status => 1, :poststring => "`#{current_user.username} wants to be your friend. Accept or Decline Here: /userprofile/#{params[:sender_id]}`")
         elsif params[:status] == 1
             p Post.create(:user_id => params[:recipient_id], :post_status => 1, :poststring => "`#{current_user.username} Accepted Your Friend Request`")
         elsif params[:status] == 3
             p Post.create(:user_id => params[:sender_id], :post_status => 1, :poststring => "You Blocked A User")
         else
             p Post.create(:user_id => params[:recipient_id], :post_status => 1, :poststring => "`#{current_user.username} Rejected Your Friend Request`")
             p UserStatus.where(:sender_id => params[:recipient_id], :recipient_id => params[:sender_id], :status => 0).delete_all
         end

        else
            render json: status.errors, status: :unprocessable_entity
            p status.errors
        end
      end

      def update
         @status = UserStatus.find(params[:id])
         @status.update_attributes(status_params)
         render :show
      end

      def destroy
          @friends = []
          UserStatus.find_each do |status|
            if current_user.id == status.sender_id && status.status == 1
                if status.recipient_id == params[:user_id]
                    @friends  << status.id
                end
            elsif current_user.id == status.recipient_id && status.status == 1
                if status.sender_id == params[:user_id]
                    @friends  << status.id
                end
            end

          end
          deleteme =  UserStatus.find(@friends[0])
          deleteme.destroy
          render json: @friends
      end

      def customdelete
          @friends = []
          UserStatus.find_each do |status|
            if current_user.id == status.sender_id && status.status == 1
                if status.recipient_id == params[:user_id]
                    @friends  << status.id
                end
            elsif current_user.id == status.recipient_id && status.status == 1
                if status.sender_id == params[:user_id]
                    @friends  << status.id
                end
            end

          end
          deleteme =  UserStatus.find(@friends[0])
          deleteme.destroy
          render json: @friends
      end

      def status_params

        params.require(:userstatus).permit(:sender_id, :recipient_id, :status)

      end

end

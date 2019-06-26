class PostsController < ApplicationController

  def index

    @posts = []
    Post.find_each do |post|
        @posts << post.as_json(:include => {:user =>{}, :tags => {:include => :tagname}})
    end
    @use = @posts.reverse

    render json: @use

  end

  def create

    post = Post.create(post_params)
    if post.valid?
    render json: post
    else
    render json: post.errors, status: :unprocessable_entity
    p post.errors
    end

  end

  def update

     @post = Post.find(params[:id]) #probably would be current_user for you
     @post.update_attributes(user_params)
     render :show

  end

  def onlineposts
      @online = []
      User.find_each do |user|
          if user.is_signed_in == true
              @online << user.as_json(include: :posts)
          end
      end
      render json: @online
  end


  def destroy

  end


  def post_params

    params.require(:post).permit(:user_id, :poststring, :post_status, :lat, :lng)

  end

end

class PostsController < ApplicationController

  def index

    posts = Post.order('created_at desc')
    render json: posts

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

  def post_params

    params.require(:post).permit(:user_id, :poststring, :post_status, :lat, :lng)

  end

end

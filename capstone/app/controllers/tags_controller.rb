class TagsController < ApplicationController

      def index

        @tags = []
        Tag.find_each do |tag|
            if tag.user_id.valid?
                @tags << tag.as_json(include: :user)
            elsif tag.post_id.valid?
                @tag << tag.as_json(include: :post)
            end
        end

        render json: @posts

      end

      def create

        tag = Tag.create(tag_params)
        if tag.valid?
            render json: tag
        else
            render json: tag.errors, status: :unprocessable_entity
            p tag.errors
        end

      end

      def update

         @tag = Tag.find(params[:id])
         @tag.update_attributes(tag_params)
         render :show

      end


      def tag_params

        params.require(:tag).permit(:users_id, :posts_id, :tagname_id)

      end

end

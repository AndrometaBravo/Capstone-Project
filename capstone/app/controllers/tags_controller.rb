class TagsController < ApplicationController

      def index

        @tags = []
        Tag.find_each do |tag|
                @tags << tag.as_json(include: :post)
        end
        render json: @tags

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

      def tagger
          if Tagname.where('tag = ?', params[:tag]).blank?
              caps = params[:tag]
              caps.capitalize!
              @newTagName = Tagname.create(params)
              render json: @newTagName
              Tag.create(tag_params)
          else
              Tag.create(tag_params)
          end
      end


      def tag_params

        params.require(:tag).permit(:users_id, :posts_id, :tagname_id)

      end

end

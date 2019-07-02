class TagnamesController < ApplicationController
    def index
        tagnames = Tagname.all
        render json: tagnames
    end

    def createtag
       @caps = params[:tagname]
       @use = @caps.capitalize!
       if Tagname.where("tag = ?" , @use).blank?
           @new = Tagname.create(tag: @use)
           p @use
       end
       render json: @new
   end
end

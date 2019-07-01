class TagnamesController < ApplicationController
    def index
        tagnames = Tagname.all
        render json: tagnames
    end


    def createtag
        @caps = params[:tagname]
        @use = @caps.capitalize!
        if Tagname.where(":tag = ?" , @use).blank?
            Tagname.create(":tag = ?" , @use)
            redirect_to '/map'
        else
            redirect_to '/map'
        end
    end




end

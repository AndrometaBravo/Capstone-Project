class TagnamesController < ApplicationController
    def index
        tagnames = Tagname.all
        render json: tagnames
    end


    def create
        if Tagname.where(":tag = ?" , params[:tag])
            Tagname.create(":tag = ?" , params[:tag])
            redirect_to '/map'
        else
            redirect_to '/map'
        end
    end




end

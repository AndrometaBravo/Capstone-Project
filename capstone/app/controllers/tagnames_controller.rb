class TagnamesController < ApplicationController
    def index
        tagnames = Tagname.all
        render json: tagnames
    end


    def createtag
        @lower = params[:tagname]
        @caps = @lower.downcase
        @use = @caps.capitalize!
        if Tagname.where("tag = ?" , @use).blank?
            @new = Tagname.create(tag: @use)
            render "/map"
        end
        render json: @new
    end




end

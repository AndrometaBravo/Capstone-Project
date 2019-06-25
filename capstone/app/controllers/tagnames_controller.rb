class TagnamesController < ApplicationController
    def index
        tagnames = Tagname.all
        render json: tagnames
    end

    
end

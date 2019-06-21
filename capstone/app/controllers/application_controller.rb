class ApplicationController < ActionController::Base
     protect_from_forgery with: :exception

    before_action :configure_permitted_parameters, if: :devise_controller?
    skip_before_action :verify_authenticity_token




    protected

        # def configure_permitted_parameters
        #     devise_parameter_sanitizer.permit(:sign_up) do |user_params|
        #         user_params.permit(:username, :email, :gender, :age, :bio, :password, :password_confirmation, :firstname, :lastname, :lat, :lng)
        #     end
        #     devise_parameter_sanitizer.permit(:accont_update) do |user_params|
        #         user_params.permit(:username, :email, :gender, :age, :bio, :password, :password_confirmation, :firstname, :lastname, :lat, :lng)
        #     end
        # end

        # def configure_permitted_parameters
        #     devise_parameter_sanitizer.for(:sign_up) { |u| u.permit(:username, :email, :gender, :age, :bio, :password, :password_confirmation, :firstname, :lastname, :lat, :lng) }
        #     devise_parameter_sanitizer.for(:account_update) { |u| u.permit(:username, :email, :gender, :age, :bio, :password, :password_confirmation, :firstname, :lastname, :lat, :lng) }
        # end

        def configure_permitted_parameters
            devise_parameter_sanitizer.permit(:sign_up, keys: [:username, :email, :gender, :age, :bio, :password, :password_confirmation, :firstname, :lastname, :lat, :lng])
            devise_parameter_sanitizer.permit(:account_update, keys: [:username, :email, :gender, :age, :bio, :password, :password_confirmation, :firstname, :lastname, :lat, :lng])
        end
end

class ApplicationController < ActionController::Base

    before_action :configure_permitted_parameters, if: :devise_controller?
    skip_before_action :verify_authenticity_token




    protected

        def configure_permitted_parameters
            devise_parameter_sanitizer.permit(:sign_up) do |user_params|
                user_params.permit(:username, :email, :gender, :age, :bio, :password, :password_confirmation)
        end
    end

end

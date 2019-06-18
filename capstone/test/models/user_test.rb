require 'test_helper'

class UserTest < ActiveSupport::TestCase

    test "should not sign up" do
        user = User.new(email:"fake@email.com")
        pp user
        assert_not user.save
    end

end

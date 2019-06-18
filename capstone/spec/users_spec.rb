require 'rails_helper'

RSpec.describe User do

    it "should not sign up with existing email" do
        fake = User.new(email:"fake@email.com", username: "user2", age: 18, gender: "Male", password: "llllll")
        fake.save
        user = User.new(email:"fake@email.com", username: "user", age: 18, gender: "Male", password: "llllll")
        expect(user).to_not be_valid
    end

    it "should not sign up with existing username" do
        fake2 = User.new(email:"fake2@email.com", username: "user2", age: 18, gender: "Male", password: "llllll")
        fake2.save
        user2 = User.new(email:"fake@email.com", username: "user2", age: 18, gender: "Male", password: "llllll")
        pp user2
        expect(user2).to_not be_valid
    end

    it "should not sign up with missing email" do
        user2 = User.new( username: "user2", age: 18, gender: "Male", password: "llllll")
        expect(user2).to_not be_valid
    end

    it "should not sign up with missing username" do
        user2 = User.new( email:"fake2@email.com", age: 18, gender: "Male", password: "llllll")
        expect(user2).to_not be_valid
    end

    it "should not sign up with missing age" do
        user2 = User.new( email:"fake2@email.com", username: "user2", gender: "Male", password: "llllll")
        expect(user2).to_not be_valid
    end

    it "should not sign up with missing gender" do
        user2 = User.new( email:"fake2@email.com", username: "user2", age: 22, password: "llllll")
        expect(user2).to_not be_valid
    end

    it "should not sign up with missing password" do
        user2 = User.new( email:"fake2@email.com", username: "user2", age: 22, gender: "Male")
        expect(user2).to_not be_valid
    end



end

require 'rails_helper'

RSpec.describe Post, type: :model do

    it "shouldn't post with blank post section" do
        post = Post.new(user_id: 1, post_status: 0)
        expect(post).to_not be_valid
    end

    it "shouldn't post without post_status" do
        post = Post.new(user_id: 1, post: "dfewiug")
        expect(post).to_not be_valid
    end

    it "shouldn't post without user_id" do
        post = Post.new( post: "dfewiug", post_status: 1)
        expect(post).to_not be_valid
    end

end

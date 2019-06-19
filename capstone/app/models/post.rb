class Post < ApplicationRecord
    validates :post, presence: true
    validates :post_status, presence: true
    validates :user_id, presence: true

    belongs_to :user
end

class Post < ApplicationRecord

    validates :poststring, presence: true
    validates :post_status, presence: true
    validates :user_id, presence: true

    belongs_to :user

    has_many :tags


end

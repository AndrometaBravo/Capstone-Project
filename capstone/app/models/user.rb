class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

         validates :username, presence: true
         validates :email, presence: true
         validates :gender, presence: true
         validates :age, presence: true

         validates :username, uniqueness: true

        has_many :sent,
                 :class_name => "UserStatus",
                 :foreign_key  => "sent_id"

        has_many :received,
                 :class_name => "UserStatus",
                 :foreign_key  => "received_id"

         has_many :posts
end

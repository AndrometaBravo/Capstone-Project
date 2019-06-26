class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :timeoutable, :trackable

  after_create :notify_pusher

  def notify_pusher
        Pusher.trigger('activity', 'login', self.as_json)
      end

      # def as_json(options={})
      #   super(
      #
      #   )
      # end

         validates :username, presence: true , uniqueness: { case_sensitive: false }
         validates :email, presence: true
         validates :gender, presence: true
         validates :age, presence: true
         validates :is_signed_in, inclusion: [true, false]

         validates :username, uniqueness: true

        has_many :sent,
                 :class_name => "UserStatus",
                 :foreign_key  => "sent_id"

        has_many :received,
                 :class_name => "UserStatus",
                 :foreign_key  => "received_id"

         has_many :posts
         has_many :tags
end

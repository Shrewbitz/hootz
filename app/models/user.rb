class User < ApplicationRecord

    validates :password_digest, :session_token, :first_name, :last_name, :email, :zipcode, presence: true
    validates :email, uniqueness: true
    validates :zipcode, length: {minimum: 5, maximum: 5}
    validates :password, length: {minimum: 6}, allow_nil: true
    attr_reader :password
    after_initialize :ensure_session_token

    has_many :restaurants,
    foreign_key: :owner_id,
    class_name: :Restaurant
    
    has_many :review_joins,
    foreign_key: :user_id,
    class_name: :Review

    has_many :reviews,
    through: :review_joins,
    source: :restaurant

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return user if user && user.is_password?(password)
        nil 
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def self.generate_session_token
        SecureRandom::urlsafe_base64
    end

    def password=(password)
        self.password_digest = BCrypt::Password.create(password)
        @password = password
    end

    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end

    def reset_session_token!
        self.update(session_token: User.generate_session_token)
        self.session_token
    end

end

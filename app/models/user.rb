class User < ApplicationRecord

    validates :password_digest, :session_token, :first_name, :last_name, :email, presence: true
    validates :email, uniqueness: true
    validates :password, length: {minimum: 7}, allow_nil: true
    attr_reader :password
    after_initialize :ensure_session_token



    def self.find_by_credentials(email, password)
        user = User.find_by(user: email)
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

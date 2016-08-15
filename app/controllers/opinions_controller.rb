class OpinionsController < ActionController::API

  def index
    opinions = Opinion.all.map(&:attributes)
    render json: opinions
  end
end
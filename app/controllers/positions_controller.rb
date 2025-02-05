class PositionsController < ApplicationController
  def index
    @positions = FactoryScraper.new.call
  end
end

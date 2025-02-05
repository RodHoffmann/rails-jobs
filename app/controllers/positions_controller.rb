class PositionsController < ApplicationController
  def index
    evermood_positions = EvermoodScraper.new.extract_data
    funke_works_positions = FunkeWorksScraper.new.extract_data
    @positions = evermood_positions + funke_works_positions
  end
end

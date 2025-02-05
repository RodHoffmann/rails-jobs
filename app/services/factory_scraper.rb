class FactoryScraper
  def call
    EvermoodScraper.new.extract_data +
    FunkeWorksScraper.new.extract_data
  end
end

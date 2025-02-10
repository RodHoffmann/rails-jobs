class FactoryScraper
  def call
    EvermoodScraper.new.extract_data +
    FunkeWorksScraper.new.extract_data +
    HomedayScraper.new.extract_data +
    BlinkistScraper.new.extract_data
  end
end
